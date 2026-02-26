import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { ContentItemShowHideBalance } from "./contentItemShowHideBalance";

type Story = StoryObj<typeof ContentItemShowHideBalance>;

const meta: Meta<typeof ContentItemShowHideBalance> = {
  component: ContentItemShowHideBalance,
  title: "Design System/SDUI/ContentItemShowHideBalance",
  tags: ["autodocs"],
  parameters: {},
  args: {},
};

export default meta;

export const Default: Story = {
  args: {},
};
