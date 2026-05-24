import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { InteractionStateGrid, InteractionStateRow } from "@storybook/interaction-states";
import { ArrowButton } from ".";

const meta: Meta<typeof ArrowButton> = {
  title: "Inputs/ArrowButton",
  component: ArrowButton,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "YuLife design system component from `@yulife-private/design-system`.",
      },
    },
  },
  args: { direction: "right", "aria-label": "Next" },
};

export default meta;
type Story = StoryObj<typeof ArrowButton>;

export const Default: Story = {
  args: { direction: "right", "aria-label": "Next" },
};

export const InteractionStates: Story = {
  render: () => (
    <InteractionStateGrid minWidth={240}>
      <InteractionStateRow label="Default">
        <ArrowButton intent="primary" direction="right" aria-label="Next" />
      </InteractionStateRow>
      <InteractionStateRow label="Pressed">
        <ArrowButton intent="primary" direction="right" aria-label="Next" data-state="pressed" />
      </InteractionStateRow>
      <InteractionStateRow label="Disabled">
        <ArrowButton intent="primary" direction="right" aria-label="Next" disabled={true} />
      </InteractionStateRow>
      <InteractionStateRow label="Secondary">
        <ArrowButton intent="secondary" direction="right" aria-label="Next" />
      </InteractionStateRow>
    </InteractionStateGrid>
  ),
};

export const Playground: Story = {};
