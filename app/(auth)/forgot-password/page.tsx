import AuthCard from "@/components/auth/AuthCard";
import AuthHeader from "@/components/auth/AuthHeader";
import ForgotPasswordForm from "@/components/auth/ForgotPasswordForm";

export default function ForgotPasswordPage() {
  return (
    <AuthCard>
      <AuthHeader
        title="Forgot your password?"
        description="Enter your email address and we'll send you a link to reset your password."
      />

      <ForgotPasswordForm />
    </AuthCard>
  );
}