import type { Meta, StoryObj } from "@storybook/react-webpack5";
import YuCoinPowerCard from "./yucoin-power-card";

const meta: Meta<typeof YuCoinPowerCard> = {
  component: YuCoinPowerCard,
  title: "Design System/Molecules/YuCoinPowerCard",
  tags: ["autodocs"],
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/3Y8jBCXbu2ciaYazC9Ws6r/YuCoin-Power-modal?type=design&node-id=524-41620&mode=design&t=Hu0xAznQgeQ7Cyrl-4",
    },
  },
  args: {},
};

export default meta;
type Story = StoryObj<typeof YuCoinPowerCard>;

export const Default: Story = {
  args: {},
};

export const Selected: Story = {
  args: {
    isPoweredUp: true,
  },
};
