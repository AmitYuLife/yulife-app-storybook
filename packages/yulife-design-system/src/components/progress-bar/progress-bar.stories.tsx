import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { ProgressBar } from ".";

const meta: Meta<typeof ProgressBar> = {
  title: "Feedback/ProgressBar",
  component: ProgressBar,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "YuLife design system component from `@yulife-private/design-system`.",
      },
    },
  },
  args: { progress: 0.65 },
};

export default meta;
type Story = StoryObj<typeof ProgressBar>;

export const Default: Story = {
  args: { progress: 0.65 },
};

export const Playground: Story = {};
