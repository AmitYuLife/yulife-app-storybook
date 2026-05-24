import type { Meta, StoryObj } from "@storybook/react-webpack5";
import NotificationsScreen from "@components/containers/member/notifications/notifications.screen";
import { ROUTES } from "@navigation/constants";
import { createScreenMeta } from "../_utils/screen-meta";
import { logAction } from "../_utils/mock-actions";
import { MOCK_NOTIFICATIONS } from "../_fixtures/mock-tier1";

const meta = {
  title: "Screens/Member/Notifications",
  ...createScreenMeta({
    title: "Member/Notifications",
    description: [
      "Notification centre listing inbox messages grouped by Today and Last 7 days.",
      "",
      "**When to use:** Opened from the bell icon on any main tab top bar.",
      "**Commonly used with:** `NotificationItem`, `NotificationsEmpty`, `GenericHeadingAbsolute`.",
      "**Theme-aware:** No.",
    ].join("\n"),
    component: NotificationsScreen,
    route: ROUTES.notifications,
    screenPath: "src/components/containers/member/notifications/notifications.screen.tsx",
  }),
  argTypes: {
    onClose: { action: "close", description: "Closes the notification centre." },
    notifications: { control: false, description: "Inbox messages from the API, sorted by delivery timestamp." },
    isInitialized: {
      control: "boolean",
      description: "When false, shows loading skeleton. When true with empty array, shows empty state.",
    },
    onRefresh: { action: "refresh", description: "Pull-to-refresh handler." },
    onOpen: { action: "open", description: "Opens a notification deep link when a row is tapped." },
    maximumAgeOfMessageInDays: {
      control: "number",
      description: "Messages older than this are filtered out. Shown in the list footer.",
    },
  },
} satisfies Meta<typeof NotificationsScreen>;

export default meta;
type Story = StoryObj<typeof NotificationsScreen>;

const baseArgs = {
  onClose: logAction("close"),
  notifications: MOCK_NOTIFICATIONS,
  isInitialized: true,
  onRefresh: logAction("refresh"),
  onOpen: logAction("open"),
  maximumAgeOfMessageInDays: 30,
};

export const Default: Story = { args: baseArgs };

export const Loading: Story = {
  args: { ...baseArgs, isInitialized: false, notifications: [] },
};

export const Empty: Story = {
  args: { ...baseArgs, notifications: [] },
};

export const UnreadOnly: Story = {
  args: {
    ...baseArgs,
    notifications: MOCK_NOTIFICATIONS.filter((n) => !n.isRead),
  },
};

export const Playground: Story = { args: baseArgs };
