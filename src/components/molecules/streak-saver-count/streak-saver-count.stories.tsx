import type { Meta, StoryObj } from "@storybook/react-webpack5";
import Component from "./streak-saver-count";

const meta: Meta<typeof Component> = {
  component: Component,
  title: "Design System/Molecules/Streak Saver Count",
  tags: ["autodocs"],
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/fOA03KUZB0kAv4Rj3zEg1h/YuCoin-for-Enterprise?node-id=3362-32083&node-type=FRAME&t=jXnSD5LAhwlKnYm2-0",
    },
  },
  args: {},
};

export default meta;

type Story = StoryObj<typeof Component>;

export const Default: Story = {
  args: {
    count: 10,
  },
};
