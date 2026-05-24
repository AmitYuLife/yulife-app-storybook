import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { fn } from "storybook/test";
import { InteractionStateGrid, InteractionStateRow } from "@storybook/interaction-states";
import { CheckBox } from ".";

const meta: Meta<typeof CheckBox> = {
  title: "Inputs/CheckBox",
  component: CheckBox,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "YuLife design system component from `@yulife-private/design-system`.",
      },
    },
  },
  args: { label: "Send me challenge reminders", checked: true, onChange: fn() },
};

export default meta;
type Story = StoryObj<typeof CheckBox>;

export const Default: Story = {
  args: { label: "Send me challenge reminders", checked: true, onChange: fn() },
};

export const Disabled: Story = {
  args: { label: "Send me challenge reminders", checked: true, disabled: true, onChange: fn() },
};

export const InteractionStates: Story = {
  render: () => (
    <InteractionStateGrid minWidth={280}>
      <InteractionStateRow label="Unchecked">
        <CheckBox label="Send me challenge reminders" checked={false} onChange={fn()} />
      </InteractionStateRow>
      <InteractionStateRow label="Checked">
        <CheckBox label="Send me challenge reminders" checked={true} onChange={fn()} />
      </InteractionStateRow>
      <InteractionStateRow label="Disabled (unchecked)">
        <CheckBox label="Send me challenge reminders" checked={false} disabled={true} onChange={fn()} />
      </InteractionStateRow>
      <InteractionStateRow label="Disabled (checked)">
        <CheckBox label="Send me challenge reminders" checked={true} disabled={true} onChange={fn()} />
      </InteractionStateRow>
    </InteractionStateGrid>
  ),
};

export const Playground: Story = {};
