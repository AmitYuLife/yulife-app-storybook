import type { Meta, StoryObj } from "@storybook/react";
import { ContentItemHeaderBar } from "./contentItemHeaderBar";
import { SduiActionType } from "@graphql/_core/schema/globalTypes";
import { LeftIcon } from "@organisms/top-bar/subcomponents/left";

type Story = StoryObj<typeof ContentItemHeaderBar>;

const meta: Meta<typeof ContentItemHeaderBar> = {
  component: ContentItemHeaderBar,
  title: "Design System/SDUI/ContentItemHeaderBar",
  tags: ["autodocs"],
  parameters: {},
  args: {
    backgroundColor: null,
    color: null,
    contentItemHeaderBarRightIcon: "COINS",
    heading: null,
    leftIcon: LeftIcon.BACK,
    logo: "yulife",
    onLeftIconPress: () => {
      /* Nothing to dooooo*/
    },
    onRightIconPress: { payload: null, type: SduiActionType.SDUI_ACTION_GENERIC_NAVIGATE_BACK },
    publishKeyHeight: "DYNAMIC_HEIGHT_KEY_HEADER",
  },
};

export default meta;

export const Default: Story = {
  args: {},
};
