import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  type?: "button" | "submit";
};

export function Button({ children, href, variant = "primary", className = "", type = "button" }: ButtonProps) {
  const classes = `button button--${variant} ${className}`;
  return href ? <Link className={classes} href={href}>{children}</Link> : <button className={classes} type={type}>{children}</button>;
}
