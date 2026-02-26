import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { UnauthorisedGradient } from "./unauthorised-gradient";

const meta: Meta<typeof UnauthorisedGradient> = {
  component: UnauthorisedGradient,
  title: "Design System/Atoms/UnauthorisedGradient",
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
type Story = StoryObj<typeof UnauthorisedGradient>;

export const Default: Story = {
  args: {},
};
