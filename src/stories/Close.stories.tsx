import React from "react";

import {Meta, StoryObj} from "@storybook/react" 

import { Close as CloseBtn } from "../components/Close";

 const meta: Meta = {
    component: CloseBtn,
    title: "Components"
}
export default meta;

export const Close = ()=> <div className="flex flex-col space-y-6">
    <CloseBtn/>
    <CloseBtn className="hover"/>
</div>


Close.parameters = { pseudo: { hover: ['.hover'] } };
