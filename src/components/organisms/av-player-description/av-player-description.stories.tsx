import type { Meta, StoryObj } from "@storybook/react-webpack5";
import AvPlayerDescription from "./av-player-description";

const meta: Meta<typeof AvPlayerDescription> = {
  component: AvPlayerDescription,
  title: "Design System/Organisms/AvPlayerDescription",
  tags: ["autodocs"],
  parameters: {
    design: {
      type: "figma",
      url: "figma url",
    },
  },
  args: {
    description:
      "Compassion - You will try to understand any feelings that arise, and show both yourself and others compassion, kindness and welcome.",
    duration: 282, //seconds
    logo: "https://yu-local-global-assets.imgix.net/logos/meditopia-logo-icon-with-bg.png?ixlib=js-3.2.1&fit=clip&fm=png&s=4e5bf8253775742919e6fb708334d0ed",
    stars: 2,
    subtitle: "Meditation",
    tag: null,
    title: "Compassion",
    yuCoin: 4,
  },
};

export default meta;
type Story = StoryObj<typeof AvPlayerDescription>;

export const Default: Story = {
  args: {},
};
