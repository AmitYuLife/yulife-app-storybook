import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { StarRating } from ".";

const meta: Meta<typeof StarRating> = {
  title: "Media/StarRating",
  component: StarRating,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "YuLife design system component from `@yulife-private/design-system`.",
      },
    },
  },
  args: { activeStars: 4, totalStars: 5 },
};

export default meta;
type Story = StoryObj<typeof StarRating>;

export const Default: Story = {
  args: { activeStars: 4, totalStars: 5 },
};

export const Playground: Story = {};
