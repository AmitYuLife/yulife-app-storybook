import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { AvPlayerProgressBar } from ".";

const meta: Meta<typeof AvPlayerProgressBar> = {
  title: "Feedback/AvPlayerProgressBar",
  component: AvPlayerProgressBar,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "YuLife design system component from `@yulife-private/design-system`.",
      },
    },
  },
  args: { currentProgress: 90, duration: 300 },
};

export default meta;
type Story = StoryObj<typeof AvPlayerProgressBar>;

export const Default: Story = {
  args: { currentProgress: 90, duration: 300 },
};

export const Playground: Story = {};
