import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { ContentItemMedia } from "./contentItemMedia";

type Story = StoryObj<typeof ContentItemMedia>;

const meta: Meta<typeof ContentItemMedia> = {
  component: ContentItemMedia,
  title: "Design System/SDUI/ContentItemMedia",
  tags: ["autodocs"],
  parameters: {},
  args: {
    id: "media-1",
  },
};

export default meta;

export const Default: Story = {
  args: {},
};
