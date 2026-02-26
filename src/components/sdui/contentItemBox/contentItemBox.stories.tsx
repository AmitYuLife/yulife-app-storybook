import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { ContentItemBox } from "./contentItemBox";

type Story = StoryObj<typeof ContentItemBox>;

const meta: Meta<typeof ContentItemBox> = {
  component: ContentItemBox,
  title: "Design System/SDUI/ContentItemBox",
  tags: ["autodocs"],
  parameters: {},
  args: { canCopy: true, markdown: "test", parsedMarkdown: "test", title: "Test" },
};

export default meta;

export const Default: Story = {
  args: {},
};
