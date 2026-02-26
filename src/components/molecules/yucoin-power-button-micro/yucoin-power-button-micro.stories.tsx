import type { Meta, StoryObj } from "@storybook/react-webpack5";
import YucoinPowerButtonMicro from "./yucoin-power-button-micro";

type Story = StoryObj<typeof YucoinPowerButtonMicro>;

const meta: Meta<typeof YucoinPowerButtonMicro> = {
  component: YucoinPowerButtonMicro,
  title: "Design System/Molecules/YucoinPowerButtonMicro",
  tags: ["autodocs"],
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/038qmstXXpC0pUUJ24e2nR/Quests-Spec-%5B200-levels%5D---Updated?type=design&node-id=1-9&mode=design&t=LE3IFLELwIooNGLJ-0",
    },
  },
  args: {},
};

export default meta;

export const Default: Story = {
  args: {},
};
