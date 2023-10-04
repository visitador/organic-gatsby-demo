import React from "react";

type CategoryProps = {
  title: string;
  img: string;
  imgClassName?: string;
};

export const CardCategory: React.FC<PropsWithClass<CategoryProps>> = ({
  title,
  img,
  className,
  imgClassName,
}) => (
  <div
    className={`w-[200px] pt-4 pb-6 flex flex-col items-center cursor-pointer rounded-md border hover:shadow-card border-greyscale-100 text-greyscale-900 hover:text-primary-hard hover:border-primary-hard ${className}`}
  >
    <img src={img} className={imgClassName} />
    <div className="mt-4 text-bodylarge font-medium ">{title}</div>
  </div>
);
