import type { Meta, StoryObj } from "@storybook/react-webpack5";
import PageIndicator from "./page-indicator";

const meta: Meta<typeof PageIndicator> = {
  component: PageIndicator,
  title: "Design System/Atoms/PageIndicator",
  tags: ["autodocs"],
  parameters: {
    design: {
      type: "figma",
      url: "figma url",
    },
  },
  args: {
    pageCount: 10,
    activePage: 1,
  },
};

export default meta;
type Story = StoryObj<typeof PageIndicator>;

export const Default: Story = {
  args: {},
};
