import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { AvPlayerTimer } from ".";

const meta: Meta<typeof AvPlayerTimer> = {
  title: "Media/AvPlayerTimer",
  component: AvPlayerTimer,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "YuLife design system component from `@yulife-private/design-system`.",
      },
    },
  },
  args: {
    time: 90000,
  },
};

export default meta;
type Story = StoryObj<typeof AvPlayerTimer>;

export const Default: Story = {
  args: {
    time: 90000,
  },
};

export const Playground: Story = {};
