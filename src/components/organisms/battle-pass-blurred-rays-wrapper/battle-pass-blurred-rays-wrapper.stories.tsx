import type { Meta, StoryObj } from "@storybook/react";
import BattlePassBlurredRaysWrapper from "./battle-pass-blurred-rays-wrapper";
import { Text } from "react-native";

const meta: Meta<typeof BattlePassBlurredRaysWrapper> = {
  component: BattlePassBlurredRaysWrapper,
  title: "Design System/organisms/BattlePassBlurredRaysWrapper",
  tags: ["autodocs"],
  parameters: {
    design: {
      type: "figma",
      url: "figma url",
    },
  },
  args: {
    children: <Text>Some children</Text>,
  },
};

export default meta;
type Story = StoryObj<typeof BattlePassBlurredRaysWrapper>;

export const Default: Story = {
  args: {
    children: <Text>Hehehe</Text>,
  },
};
