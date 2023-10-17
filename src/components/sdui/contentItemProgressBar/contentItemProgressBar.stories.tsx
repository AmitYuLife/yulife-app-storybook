import type { Meta, StoryObj } from "@storybook/react";
import { ContentItemProgressBar } from "./contentItemProgressBar";
import { ContentItemProgressBarType } from "@graphql/_core/schema/globalTypes";

type Story = StoryObj<typeof ContentItemProgressBar>;

const meta: Meta<typeof ContentItemProgressBar> = {
  component: ContentItemProgressBar,
  title: "Design System/SDUI/ContentItemProgressBar",
  tags: ["autodocs"],
  parameters: {},
  args: {
    currentPosition: 100,
    id: "progress-bar",
    maxLength: 200,
    progressType: ContentItemProgressBarType.yuCoin,
    publishKeyHeight: "DYNAMIC_HEIGHT_KEY_PROGRESS",
  },
};

export default meta;

export const Default: Story = {
  args: {},
};
