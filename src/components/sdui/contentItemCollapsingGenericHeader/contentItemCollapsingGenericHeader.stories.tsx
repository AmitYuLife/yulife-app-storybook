import type { Meta, StoryObj } from "@storybook/react";
import { ContentItemCollapsingGenericHeader } from "./contentItemCollapsingGenericHeader";
import { SduiActionType } from "@graphql/_core/schema/globalTypes";
import { Animated } from "react-native";

type Story = StoryObj<typeof ContentItemCollapsingGenericHeader>;

const meta: Meta<typeof ContentItemCollapsingGenericHeader> = {
  component: ContentItemCollapsingGenericHeader,
  title: "Design System/SDUI/ContentItemCollapsingGenericHeader",
  tags: ["autodocs"],
  parameters: {},
  args: {
    collapsedRightIcon: {
      id: "app-system/icons/default/close.png",
      uri: "https://yulife-develop.imgix.net/app-system/icons/default/close.png?ixlib=js-3.2.1&fit=clip&fm=png&s=1e8278d65063395b014667b8dfdfb154",
    },
    contentItemCollapsingGenericHeaderRightIcon: {
      id: "app-system/icons/default/close.png",
      uri: "https://yulife-develop.imgix.net/app-system/icons/default/close.png?ixlib=js-3.2.1&fit=clip&fm=png&s=1e8278d65063395b014667b8dfdfb154",
    },
    id: "collapsing-header",
    onPressRightIcon: { payload: null, type: SduiActionType.SDUI_ACTION_NAVIGATE_BACK },

    styles: [],
    title: "Life Insurance",
    scrollValue: new Animated.Value(1),
  },
};

export default meta;

export const Default: Story = {
  args: {},
};
