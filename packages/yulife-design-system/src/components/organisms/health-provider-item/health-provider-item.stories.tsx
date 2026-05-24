import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { fn } from "storybook/test";
import { InteractionStateGrid, InteractionStateRow } from "@storybook/interaction-states";
import { HealthProviderItem } from ".";

const meta: Meta<typeof HealthProviderItem> = {
  title: "Inputs/HealthProviderItem",
  component: HealthProviderItem,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "YuLife design system component from `@yulife-private/design-system`.",
      },
    },
  },
  args: {
    provider: "apple_health",
    label: "Apple Health",
    isRecommended: true,
    onPress: fn(),
  },
};

export default meta;
type Story = StoryObj<typeof HealthProviderItem>;

export const Default: Story = {
  args: {
    provider: "apple_health",
    label: "Apple Health",
    isRecommended: true,
    onPress: fn(),
  },
};

export const InteractionStates: Story = {
  render: () => (
    <InteractionStateGrid minWidth={360}>
      <InteractionStateRow label="Default">
        <HealthProviderItem provider="apple_health" label="Apple Health" isRecommended={true} onPress={fn()} />
      </InteractionStateRow>
      <InteractionStateRow label="Pressed">
        <HealthProviderItem
          provider="apple_health"
          label="Apple Health"
          isRecommended={true}
          onPress={fn()}
          data-state="pressed"
        />
      </InteractionStateRow>
      <InteractionStateRow label="Optional">
        <HealthProviderItem provider="google_fit" label="Google Fit" onPress={fn()} />
      </InteractionStateRow>
    </InteractionStateGrid>
  ),
};

export const Playground: Story = {};
