import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { ContentItemList } from "./contentItemList";

type Story = StoryObj<typeof ContentItemList>;

const meta: Meta<typeof ContentItemList> = {
  component: ContentItemList,
  title: "Design System/SDUI/ContentItemList",
  tags: ["autodocs"],
  parameters: {},
  args: {
    id: "holding-results-list",
    wrapperStyles: [
      { property: "justifyContent", value: "center" },
      { property: "alignItems", value: "center" },
      { property: "marginTop", value: "32" },
    ],
    items: [
      {
        id: "holding-results-list-1",
        text: {
          value: "We’ll contact you",
          colour: "#6DC694",
        },
        circle: {
          colour: "#FFF",
          backgroundColour: "#6DC694",
        },
        styles: null,
      },
      {
        id: "holding-results-list-2",
        text: {
          value: "Processing",
          colour: "#6DC694",
        },
        circle: {
          colour: "#FFF",
          backgroundColour: "#6DC694",
        },
        styles: null,
      },
      {
        id: "holding-results-list-3",
        text: {
          value: "Results",
          colour: "#6DC694",
        },
        circle: {
          colour: "#FFF",
          backgroundColour: "#6DC694",
        },
        styles: null,
      },
    ],
  },
};

export default meta;

export const Default: Story = {
  args: {},
};
