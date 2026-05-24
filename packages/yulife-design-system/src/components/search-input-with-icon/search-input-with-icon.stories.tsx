import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { fn } from "storybook/test";
import { InteractionStateGrid, InteractionStateRow } from "@storybook/interaction-states";
import { Colours } from "../../tokens/colours";
import { SearchInputWithIcon } from ".";

const meta: Meta<typeof SearchInputWithIcon> = {
  title: "Inputs/SearchInputWithIcon",
  component: SearchInputWithIcon,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "YuLife design system component from `@yulife-private/design-system`.",
      },
    },
  },
  args: { placeholder: "Search rewards", value: "", onChange: fn() },
};

export default meta;
type Story = StoryObj<typeof SearchInputWithIcon>;

export const Default: Story = {
  args: { placeholder: "Search rewards", value: "", onChange: fn() },
};

export const InteractionStates: Story = {
  render: () => (
    <InteractionStateGrid minWidth={320}>
      <InteractionStateRow label="Default">
        <SearchInputWithIcon placeholder="Search rewards" value="" onChange={fn()} />
      </InteractionStateRow>
      <InteractionStateRow label="Focus">
        <SearchInputWithIcon
          placeholder="Search rewards"
          value=""
          onChange={fn()}
          style={{ borderColor: Colours.primary.p600 }}
        />
      </InteractionStateRow>
      <InteractionStateRow label="Filled">
        <SearchInputWithIcon placeholder="Search rewards" value="Step challenge" onChange={fn()} />
      </InteractionStateRow>
    </InteractionStateGrid>
  ),
};

export const Playground: Story = {};
