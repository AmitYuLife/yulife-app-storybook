import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { MultilineTextInput } from "./multiline-text-input";

const meta: Meta<typeof MultilineTextInput> = {
  component: MultilineTextInput,
  title: "Design System/Atoms/MultilineTextInput",
  tags: ["autodocs"],
  parameters: {
    design: {
      type: "figma",
      url: "figma url",
    },
  },
};

export default meta;
type Story = StoryObj<typeof MultilineTextInput>;

export const Default: Story = {};
