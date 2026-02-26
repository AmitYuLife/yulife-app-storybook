import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { ContentItemHint } from "./contentItemHint";

type Story = StoryObj<typeof ContentItemHint>;

const meta: Meta<typeof ContentItemHint> = {
  component: ContentItemHint,
  title: "Design System/SDUI/ContentItemHint",
  tags: ["autodocs"],
  parameters: {},
  args: {
    hintTitle: "Title",
    contentItemHintDescription: "Description",
    hintImage: {
      id: "https://yulife-develop.imgix.net/content/icons/book.svg?ixlib=js-3.2.1&w=192&h=192&s=ff7a8600a3e778287f6b1c32043d4c99",
      uri: "https://yulife-develop.imgix.net/content/icons/book.svg?ixlib=js-3.2.1&w=192&h=192&s=ff7a8600a3e778287f6b1c32043d4c99",
    },
  },
};

export default meta;

export const Default: Story = {
  args: {},
};
