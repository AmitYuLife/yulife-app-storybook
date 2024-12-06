import type { Meta, StoryObj } from "@storybook/react";

import { FAKE_STATS } from "../../wrapped.constants";
import WrappedStagingScreen from "./wrapped-staging.screen";

const meta: Meta<typeof WrappedStagingScreen> = {
  component: WrappedStagingScreen,
  title: "Design System/Screens/Wrapped/WrappedStaging",
  tags: ["autodocs"],
  args: {
    nextStage: () => console.log("Next stage"),
    stats: FAKE_STATS,
  },
};

export default meta;
type Story = StoryObj<typeof WrappedStagingScreen>;

export const Default: Story = {
  args: {},
};
