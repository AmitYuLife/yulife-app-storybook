import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { fn } from "storybook/test";
import { HintPopup } from ".";

const meta: Meta<typeof HintPopup> = {
  title: "Feedback/HintPopup",
  component: HintPopup,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "YuLife design system component from `@yulife-private/design-system`.",
      },
    },
  },
  args: {
    title: "Streak history",
    description: "Tap to see how many days you have kept your step streak.",
    onClose: fn(),
  },
};

export default meta;
type Story = StoryObj<typeof HintPopup>;

export const Default: Story = {
  args: {
    title: "Streak history",
    description: "Tap to see how many days you have kept your step streak.",
    onClose: fn(),
  },
};

export const Playground: Story = {};
