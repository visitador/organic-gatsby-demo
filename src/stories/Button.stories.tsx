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
    <Button onClick={action('clicked')} size="small" variant="fill" className="">Normal</Button>
    <Button onClick={action('clicked')} size="small" variant="fill" className="hover">Hover</Button>
    <Button onClick={action('clicked')} size="small" variant="border" className="">Normal</Button>
    <Button onClick={action('clicked')} size="small" variant="border" className="hover">Hover</Button>
    <Button onClick={action('clicked')} size="small" variant="ghost" className="">Normal</Button>
    <Button onClick={action('clicked')} size="small" variant="ghost" className="hover">Hover</Button>

    </div>


<div className="grid grid-cols-2 gap-x-4 gap-y-6 w-fit mt-10">
    <Button onClick={action('clicked')} size="medium" variant="fill" className="">Normal</Button>
    <Button onClick={action('clicked')} size="medium" variant="fill" className="hover">Hover</Button>
    <Button onClick={action('clicked')} size="medium" variant="border" className="">Normal</Button>
    <Button onClick={action('clicked')} size="medium" variant="border" className="hover">Hover</Button>
    <Button onClick={action('clicked')} size="medium" variant="ghost" className="">Normal</Button>
    <Button onClick={action('clicked')} size="medium" variant="ghost" className="hover">Hover</Button>

    </div>

<div className="grid grid-cols-2 gap-x-4 gap-y-6 w-fit mt-10">
    <Button onClick={action('clicked')} size="large" variant="fill" className="">Normal</Button>
    <Button onClick={action('clicked')} size="large" variant="fill" className="hover">Hover</Button>
    <Button onClick={action('clicked')} size="large" variant="border" className="">Normal</Button>
    <Button onClick={action('clicked')} size="large" variant="border" className="hover">Hover</Button>
    <Button onClick={action('clicked')} size="large" variant="ghost" className="">Normal</Button>
    <Button onClick={action('clicked')} size="large" variant="ghost" className="hover">Hover</Button>

    </div>
</div>
    
Buttons.parameters = { pseudo: { hover: ['.hover'] } };

