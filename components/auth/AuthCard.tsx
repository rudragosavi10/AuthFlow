"use client";

import { ReactNode } from "react";

interface AuthCardProps {
  children: ReactNode;
}

export default function AuthCard({ children }: AuthCardProps) {
  return (
    <div className="w-full max-w-md rounded-2xl border border-border/60 bg-background/95 p-8 shadow-xl backdrop-blur supports-[backdrop-filter]:bg-background/80">
      {children}
    </div>
  );
}