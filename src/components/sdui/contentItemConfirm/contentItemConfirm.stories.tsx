import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { ContentItemConfirm } from "./contentItemConfirm";
import { ContentItemConfirmCheckboxType } from "@graphql/__generated";

type Story = StoryObj<typeof ContentItemConfirm>;

const meta: Meta<typeof ContentItemConfirm> = {
  component: ContentItemConfirm,
  title: "Design System/SDUI/ContentItemConfirm",
  tags: ["autodocs"],
  parameters: {},
  args: {
    id: "declaration_confirmation-1",
    confirmLabel: "I have read and agreed to the above statements.",
    styles: [
      { property: "backgroundColor", value: "#FAFAFE" },
      { property: "borderWidth", value: "1" },
      { property: "borderRadius", value: "8" },
      { property: "borderColor", value: "#ABABAD" },
    ],
    checkboxType: ContentItemConfirmCheckboxType.Cubic,
    answerKey: "answerKey",
    checked: true,
  },
};

export default meta;

export const Default: Story = {
  args: {},
};
