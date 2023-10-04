import React from "react";

import {Meta, StoryObj} from "@storybook/react" 

import { PopularCategories as PopularCategoriesBlock } from "../components/blocks/PopularCategories";

 const meta: Meta = {
    component: PopularCategoriesBlock,
    title: "Blocks"
}
export default meta;


const categories = [
    {title:"Fresh Fruit", img: "/images/categories/fruit.png"},
    {title:"Fresh Vegetables", img: "/images/categories/vegetables.png"},
    {title:"Meat & Fish", img: "/images/categories/meat-fish.png"},
    {title:"Snacks", img: "/images/categories/snacks.png"},
    {title:"Beverages", img: "/images/categories/beverages.png"},
    {title:"Beauty & Health", img: "/images/categories/beauty-health.png"},
    {title:"Bread & Bakery", img: "/images/categories/bread-bakery.png"},
    {title:"Baking Needs", img: "/images/categories/baking-needs.png"},
    {title:"Cooking", img: "/images/categories/cooking.png"},
    {title:"Diabetic Food", img: "/images/categories/diabetic-food.png"},
    {title:"Dish Detergents", img: "/images/categories/dish-detergents.png"},
    {title:"Oil", img: "/images/categories/oil.png"},
]

export const PopularCategories = ()=> <div className="mt-14">
    <PopularCategoriesBlock categories={categories}/>
</div>


