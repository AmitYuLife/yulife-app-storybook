import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { AvPlayerDescription } from ".";

const meta: Meta<typeof AvPlayerDescription> = {
  title: "Media/AvPlayerDescription",
  component: AvPlayerDescription,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "YuLife design system component from `@yulife-private/design-system`.",
      },
    },
  },
  args: {
    title: "Mindful breathing",
    description: "A 5-minute session to reset between meetings.",
    yuCoin: 10,
    logo: "https://placehold.co/48x48/png",
    duration: 300,
    stars: 4,
  },
};

export default meta;
type Story = StoryObj<typeof AvPlayerDescription>;

export const Default: Story = {
  args: {
    title: "Mindful breathing",
    description: "A 5-minute session to reset between meetings.",
    yuCoin: 10,
    logo: "https://placehold.co/48x48/png",
    duration: 300,
    stars: 4,
  },
};

export const Playground: Story = {};
