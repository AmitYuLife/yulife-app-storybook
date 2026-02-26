import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { ContentItemProcessingTimer } from "./contentItemProcessingTimer";

type Story = StoryObj<typeof ContentItemProcessingTimer>;

const meta: Meta<typeof ContentItemProcessingTimer> = {
  component: ContentItemProcessingTimer,
  title: "Design System/SDUI/ContentItemProcessingTimer",
  tags: ["autodocs"],
  parameters: {},
  args: {
    id: "processing-timer",
    backgroundUrl:
      "https://yulife-develop.imgix.net/yugi/info-banner/info-2022-07-18.svg?ixlib=js-3.2.1&w=144&height=144&s=71154cfde1b87ec9d46e4d6c432b4b46",
    secondsUntilTarget: 303041,
    contentItemProcessingTimerHeading: "Great news!\nYour application is being processed",
  },
};

export default meta;

export const Default: Story = {
  args: {},
};
