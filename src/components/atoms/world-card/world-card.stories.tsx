import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { WorldCard } from "./world-card";

const meta: Meta<typeof WorldCard> = {
  component: WorldCard,
  title: "Design System/Atoms/WorldCard",
  tags: ["autodocs"],
  parameters: {},
  args: {},
};

export default meta;
type Story = StoryObj<typeof WorldCard>;

export const Default: Story = {};
