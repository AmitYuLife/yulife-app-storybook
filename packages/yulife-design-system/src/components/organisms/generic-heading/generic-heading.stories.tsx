import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { fn } from "storybook/test";
import { GenericHeading } from ".";

const meta: Meta<typeof GenericHeading> = {
  title: "Navigation/GenericHeading",
  component: GenericHeading,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "YuLife design system component from `@yulife-private/design-system`.",
      },
    },
  },
  args: {
    heading: "Your rewards",
    leftIcon: "back",
    onLeftIconPress: fn(),
  },
};

export default meta;
type Story = StoryObj<typeof GenericHeading>;

export const Default: Story = {
  args: {
    heading: "Your rewards",
    leftIcon: "back",
    onLeftIconPress: fn(),
  },
};

export const Playground: Story = {};
