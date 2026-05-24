import type { Meta, StoryObj } from "@storybook/react-webpack5";
import NoAccessScreen from "@screens/no-access/no-access.screen";
import { ROUTES } from "@navigation/constants";
import { createScreenMeta } from "../_utils/screen-meta";

const meta = {
  title: "Screens/System/NoAccess",
  ...createScreenMeta({
    title: "System/NoAccess",
    description: [
      "Blocking screen shown when the signed-in member has no product access.",
      "",
      "**When to use:** Root-level gate before the member zone loads.",
      "**Props:** None — copy comes from Tolgee translation keys.",
    ].join("\n"),
    component: NoAccessScreen,
    route: ROUTES.noAccess,
    screenPath: "src/components/screens/no-access/no-access.screen.tsx",
  }),
} satisfies Meta<typeof NoAccessScreen>;

export default meta;
type Story = StoryObj<typeof NoAccessScreen>;

export const Default: Story = {};

export const Playground: Story = {};
