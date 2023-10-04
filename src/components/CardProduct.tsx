import React from "react";
import { Star } from "./icons/Star";
import { ButtonAddCart } from "./ButtonAddCart";
import { Tag } from "./Tag";


type ProductProps = {
  title: string;
  img: string;
  imgClassName?: string;
  price: string;
  oldPrice?: string;
  rating: number;
  sale?: string;
  inCart?: boolean;
};



export const CardProduct: React.FC<PropsWithClass<ProductProps>> = ({
  title,
  img,
  className,
  imgClassName,
  price,
  oldPrice,
  rating,
  sale,
  inCart,
}) => (
  <div
    className={`border relative hover:border-primary-hard hover:shadow-card border-greyscale-100 ${className}`}
  >
    {sale&& <Tag className="absolute top-4 left-4" variant="sale">{sale}</Tag>}
    <img src={img} className={`p-1 `+imgClassName} />
    <div className="p-3 relative">
        <div className="text-bodysmall text-greyscale-700">
            {title}
        </div>
        <div className="text-bodymedium">
            <span className="font-medium text-greyscale-900">{price}</span>
            {oldPrice && <span className="text-greyscale-400 ml-0.5 line-through">{oldPrice}</span>}
        </div>
        <div className="mt-1.5 flex">
            {
                new Array(5).fill(0).map((_, index)=><Star className={'inline-block w-3 h-3 ' + (index<rating?'text-color-warning':'text-greyscale-200')}/>)
            }
        </div>
        <ButtonAddCart active={inCart} className="absolute right-5 bottom-1/2 translate-y-1/2"/>
    </div>
  </div>
);
