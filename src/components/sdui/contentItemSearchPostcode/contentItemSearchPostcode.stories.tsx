import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { ContentItemSearchPostcode } from "./contentItemSearchPostcode";

type Story = StoryObj<typeof ContentItemSearchPostcode>;

const meta: Meta<typeof ContentItemSearchPostcode> = {
  component: ContentItemSearchPostcode,
  title: "Design System/SDUI/ContentItemSearchPostcode",
  tags: ["autodocs"],
  parameters: {},
  args: {
    id: `search-postcode`,
    label: "Look up address",
    icon: {
      id: "https://yulife-develop.imgix.net/content/icons/search.svg?ixlib=js-3.2.1&s=9b06ccff2f22deabb1816beb9ffa191a",
      uri: "https://yulife-develop.imgix.net/content/icons/search.svg?ixlib=js-3.2.1&s=9b06ccff2f22deabb1816beb9ffa191a",
    },
    headingText: "Contact Details",
    searchTitle: "Enter your postcode",
    onLoadPlaceholder: "Start typing your postcode to search.",
    onLoadUnsuccessfulText: "Sorry, but we couldn’t find any results based on your search.",
    addressAnswerKeys: [
      {
        answerKey: "ADDRESS_1",
        addressKey: "addressFirstLine",
      },
      {
        answerKey: "ADDRESS_2",
        addressKey: "addressSecondLine",
      },
      {
        answerKey: "TOWN",
        addressKey: "addressCity",
      },
      {
        answerKey: "POSTCODE",
        addressKey: "addressPostCode",
      },
    ],
  },
};

export default meta;

export const Default: Story = {
  args: {},
};
