import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { Counter } from ".";

const meta: Meta<typeof Counter> = {
  title: "Typography/Counter",
  component: Counter,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "YuLife design system component from `@yulife-private/design-system`.",
      },
    },
  },
  args: { value: 8420, textAfterValue: " steps today" },
};

export default meta;
type Story = StoryObj<typeof Counter>;

export const Default: Story = {
  args: { value: 8420, textAfterValue: " steps today" },
};

export const Playground: Story = {};
