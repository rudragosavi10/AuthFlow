import * as React from "react";

import { cn } from "@/lib/utils";

function Input({
  className,
  type,
  ...props
}: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        `
        flex
        h-12
        w-full
        rounded-2xl
        border
        border-slate-200
        bg-white
        px-4
        text-sm
        font-medium
        text-slate-800
        shadow-sm
        transition-all
        duration-300

        placeholder:text-slate-400

        hover:border-slate-300
        hover:shadow-md

        focus:border-indigo-500
        focus:ring-4
        focus:ring-indigo-500/15
        focus:outline-none

        disabled:cursor-not-allowed
        disabled:bg-slate-100
        disabled:opacity-60

        aria-invalid:border-red-500
        aria-invalid:ring-4
        aria-invalid:ring-red-500/15

        file:border-0
        file:bg-transparent
        file:text-sm
        file:font-medium
        `,
        className
      )}
      {...props}
    />
  );
}

export { Input };