import type { Meta, StoryObj } from "@storybook/react-webpack5";
import Component from "./inventory-item";

const meta: Meta<typeof Component> = {
  component: Component,
  title: "Design System/Molecules/InventoryItem",
  tags: ["autodocs"],
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/fOA03KUZB0kAv4Rj3zEg1h/YuCoin-for-Enterprise?node-id=2860-4704&t=S5YlmP9Tev5DIdgD-0",
    },
  },
  args: {},
};

export default meta;
type Story = StoryObj<typeof Component>;

export const Default: Story = {
  args: {
    isActive: false,
    name: "YuCoin",
    quantity: 100,
  },
};
