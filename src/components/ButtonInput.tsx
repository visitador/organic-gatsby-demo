import React, { MouseEventHandler, forwardRef } from "react";
import { Button } from "./Button";

type ButtonInputProps = {
  placeholder?: string;
  buttonText: string;
} & PropsWithClass &
  PropsWithOnClick;

export const ButtonInput = forwardRef<HTMLInputElement, ButtonInputProps>(
  ({ placeholder, className, onClick, buttonText }, ref) => {
    return (
      <div
        className={`flex border  border-greyscale-100 rounded-full min-w-fit bg-white ${className}`}
      >
        <input
          placeholder={placeholder}
          className="text-bodymedium mx-6 my-[14px] text-greyscale-900 placeholder:text-greyscale-500 outline-none flex-1"
          ref={ref}
        />
        <Button className="-my-px -mr-px" fill medium onClick={onClick}>
          {buttonText}
        </Button>
      </div>
    );
  }
);
