import type { Meta, StoryObj } from "@storybook/react";
import { ContentItemProgressSteps } from "./contentItemProgressSteps";
import type { IProgressStepsProps } from "@molecules/progress-steps/progress-steps";

type Story = StoryObj<typeof ContentItemProgressSteps>;

const meta: Meta<typeof ContentItemProgressSteps> = {
  component: ContentItemProgressSteps,
  title: "Design System/SDUI/ContentItemProgressSteps",
  tags: ["autodocs"],
  parameters: {},
  args: {
    currentStep: 2,
    numberOfSteps: 4,
    wrapperStyles: [{ property: "marginBottom", value: "30" }] as IProgressStepsProps["wrapperStyles"],
  },
};

export default meta;

export const Default: Story = {
  args: {},
};
