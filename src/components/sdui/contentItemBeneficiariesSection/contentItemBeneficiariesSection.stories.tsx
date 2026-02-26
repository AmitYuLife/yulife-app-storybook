import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { ContentItemBeneficiariesSection } from "./contentItemBeneficiariesSection";

type Story = StoryObj<typeof ContentItemBeneficiariesSection>;

const meta: Meta<typeof ContentItemBeneficiariesSection> = {
  component: ContentItemBeneficiariesSection,
  title: "Design System/SDUI/ContentItemBeneficiariesSection",
  tags: ["autodocs"],
  parameters: {},
  args: {},
};

export default meta;

export const Default: Story = {
  args: {},
};
