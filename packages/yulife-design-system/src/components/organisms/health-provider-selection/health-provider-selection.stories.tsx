import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { fn } from "storybook/test";
import { InteractionStateGrid, InteractionStateRow } from "@storybook/interaction-states";
import { HealthProviderSelection } from ".";

const meta: Meta<typeof HealthProviderSelection> = {
  title: "Inputs/HealthProviderSelection",
  component: HealthProviderSelection,
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
    isSelected: true,
    isRecommended: true,
    onPress: fn(),
    supportedTypes: ["Steps", "Sleep", "Heart rate"],
  },
};

export default meta;
type Story = StoryObj<typeof HealthProviderSelection>;

export const Default: Story = {
  args: {
    provider: "apple_health",
    label: "Apple Health",
    isSelected: true,
    isRecommended: true,
    onPress: fn(),
    supportedTypes: ["Steps", "Sleep", "Heart rate"],
  },
};

export const InteractionStates: Story = {
  render: () => (
    <InteractionStateGrid minWidth={360}>
      <InteractionStateRow label="Unselected">
        <HealthProviderSelection provider="google_fit" label="Google Fit" isSelected={false} onPress={fn()} />
      </InteractionStateRow>
      <InteractionStateRow label="Selected">
        <HealthProviderSelection
          provider="apple_health"
          label="Apple Health"
          isSelected={true}
          isRecommended={true}
          onPress={fn()}
          supportedTypes={["Steps", "Sleep", "Heart rate"]}
        />
      </InteractionStateRow>
      <InteractionStateRow label="Pressed">
        <HealthProviderSelection
          provider="apple_health"
          label="Apple Health"
          isSelected={false}
          isRecommended={true}
          onPress={fn()}
          data-state="pressed"
        />
      </InteractionStateRow>
    </InteractionStateGrid>
  ),
};

export const Playground: Story = {};
