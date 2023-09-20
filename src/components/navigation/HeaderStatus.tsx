import React from "react";

import mapPin from "../../images/map-pin.svg";
import { CaretDown } from "../icons/CaretDown";

export const HeaderStatus: React.FC = () => (
  <div className="min-w-fit px-16 w-full">
    <div className="w-container text-bodytiny mx-auto flex items-center text-greyscale-600 h-[42px]">
      <img src={mapPin} alt="map pin" className="mr-2" />
      <div className="mr-auto ">
        Store Location: Lincoln- 344, Illinois, Chicago, USA
      </div>
      <div className="flex items-center mr-4">
        <div className="mr-1">Eng</div> <CaretDown className="w-3" />
      </div>
      <div className="flex items-center mr-4">
        <div className="mr-1">USD</div> <CaretDown className="w-3" />
      </div>
      <div className="h-4 w-[1px] bg-greyscale-100 mr-4"></div>
      <div>
        <span className="mr-1">Sign In</span>
        <span>/</span>
        <span className="ml-1">Sign Up</span>
      </div>
    </div>
  </div>
);
