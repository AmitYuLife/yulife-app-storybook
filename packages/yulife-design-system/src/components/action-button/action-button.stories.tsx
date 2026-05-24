import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { fn } from "storybook/test";
import { InteractionStateGrid, InteractionStateRow } from "@storybook/interaction-states";
import { StarIcon } from "../icon";
import { ActionButton } from ".";

const meta: Meta<typeof ActionButton> = {
  title: "Inputs/ActionButton",
  component: ActionButton,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "YuLife design system component from `@yulife-private/design-system`.",
      },
    },
  },
  args: {
    icon: <StarIcon size={24} />,
    label: "Claim reward",
    onPress: fn(),
  },
};

export default meta;
type Story = StoryObj<typeof ActionButton>;

export const Default: Story = {
  args: {
    icon: <StarIcon size={24} />,
    label: "Claim reward",
    onPress: fn(),
  },
};

export const Disabled: Story = {
  args: {
    icon: <StarIcon size={24} />,
    label: "Claim reward",
    disabled: true,
    onPress: fn(),
  },
};

export const InteractionStates: Story = {
  render: () => (
    <InteractionStateGrid minWidth={320}>
      <InteractionStateRow label="Default">
        <ActionButton icon={<StarIcon size={24} />} label="Claim reward" onPress={fn()} />
      </InteractionStateRow>
      <InteractionStateRow label="Pressed">
        <ActionButton icon={<StarIcon size={24} />} label="Claim reward" onPress={fn()} data-state="pressed" />
      </InteractionStateRow>
      <InteractionStateRow label="Disabled">
        <ActionButton icon={<StarIcon size={24} />} label="Claim reward" disabled={true} onPress={fn()} />
      </InteractionStateRow>
    </InteractionStateGrid>
  ),
};

export const Playground: Story = {};
