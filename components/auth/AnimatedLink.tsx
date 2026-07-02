"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  MouseEvent,
  ReactNode,
  useEffect,
  useRef,
} from "react";

interface AnimatedLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
}

export default function AnimatedLink({
  href,
  children,
  className,
}: AnimatedLinkProps) {
  const router = useRouter();
  const navigating = useRef(false);

  useEffect(() => {
    document.body.classList.remove("auth-page-transition");
    navigating.current = false;
  }, []);

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    if (navigating.current) return;

    navigating.current = true;

    document.body.classList.add("auth-page-transition");

    requestAnimationFrame(() => {
      setTimeout(() => {
        router.push(href);
      }, 220);
    });
  };

  return (
    <Link
      href={href}
      onClick={handleClick}
      className={className}
    >
      {children}
    </Link>
  );
}