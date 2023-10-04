import React, { PropsWithChildren } from "react";

type TagProps = {
  variant: keyof typeof  variantToCn;
} & PropsWithChildren &
  PropsWithClass;

const variantToCn = {
    sale: "bg-color-danger",
    "new": "bg-color-warning",
    best: "bg-color-sale",
    sold: "bg-greyscale-900",
}

export const Tag: React.FC<TagProps> = ({ className, variant, children }) => (
  <div className={`px-2 py-[3px] rounded-[4px] text-white text-bodysmall ${variantToCn[variant]} ${className}`}>{children}</div>
);
