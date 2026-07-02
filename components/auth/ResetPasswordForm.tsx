"use client";

import { useState } from "react";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";

import { Eye, EyeOff, Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function ResetPasswordForm() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const oobCode = searchParams.get("oobCode");

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] =
    useState("");

  const [showPassword, setShowPassword] =
    useState(false);

  const [
    showConfirmPassword,
    setShowConfirmPassword,
  ] = useState(false);

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  const [success, setSuccess] = useState("");

  const isStrongPassword =
    password.length >= 8 &&
    /[A-Z]/.test(password) &&
    /[a-z]/.test(password) &&
    /\d/.test(password) &&
    /[!@#$%^&*(),.?":{}|<>]/.test(password);

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    setError("");
    setSuccess("");

    if (!oobCode) {
      setError(
        "Invalid or expired password reset link."
      );

      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");

      return;
    }

    if (!isStrongPassword) {
      setError(
        "Please choose a stronger password."
      );

      return;
    }

    try {
      setLoading(true);

            const { confirmPasswordReset } = await import(
        "firebase/auth"
      );

      const { auth } = await import("@/lib/firebase");

      await confirmPasswordReset(
        auth,
        oobCode,
        password
      );

      setSuccess(
        "Your password has been reset successfully. Redirecting to login..."
      );

      setTimeout(() => {
        router.push("/login");
      }, 2000);
    } catch (error) {
      console.error(error);

      setError(
        "This password reset link is invalid or has expired."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4"
      noValidate
    >
      <div className="space-y-2">
        <Label htmlFor="password">
          New Password
        </Label>

        <div className="relative">
          <Input
            id="password"
            type={
              showPassword ? "text" : "password"
            }
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
            placeholder="Enter your new password"
            autoComplete="new-password"
            disabled={loading}
            className="pr-12"
          />

          <button
            type="button"
            onClick={() =>
              setShowPassword((prev) => !prev)
            }
            className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-indigo-600"
          >
            {showPassword ? (
              <EyeOff className="h-5 w-5" />
            ) : (
              <Eye className="h-5 w-5" />
            )}
          </button>
        </div>

        {password !== "" &&
          isStrongPassword && (
            <p className="text-sm font-medium text-emerald-600">
              ✓ Strong password
            </p>
          )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="confirmPassword">
          Confirm Password
        </Label>

        <div className="relative">
          <Input
            id="confirmPassword"
            type={
              showConfirmPassword
                ? "text"
                : "password"
            }
            value={confirmPassword}
            onChange={(e) =>
              setConfirmPassword(
                e.target.value
              )
            }
            placeholder="Confirm your new password"
            autoComplete="new-password"
            disabled={loading}
            className="pr-12"
          />

          <button
            type="button"
            onClick={() =>
              setShowConfirmPassword(
                (prev) => !prev
              )
            }
            className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-indigo-600"
          >
            {showConfirmPassword ? (
              <EyeOff className="h-5 w-5" />
            ) : (
              <Eye className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {error && (
        <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-600">
          {error}
        </div>
      )}

      {success && (
        <div className="rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm font-medium text-green-600">
          {success}
        </div>
      )}

      <Button
        type="submit"
        className="h-11 w-full rounded-2xl"
        disabled={loading}
      >
        {loading ? (
          <>
            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
            Updating Password...
          </>
        ) : (
          "Reset Password"
        )}
      </Button>

      <p className="text-center text-sm text-slate-500">
        Remember your password?{" "}
        <Link
          href="/login"
          className="font-semibold text-indigo-600 hover:underline"
        >
          Back to Sign in
        </Link>
      </p>
    </form>
  );
}