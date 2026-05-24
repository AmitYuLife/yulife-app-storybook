import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { Loading } from ".";

const meta: Meta<typeof Loading> = {
  title: "Feedback/Loading",
  component: Loading,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "YuLife design system component from `@yulife-private/design-system`.",
      },
    },
  },
  args: { size: 32 },
};

export default meta;
type Story = StoryObj<typeof Loading>;

export const Default: Story = {
  args: { size: 32 },
};

export const Playground: Story = {};
