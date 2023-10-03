import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import { ButtonInput as ButtonInputWidget } from "../components/ButtonInput";

const meta: Meta = {
  component: ButtonInputWidget,
  title: "Components",
};
export default meta;

export const ButtonInput = () => (
  <div className="flex flex-col space-y-6">
    <ButtonInputWidget
      placeholder="Your email address"
      buttonText="Subscribe"
      onClick={action("onClick")}
    />
  </div>
);

