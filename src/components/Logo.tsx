import React from "react";
import { Plant } from "./icons/Plant";

export const Logo: React.FC<PropsWithClass> = ({className}) => (
  <div className={`flex items-center ${className}`}>
    <Plant className="w-8 h-8 mr-2 text-primary" />
    <span className="text-[32px] leading-[38px] font-medium">
      Ecobazar
    </span>
  </div>
);
