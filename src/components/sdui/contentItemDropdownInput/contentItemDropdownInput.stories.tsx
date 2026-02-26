import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { ContentItemDropdownInput } from "./contentItemDropdownInput";

type Story = StoryObj<typeof ContentItemDropdownInput>;

const meta: Meta<typeof ContentItemDropdownInput> = {
  component: ContentItemDropdownInput,
  title: "Design System/SDUI/ContentItemDropdownInput",
  tags: ["autodocs"],
  parameters: {},
  args: {
    answerKey: "sex",
    dropdownOptions: [
      { label: "Male", value: "male" },
      { label: "Female", value: "female" },
      { label: "Prefer not to say", value: "unknown" },
    ],
    heading: "Sex assigned at birth",
    id: "sex",
    selectInstruction: null,
    styles: null,
    validation: null,
  },
};

export default meta;

export const Default: Story = {
  args: {},
};
