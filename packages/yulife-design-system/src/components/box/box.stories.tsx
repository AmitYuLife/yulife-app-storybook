import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { Box } from ".";

const meta: Meta<typeof Box> = {
  title: "Layout/Box",
  component: Box,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "YuLife design system component from `@yulife-private/design-system`.",
      },
    },
  },
  args: { children: "Box content", p: 16, bg: "#FFFFFF", br: 12 },
};

export default meta;
type Story = StoryObj<typeof Box>;

export const Default: Story = {
  args: { children: "Box content", p: 16, bg: "#FFFFFF", br: 12 },
};

export const Playground: Story = {};
