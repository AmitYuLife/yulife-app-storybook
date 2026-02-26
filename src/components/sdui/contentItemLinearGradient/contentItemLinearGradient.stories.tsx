import type { Meta, StoryObj } from "@storybook/react-webpack5";
import Colours from "@styles/colours";
import { ContentItemLinearGradient } from "./contentItemLinearGradient";

type Story = StoryObj<typeof ContentItemLinearGradient>;

const meta: Meta<typeof ContentItemLinearGradient> = {
  component: ContentItemLinearGradient,
  title: "Design System/SDUI/ContentItemLinearGradient",
  tags: ["autodocs"],
  parameters: {},
  args: {
    id: "header-gradient-1",
    start: { x: 0, y: 0 },
    end: { x: 1, y: 0 },
    colors: [Colours.gradients.greenLight, Colours.gradients.greenSolid, Colours.gradients.greenSolid],
  },
};

export default meta;

export const Default: Story = {
  args: {},
};
