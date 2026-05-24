import type { Meta, StoryObj } from "@storybook/react-webpack5";
import PermissionsScreen from "@screens/member/permissions/permissions.screen";
import { HealthProvider, HealthProviderCapability } from "@yu-life/react-native-yu-health";
import { ROUTES } from "@navigation/constants";
import { createScreenMeta } from "../_utils/screen-meta";
import { logAction } from "../_utils/mock-actions";
import { MOCK_PERMISSIONS_CONNECTED, MOCK_PERMISSION_STATUSES } from "../_fixtures/mock-tier1";

const meta = {
  title: "Screens/Member/Permissions",
  ...createScreenMeta({
    title: "Member/Permissions",
    description: [
      "Health data permissions screen for connecting and managing health provider access.",
      "",
      "**When to use:** Onboarding gate or opened from Settings > Connections.",
      "**Commonly used with:** `HealthPermissionSection`, provider connect/switch CTAs.",
      "**Theme-aware:** Yes — connect button uses theme primary colour.",
    ].join("\n"),
    component: PermissionsScreen,
    route: ROUTES.permissions,
    screenPath: "src/components/screens/member/permissions/permissions.screen.tsx",
  }),
  argTypes: {
    activeProvider: {
      control: "select",
      options: [undefined, HealthProvider.healthConnect, HealthProvider.healthKit],
      description: "Currently connected health provider. Undefined shows the connect CTA.",
    },
    isLoading: { control: "boolean", description: "Shows loading state on permission request buttons." },
    permissions: { control: false, description: "Permission row config from `getPermissionsConfig(activeProvider)`." },
    onPermissionRequest: { action: "permission-request", description: "Requests a specific capability permission." },
    onLeftIconPress: { action: "back", description: "Navigates back." },
    onRightIconPress: { action: "info", description: "Opens the info tooltip." },
    onOpenSwitch: { action: "switch-provider", description: "Opens the health provider switcher modal." },
    onConnect: { action: "connect", description: "Initiates health provider connection flow." },
    permissionStatuses: {
      control: false,
      description: "Granted/denied status per capability for system and provider permissions.",
    },
  },
} satisfies Meta<typeof PermissionsScreen>;

export default meta;
type Story = StoryObj<typeof PermissionsScreen>;

const baseArgs = {
  activeProvider: undefined as HealthProvider | undefined,
  isLoading: false,
  permissions: [],
  onPermissionRequest: logAction("permission-request"),
  onLeftIconPress: logAction("back"),
  onRightIconPress: logAction("info"),
  onOpenSwitch: logAction("switch-provider"),
  onConnect: logAction("connect"),
  permissionStatuses: {
    systemPermissions: {},
    providerPermissions: {},
  },
};

export const NoProviderConnected: Story = { args: baseArgs };

export const HealthConnectConnected: Story = {
  args: {
    ...baseArgs,
    activeProvider: HealthProvider.healthConnect,
    permissions: MOCK_PERMISSIONS_CONNECTED,
    permissionStatuses: MOCK_PERMISSION_STATUSES,
  },
};

export const Loading: Story = {
  args: { ...baseArgs, isLoading: true },
};

export const PartialPermissionsGranted: Story = {
  args: {
    ...baseArgs,
    activeProvider: HealthProvider.healthConnect,
    permissions: MOCK_PERMISSIONS_CONNECTED,
    permissionStatuses: {
      systemPermissions: MOCK_PERMISSION_STATUSES.systemPermissions,
      providerPermissions: {
        ...MOCK_PERMISSION_STATUSES.providerPermissions,
        [HealthProviderCapability.STEP_COUNT]: false,
      },
    },
  },
};

export const Playground: Story = { args: baseArgs };
