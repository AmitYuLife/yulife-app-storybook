import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { fn } from "storybook/test";
import { InteractionStateGrid, InteractionStateRow } from "@storybook/interaction-states";
import { Radio } from ".";

const meta: Meta<typeof Radio> = {
  title: "Inputs/Radio",
  component: Radio,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "YuLife design system component from `@yulife-private/design-system`.",
      },
    },
  },
  args: { label: "Daily steps", checked: true, name: "activity", onChange: fn() },
};

export default meta;
type Story = StoryObj<typeof Radio>;

export const Default: Story = {
  args: { label: "Daily steps", checked: true, name: "activity", onChange: fn() },
};

export const InteractionStates: Story = {
  render: () => (
    <InteractionStateGrid minWidth={280}>
      <InteractionStateRow label="Unchecked">
        <Radio label="Daily steps" checked={false} name="activity-states" onChange={fn()} />
      </InteractionStateRow>
      <InteractionStateRow label="Checked">
        <Radio label="Daily steps" checked={true} name="activity-states" onChange={fn()} />
      </InteractionStateRow>
      <InteractionStateRow label="Disabled">
        <Radio label="Daily steps" checked={true} disabled={true} name="activity-states" onChange={fn()} />
      </InteractionStateRow>
    </InteractionStateGrid>
  ),
};

export const Playground: Story = {};
