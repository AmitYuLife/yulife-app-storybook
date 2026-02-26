import type { Meta, StoryObj } from "@storybook/react-webpack5";
import LottieView from "./lottie-view";
import { Style } from "@styles";

const meta: Meta<typeof LottieView> = {
  component: LottieView,
  title: "Design System/Atoms/LottieView",
  tags: ["autodocs"],
  parameters: {
    design: {
      type: "figma",
      url: "figma url",
    },
  },
  args: {
    source:
      "https://yulife-local.imgix.net/group-products/group-dental/lottie/yugi-loading-1.json?ixlib=js-3.2.1&s=c8ffb8ff5243429998eb3565f7963d91",
    style: {
      width: Style.adjust(320),
      height: Style.adjust(261),
    },
    autoPlay: true,
  },
};

export default meta;
type Story = StoryObj<typeof LottieView>;

export const Default: Story = {
  args: {},
};
