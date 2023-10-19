import type { Meta, StoryObj } from "@storybook/react";
import { ContentItemPackageCardPower } from "./contentItemPackageCardPower";

type Story = StoryObj<typeof ContentItemPackageCardPower>;

const meta: Meta<typeof ContentItemPackageCardPower> = {
  component: ContentItemPackageCardPower,
  title: "Design System/SDUI/ContentItemPackageCardPower",
  tags: ["autodocs"],
  parameters: {},
  args: {},
};

export default meta;

export const Default: Story = {
  args: {},
};
