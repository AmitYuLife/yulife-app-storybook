import type { Meta, StoryObj } from "@storybook/react-webpack5";
import OfflineScreen from "@screens/offline/offline.screen";
import { ROUTES } from "@navigation/constants";
import { createScreenMeta } from "../_utils/screen-meta";
import { logAction } from "../_utils/mock-actions";

const meta = {
  title: "Screens/System/Offline",
  ...createScreenMeta({
    title: "System/Offline",
    description: [
      "Full-screen offline state shown when the app loses network connectivity.",
      "",
      "**When to use:** Blocking error state after failed API calls or connectivity checks.",
      "**Commonly used with:** `CentredScreen`, theme level background from `getTheme(level)`.",
    ].join("\n"),
    component: OfflineScreen,
    route: ROUTES.offline,
    screenPath: "src/components/screens/offline/offline.screen.tsx",
  }),
  argTypes: {
    level: {
      control: { type: "number", min: 1, max: 20, step: 1 },
      description: "Member level — drives theme colours via `getTheme(level)`.",
    },
    onPress: {
      action: "retry-connection",
      description: "Retry connectivity check. In the app this dispatches `checkConnection`.",
    },
  },
} satisfies Meta<typeof OfflineScreen>;

export default meta;
type Story = StoryObj<typeof OfflineScreen>;

export const Default: Story = {
  args: {
    level: 5,
    onPress: logAction("retry-connection"),
  },
};

export const DesertBiome: Story = {
  args: {
    // Level 101 → getCurrentWorld(101) = 2 (desert biome) on Earth planet.
    // Exercises the CentredScreen background path with a different webp asset.
    level: 101,
    onPress: logAction("retry-connection"),
  },
  parameters: {
    docs: {
      description: {
        story:
          "Offline screen with the desert world background (level 101+). Confirms `.webp` backgrounds render correctly via `CentredScreen`.",
      },
    },
  },
};

export const Playground: Story = {
  args: {
    level: 5,
    onPress: logAction("retry-connection"),
  },
};
