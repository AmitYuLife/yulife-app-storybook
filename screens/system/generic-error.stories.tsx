import type { Meta, StoryObj } from "@storybook/react-webpack5";
import GenericErrorScreen from "@screens/generic-error/generic-error.screen";
import { createScreenMeta } from "../_utils/screen-meta";
import { logAction } from "../_utils/mock-actions";

const meta = {
  title: "Screens/System/GenericError",
  ...createScreenMeta({
    title: "System/GenericError",
    description: [
      "Fallback error screen when an SDUI details page or similar screen fails to load.",
      "",
      "**When to use:** Recoverable fetch failures on detail screens — not for global offline (use `Offline`).",
      "**Commonly used with:** `GenericHeadingAbsolute`, `CentredScreen`.",
    ].join("\n"),
    component: GenericErrorScreen,
    screenPath: "src/components/screens/generic-error/generic-error.screen.tsx",
  }),
  argTypes: {
    onPressBack: {
      action: "go-back",
      description: "Navigate back or dismiss the failed screen.",
    },
  },
} satisfies Meta<typeof GenericErrorScreen>;

export default meta;
type Story = StoryObj<typeof GenericErrorScreen>;

export const Default: Story = {
  args: {
    onPressBack: logAction("go-back"),
  },
};

export const Playground: Story = {
  args: {
    onPressBack: logAction("go-back"),
  },
};
