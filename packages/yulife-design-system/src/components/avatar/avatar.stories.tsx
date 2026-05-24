import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { Avatar } from ".";

const meta: Meta<typeof Avatar> = {
  title: "Media/Avatar",
  component: Avatar,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "YuLife design system component from `@yulife-private/design-system`.",
      },
    },
  },
  args: { name: "Alex Morgan", size: 48 },
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  args: { name: "Alex Morgan", size: 48 },
};

export const Playground: Story = {};
