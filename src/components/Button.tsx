import React, { MouseEventHandler } from "react";

interface ButtonProps {
  variant?: "fill" | "border" | "ghost";
  size?: "small" | "medium" | "large";
  className?: string;
  children: React.ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const BUTTON_TW_STYLES = "";

const sizeToCn = {
    small: "px-6 py-[10px] text-bodytiny",
    medium: "px-8 py-[14px] text-bodysmall leading-[120%]",
    large: "px-10 py-4 text-bodymedium leading-[120%]",
}

const variantToCn = {
    fill: "bg-primary text-white hover:bg-primary-hard",
    border: "bg-white outline -ouline-offset-2 outline-2 outline-current text-primary hover:text-primary-hard",
    ghost: "bg-[#56AC591A] text-primary hover:bg-[#2C742F33] hover:text-primary-hard",
}

export function Button({
  children,
  className,
  size = "medium",
  variant = "fill",
  onClick,
}: ButtonProps) {
  return <button onClick={onClick} className={`font-semibold rounded-full ${variantToCn[variant]} ${sizeToCn[size]} ${className}`}>{children}</button>;
}
