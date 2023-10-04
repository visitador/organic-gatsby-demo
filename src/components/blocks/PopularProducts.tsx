import React from "react";
import { Block } from "../Layout";
import { CardProduct } from "../CardProduct";
import { ArrowRight } from "../icons/ArrowRight";

interface Product {
  title: string;
  img: string;
  price: string;
  oldPrice?: string;
  rating: number;
  sale?: string;
  inCart?: boolean;
}

interface PopularProductsProps {
  products: Product[];
}

export const PopularCategories: React.FC<PropsWithClass<PopularProductsProps>> = ({
  products,
  className,
}) => {
  return (
    <Block className={className}>
      <div className="flex">
        <div className="mr-auto text-heading05 font-semibold text-greyscale-900">
          Popular Products
        </div>
        <div className="text-primary flex items-center cursor-pointer">
          <div className="mr-2 text-bodymedium font-medium">View All</div>
          <ArrowRight/>
        </div>
      </div>
      <div className="mt-8 flex  flex-wrap pr-px pb-px">
        {products.map((product) => (
          <CardProduct
            title={product.title}
            img={product.img}
            price={product.price}
            oldPrice={product.oldPrice}
            rating={product.rating}
            sale={product.sale}
            inCart={product.inCart}
            className="shrink-0 grow -mr-px -mb-px hover:z-10"
            imgClassName="w-[254px] h-[230px]"
          />
        ))}
      </div>
    </Block>
  );
};
