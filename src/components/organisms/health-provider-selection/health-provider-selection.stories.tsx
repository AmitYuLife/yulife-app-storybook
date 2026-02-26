import type { Meta, StoryObj } from "@storybook/react-webpack5";
import HealthProviderSelection from "./health-provider-selection";
import { HealthProvider } from "@yu-life/react-native-yu-health";

const meta: Meta<typeof HealthProviderSelection> = {
  title: "Design System/Organisms/HealthProviderSelection",
  component: HealthProviderSelection,
  tags: ["autodocs"],
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/jXTBhFJJiCN8IAXTmq4IZW/(L)-Google-Health-Connect?type=design&node-id=495-12931&mode=design&t=UqTcltAp5aZ8bs0D-4",
    },
  },
  argTypes: {
    provider: {
      control: { type: "select" },
      options: Object.values(HealthProvider),
    },
  },
};

export default meta;

type Story = StoryObj<typeof HealthProviderSelection>;

export const Default: Story = {
  args: {
    provider: HealthProvider.googleFit,
    isSelected: false,
  },
};
