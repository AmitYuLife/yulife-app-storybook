import type { Meta, StoryObj } from "@storybook/react";
import EnterpriseRewardList, { IEnterpriseRewardList } from "./enterprise-reward-list";

const meta: Meta<typeof EnterpriseRewardList> = {
  component: EnterpriseRewardList,
  title: "Design System/Organisms/EnterpriseRewardList",
  tags: ["autodocs"],
  parameters: {
    design: {
      type: "figma",
      url: "figma url",
    },
  },
  args: {},
};

export default meta;
type Story = StoryObj<typeof EnterpriseRewardList>;

const commonProps = {
  id: "1",
  backgroundColour: "#39D6FF",
  onPress: () => console.log("press"),
  positionBackgroundColor: "",
  title: "title",
  icon: {
    uri: "https://yulife-local.imgix.net/storybook-assets/shirt.png?ixlib=js-3.2.1&s=e5ef3312ed0e2973c6aa8778fcdc8b3b",
    width: 39,
    height: 31,
  },
};

const mock: IEnterpriseRewardList["items"] = [
  {
    ...commonProps,
    position: 1,
    status: "claimed",
  },
  {
    ...commonProps,
    position: 2,
    status: "completed",
  },
  {
    ...commonProps,
    position: 3,
  },
  {
    ...commonProps,
    position: 4,
  },
];
export const Default: Story = {
  args: {
    items: mock,
  },
};
