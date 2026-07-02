import { ReactNode } from "react";

interface AuthCenterLayoutProps {
  children: ReactNode;
}

export default function AuthCenterLayout({
  children,
}: AuthCenterLayoutProps) {
  return (
    <main className="relative min-h-screen overflow-hidden bg-white">

      {/* Background Grid */}
      <div className="absolute inset-0 -z-30 bg-[linear-gradient(to_right,#f3f4f6_1px,transparent_1px),linear-gradient(to_bottom,#f3f4f6_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* Glow */}
      <div className="absolute left-1/2 top-0 -z-20 h-[550px] w-[550px] -translate-x-1/2 rounded-full bg-indigo-200/30 blur-[130px]" />

      <div className="absolute bottom-0 left-1/2 -z-20 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-violet-200/30 blur-[120px]" />

      <div className="mx-auto flex min-h-screen w-full max-w-7xl items-center justify-center px-6 py-10">

  {children}


      </div>

    </main>
  );
}