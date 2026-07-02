"use client";

import { useState } from "react";

import AnimatedLink from "@/components/auth/AnimatedLink";
import { useRouter } from "next/navigation";

import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, EyeOff, Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";

import {
  signupSchema,
  type SignupSchema,
} from "@/lib/validations/signup.schema";

import { authService } from "@/services/auth.service";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function SignupForm() {
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState(false);
  const [authError, setAuthError] = useState("");

  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupSchema>({
    resolver: zodResolver(signupSchema),
    mode: "onChange",
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const password = watch("password", "");

  const isStrongPassword =
    password.length >= 8 &&
    /[A-Z]/.test(password) &&
    /[a-z]/.test(password) &&
    /\d/.test(password) &&
    /[!@#$%^&*(),.?":{}|<>]/.test(password);

  const onSubmit = async (data: SignupSchema) => {
    try {
      setLoading(true);
      setAuthError("");

      await authService.signup({
        name: data.name,
        email: data.email,
        password: data.password,
      });

      await authService.logout();

      router.push("/login");
    } catch (error: any) {
      console.error(error);

      switch (error.code) {
        case "auth/email-already-in-use":
          setAuthError(
            "An account with this email already exists."
          );
          break;

        case "auth/invalid-email":
          setAuthError(
            "Please enter a valid email address."
          );
          break;

        case "auth/weak-password":
          setAuthError(
            "Please choose a stronger password."
          );
          break;

        case "auth/network-request-failed":
          setAuthError(
            "No internet connection. Please try again."
          );
          break;

        default:
          setAuthError(
            "Unable to create your account. Please try again."
          );
      }
    } finally {
      setLoading(false);
    }
  };

  return (<>
  <form
    onSubmit={handleSubmit(onSubmit)}
    className="space-y-5"
    noValidate
  >
    <div className="grid gap-6 md:grid-cols-2">

      {/* Full Name */}
      <div className="space-y-1.5">
        <Label htmlFor="name">Full Name</Label>

        <Input
          id="name"
          placeholder="John Doe"
          autoComplete="name"
          disabled={loading}
          {...register("name")}
        />

        {errors.name && (
          <p className="text-sm font-medium text-red-500">
            {errors.name.message}
          </p>
        )}
      </div>

      {/* Email */}
      <div className="space-y-1.5">
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

      {/* Password */}
      <div className="space-y-1.5">
        <Label htmlFor="password">Password</Label>

        <div className="relative">
          <Input
            id="password"
            type={showPassword ? "text" : "password"}
            placeholder="Create password"
            autoComplete="new-password"
            disabled={loading}
            className="pr-12"
            {...register("password")}
          />

          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 transition-colors hover:text-indigo-600"
          >
            {showPassword ? (
              <EyeOff className="h-5 w-5" />
            ) : (
              <Eye className="h-5 w-5" />
            )}
          </button>
        </div>

        {errors.password ? (
          <p className="text-sm font-medium text-red-500">
            {errors.password.message}
          </p>
        ) : (
          password !== "" &&
          isStrongPassword && (
            <p className="text-sm font-medium text-emerald-600">
              ✓ Strong password
            </p>
          )
        )}
      </div>

      {/* Confirm Password */}
      <div className="space-y-1.5">
        <Label htmlFor="confirmPassword">
          Confirm Password
        </Label>

        <div className="relative">
          <Input
            id="confirmPassword"
            type={
              showConfirmPassword ? "text" : "password"
            }
            placeholder="Confirm password"
            autoComplete="new-password"
            disabled={loading}
            className="pr-12"
            {...register("confirmPassword")}
          />

          <button
            type="button"
            onClick={() =>
              setShowConfirmPassword((prev) => !prev)
            }
            className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 transition-colors hover:text-indigo-600"
          >
            {showConfirmPassword ? (
              <EyeOff className="h-5 w-5" />
            ) : (
              <Eye className="h-5 w-5" />
            )}
          </button>
        </div>

        {errors.confirmPassword && (
          <p className="text-sm font-medium text-red-500">
            {errors.confirmPassword.message}
          </p>
        )}
      </div>
    </div>

    {authError && (
      <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-600">
        {authError}
      </div>
    )}

    <Button
      type="submit"
      className="mt-2 h-12 w-full rounded-2xl text-base"
      disabled={loading}
    >
      {loading ? (
        <>
          <Loader2 className="mr-2 h-5 w-5 animate-spin" />
          Creating Account...
        </>
      ) : (
        "Create Account"
      )}
    </Button>

    <p className="text-center text-sm text-slate-500">
      Already have an account?{" "}
      <AnimatedLink
  href="/login"
  className="font-semibold text-indigo-600 transition-colors hover:text-indigo-700 hover:underline"
>
  Sign in
</AnimatedLink>
    </p>
  </form>
</>
  );
}