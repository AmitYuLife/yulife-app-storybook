import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { ContentItemKeyValueBox } from "./contentItemKeyValueBox";

type Story = StoryObj<typeof ContentItemKeyValueBox>;

const meta: Meta<typeof ContentItemKeyValueBox> = {
  component: ContentItemKeyValueBox,
  title: "Design System/SDUI/ContentItemKeyValueBox",
  tags: ["autodocs"],
  parameters: {},
  args: {
    id: "keyValueBox-1",
    boxKey: "Key",
    boxValue: "Value",
    styles: [
      { property: "borderRadius", value: "8" },
      { property: "borderColor", value: "#E7E7EB" },
      { property: "borderWidth", value: "1" },
      { property: "marginHorizontal", value: "24" },
      { property: "padding", value: "16" },
      { property: "backgroundColor", value: "#FFF" },
    ],
  },
};

export default meta;

export const Default: Story = {
  args: {},
};
