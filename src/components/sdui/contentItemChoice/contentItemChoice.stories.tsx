import type { Meta, StoryObj } from "@storybook/react";
import { ContentItemChoice } from "./contentItemChoice";
import { withSduiProvider } from "@components/sdui/_context/SduiProvider";

type Story = StoryObj<typeof ContentItemChoice>;

const meta: Meta<typeof ContentItemChoice> = {
  component: withSduiProvider(ContentItemChoice),
  title: "Design System/SDUI/ContentItemChoice",
  tags: ["autodocs"],
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/Vg36NK75gqVcPBoP9HKRXT/Financial-Wellbeing-Spec?node-id=562-4009",
    },
  },
  args: {
    id: "choice_story",
    answerKey: "choice",
    choiceOptions: [
      {
        label: "Option 1",
        value: "option-1",
      },
      {
        label: "Option 2",
        value: "option-2",
      },
      {
        label: "Option 3",
        value: "option-3",
      },
    ],
    multiSelect: true,
    otherOption: {
      value: "other",
      label: "Enter another value",
    },
    styles: [],
    labelTextType: "b2",
    textStyles: [],
    rowStyles: [{ property: "marginTop", value: "10" }],
  },
};

export default meta;

export const CheckboxWithOther: Story = {
  args: {},
};

export const Checkbox: Story = {
  args: {
    otherOption: undefined,
  },
};

export const RadioWithOther: Story = {
  args: {
    multiSelect: false,
  },
};

export const Radio: Story = {
  args: {
    multiSelect: false,
    otherOption: undefined,
  },
};
