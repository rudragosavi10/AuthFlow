
import { ReactNode } from "react";
import {
  ArrowRight,
  Lock,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

interface AuthLayoutProps {
  children: ReactNode;
}

export default function AuthLayout({
  children,
}: AuthLayoutProps) {
  return (
    <main className="relative min-h-screen overflow-hidden bg-white">

      {/* Background */}
      <div className="absolute inset-0 -z-30 bg-[linear-gradient(to_right,#f3f4f6_1px,transparent_1px),linear-gradient(to_bottom,#f3f4f6_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="absolute left-1/2 top-0 -z-20 h-[550px] w-[550px] -translate-x-1/2 rounded-full bg-indigo-200/30 blur-[130px]" />

      <div className="absolute bottom-0 right-0 -z-20 h-[400px] w-[400px] rounded-full bg-violet-200/40 blur-[120px]" />

      <div className="mx-auto grid min-h-screen max-w-7xl grid-cols-1 items-center gap-16 px-8 py-10 lg:grid-cols-2 lg:px-12">

        {/* LEFT */}
        <section className="hidden max-w-2xl justify-self-start lg:block animate-in fade-in slide-in-from-left-6 duration-700">

          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-white px-5 py-2 shadow-sm">
            <Sparkles className="h-4 w-4 text-indigo-600" />

            <span className="text-sm font-semibold tracking-wide text-indigo-700">
              AUTHFLOW
            </span>
          </div>

          <h1 className="mt-8 text-6xl font-black leading-[1.05] tracking-tight text-slate-900">
            Secure
            <br />
            Authentication
            <br />
            Made Simple.
          </h1>

          <p className="mt-8 max-w-lg text-lg leading-8 text-slate-600">
            Build authentication once and reuse it in every
            project. Clean architecture, Firebase integration,
            modern UI and production-ready code.
          </p>

          <div className="mt-10 space-y-5">
            <Feature
              icon={<ShieldCheck className="h-5 w-5" />}
              title="Secure Firebase Authentication"
            />

            <Feature
              icon={<Lock className="h-5 w-5" />}
              title="Protected Dashboard Routes"
            />

            <Feature
              icon={<ArrowRight className="h-5 w-5" />}
              title="Google Login & Password Reset"
            />
          </div>
        </section>

        {/* RIGHT */}
        <section className="flex w-full items-center justify-center justify-self-end">

    {children}

</section>
      </div>

    </main>
  );
}

function Feature({
  icon,
  title,
}: {
  icon: ReactNode;
  title: string;
}) {
  return (
    <div className="group flex items-center gap-4 rounded-2xl border border-slate-200 bg-white/80 px-5 py-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-xl">

      <div className="rounded-xl bg-indigo-50 p-3 text-indigo-600 transition-all duration-300 group-hover:scale-110">
        {icon}
      </div>

      <span className="font-medium text-slate-700">
        {title}
      </span>

    </div>
  );
}