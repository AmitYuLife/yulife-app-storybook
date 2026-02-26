import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { ContentItemAccordion } from "./contentItemAccordion";
import { SduiActionType } from "@graphql/__generated";

type Story = StoryObj<typeof ContentItemAccordion>;

const meta: Meta<typeof ContentItemAccordion> = {
  component: ContentItemAccordion,
  title: "Design System/SDUI/ContentItemAccordion",
  tags: ["autodocs"],
  parameters: {},
  args: {
    heading: "Heading",
    headerIcon: {
      id: "1",
      uri: "https://yulife-develop.imgix.net/content/icons/email.svg?ixlib=js-3.2.1&w=192&h=192&s=e0f9b5801e3cd35ea9467147e00947d1",
    },
    infoIcon: {
      id: "1",
      uri: "https://yulife-develop.imgix.net/content/icons/calendar.svg?ixlib=js-3.2.1&w=192&h=192&s=c3e1d3ba3d13033c3fc963e1b88420cf",
    },
    styles: [],
    items: [
      {
        leftText: "Left Text",
        rightTextBody: "Right Text Body",
        rightTextLabel: "Right Text Label",
        info: {
          onPress: { type: SduiActionType.OpenMyAccount, payload: "payload" },
        },
      },
      {
        leftText: "Left Text",
        rightTextBody: "Right Text Body",
        rightTextLabel: "Right Text Label",
        info: {
          onPress: { type: SduiActionType.OpenMyAccount, payload: "payload" },
        },
      },
      {
        leftText: "Left Text",
        rightTextBody: "Right Text Body",
        rightTextLabel: "Right Text Label",
        info: {
          onPress: { type: SduiActionType.OpenMyAccount, payload: "payload" },
        },
      },
      {
        leftText: "Left Text",
        rightTextBody: "Right Text Body",
        rightTextLabel: "Right Text Label",
        info: {
          onPress: { type: SduiActionType.OpenMyAccount, payload: "payload" },
        },
      },
    ],
    subheading: "Subheading",
  },
};

export default meta;

export const Default: Story = {
  args: {},
};
