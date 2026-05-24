import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { SkeletonRow } from ".";

const meta: Meta<typeof SkeletonRow> = {
  title: "Feedback/SkeletonRow",
  component: SkeletonRow,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "YuLife design system component from `@yulife-private/design-system`.",
      },
    },
  },
  args: {
    height: 16,
    style: { width: "100%" },
  },
};

export default meta;
type Story = StoryObj<typeof SkeletonRow>;

export const Default: Story = {
  args: {
    height: 16,
    style: { width: "100%" },
  },
};

export const Playground: Story = {};
