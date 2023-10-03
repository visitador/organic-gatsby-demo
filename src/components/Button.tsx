import React, { PropsWithChildren } from "react";

type ButtonProps = {
  /* variant */
  fill?: boolean;
  border?: boolean;
  ghost?: boolean;

  /* size */
  small?: boolean;
  medium?: boolean;
  large?: boolean;
} & PropsWithClass &
  PropsWithChildren &
  PropsWithOnClick;

const sizeToCn = {
  small: "px-6 py-[10px] text-bodytiny",
  medium: "px-8 py-[14px] text-bodysmall leading-[120%]",
  large: "px-10 py-4 text-bodymedium leading-[120%]",
};

const variantToCn = {
  fill: "bg-primary text-white hover:bg-primary-hard",
  border:
    "bg-white outline -ouline-offset-2 outline-2 outline-current text-primary hover:text-primary-hard",
  ghost:
    "bg-[#56AC591A] text-primary hover:bg-[#2C742F33] hover:text-primary-hard",
};

type ButtonSize = keyof typeof sizeToCn;
type ButtonVariant = keyof typeof variantToCn;

export function Button(props: ButtonProps) {
  let { children, className, onClick } = props;
  let size: ButtonSize = "medium",
    variant: ButtonVariant = "fill";

  for (let key in props) {
    if (key in sizeToCn) {
      size = key as ButtonSize;
    } else if (key in variantToCn) {
      variant = key as ButtonVariant;
    }
  }

  return (
    <button
      onClick={onClick}
      className={`font-semibold rounded-full ${variantToCn[variant]} ${sizeToCn[size]} ${className}`}
    >
      {children}
    </button>
  );
}
