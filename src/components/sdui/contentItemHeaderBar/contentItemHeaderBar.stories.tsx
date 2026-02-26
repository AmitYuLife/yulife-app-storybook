import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { ContentItemHeaderBar } from "./contentItemHeaderBar";
import { LeftIcon } from "@organisms/top-bar/subcomponents/left";
import { SduiActionType } from "@graphql/__generated";

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
    onRightIconPress: { payload: null, type: SduiActionType.SduiActionNavigateBack },
    publishKeyHeight: "DYNAMIC_HEIGHT_KEY_HEADER",
  },
};

export default meta;

export const Default: Story = {
  args: {},
};
