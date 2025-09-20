import React from "react";
import clsx from "clsx";
import Link from "next/link";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  rounded?: boolean;
  className?: string;
  href?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement> &
  React.AnchorHTMLAttributes<HTMLAnchorElement>;

const Button: React.FC<ButtonProps> = ({ children, variant = "primary", rounded = true, href, className, ...props }) => {
  const baseStyles = "px-6 py-2 font-medium transition-colors duration-200 cursor-pointer inline-flex items-center justify-center";

  const variants: Record<"primary" | "secondary", string> = {
    secondary: "bg-brand-green text-[#1B1F24] font-bold hover:bg-transparent hover:border-brand-green hover:text-brand-green hover:border",
    primary: "border border-brand-green text-brand-green hover:bg-brand-green hover:text-white",
  };

  const radius = rounded ? "rounded-full" : "rounded-none";

  const classes = clsx(baseStyles, variants[variant], radius, className);

  if (href) {
    return (
      <Link href={href} {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}>
        <span className={classes}>{children}</span>
      </Link>
    );
  }

  return (
    <button className={classes} {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
};

export default Button;
