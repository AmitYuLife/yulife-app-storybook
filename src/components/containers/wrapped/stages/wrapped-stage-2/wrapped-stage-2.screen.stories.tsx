import type { Meta, StoryObj } from "@storybook/react";

import WrappedStage2Screen from "./wrapped-stage-2.screen";
import { FAKE_STATS } from "../../wrapped.constants";

const meta: Meta<typeof WrappedStage2Screen> = {
  component: WrappedStage2Screen,
  title: "Design System/Screens/Wrapped/WrappedStage2",
  tags: ["autodocs"],
  args: {
    nextStage: () => console.log("Next stage"),
    stats: FAKE_STATS,
  },
};

export default meta;
type Story = StoryObj<typeof WrappedStage2Screen>;

export const Default: Story = {
  args: {},
};
