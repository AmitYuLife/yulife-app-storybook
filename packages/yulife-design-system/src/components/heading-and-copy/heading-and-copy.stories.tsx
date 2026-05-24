import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { HeadingAndCopy } from ".";

const meta: Meta<typeof HeadingAndCopy> = {
  title: "Typography/HeadingAndCopy",
  component: HeadingAndCopy,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "YuLife design system component from `@yulife-private/design-system`.",
      },
    },
  },
  args: { title: "Weekly step challenge", body: "Walk 70,000 steps this week to unlock a bonus reward." },
};

export default meta;
type Story = StoryObj<typeof HeadingAndCopy>;

export const Default: Story = {
  args: { title: "Weekly step challenge", body: "Walk 70,000 steps this week to unlock a bonus reward." },
};

export const Playground: Story = {};
