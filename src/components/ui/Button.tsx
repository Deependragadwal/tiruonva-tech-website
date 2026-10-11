import Link from "next/link";
import { cn } from "@/lib/cn";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost" | "light";
  className?: string;
};

const variants: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary:
    "bg-orange text-white hover:bg-orange-600 shadow-[0_10px_24px_rgba(232,122,26,0.28)]",
  secondary: "bg-blue text-white hover:bg-blue-700",
  outline: "border border-navy/15 bg-white text-navy hover:border-blue hover:text-blue",
  ghost: "text-navy hover:text-blue",
  light: "border border-white/25 bg-white/10 text-white hover:bg-white hover:text-navy",
};

export function Button({
  href,
  children,
  variant = "primary",
  className,
}: ButtonProps) {
  const classes = cn(
    "inline-flex min-h-11 w-full items-center justify-center rounded-full px-5 py-3 text-center text-sm font-semibold tracking-wide text-pretty transition-colors sm:w-auto",
    variants[variant],
    className,
  );

  if (href.startsWith("/") && !href.startsWith("//")) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <a href={href} className={classes}>
      {children}
    </a>
  );
}
