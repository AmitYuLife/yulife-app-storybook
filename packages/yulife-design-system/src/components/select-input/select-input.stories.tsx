import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { fn } from "storybook/test";
import { InteractionStateGrid, InteractionStateRow } from "@storybook/interaction-states";
import { SelectInput } from ".";

const meta: Meta<typeof SelectInput> = {
  title: "Inputs/SelectInput",
  component: SelectInput,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "YuLife design system component from `@yulife-private/design-system`.",
      },
    },
  },
  args: {
    label: "Health provider",
    options: [
      { label: "Apple Health", value: "apple" },
      { label: "Google Fit", value: "google" },
    ],
    value: "apple",
    onChange: fn(),
  },
};

export default meta;
type Story = StoryObj<typeof SelectInput>;

export const Default: Story = {
  args: {
    label: "Health provider",
    options: [
      { label: "Apple Health", value: "apple" },
      { label: "Google Fit", value: "google" },
    ],
    value: "apple",
    onChange: fn(),
  },
};

export const Disabled: Story = {
  args: {
    label: "Reward category",
    placeholder: "Choose a category",
    disabled: true,
    options: [
      { label: "Fitness", value: "fitness" },
      { label: "Mindfulness", value: "mindfulness" },
    ],
    value: "fitness",
    onChange: fn(),
  },
};

export const InteractionStates: Story = {
  render: () => (
    <InteractionStateGrid minWidth={320}>
      <InteractionStateRow label="Default">
        <SelectInput
          label="Health provider"
          options={[
            { label: "Apple Health", value: "apple" },
            { label: "Google Fit", value: "google" },
          ]}
          value="apple"
          onChange={fn()}
        />
      </InteractionStateRow>
      <InteractionStateRow label="Focus">
        <SelectInput
          label="Health provider"
          options={[
            { label: "Apple Health", value: "apple" },
            { label: "Google Fit", value: "google" },
          ]}
          value="apple"
          onChange={fn()}
          data-state="focus"
        />
      </InteractionStateRow>
      <InteractionStateRow label="Error">
        <SelectInput
          label="Health provider"
          options={[{ label: "Apple Health", value: "apple" }]}
          value="apple"
          errorMessage="Provider unavailable in your region"
          onChange={fn()}
        />
      </InteractionStateRow>
      <InteractionStateRow label="Disabled">
        <SelectInput
          label="Health provider"
          options={[{ label: "Apple Health", value: "apple" }]}
          value="apple"
          disabled={true}
          onChange={fn()}
        />
      </InteractionStateRow>
    </InteractionStateGrid>
  ),
};

export const Playground: Story = {};
