import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { HeartIcon } from ".";

const meta: Meta<typeof HeartIcon> = {
  title: "Media/Icon",
  component: HeartIcon,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "YuLife design system component from `@yulife-private/design-system`.",
      },
    },
  },
  args: { size: 24 },
};

export default meta;
type Story = StoryObj<typeof HeartIcon>;

export const Default: Story = {
  args: { size: 24 },
};

export const Playground: Story = {};
