import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { GiftUnlockedStarsSvg } from "./gift-unlocked-stars";

const meta: Meta<typeof GiftUnlockedStarsSvg> = {
  component: GiftUnlockedStarsSvg,
  title: "Design System/Atoms/Icon/GiftUnlockedStars",
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
type Story = StoryObj<typeof GiftUnlockedStarsSvg>;

export const Default: Story = {};
