import type { Meta, StoryObj } from "@storybook/react-webpack5";
import MenuScreen from "@screens/member/menu/menu.screen";
import { ROUTES } from "@navigation/constants";
import { createScreenMeta } from "../_utils/screen-meta";
import { logAction, noop } from "../_utils/mock-actions";
import { MOCK_MENU_LINKS } from "../_fixtures/mock-tier1";

const meta = {
  title: "Screens/Member/Menu",
  ...createScreenMeta({
    title: "Member/Menu",
    description: [
      "Side drawer menu opened from the top-bar menu icon on every main tab.",
      "",
      "**When to use:** User taps the hamburger icon on Daily Steps, Quest Map, YuScreen, Leaderboard, or Rewards.",
      "**Commonly used with:** `TopBar`, `NavBar`, all bottom-tab root screens.",
      "**Theme-aware:** No — fixed menu styling.",
    ].join("\n"),
    component: MenuScreen,
    route: ROUTES.menu,
    screenPath: "src/components/screens/member/menu/menu.screen.tsx",
  }),
  argTypes: {
    links: {
      control: false,
      description:
        "Menu rows to render. Each item can be hidden via `condition: false`. `highlight: true` adds sparkle animation.",
    },
    onPressClose: { action: "close", description: "Closes the side drawer overlay." },
    onDebugPress: {
      control: false,
      description: "When non-null, shows a debug menu entry (dev builds only). Pass `null` in production stories.",
    },
    version: { control: "text", description: "App version string shown at the bottom of the menu." },
  },
} satisfies Meta<typeof MenuScreen>;

export default meta;
type Story = StoryObj<typeof MenuScreen>;

const baseArgs = {
  links: MOCK_MENU_LINKS,
  onPressClose: logAction("close"),
  onDebugPress: null,
  version: "4.2.1",
};

export const Default: Story = { args: baseArgs };

export const WithDebugMenu: Story = {
  args: {
    ...baseArgs,
    onDebugPress: logAction("debug"),
  },
};

export const WithReferralsHighlight: Story = {
  args: {
    ...baseArgs,
    links: MOCK_MENU_LINKS.map((link) => (link.label === "Invite a colleague" ? { ...link, highlight: true } : link)),
  },
};

export const MinimalLinks: Story = {
  args: {
    ...baseArgs,
    links: [
      { condition: true, label: "Settings", onPress: noop },
      { condition: true, label: "Log out", onPress: noop },
    ],
  },
};

export const Playground: Story = { args: baseArgs };
