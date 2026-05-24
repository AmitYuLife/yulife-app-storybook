import type { Meta, StoryObj } from "@storybook/react-webpack5";
import ToolsScreen from "@screens/member/tools/tools.screen";
import { ROUTES } from "@navigation/constants";
import { createScreenMeta } from "../_utils/screen-meta";
import { logAction } from "../_utils/mock-actions";

const meta = {
  title: "Screens/Member/Tools",
  ...createScreenMeta({
    title: "Member/Tools",
    description: [
      "Internal developer tools screen for querying FitKit sample data. Hidden from production users.",
      "",
      "**When to use:** Opened from the debug menu in dev/staging builds.",
      "**Commonly used with:** `ScrollPickerModal`, `DateTimePicker`, FitKit query helpers.",
      "**Theme-aware:** No.",
      "**Redux:** Reads `getUserFeatures` for cycling activity types.",
    ].join("\n"),
    component: ToolsScreen,
    route: ROUTES.tools,
    screenPath: "src/components/screens/member/tools/tools.screen.tsx",
  }),
  argTypes: {
    onClose: { action: "close", description: "Closes the tools screen." },
  },
} satisfies Meta<typeof ToolsScreen>;

export default meta;
type Story = StoryObj<typeof ToolsScreen>;

const baseArgs = {
  onClose: logAction("close"),
};

export const Default: Story = { args: baseArgs };

export const Playground: Story = { args: baseArgs };
