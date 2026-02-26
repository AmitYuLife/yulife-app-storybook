import type { Meta, StoryObj } from "@storybook/react-webpack5";
import HealthProviderItem from "./health-provider-item";
import { HealthProvider } from "@yu-life/react-native-yu-health";

const meta: Meta<typeof HealthProviderItem> = {
  title: "Design System/Organisms/HealthProviderItem",
  component: HealthProviderItem,
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

type Story = StoryObj<typeof HealthProviderItem>;

export const Default: Story = {
  args: {
    provider: HealthProvider.googleFit,
  },
};
