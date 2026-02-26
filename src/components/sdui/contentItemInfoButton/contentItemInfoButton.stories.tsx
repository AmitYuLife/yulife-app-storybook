import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { ContentItemInfoButton } from "./contentItemInfoButton";

type Story = StoryObj<typeof ContentItemInfoButton>;

const meta: Meta<typeof ContentItemInfoButton> = {
  component: ContentItemInfoButton,
  title: "Design System/SDUI/ContentItemInfoButton",
  tags: ["autodocs"],
  parameters: {},
  args: {
    id: "contact-details",
    label: "Add contact details",

    active: {
      label: "Contact details",
      leftIcon: {
        id: "leftIcon",
        uri: "https://yulife-local.imgix.net/duotone/contact-details-passive.svg?ixlib=js-3.2.1&w=344&h=370&s=52e07cfa7bb04d412feee97ed28174b1",
      },
      rightIcon: {
        id: "rightIcon",
        uri: "https://yulife-develop.imgix.net/content/icons/right_arrow.svg?ixlib=js-3.2.1&fit=clip&fm=png&s=da1b43660785c6b3a238491409ed856c",
      },
    },

    infoBtnRightIcon: {
      id: "infoBtnRightIcon",
      uri: "https://yulife-develop.imgix.net/content/icons/right_arrow.svg?ixlib=js-3.2.1&fit=clip&fm=png&s=da1b43660785c6b3a238491409ed856c",
    },
    infoBtnLeftIcon: {
      id: "infoBtnLeftIcon",
      uri: "https://yulife-local.imgix.net/duotone/contact-details-active.svg?ixlib=js-3.2.1&w=344&h=370&s=6fc7f4ae110bb30e53af6efa6e8cc0d9",
    },
    onPress: null,
    additionalInfo: "Additional info",
    disabled: false,
    isLoading: false,
  },
};

export default meta;

export const Default: Story = {
  args: {},
};
