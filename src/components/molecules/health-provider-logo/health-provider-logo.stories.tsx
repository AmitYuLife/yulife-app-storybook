import type { Meta, StoryObj } from "@storybook/react-webpack5";
import HealthProviderLogo from "./health-provider-logo";
import { HealthProvider } from "@yu-life/react-native-yu-health";

const meta: Meta<typeof HealthProviderLogo> = {
  title: "Design System/Molecules/HealthProviderLogo",
  component: HealthProviderLogo,
  tags: ["autodocs"],
  parameters: {
    design: {
      type: "figma",
      url: "",
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

type Story = StoryObj<typeof HealthProviderLogo>;

export const Default: Story = {
  args: {
    provider: HealthProvider.googleFit, // Default provider
  },
};
