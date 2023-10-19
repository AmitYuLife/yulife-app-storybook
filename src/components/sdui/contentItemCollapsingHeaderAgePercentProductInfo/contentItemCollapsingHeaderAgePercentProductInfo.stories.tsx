import type { Meta, StoryObj } from "@storybook/react";
import { ContentItemCollapsingHeaderAgePercentProductInfo } from "./contentItemCollapsingHeaderAgePercentProductInfo";

type Story = StoryObj<typeof ContentItemCollapsingHeaderAgePercentProductInfo>;

const meta: Meta<typeof ContentItemCollapsingHeaderAgePercentProductInfo> = {
  component: ContentItemCollapsingHeaderAgePercentProductInfo,
  title: "Design System/SDUI/ContentItemCollapsingHeaderAgePercentProductInfo",
  tags: ["autodocs"],
  parameters: {},
  args: {},
};

export default meta;

export const Default: Story = {
  args: {},
};
