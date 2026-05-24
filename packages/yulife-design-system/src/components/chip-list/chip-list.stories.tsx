import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { fn } from "storybook/test";
import { InteractionStateGrid, InteractionStateRow } from "@storybook/interaction-states";
import { Chip, ChipList } from ".";

const meta: Meta<typeof ChipList> = {
  title: "Inputs/ChipList",
  component: ChipList,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "YuLife design system component from `@yulife-private/design-system`.",
      },
    },
  },
  args: {
    chips: [
      { value: "fitness", label: "Fitness", onPress: fn() },
      { value: "mindfulness", label: "Mindfulness", isSelected: true, onPress: fn() },
    ],
  },
};

export default meta;
type Story = StoryObj<typeof ChipList>;

export const Default: Story = {
  args: {
    chips: [
      { value: "fitness", label: "Fitness", onPress: fn() },
      { value: "mindfulness", label: "Mindfulness", isSelected: true, onPress: fn() },
    ],
  },
};

export const InteractionStates: Story = {
  render: () => (
    <InteractionStateGrid minWidth={320}>
      <InteractionStateRow label="Unselected">
        <Chip value="fitness" label="Fitness" onPress={fn()} />
      </InteractionStateRow>
      <InteractionStateRow label="Selected">
        <Chip value="fitness" label="Fitness" isSelected={true} onPress={fn()} />
      </InteractionStateRow>
      <InteractionStateRow label="Pressed">
        <Chip value="fitness" label="Fitness" onPress={fn()} data-state="pressed" />
      </InteractionStateRow>
      <InteractionStateRow label="Disabled">
        <Chip value="fitness" label="Fitness" disabled={true} onPress={fn()} />
      </InteractionStateRow>
      <InteractionStateRow label="Chip list">
        <ChipList
          chips={[
            { value: "fitness", label: "Fitness", onPress: fn() },
            { value: "mindfulness", label: "Mindfulness", isSelected: true, onPress: fn() },
            { value: "sleep", label: "Sleep", onPress: fn() },
          ]}
        />
      </InteractionStateRow>
    </InteractionStateGrid>
  ),
};

export const Playground: Story = {};
