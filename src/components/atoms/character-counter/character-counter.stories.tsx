import type { Meta, StoryObj } from "@storybook/react-webpack5";
import CharacterCounter from "./character-counter";

const meta: Meta<typeof CharacterCounter> = {
  component: CharacterCounter,
  title: "Design System/Atoms/CharacterCounter",
  tags: ["autodocs"],
  parameters: {
    design: {
      type: "figma",
      url: "figma url",
    },
  },
  args: {},
};

export default meta;
type Story = StoryObj<typeof CharacterCounter>;

export const Default: Story = {
  args: {
    currentLength: 501,
    maxLength: 1000,
    error: false,
  },
};
