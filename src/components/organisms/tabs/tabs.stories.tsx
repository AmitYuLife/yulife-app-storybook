import type { Meta, StoryObj } from "@storybook/react-webpack5";
import Tabs from "./tabs";
import { CyclingIcon } from "@atoms/icon/cycling-icon";
import { StepsIcon } from "@atoms/icon/steps-icon";
import { YudokuIcon } from "@atoms/icon/yudoku-icon";

const meta: Meta<typeof Tabs> = {
  component: Tabs,
  title: "Design System/Organisms/Tabs",
  tags: ["autodocs"],
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/bpwO4qkwPcBErdjtIru9J4/Game-System?node-id=1805%3A37121&mode=dev",
    },
  },
  args: {
    list: [
      { name: "Steps", Icon: StepsIcon, onPress: () => console.log("steps") },
      { name: "Cycling", Icon: CyclingIcon, onPress: () => console.log("cycling") },
      { name: "Yudoku", Icon: YudokuIcon, onPress: () => console.log("yudoku") },
    ],
  },
};

export default meta;
type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
  args: {},
};

export const DefaultTab: Story = {
  args: {
    defaultTab: 1,
  },
};
