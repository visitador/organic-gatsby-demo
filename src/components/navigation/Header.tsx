import React from "react";
import { MainMenu } from "./MainMenu";
import { HeaderStatus } from "./HeaderStatus";
import { HeaderCart } from "./HeaderCart";

export const Header: React.FC = () => (
  <div>
    <HeaderStatus/>
    <HeaderCart/>
    <MainMenu />
  </div>
);
