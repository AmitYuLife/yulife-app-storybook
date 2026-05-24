import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { fn } from "storybook/test";
import { InteractionStateGrid, InteractionStateRow } from "@storybook/interaction-states";
import { ShortCodeInput } from ".";

const meta: Meta<typeof ShortCodeInput> = {
  title: "Inputs/ShortCodeInput",
  component: ShortCodeInput,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "YuLife design system component from `@yulife-private/design-system`.",
      },
    },
  },
  args: {
    value: "",
    length: 6,
    onChange: fn(),
    onSubmit: fn(),
  },
};

export default meta;
type Story = StoryObj<typeof ShortCodeInput>;

export const Default: Story = {
  args: {
    value: "",
    length: 6,
    onChange: fn(),
    onSubmit: fn(),
  },
};

export const InteractionStates: Story = {
  render: () => (
    <InteractionStateGrid minWidth={320}>
      <InteractionStateRow label="Empty (active cell)">
        <ShortCodeInput value="" length={6} onChange={fn()} onSubmit={fn()} />
      </InteractionStateRow>
      <InteractionStateRow label="Partial">
        <ShortCodeInput value="AB12" length={6} onChange={fn()} onSubmit={fn()} />
      </InteractionStateRow>
      <InteractionStateRow label="Complete">
        <ShortCodeInput value="AB12CD" length={6} onChange={fn()} onSubmit={fn()} />
      </InteractionStateRow>
    </InteractionStateGrid>
  ),
};

export const Playground: Story = {};
