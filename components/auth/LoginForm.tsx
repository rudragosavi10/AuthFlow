"use client";

import { useState } from "react";

import AnimatedLink from "@/components/auth/AnimatedLink";
import { useRouter } from "next/navigation";

import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, EyeOff, Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import {
  loginSchema,
  type LoginSchema,
} from "@/lib/validations/login.schema";
import { authService } from "@/services/auth.service";

export default function LoginForm() {
  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [authError, setAuthError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: LoginSchema) => {
    try {
      setLoading(true);
      setAuthError("");

      const email = data.email.includes("@")
  ? data.email
  : `${data.email}@gmail.com`;

await authService.login({
  ...data,
  email,
});
      router.push("/dashboard");
    } catch (error) {
      console.error(error);

      setAuthError("Invalid email or password.");
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

  <div className="space-y-2">
    <div className="flex items-center justify-between">
      <Label htmlFor="password">Password</Label>

      <AnimatedLink
  href="/forgot-password"
  className="text-sm text-primary hover:underline"
>
  Forgot password?
</AnimatedLink>
    </div>

    <div className="relative">
      <Input
        id="password"
        type={showPassword ? "text" : "password"}
        placeholder="Enter your password"
        autoComplete="current-password"
        disabled={loading}
        className="pr-12"
        {...register("password")}
      />

      <button
        type="button"
        aria-label={showPassword ? "Hide password" : "Show password"}
        onClick={() => setShowPassword((prev) => !prev)}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 transition-colors duration-200 hover:text-indigo-600"
      >
        {showPassword ? (
          <EyeOff className="h-5 w-5" />
        ) : (
          <Eye className="h-5 w-5" />
        )}
      </button>
    </div>

    {errors.password && (
      <p className="text-sm font-medium text-red-500">
        {errors.password.message}
      </p>
    )}
  </div>

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
        Signing In...
      </>
    ) : (
      "Sign In"
    )}
  </Button>

  <p className="pt-2 text-center text-sm text-slate-500">
    Don't have an account?{" "}
   <AnimatedLink
  href="/signup"
  className="font-semibold text-indigo-600 transition-colors hover:text-indigo-700 hover:underline"
>
  Sign up
</AnimatedLink>
  </p>
</form>
  );
}