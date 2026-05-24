import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { fn } from "storybook/test";
import { InteractionStateGrid, InteractionStateRow } from "@storybook/interaction-states";
import { Text } from "../text";
import { BoxOption } from ".";

const meta: Meta<typeof BoxOption> = {
  title: "Inputs/BoxOption",
  component: BoxOption,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "YuLife design system component from `@yulife-private/design-system`.",
      },
    },
  },
  args: {
    children: "Morning meditation",
    isSelected: false,
    onPress: fn(),
  },
};

export default meta;
type Story = StoryObj<typeof BoxOption>;

export const Default: Story = {
  args: {
    children: "Morning meditation",
    isSelected: false,
    onPress: fn(),
  },
};

export const Disabled: Story = {
  args: { children: "Weekly step goal", isSelected: false, disabled: true, onPress: fn() },
};

export const InteractionStates: Story = {
  render: () => (
    <InteractionStateGrid minWidth={320}>
      <InteractionStateRow label="Default">
        <BoxOption isSelected={false} onPress={fn()}>
          <Text type="b2">Morning meditation</Text>
        </BoxOption>
      </InteractionStateRow>
      <InteractionStateRow label="Selected">
        <BoxOption isSelected={true} onPress={fn()}>
          <Text type="b2">Morning meditation</Text>
        </BoxOption>
      </InteractionStateRow>
      <InteractionStateRow label="Pressed">
        <BoxOption isSelected={false} onPress={fn()} data-state="pressed">
          <Text type="b2">Morning meditation</Text>
        </BoxOption>
      </InteractionStateRow>
      <InteractionStateRow label="Disabled">
        <BoxOption isSelected={false} disabled={true} onPress={fn()}>
          <Text type="b2">Morning meditation</Text>
        </BoxOption>
      </InteractionStateRow>
    </InteractionStateGrid>
  ),
};

export const Playground: Story = {};
