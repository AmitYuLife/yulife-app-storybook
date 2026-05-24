import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { Hyperlink } from ".";

const meta: Meta<typeof Hyperlink> = {
  title: "Typography/Hyperlink",
  component: Hyperlink,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "YuLife design system component from `@yulife-private/design-system`.",
      },
    },
  },
  args: { title: "View reward terms", url: "#" },
};

export default meta;
type Story = StoryObj<typeof Hyperlink>;

export const Default: Story = {
  args: { title: "View reward terms", url: "#" },
};

export const Playground: Story = {};
