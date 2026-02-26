import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { ContentItemChoice } from "./contentItemChoice";
import { withSduiProvider } from "@components/sdui/_context/SduiProvider";
import { ContentItemChoiceDesign } from "@graphql/__generated";

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
    alignTop: false,
    otherOption: {
      value: "other",
      label: "Enter another value",
    },
    design: ContentItemChoiceDesign.Default,
    styles: [],
    labelTextType: "b2",
    textStyles: [],
    rowStyles: [{ property: "marginTop", value: "10" }],
  },
  argTypes: {
    design: {
      options: [0, 1],
      mapping: [ContentItemChoiceDesign.Default, ContentItemChoiceDesign.Native],
      control: {
        type: "select",
        labels: ["default", "native"],
      },
      defaultValue: ContentItemChoiceDesign.Default,
    },
  },
};

export default meta;

export const CheckboxWithOther: Story = {
  args: {},
};

export const RadioWithOther: Story = {
  args: {
    multiSelect: false,
  },
};

export const NativeRadioWithOther: Story = {
  args: {
    design: ContentItemChoiceDesign.Native,
    multiSelect: false,
  },
};
