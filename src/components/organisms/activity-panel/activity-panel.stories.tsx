import type { Meta, StoryObj } from "@storybook/react-webpack5";
import ActivityPanel from "./activity-panel";

const meta: Meta<typeof ActivityPanel> = {
  component: ActivityPanel,
  title: "Design System/Organisms/ActivityPanel",
  tags: ["autodocs"],
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/3Y8jBCXbu2ciaYazC9Ws6r/YuCoin-Power-modal?type=design&node-id=524-41978&mode=design&t=Jv8hmxQkrv8zVRA6-4",
    },
  },
  args: {
    title: "Steps",
    milestone: "12,000",
    rewardText: "up to 120",
    icon: {
      id: "",
      uri: "https://yulife-local.imgix.net/app-system/icons/default/calendar-2021-10-06.svg?ixlib=js-3.2.1&w=48&h=48&s=cfdb1ab0d0be0c338b3146cae4f7cc7f",
    },
  },
};

export default meta;
type Story = StoryObj<typeof ActivityPanel>;

export const Default: Story = {
  args: {},
};
export const PowerUp: Story = {
  args: {
    isPoweredUp: true,
  },
};
