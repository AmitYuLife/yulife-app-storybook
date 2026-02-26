import type { Meta, StoryObj } from "@storybook/react-webpack5";
import Component from "./reward-search-list-item";

const meta: Meta<typeof Component> = {
  component: Component,
  title: "Design System/Organisms/Reward Search List Item",
  tags: ["autodocs"],
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/Fa51MFNLX0o44KFB08c60I/Rewards-Store-Home---Spec?node-id=22-5690&t=dHZUMD1fYXf1xkv2-4",
    },
  },
  args: {},
};

export default meta;

type Story = StoryObj<typeof Component>;

export const Default: Story = {
  args: {
    label: "Garmin",
    imageUrl:
      "https://yulife-local.imgix.net/game/reward-passes/prevention-pass-slot-1.png?ixlib=js-3.2.1&fit=clip&fm=png&dpr=1&s=5a42f3557ec2baccb21d3d330bd5fc92",
  },
};
