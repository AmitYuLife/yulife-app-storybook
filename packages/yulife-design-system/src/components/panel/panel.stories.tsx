import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { Panel } from ".";

const meta: Meta<typeof Panel> = {
  title: "Layout/Panel",
  component: Panel,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "YuLife design system component from `@yulife-private/design-system`.",
      },
    },
  },
  args: { children: "Panel content", padding: 24 },
};

export default meta;
type Story = StoryObj<typeof Panel>;

export const Default: Story = {
  args: { children: "Panel content", padding: 24 },
};

export const Playground: Story = {};
