import type { Meta, StoryObj } from "@storybook/react";
import Component from "./reward-pass";

const meta: Meta<typeof Component> = {
  component: Component,
  title: "Design System/Organisms/Reward Pass",
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
    label: "Prevention Pass",
    backgroundImage:
      "https://yulife-local.imgix.net/game/reward-passes/prevention-pass-background.png?ixlib=js-3.2.1&fit=clip&fm=png&dpr=1&s=d28d758ec74579e892f825ac53e83f54",
    primaryColor: "#0D6361",
    index: 1,
    passIcon:
      "https://yulife-local.imgix.net/game/reward-passes/prevention-pass-icon.png?ixlib=js-3.2.1&fit=clip&fm=png&dpr=1&s=caa9272267215ac3b5a7ec75ea4443c9",
    slots: [
      {
        x: "28%",
        y: "72%",
        images: [
          "https://yulife-local.imgix.net/game/reward-passes/prevention-pass-slot-1.png?ixlib=js-3.2.1&fit=clip&fm=png&dpr=1&s=5a42f3557ec2baccb21d3d330bd5fc92",
        ],
      },
      {
        x: "31%",
        y: "46%",
        images: [
          "https://yulife-local.imgix.net/game/reward-passes/prevention-pass-slot-2.png?ixlib=js-3.2.1&fit=clip&fm=png&dpr=1&s=7850df90b8bbcf0c64f5c91c64b34674",
        ],
      },
    ],
    foregroundImage:
      "https://yulife-local.imgix.net/game/reward-passes/prevention-pass-foreground.png?ixlib=js-3.2.1&fit=clip&fm=png&dpr=1&s=c8a1c23a9ce97b2799631cb5b489b1e6",
  },
};
