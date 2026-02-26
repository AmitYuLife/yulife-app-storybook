import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { ContentItemDatePicker } from "./contentItemDatePicker";
import { ContentItemButtonSize } from "@graphql/__generated";

type Story = StoryObj<typeof ContentItemDatePicker>;

const meta: Meta<typeof ContentItemDatePicker> = {
  component: ContentItemDatePicker,
  title: "Design System/SDUI/ContentItemDatePicker",
  tags: ["autodocs"],
  parameters: {},
  args: {
    answerKey: "dateOfBirth",
    buttonLeftIcon: {
      id: "https://yulife-local.imgix.net/content/icons/birthday-cake.svg?ixlib=js-3.2.1&w=72&h=72&s=6db9d11c5b6419922427ad076c88961c",
      uri: "https://yulife-local.imgix.net/content/icons/birthday-cake.svg?ixlib=js-3.2.1&w=72&h=72&s=6db9d11c5b6419922427ad076c88961c",
    },
    buttonRightIcon: {
      id: "https://yulife-local.imgix.net/content/icons/edit.svg?ixlib=js-3.2.1&w=72&h=72&s=2f8ac0d34e654c5111c471fa75be4bed",
      uri: "https://yulife-local.imgix.net/content/icons/edit.svg?ixlib=js-3.2.1&w=72&h=72&s=2f8ac0d34e654c5111c471fa75be4bed",
    },
    buttonStyles: [{ property: "paddingHorizontal", value: "20" }],
    dateFormat: "YYYY-MM-DD",
    id: "dateOfBirth",
    initialDate: undefined,
    label: "Date of birth",
    labelWrapperStyles: [
      { property: "paddingHorizontal", value: "24" },
      { property: "paddingTop", value: "24" },
      { property: "paddingBottom", value: "16" },
    ],
    maxDate: "2023-09-28",
    minDate: "1903-09-28",
    onChange: () => null,
    pickerStyles: null,
    size: ContentItemButtonSize.Fill,
    styles: null,
    subLabel: null,
  },
};

export default meta;

export const Default: Story = {
  args: {},
};
