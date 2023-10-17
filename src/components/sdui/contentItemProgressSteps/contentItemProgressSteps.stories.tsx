import type { Meta, StoryObj } from "@storybook/react";
import { ContentItemProgressSteps } from "./contentItemProgressSteps";

type Story = StoryObj<typeof ContentItemProgressSteps>;

const meta: Meta<typeof ContentItemProgressSteps> = {
  component: ContentItemProgressSteps,
  title: "Design System/SDUI/ContentItemProgressSteps",
  tags: ["autodocs"],
  parameters: {},
  args: {
    currentStep: 2,
    numberOfSteps: 4,
    wrapperStyles: [{ property: "marginBottom", value: "30" }],
  },
};

export default meta;

export const Default: Story = {
  args: {},
};
