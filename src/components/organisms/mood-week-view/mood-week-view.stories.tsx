import type { Meta, StoryObj } from "@storybook/react";
import MoodWeekView from "./mood-week-view";

const data = [
  {
    dayLabel: "Mon",
    iconUrl:
      "https://yulife-local.imgix.net/mood-monitor/emotions/happy.svg?ixlib=js-3.2.1&w=32&h=32&fit=clip&fm=png&dpr=1&s=bd028ba880399f4dc0ac14a18029b5e2",
  },
  {
    dayLabel: "Tue",
  },
  {
    dayLabel: "Wed",
    iconUrl:
      "https://yulife-local.imgix.net/mood-monitor/emotions/excited.svg?ixlib=js-3.2.1&w=32&h=32&fit=clip&fm=png&dpr=1&s=bd028ba880399f4dc0ac14a18029b5e2",
  },
  {
    dayLabel: "Thu",
    iconUrl:
      "https://yulife-local.imgix.net/mood-monitor/emotions/grateful.svg?ixlib=js-3.2.1&w=32&h=32&fit=clip&fm=png&dpr=1&s=bd028ba880399f4dc0ac14a18029b5e2",
  },
  {
    dayLabel: "Fri",
    iconUrl:
      "https://yulife-local.imgix.net/mood-monitor/emotions/grateful.svg?ixlib=js-3.2.1&w=32&h=32&fit=clip&fm=png&dpr=1&s=bd028ba880399f4dc0ac14a18029b5e2",
  },
  {
    dayLabel: "Sat",
  },
  {
    dayLabel: "Sun",
    iconUrl:
      "https://yulife-local.imgix.net/mood-monitor/emotions/grateful.svg?ixlib=js-3.2.1&w=32&h=32&fit=clip&fm=png&dpr=1&s=bd028ba880399f4dc0ac14a18029b5e2",
    isToday: true,
  },
];

const meta: Meta<typeof MoodWeekView> = {
  component: MoodWeekView,
  title: "Design System/Organisms/MoodView",
  tags: ["autodocs"],
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/bEJ8yKPTj2aWVhNxvoZC3e/-L--Pathways?node-id=4026-21502&m=dev",
    },
  },
  args: {
    data,
  },
};

export default meta;

type Story = StoryObj<typeof MoodWeekView>;

export const Default: Story = {
  args: {
    data,
  },
};
