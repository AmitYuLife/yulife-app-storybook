import type { Meta, StoryObj } from "@storybook/react-webpack5";
import DarkScreen from "./dark-screen";

const meta: Meta<typeof DarkScreen> = {
  component: DarkScreen,
  title: "Design System/Atoms/DarkScreen",
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
type Story = StoryObj<typeof DarkScreen>;

export const Default: Story = {};
