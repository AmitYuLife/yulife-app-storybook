import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { fn } from "storybook/test";
import { LeaderboardNavigation } from ".";

const meta: Meta<typeof LeaderboardNavigation> = {
  title: "Navigation/LeaderboardNavigation",
  component: LeaderboardNavigation,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "YuLife design system component from `@yulife-private/design-system`.",
      },
    },
  },
  args: {
    tabs: [
      { key: "team", label: "Team", count: 24 },
      { key: "company", label: "Company", count: 156 },
    ],
    activeTab: "team",
    onTabChange: fn(),
  },
};

export default meta;
type Story = StoryObj<typeof LeaderboardNavigation>;

export const Default: Story = {
  args: {
    tabs: [
      { key: "team", label: "Team", count: 24 },
      { key: "company", label: "Company", count: 156 },
    ],
    activeTab: "team",
    onTabChange: fn(),
  },
};

export const Playground: Story = {};
