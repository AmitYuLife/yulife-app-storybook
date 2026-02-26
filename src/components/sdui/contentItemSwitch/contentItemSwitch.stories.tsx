import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { ContentItemSwitch } from "./contentItemSwitch";

type Story = StoryObj<typeof ContentItemSwitch>;

const meta: Meta<typeof ContentItemSwitch> = {
  component: ContentItemSwitch,
  title: "Design System/SDUI/ContentItemSwitch",
  tags: ["autodocs"],
  parameters: {},
  args: {},
};

export default meta;

export const Default: Story = {
  args: {},
};
