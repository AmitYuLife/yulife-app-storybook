import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { InteractionStateGrid, InteractionStateRow } from "@storybook/interaction-states";
import { Colours } from "../../tokens/colours";
import { TextField } from ".";

const meta: Meta<typeof TextField> = {
  title: "Inputs/TextField",
  component: TextField,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "YuLife design system component from `@yulife-private/design-system`.",
      },
    },
  },
  args: { label: "Email address", placeholder: "you@company.com" },
};

export default meta;
type Story = StoryObj<typeof TextField>;

export const Default: Story = {
  args: { label: "Email address", placeholder: "you@company.com" },
};

export const InteractionStates: Story = {
  render: () => (
    <InteractionStateGrid minWidth={320}>
      <InteractionStateRow label="Inactive">
        <TextField label="Email address" placeholder="you@company.com" />
      </InteractionStateRow>
      <InteractionStateRow label="Focus">
        <TextField
          label="Email address"
          placeholder="you@company.com"
          inputStyle={{ borderColor: Colours.textInput.focus }}
        />
      </InteractionStateRow>
      <InteractionStateRow label="Filled">
        <TextField label="Email address" value="you@company.com" readOnly={true} />
      </InteractionStateRow>
      <InteractionStateRow label="Error">
        <TextField label="Email address" value="not-an-email" error="Enter a valid email address" readOnly={true} />
      </InteractionStateRow>
      <InteractionStateRow label="Disabled">
        <TextField label="Email address" placeholder="you@company.com" disabled={true} />
      </InteractionStateRow>
    </InteractionStateGrid>
  ),
};

export const Playground: Story = {};
