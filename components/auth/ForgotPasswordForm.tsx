"use client";

import { useState } from "react";

import AnimatedLink from "@/components/auth/AnimatedLink";

import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";

import {
  forgotPasswordSchema,
  type ForgotPasswordSchema,
} from "@/lib/validations/forgot-password.schema";

import { authService } from "@/services/auth.service";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function ForgotPasswordForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [authError, setAuthError] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ForgotPasswordSchema>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = async (data: ForgotPasswordSchema) => {
    try {
      setLoading(true);
      setAuthError("");
      setSuccess("");

      await authService.resetPassword(data.email);

      setSuccess(
        "Password reset email has been sent. Please check your inbox."
      );

      reset();
    } catch (error) {
      console.error(error);

      setAuthError(
        "Unable to send password reset email. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
   <form
  onSubmit={handleSubmit(onSubmit)}
  className="space-y-4"
  noValidate
>
  <div className="space-y-2">
    <Label htmlFor="email">Email Address</Label>

    <Input
      id="email"
      type="email"
      placeholder="name@example.com"
      autoComplete="email"
      disabled={loading}
      {...register("email")}
    />

    {errors.email && (
      <p className="text-sm font-medium text-red-500">
        {errors.email.message}
      </p>
    )}
  </div>

  {success && (
    <div className="rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-600">
      {success}
    </div>
  )}

  {authError && (
    <div className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-600">
      {authError}
    </div>
  )}

  <Button
    type="submit"
    className="mt-2 h-12 w-full rounded-2xl"
    disabled={loading}
  >
    {loading ? (
      <>
        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
        Sending Reset Link...
      </>
    ) : (
      "Send Reset Link"
    )}
  </Button>

  <p className="pt-2 text-center text-sm text-slate-500">
    Remember your password?{" "}
    <AnimatedLink
  href="/login"
  className="font-medium text-primary hover:underline"
>
  Back to Sign In
</AnimatedLink>
  </p>
</form>
  );
}