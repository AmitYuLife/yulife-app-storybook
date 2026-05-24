import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { YuCoinValue } from "./yu-coin-value";

const meta: Meta<typeof YuCoinValue> = {
  title: "Typography/YuCoinValue",
  component: YuCoinValue,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    size: {
      control: "radio",
      options: ["small", "medium"],
    },
    dark: { control: "boolean" },
    value: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof YuCoinValue>;

export const Medium: Story = {
  args: {
    value: "123,131",
    size: "medium",
  },
};

export const Small: Story = {
  args: {
    value: "123,131",
    size: "small",
  },
};

export const MediumDark: Story = {
  name: "Medium — Dark",

  args: {
    value: "123,131",
    size: "medium",
    dark: true,
  },

  parameters: {
    layout: "centered",
  },

  globals: {
    backgrounds: {
      value: "dark",
    },
  },
};

export const SmallDark: Story = {
  name: "Small — Dark",

  args: {
    value: "123,131",
    size: "small",
    dark: true,
  },

  parameters: {
    layout: "centered",
  },

  globals: {
    backgrounds: {
      value: "dark",
    },
  },
};

export const LargeNumber: Story = {
  args: {
    value: "1,234,567",
    size: "medium",
  },
};
