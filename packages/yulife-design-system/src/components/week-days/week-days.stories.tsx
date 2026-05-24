import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { WeekDays } from ".";

const meta: Meta<typeof WeekDays> = {
  title: "Navigation/WeekDays",
  component: WeekDays,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "YuLife design system component from `@yulife-private/design-system`.",
      },
    },
  },
  args: { activeDays: [0, 2, 4] },
};

export default meta;
type Story = StoryObj<typeof WeekDays>;

export const Default: Story = {
  args: { activeDays: [0, 2, 4] },
};

export const Playground: Story = {};
