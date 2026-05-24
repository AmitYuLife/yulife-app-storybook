import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { InfoIcon } from "../icon";
import { InfoCard } from ".";

const meta: Meta<typeof InfoCard> = {
  title: "Feedback/InfoCard",
  component: InfoCard,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "YuLife design system component from `@yulife-private/design-system`.",
      },
    },
  },
  args: {
    icon: <InfoIcon size={24} />,
    title: "Sync your steps",
    description: "Connect Apple Health to track activity automatically.",
  },
};

export default meta;
type Story = StoryObj<typeof InfoCard>;

export const Default: Story = {
  args: {
    icon: <InfoIcon size={24} />,
    title: "Sync your steps",
    description: "Connect Apple Health to track activity automatically.",
  },
};

export const Playground: Story = {};
