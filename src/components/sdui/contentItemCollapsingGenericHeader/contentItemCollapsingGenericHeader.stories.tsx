import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { ContentItemCollapsingGenericHeader } from "./contentItemCollapsingGenericHeader";
import { SduiActionType } from "@graphql/__generated";
import { makeMutable } from "react-native-reanimated";

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
    onPressRightIcon: { payload: null, type: SduiActionType.SduiActionGenericNavigateBack },

    styles: [],
    title: "Life Insurance",
    scrollValue: makeMutable(1),
  },
};

export default meta;

export const Default: Story = {
  args: {},
};
