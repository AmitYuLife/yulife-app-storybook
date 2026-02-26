import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { ContentItemTextInput } from "./contentItemTextInput";
import { ContentItemFormTextInputType } from "@graphql/__generated";

type Story = StoryObj<typeof ContentItemTextInput>;

const meta: Meta<typeof ContentItemTextInput> = {
  component: ContentItemTextInput,
  title: "Design System/SDUI/ContentItemTextInput",
  tags: ["autodocs"],
  parameters: {},
  args: {
    heading: "Contact number",
    id: "phone",
    onChange: () => null,
    prefixValue: "+44",
    styles: [],
    type: ContentItemFormTextInputType.Number,
    validation: [
      {
        validationName: "Please enter a valid contact number",
        validationValue: "^(?:0|\\+?44)(?:\\d\\s?){9,10}$",
      },
    ],
    value: "",
  },
};

export default meta;

export const Default: Story = {
  args: {},
};
