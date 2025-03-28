import type { Meta, StoryObj } from "@storybook/react";
import LoginConfirmScreen from "./login-confirm.screen";

const meta: Meta<typeof LoginConfirmScreen> = {
  component: LoginConfirmScreen,
  title: "Design System/Screens/LoginConfirmScreen",
  tags: ["autodocs"],
  parameters: {
    design: {
      type: "figma",
      url: "figma url",
    },
  },
  args: {},
};

export default meta;
type Story = StoryObj<typeof LoginConfirmScreen>;

export const Default: Story = {
  args: {},
};
