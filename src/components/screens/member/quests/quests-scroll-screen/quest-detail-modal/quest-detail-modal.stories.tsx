import type { Meta, StoryObj } from "@storybook/react";
import { QuestDetailModal } from "./quest-detail-modal.component";

type Story = StoryObj<typeof QuestDetailModal>;

const meta: Meta<typeof QuestDetailModal> = {
  component: QuestDetailModal,
  title: "Design System/Overlays/QuestDetailModal",
  tags: ["autodocs"],
  parameters: {},
  args: {},
};

export default meta;

export const Default: Story = {
  args: {},
};
