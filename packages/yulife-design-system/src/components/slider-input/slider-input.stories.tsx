import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { fn } from "storybook/test";
import { InteractionStateGrid, InteractionStateRow } from "@storybook/interaction-states";
import { SliderInput } from ".";

const meta: Meta<typeof SliderInput> = {
  title: "Inputs/SliderInput",
  component: SliderInput,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "YuLife design system component from `@yulife-private/design-system`.",
      },
    },
  },
  args: {
    value: 8000,
    min: 2000,
    max: 15000,
    leftLabel: "2,000",
    rightLabel: "15,000",
    onChange: fn(),
  },
};

export default meta;
type Story = StoryObj<typeof SliderInput>;

export const Default: Story = {
  args: {
    value: 8000,
    min: 2000,
    max: 15000,
    leftLabel: "2,000",
    rightLabel: "15,000",
    onChange: fn(),
  },
};

export const InteractionStates: Story = {
  render: () => (
    <InteractionStateGrid minWidth={320}>
      <InteractionStateRow label="Default">
        <SliderInput value={8000} min={2000} max={15000} leftLabel="2,000" rightLabel="15,000" onChange={fn()} />
      </InteractionStateRow>
      <InteractionStateRow label="Minimum">
        <SliderInput value={2000} min={2000} max={15000} leftLabel="2,000" rightLabel="15,000" onChange={fn()} />
      </InteractionStateRow>
      <InteractionStateRow label="Maximum">
        <SliderInput value={15000} min={2000} max={15000} leftLabel="2,000" rightLabel="15,000" onChange={fn()} />
      </InteractionStateRow>
    </InteractionStateGrid>
  ),
};

export const Playground: Story = {};
