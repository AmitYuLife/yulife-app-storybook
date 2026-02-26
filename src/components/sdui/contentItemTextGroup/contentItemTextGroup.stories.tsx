import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { ContentItemTextGroup } from "./contentItemTextGroup";

type Story = StoryObj<typeof ContentItemTextGroup>;

const meta: Meta<typeof ContentItemTextGroup> = {
  component: ContentItemTextGroup,
  title: "Design System/SDUI/ContentItemTextGroup",
  tags: ["autodocs"],
  parameters: {},
  args: {},
};

export default meta;

export const Default: Story = {
  args: {},
};
