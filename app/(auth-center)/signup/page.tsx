import AuthCard from "@/components/auth/AuthCard";
import AuthHeader from "@/components/auth/AuthHeader";
import Divider from "@/components/auth/Divider";
import GoogleButton from "@/components/auth/GoogleButton";
import SignupForm from "@/components/auth/SignupForm";

export default function SignupPage() {
  return (
    <AuthCard>
      <AuthHeader
        title="Create your account"
        description="Start building with AuthFlow in seconds."
      />

      <GoogleButton />

      <Divider text="or continue with email" />

      <SignupForm />
    </AuthCard>
  );
}