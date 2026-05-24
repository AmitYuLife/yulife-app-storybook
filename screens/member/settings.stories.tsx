import type { Meta, StoryObj } from "@storybook/react-webpack5";
import SettingsScreen from "@screens/member/settings/settings.screen";
import { DistanceMeasurementType } from "@graphql/__generated";
import { ROUTES } from "@navigation/constants";
import { createScreenMeta } from "../_utils/screen-meta";
import { logAction, noop } from "../_utils/mock-actions";
import { MOCK_SETTINGS_CONNECTIONS, MOCK_SETTINGS_NOTIFICATIONS } from "../_fixtures/mock-tier1";

const meta = {
  title: "Screens/Member/Settings",
  ...createScreenMeta({
    title: "Member/Settings",
    description: [
      "App settings screen with grouped sections for notifications, health connections, and game preferences.",
      "",
      "**When to use:** Opened from the side menu or deep-linked from onboarding prompts.",
      "**Commonly used with:** `SettingsHeader`, `NotificationsItem`, `ConnectionsItem`, `GameSettingsItem`.",
      "**Theme-aware:** No.",
    ].join("\n"),
    component: SettingsScreen,
    route: ROUTES.settings,
    screenPath: "src/components/screens/member/settings/settings.screen.tsx",
  }),
  argTypes: {
    onPressClose: { action: "close", description: "Closes the settings screen (back navigation)." },
    sections: {
      control: false,
      description:
        "Ordered list of setting sections. Each section has a `name` key (`notifications`, `connections`, `gameSettings`, etc.) that selects the renderer.",
    },
  },
} satisfies Meta<typeof SettingsScreen>;

export default meta;
type Story = StoryObj<typeof SettingsScreen>;

const defaultSections = [
  {
    name: "notifications",
    isVisible: true,
    title: "Push notifications",
    items: MOCK_SETTINGS_NOTIFICATIONS,
  },
  {
    name: "connections",
    isVisible: true,
    title: "Connections",
    items: MOCK_SETTINGS_CONNECTIONS,
  },
  {
    name: "gameSettings",
    isVisible: true,
    title: "Game settings",
    items: [
      {
        isVisible: true,
        title: "Cycling measurement",
        description: "Choose kilometres or miles for cycling challenges.",
        value: DistanceMeasurementType.Km,
        onPress: noop,
        type: "screen" as const,
      },
    ],
  },
];

const baseArgs = {
  onPressClose: logAction("close"),
  sections: defaultSections,
};

export const Default: Story = { args: baseArgs };

export const NotificationsOnly: Story = {
  args: {
    ...baseArgs,
    sections: [defaultSections[0]],
  },
};

export const ConnectionsDisconnected: Story = {
  args: {
    ...baseArgs,
    sections: [
      {
        name: "connections",
        isVisible: true,
        title: "Connections",
        items: MOCK_SETTINGS_CONNECTIONS.map((item) =>
          item.name === "appleHealth" ? { ...item, isConnected: false, lastUpdated: undefined } : item
        ),
      },
    ],
  },
};

export const WithTimedNotification: Story = {
  args: {
    ...baseArgs,
    sections: [
      {
        name: "notifications",
        isVisible: true,
        title: "Push notifications",
        items: [
          {
            ...MOCK_SETTINGS_NOTIFICATIONS[0],
            minutesFromStartOfDay: 480,
            onTimePress: logAction("time-press"),
          },
        ],
      },
    ],
  },
};

export const EmptySections: Story = {
  args: {
    ...baseArgs,
    sections: [],
  },
};

export const Playground: Story = { args: baseArgs };
