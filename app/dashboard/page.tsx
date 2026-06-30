"use client";

import { useState } from "react";

import { useRouter } from "next/navigation";
import { Loader2, LogOut } from "lucide-react";

import { Button } from "@/components/ui/button";

import { useAuth } from "@/hooks/useAuth";
import { authService } from "@/services/auth.service";

export default function DashboardPage() {
  const router = useRouter();
  const { user, loading } = useAuth();

  const [loggingOut, setLoggingOut] = useState(false);

  const handleLogout = async () => {
    try {
      setLoggingOut(true);

      await authService.logout();

      router.replace("/login");
    } catch (error) {
      console.error("Logout failed:", error);
    } finally {
      setLoggingOut(false);
    }
  };

  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin" />
      </main>
    );
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-muted/30 p-6">
      <div className="w-full max-w-2xl rounded-2xl border bg-background p-8 shadow-lg">
        <div className="flex items-start justify-between gap-6">
          <div>
            <p className="text-sm text-muted-foreground">
              Welcome back
            </p>

            <h1 className="mt-1 text-3xl font-bold tracking-tight">
              {user?.displayName || "User"}
            </h1>

            <p className="mt-2 text-muted-foreground">
              {user?.email}
            </p>
          </div>

          <Button
            variant="outline"
            onClick={handleLogout}
            disabled={loggingOut}
          >
            {loggingOut ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <>
                <LogOut className="mr-2 h-4 w-4" />
                Logout
              </>
            )}
          </Button>
        </div>

        <div className="mt-10 rounded-xl border bg-muted/40 p-6">
          <h2 className="text-lg font-semibold">
            Authentication Successful 🎉
          </h2>

          <p className="mt-2 text-sm text-muted-foreground">
            Your authentication system is working correctly. This dashboard
            is now protected and can be expanded with your application's
            features.
          </p>
        </div>
      </div>
    </main>
  );
}