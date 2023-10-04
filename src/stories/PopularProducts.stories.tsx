import React from "react";

import { Meta, StoryObj } from "@storybook/react";

import { PopularCategories as PopularProductsBlock } from "../components/blocks/PopularProducts";

const meta: Meta = {
  component: PopularProductsBlock,
  title: "Blocks",
};
export default meta;

const products = [
  { price:"$14.99",sale:"Sale 50%",  oldPrice:"$20.99", rating: 5,title: "Green Apple", img: "/images/products/green-apple.png" },
  { price:"$20.00", rating: 4,title: "Fresh Indian Malta", img: "/images/products/indian-malta.png" },
  { price:"$12.00",inCart: true, rating: 4,title: "Chinese Cabbage", img: "/images/products/chinese-cabbage.png" },
  { price:"$9.00", rating: 4,title: "Green Lettuce", img: "/images/products/green-lettuce.png" },
  { price:"$34.00", rating: 4,title: "Eggplant", img: "/images/products/eggplant.png" },
  { price:"$20.00", rating: 4,title: "Big Potatoes", img: "/images/products/big-potatoes.png" },
  { price:"$20.00", rating: 4,title: "Corn", img: "/images/products/corn.png" },
  { price:"$12.00", rating: 4,title: "Fresh Cauliflower", img: "/images/products/cauliflower.png" },
  { price:"$9.00", sale:"Sale 50%", oldPrice:"$19.99", rating: 4,title: "Green Capsicum", img: "/images/products/green-capsicum.png" },
  { price:"$34.00", rating: 4,title: "Green Chili", img: "/images/products/green-chili.png" },
];

export const PopularProducts = () => (
  <div className="mt-14">
    <PopularProductsBlock products={products} />
  </div>
);
