import type { Meta, StoryObj } from "@storybook/react-webpack5";
import Component from "./claimed-reward-card";

const meta: Meta<typeof Component> = {
  component: Component,
  title: "Design System/Organisms/Claimed Reward Card",
  tags: ["autodocs"],
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/fOA03KUZB0kAv4Rj3zEg1h/YuCoin-for-Enterprise?node-id=8413-32544&t=bEO2GBnxHYATj6Hu-4",
    },
  },
  args: {},
};

export default meta;
type Story = StoryObj<typeof Component>;

export const Default: Story = {
  args: {
    title: "Reward 1",
    value: "1000",
    image: "https://cdn.britannica.com/50/213250-050-02322AA8/Nike-logo.jpg?w=385",
  },
};
