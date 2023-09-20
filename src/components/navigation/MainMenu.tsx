import React from "react";
import { Phone } from "../icons/Phone";
import { CaretDown } from "../icons/CaretDown";

export const MainMenu: React.FC = () => (
  <div className="min-w-fit px-16 w-full bg-greyscale-800">
    <div className="w-container mx-auto flex items-center h-[60px]">
      <div className="flex space-x-8 text-greyscale-400">
        <div className="flex items-center">Home <CaretDown className="w-4 ml-1"/></div>
        <div className="flex items-center">Shop <CaretDown className="w-4 ml-1"/></div>
        <div className="flex items-center">Pages <CaretDown className="w-4 ml-1"/></div>
        <div className="flex items-center">Blog <CaretDown className="w-4 ml-1"/></div>
        <div>About Us</div>
        <div>Contact Us</div>
      </div>
      <div className="flex-1"></div>
      <div className="flex text-white">
        <Phone className="mr-2" />
        <span>(219) 555-0114</span>
      </div>
    </div>
  </div>
);
