import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { ContentItemInfoCard } from "./contentItemInfoCard";

type Story = StoryObj<typeof ContentItemInfoCard>;

const meta: Meta<typeof ContentItemInfoCard> = {
  component: ContentItemInfoCard,
  title: "Design System/SDUI/ContentItemInfoCard",
  tags: ["autodocs"],
  parameters: {},
  args: {
    id: "8",
    image: {
      id: "https://yulife-develop.imgix.net/content/icons/book.svg?ixlib=js-3.2.1&w=192&h=192&s=ff7a8600a3e778287f6b1c32043d4c99",
      uri: "https://yulife-develop.imgix.net/content/icons/book.svg?ixlib=js-3.2.1&w=192&h=192&s=ff7a8600a3e778287f6b1c32043d4c99",
    },
    markdown:
      "Should you exit or drop out of the journey at any stage your progress will be saved and you can simply pick up where you left off.",
    styles: [
      { property: "paddingHorizontal", value: "24" },
      { property: "marginTop", value: "16" },
    ],
  },
};

export default meta;

export const Default: Story = {
  args: {},
};
