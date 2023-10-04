import React from "react";
import { Bag } from "./icons/Bag";

type ButtonAddCartProps = {
  active?: boolean;
};

export const ButtonAddCart: React.FC<PropsWithClass<ButtonAddCartProps>> = ({
  className,
  active,
}) => (
  <div
    className={`flex items-center justify-center cursor-pointer w-10 h-10 rounded-full ${
      active
        ? "bg-primary text-white"
        : "text-greyscale-900 bg-greyscale-50 hover:text-white hover:bg-primary-hard"
    } ${className}`}
  >
    <Bag />
  </div>
);
