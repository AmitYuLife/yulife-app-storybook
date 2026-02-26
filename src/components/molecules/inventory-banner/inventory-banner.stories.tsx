import type { Meta, StoryObj } from "@storybook/react-webpack5";
import Component from "./inventory-banner";

const meta: Meta<typeof Component> = {
  component: Component,
  title: "Design System/Molecules/InventoryBanner",
  tags: ["autodocs"],
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/fOA03KUZB0kAv4Rj3zEg1h/YuCoin-for-Enterprise?node-id=2923-254855&t=cOFu9RqiOLmP6rgm-0",
    },
  },
  args: {},
};

export default meta;
type Story = StoryObj<typeof Component>;

export const Default: Story = {
  args: {
    amount: 10,
  },
};
