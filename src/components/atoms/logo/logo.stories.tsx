import type { Meta, StoryObj } from "@storybook/react-webpack5";
import Logo from "./index";

const meta: Meta<typeof Logo> = {
  component: Logo,
  title: "Design System/Atoms/Logo",
  tags: ["autodocs"],
  parameters: {
    design: {
      type: "figma",
      url: "figma url",
    },
  },
  argTypes: {
    type: {},
  },
};

export default meta;
type Story = StoryObj<typeof Logo>;

export const Full: Story = {
  args: {
    type: "full",
  },
};

export const LogoOnly: Story = {
  args: {
    type: "logo-only",
  },
};

export const TextOnly: Story = {
  args: {
    type: "text-only",
  },
};

export const Inverted: Story = {
  args: {
    type: "inverted",
    style: {
      backgroundColor: "black",
    },
  },
};
