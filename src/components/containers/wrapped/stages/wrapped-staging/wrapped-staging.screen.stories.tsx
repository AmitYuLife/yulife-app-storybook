import type { Meta, StoryObj } from "@storybook/react-webpack5";

import WrappedStagingScreen from "./wrapped-staging.screen";

const meta: Meta<typeof WrappedStagingScreen> = {
  component: WrappedStagingScreen,
  title: "Design System/Screens/Wrapped/WrappedStaging",
  tags: ["autodocs"],
  args: {},
};

export default meta;
type Story = StoryObj<typeof WrappedStagingScreen>;

export const Default: Story = {
  args: {},
};
