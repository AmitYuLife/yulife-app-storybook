import type { Meta, StoryObj } from "@storybook/react-webpack5";
import SkeletonLoading from "./skeleton-loading";

const meta: Meta<typeof SkeletonLoading> = {
  component: SkeletonLoading,
  title: "Design System/Atoms/SkeletonLoading",
  tags: ["autodocs"],
  parameters: {
    design: {
      type: "figma",
      url: "figma url",
    },
  },
  args: {
    style: {
      width: 300,
      height: 80,
    },
  },
};

export default meta;
type Story = StoryObj<typeof SkeletonLoading>;

export const Default: Story = {
  args: {},
};
