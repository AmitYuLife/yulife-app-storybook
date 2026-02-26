import type { Meta, StoryObj } from "@storybook/react-webpack5";
import ActivityHistoryInfo from "./activity-history-info";

const meta: Meta<typeof ActivityHistoryInfo> = {
  component: ActivityHistoryInfo,
  title: "Design System/Molecules/ActivityHistoryInfo",
  tags: ["autodocs"],
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/irTSipYwiDdyqyO1WHE2HC/Activity-History---Spec?type=design&node-id=871-5099&mode=design&t=TaHiKUWCSrscwoDp-4",
    },
  },
  args: {
    title: "Core activities",
    activityItems: [
      {
        title: "16,100 Steps",
        yucoin: "120",
        stars: 2,
        leftIcon: {
          id: "test",
          uri: "https://yulife-local.imgix.net/storybook-assets/steps.png?ixlib=js-3.2.1&s=421a6664ba3b09ce2ced2735e758bd78",
        },
        rightIcon: {
          id: "test",
          uri: "https://yulife-local.imgix.net/storybook-assets/yucoin.png?ixlib=js-3.2.1&s=8118cabde51d54b7835f6ac5585655fb",
        },
      },
      {
        title: "5 km Cycling",
        yucoin: "",
        stars: 3,
        leftIcon: {
          id: "test",
          uri: "https://yulife-local.imgix.net/storybook-assets/steps.png?ixlib=js-3.2.1&s=421a6664ba3b09ce2ced2735e758bd78",
        },
        rightIcon: {
          id: "test",
          uri: "https://yulife-local.imgix.net/storybook-assets/yucoin.png?ixlib=js-3.2.1&s=8118cabde51d54b7835f6ac5585655fb",
        },
      },
      {
        title: "123 Mindful mins",
        yucoin: "20",
        stars: 3,
        leftIcon: {
          id: "test",
          uri: "https://yulife-local.imgix.net/storybook-assets/steps.png?ixlib=js-3.2.1&s=421a6664ba3b09ce2ced2735e758bd78",
        },
        rightIcon: {
          id: "test",
          uri: "https://yulife-local.imgix.net/storybook-assets/yucoin.png?ixlib=js-3.2.1&s=8118cabde51d54b7835f6ac5585655fb",
        },
      },
    ],
  },
};

export default meta;
type Story = StoryObj<typeof ActivityHistoryInfo>;

export const Default: Story = {
  args: {},
};
