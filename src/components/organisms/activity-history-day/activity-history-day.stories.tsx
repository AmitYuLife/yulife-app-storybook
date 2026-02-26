import type { Meta, StoryObj } from "@storybook/react-webpack5";
import ActivityHistoryDay from "./activity-history-day";

const meta: Meta<typeof ActivityHistoryDay> = {
  component: ActivityHistoryDay,
  title: "Design System/Organisms/ActivityHistoryDay",
  tags: ["autodocs"],
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/irTSipYwiDdyqyO1WHE2HC/Activity-History---Spec?type=design&node-id=871-5024&mode=design&t=dtIUZuqpjFEwaMNh-4",
    },
  },
  args: {
    title: "16 November",
    level: "Level 434",
    yucoin: "2,715",
    leftIcon: {
      id: "test",
      uri: "https://yulife-local.imgix.net/storybook-assets/desert.png?ixlib=js-3.2.1&s=3a29697e372bcbd9cf801f35ca70102",
    },
    rightIcon: {
      id: "test",
      uri: "https://yulife-local.imgix.net/storybook-assets/yucoin.png?ixlib=js-3.2.1&s=8118cabde51d54b7835f6ac5585655fb",
    },
    historyItems: [
      {
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
      {
        title: "Challenges 4/4",
        activityItems: [
          {
            title: "16,100 Steps",
            yucoin: "120",
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
            title: "5 km Cycling",
            yucoin: "20",
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
            title: "123 Mindful mins",
            yucoin: "20",
            stars: 1,
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
    ],
  },
};

export default meta;
type Story = StoryObj<typeof ActivityHistoryDay>;

export const Default: Story = {
  args: {},
};
