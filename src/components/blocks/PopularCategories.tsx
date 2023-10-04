import React from "react";
import { Block } from "../Layout";
import { CardCategory } from "../CardCategory";

interface PopularCategoriesProps {
  categories: { title: string; img: string }[];
}

export const PopularCategories: React.FC<
  PropsWithClass<PopularCategoriesProps>
> = ({ categories, className }) => (
  <Block className={className}>
    <div className="flex">
      <div className="mr-auto text-heading05 font-semibold text-greyscale-900">
        Popular Categories
      </div>
      <div className="text-primary flex items-center cursor-pointer">
        <div className="mr-2 text-bodymedium font-medium">View All</div>
        <svg
          width="17"
          height="14"
          viewBox="0 0 17 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16 7.00049H1"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M9.94995 0.975464L16 6.99946L9.94995 13.0245"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </div>
    <div className="mt-8 flex justify-between flex-wrap">
      {categories.map((category) => (
        <CardCategory
          title={category.title}
          img={category.img}
          className="mb-6 shrink-0"
          imgClassName="w-[190px] h-[130px]"
        />
      ))}
    </div>
  </Block>
);
