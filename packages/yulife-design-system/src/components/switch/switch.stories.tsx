import { useEffect, useState, type ComponentProps } from "react";
import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { fn } from "storybook/test";
import { InteractionStateGrid, InteractionStateRow } from "@storybook/interaction-states";
import { Colours } from "../../tokens/colours";
import { Switch } from ".";

const InteractiveSwitch = (args: ComponentProps<typeof Switch>) => {
  const [checked, setChecked] = useState(args.checked ?? false);

  useEffect(() => {
    if (args.checked !== undefined) {
      setChecked(args.checked);
    }
  }, [args.checked]);

  return (
    <Switch
      {...args}
      checked={checked}
      onChange={(event) => {
        setChecked(event.currentTarget.checked);
        args.onChange?.(event);
      }}
    />
  );
};

const meta: Meta<typeof Switch> = {
  title: "Inputs/Switch",
  component: Switch,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: [
          "On/off toggle for settings screens. Prefer `CheckBox` for boolean fields inside forms.",
          "",
          "**When to use:** Settings rows, notification preferences, feature flags.",
          "**When NOT to use:** Form consent checkboxes (`CheckBox`), mutually exclusive choices (`Radio`).",
          "",
          "Pass `checked` and `onChange` for controlled usage. Stories wrap the component with local state so the docs preview toggles interactively.",
        ].join("\n"),
      },
    },
  },
  argTypes: {
    label: {
      control: "text",
      description: "Accessible label rendered beside the track. Required for settings toggles.",
    },
    checked: {
      control: "boolean",
      description: "On/off state. Controlled — pair with `onChange` in app code.",
    },
    disabled: {
      control: "boolean",
      description: "Prevents interaction and applies 50% opacity to the row.",
    },
    size: {
      control: "select",
      options: ["small", "medium"],
      description: "`medium` (48×28 px track) matches the in-app React Native switch. `small` is for compact rows.",
    },
    activeColor: {
      control: "color",
      description: "Track colour when on. Defaults to brand pink (`Colours.primary.p600`).",
    },
    inactiveColor: {
      control: "color",
      description: "Track colour when off. Defaults to `rgb(230, 230, 230)` to match the app switch.",
    },
    onChange: { action: "change", description: "Called with the native change event when the user toggles." },
  },
  args: {
    label: "Push notifications",
    checked: true,
    onChange: fn(),
  },
  render: (args) => <InteractiveSwitch {...args} />,
};

export default meta;
type Story = StoryObj<typeof Switch>;

export const Default: Story = {
  args: {
    label: "Push notifications",
    checked: true,
  },
};

export const AllVariants: Story = {
  render: () => (
    <InteractionStateGrid minWidth={280}>
      <InteractionStateRow label="Medium · Off">
        <Switch label="Push notifications" checked={false} onChange={fn()} />
      </InteractionStateRow>
      <InteractionStateRow label="Medium · On">
        <Switch label="Push notifications" checked={true} onChange={fn()} />
      </InteractionStateRow>
      <InteractionStateRow label="Small · On">
        <Switch label="Compact toggle" checked={true} size="small" onChange={fn()} />
      </InteractionStateRow>
    </InteractionStateGrid>
  ),
};

export const Disabled: Story = {
  args: {
    label: "Push notifications",
    checked: true,
    disabled: true,
  },
};

export const InteractionStates: Story = {
  render: () => (
    <InteractionStateGrid minWidth={280}>
      <InteractionStateRow label="Off">
        <InteractiveSwitch label="Push notifications" checked={false} onChange={fn()} />
      </InteractionStateRow>
      <InteractionStateRow label="On">
        <InteractiveSwitch label="Push notifications" checked={true} onChange={fn()} />
      </InteractionStateRow>
      <InteractionStateRow label="Disabled (off)">
        <Switch label="Push notifications" checked={false} disabled={true} onChange={fn()} />
      </InteractionStateRow>
      <InteractionStateRow label="Disabled (on)">
        <Switch label="Push notifications" checked={true} disabled={true} onChange={fn()} />
      </InteractionStateRow>
    </InteractionStateGrid>
  ),
};

export const ThemeAware: Story = {
  args: {
    label: "Forest theme",
    checked: true,
    activeColor: Colours.world.forest,
  },
};

export const Playground: Story = {};
