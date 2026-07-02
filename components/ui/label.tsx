"use client";

import * as React from "react";
import { Label as LabelPrimitive } from "radix-ui";

import { cn } from "@/lib/utils";

function Label({
  className,
  ...props
}: React.ComponentProps<typeof LabelPrimitive.Root>) {
  return (
    <LabelPrimitive.Root
      data-slot="label"
      className={cn(
        `
        mb-2
        flex
        items-center
        text-sm
        font-semibold
        tracking-tight
        text-slate-700
        select-none
        transition-colors
        duration-200

        group-data-[disabled=true]:pointer-events-none
        group-data-[disabled=true]:opacity-50

        peer-disabled:cursor-not-allowed
        peer-disabled:opacity-50
        `,
        className
      )}
      {...props}
    />
  );
}

export { Label };