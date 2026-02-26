import type { Meta, StoryObj } from "@storybook/react-webpack5";

import { FAKE_STATS } from "../../wrapped.constants";
import WrappedStage1Screen from "./wrapped-stage-1.screen";

const meta: Meta<typeof WrappedStage1Screen> = {
  component: WrappedStage1Screen,
  title: "Design System/Screens/Wrapped/WrappedStage1",
  tags: ["autodocs"],
  args: {
    nextStage: () => console.log("Next stage"),
    stats: FAKE_STATS,
  },
};

export default meta;
type Story = StoryObj<typeof WrappedStage1Screen>;

export const Default: Story = {
  args: {},
};
