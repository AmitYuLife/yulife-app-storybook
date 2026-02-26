import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { ContentItemFade } from "./contentItemFade";

type Story = StoryObj<typeof ContentItemFade>;

const meta: Meta<typeof ContentItemFade> = {
  component: ContentItemFade,
  title: "Design System/SDUI/ContentItemFade",
  tags: ["autodocs"],
  parameters: {},
  args: {},
};

export default meta;

export const Default: Story = {
  args: {},
};
