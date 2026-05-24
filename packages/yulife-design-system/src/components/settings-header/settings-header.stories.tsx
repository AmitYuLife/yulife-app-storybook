import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { SettingsHeader } from ".";

const meta: Meta<typeof SettingsHeader> = {
  title: "Navigation/SettingsHeader",
  component: SettingsHeader,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "YuLife design system component from `@yulife-private/design-system`.",
      },
    },
  },
  args: { title: "Account settings" },
};

export default meta;
type Story = StoryObj<typeof SettingsHeader>;

export const Default: Story = {
  args: { title: "Account settings" },
};

export const Playground: Story = {};
