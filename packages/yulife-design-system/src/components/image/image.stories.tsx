import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { Image } from ".";

const meta: Meta<typeof Image> = {
  title: "Media/Image",
  component: Image,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "YuLife design system component from `@yulife-private/design-system`.",
      },
    },
  },
  args: { source: "https://placehold.co/120x120/png", alt: "Reward badge", width: 120, height: 120 },
};

export default meta;
type Story = StoryObj<typeof Image>;

export const Default: Story = {
  args: { source: "https://placehold.co/120x120/png", alt: "Reward badge", width: 120, height: 120 },
};

export const Playground: Story = {};
