import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { Header } from "../components/navigation/Header";
import { Footer } from "../components/navigation/Footer";
import { PopularCategories } from "../components/blocks/PopularCategories";

import fruit from "../../assets/images/categories/fruit.png"
import vegetables from "../../assets/images/categories/vegetables.png"
import meat  from "../../assets/images/categories/meat-fish.png"
import snacks from "../../assets/images/categories/snacks.png"
import beverages from "../../assets/images/categories/beverages.png"
import beauty from "../../assets/images/categories/beauty-health.png"
import bread from "../../assets/images/categories/bread-bakery.png"
import baking from "../../assets/images/categories/baking-needs.png"
import cooking from "../../assets/images/categories/cooking.png"
import diabetic from "../../assets/images/categories/diabetic-food.png"
import dish from "../../assets/images/categories/dish-detergents.png"
import oil from "../../assets/images/categories/oil.png"


const mockCategories = [
  {title:"Fresh Fruit", img: fruit },
  {title:"Fresh Vegetables", img: vegetables },
  {title:"Meat & Fish", img: meat },
  {title:"Snacks", img: snacks },
  {title:"Beverages", img: beverages },
  {title:"Beauty & Health", img: beauty },
  {title:"Bread & Bakery", img: bread },
  {title:"Baking Needs", img: baking },
  {title:"Cooking", img: cooking },
  {title:"Diabetic Food", img: diabetic },
  {title:"Dish Detergents", img: dish },
  {title:"Oil", img: oil },
]


const IndexPage: React.FC<PageProps> = () => {
  return (
    <nav>
      <Header/>
      <PopularCategories categories={mockCategories} className="mt-14"/>
      <Footer/>
    </nav>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
