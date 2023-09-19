import React from "react";

interface TitleProps {
  label: string;
}

export const Title = ({ label }: TitleProps) => (
  <>
    <h1 className="text-[40px] leading-[120%] mb-4 font-semibold text-greyscale-900">
      {label}
    </h1>
    <div className="bg-primary rounder-[3px] w-20 h-[3px]" />
  </>
);
