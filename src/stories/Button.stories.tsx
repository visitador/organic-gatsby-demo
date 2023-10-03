import React from "react";

import {Meta, StoryObj} from "@storybook/react" 
import { action } from '@storybook/addon-actions';

import {Button} from '../components/Button';

 const meta: Meta = {
    component: Button,
    title: "Components",
    argTypes: {
        onClick: {action: "clicked"}
    }
}
export default meta;

export const Buttons = () => 
<div>

<div className="grid grid-cols-2 gap-x-4 gap-y-6 w-fit">
    <Button onClick={action('clicked')} small fill className="">Normal</Button>
    <Button onClick={action('clicked')} small fill className="hover">Hover</Button>
    <Button onClick={action('clicked')} small border className="">Normal</Button>
    <Button onClick={action('clicked')} small border className="hover">Hover</Button>
    <Button onClick={action('clicked')} small ghost className="">Normal</Button>
    <Button onClick={action('clicked')} small ghost className="hover">Hover</Button>

    </div>


<div className="grid grid-cols-2 gap-x-4 gap-y-6 w-fit mt-10">
    <Button onClick={action('clicked')} medium fill className="">Normal</Button>
    <Button onClick={action('clicked')} medium fill className="hover">Hover</Button>
    <Button onClick={action('clicked')} medium border className="">Normal</Button>
    <Button onClick={action('clicked')} medium border className="hover">Hover</Button>
    <Button onClick={action('clicked')} medium ghost className="">Normal</Button>
    <Button onClick={action('clicked')} medium ghost className="hover">Hover</Button>

    </div>

<div className="grid grid-cols-2 gap-x-4 gap-y-6 w-fit mt-10">
    <Button onClick={action('clicked')} large fill className="">Normal</Button>
    <Button onClick={action('clicked')} large fill className="hover">Hover</Button>
    <Button onClick={action('clicked')} large border className="">Normal</Button>
    <Button onClick={action('clicked')} large border className="hover">Hover</Button>
    <Button onClick={action('clicked')} large ghost className="">Normal</Button>
    <Button onClick={action('clicked')} large ghost className="hover">Hover</Button>

    </div>
</div>
    
Buttons.parameters = { pseudo: { hover: ['.hover'] } };

