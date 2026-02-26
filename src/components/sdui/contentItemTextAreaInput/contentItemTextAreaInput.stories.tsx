import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { ContentItemTextAreaInput } from "./contentItemTextAreaInput";

type Story = StoryObj<typeof ContentItemTextAreaInput>;

const meta: Meta<typeof ContentItemTextAreaInput> = {
  component: ContentItemTextAreaInput,
  title: "Design System/SDUI/ContentItemTextAreaInput",
  tags: ["autodocs"],
  parameters: {},
  args: {
    id: "text-area",
    answerKey: "comment",
    placeholder: "Placeholder...",
  },
};

export default meta;

export const Default: Story = {
  args: {},
};
