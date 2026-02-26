import type { Meta, StoryObj } from "@storybook/react-webpack5";
import HealthProviderActivities from "./health-provider-activities";
import { SupportedHealthTypes } from "@services/yuHealth/supported-health-types";

const meta: Meta<typeof HealthProviderActivities> = {
  component: HealthProviderActivities,
  title: "Design System/Molecules/HealthProviderActivities",
  tags: ["autodocs"],
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/jXTBhFJJiCN8IAXTmq4IZW/(L)-Google-Health-Connect?type=design&node-id=324-3739&mode=design&t=Q7DmiZVyumJqUBx6-0",
    },
  },
  args: {},
};

export default meta;
type Story = StoryObj<typeof HealthProviderActivities>;

export const Default: Story = {
  args: {
    supportedTypes: [SupportedHealthTypes.steps, SupportedHealthTypes.meditation],
  },
};
