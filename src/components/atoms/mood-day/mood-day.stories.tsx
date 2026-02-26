import type { Meta, StoryObj } from "@storybook/react-webpack5";
import MoodDay from "./mood-day";

const meta: Meta<typeof MoodDay> = {
  component: MoodDay,
  title: "Design System/Atoms/MoodDay",
  tags: ["autodocs"],
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/bEJ8yKPTj2aWVhNxvoZC3e/Pathways---Spec?node-id=2035-19257&m=dev",
    },
  },
  args: {
    day: 1,
  },
};

export default meta;
type Story = StoryObj<typeof MoodDay>;

export const DayWithoutMood: Story = {
  args: {
    day: 15,
  },
};

export const DayWithMood: Story = {
  args: {
    day: 20,
    moodImage:
      "https://yulife-develop.imgix.net/mood-monitor/emotions/grateful.svg?ixlib=js-3.2.1&w=64&h=64&s=354b630f7f2f5aad37dd9dc87268ddb5",
  },
};

export const Today: Story = {
  args: {
    day: 25,
    moodImage:
      "https://yulife-develop.imgix.net/mood-monitor/emotions/grateful.svg?ixlib=js-3.2.1&w=64&h=64&s=354b630f7f2f5aad37dd9dc87268ddb5",
    isToday: true,
  },
};
