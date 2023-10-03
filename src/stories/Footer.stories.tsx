import React from "react";

import {Meta, StoryObj} from "@storybook/react" 

import { Footer as FooterComponent } from "../components/navigation/Footer";

 const meta: Meta = {
    component: FooterComponent,
    title: "Components"
}
export default meta;

export const Footer = ()=> <div className="my-10">
    <FooterComponent/>
</div>


