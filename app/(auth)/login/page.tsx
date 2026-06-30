import AuthCard from "@/components/auth/AuthCard";
import AuthHeader from "@/components/auth/AuthHeader";
import Divider from "@/components/auth/Divider";
import GoogleButton from "@/components/auth/GoogleButton";
import LoginForm from "@/components/auth/LoginForm";

export default function LoginPage() {
  return (
    <AuthCard>
      <AuthHeader
        title="Welcome back"
        description="Sign in to your account to continue."
      />

      <LoginForm />

      <Divider />

      <GoogleButton />
    </AuthCard>
  );
}