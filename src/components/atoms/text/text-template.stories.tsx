import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { TextTemplate } from "./text-template";

const meta: Meta<typeof TextTemplate> = {
  component: TextTemplate,
  title: "Design System/Atoms/TextTemplate",
  tags: ["autodocs"],
  parameters: {
    design: {
      type: "figma",
      url: "figma url",
    },
  },
  args: {
    children: "Some example",
  },
};

export default meta;
type Story = StoryObj<typeof TextTemplate>;

export const Default: Story = {};
