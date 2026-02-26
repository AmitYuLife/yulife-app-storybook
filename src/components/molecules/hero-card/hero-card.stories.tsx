import type { Meta, StoryObj } from "@storybook/react-webpack5";
import HeroCard from "./hero-card";
import { HeroCardHeaderButtonState, HeroCardProgressMilestoneState } from "@utils/heroCards";
import { SduiActionType } from "@graphql/__generated";

const meta: Meta<typeof HeroCard> = {
  component: HeroCard,
  title: "Design System/Molecules/HeroCard",
  tags: ["autodocs"],
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/aNnODOQlMlk38LrQVs63oq/App-%2F-Core-UI?node-id=7249-20260&t=rc4LnEPJfaho8OE3-4",
    },
  },
  args: {
    currentLevel: 1,
    yuniversalMap: 0,
    width: 300,
    badge: {
      text: "🔥 New!",
    },
    header: {
      heading: "Walk of the Worlds",
      subheading: [
        {
          text: "9 / 10 brisk walks",
          icon: "https://yulife-local.imgix.net/duotone/gift-box-pink.svg?ixlib=js-3.2.1&w=48&h=48&s=e8be56330f7d653e68cc3e22652d6311",
        },
      ],
      button: {
        text: "Join",
        state: HeroCardHeaderButtonState.Default,
      },
    },
    body: {
      progress: {
        currentProgress: 90,
        maxProgress: 100,
        milestones: [
          {
            progress: 60,
            state: HeroCardProgressMilestoneState.Active,
          },
          {
            progress: 80,
            state: HeroCardProgressMilestoneState.Emphasized,
          },
          {
            progress: 100,
            state: HeroCardProgressMilestoneState.Inactive,
          },
        ],
      },
    },
    footer: {
      left: {
        text: "Week 2 • 5 days left",
        icon: "https://yulife-local.imgix.net/duotone/gift-box-pink.svg?ixlib=js-3.2.1&w=48&h=48&s=e8be56330f7d653e68cc3e22652d6311",
      },
      right: {
        text: "86 / 100 joined",
      },
    },
    onPress: { type: SduiActionType.SduiActionNavigate, payload: JSON.stringify({}) },
    activePeriod: {
      startDate: "2024-01-01",
      endDate: "3024-01-01",
    },
    id: "storybook-hero-card",
  },
  argTypes: {
    currentLevel: {
      control: "select",
      options: ["Forest", "Ocean", "Desert", "Mountain"],
      mapping: {
        Forest: 1,
        Ocean: 51,
        Desert: 101,
        Mountain: 151,
      },
    },
    yuniversalMap: {
      control: "select",
      options: ["Yes", "No"],
      mapping: {
        Yes: 1,
        No: 0,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof HeroCard>;

const journeyArgs: Meta<typeof HeroCard>["args"] = {
  badge: undefined,
  body: {
    scaleRightImage: true,
    rightImage: {
      image: {
        uri: "https://yulife-local.imgix.net/illustrations/health-questionnaire-panel-2024-04-05-1.svg?ixlib=js-3.2.1&w=411&h=231&s=b6f95ef6e62017ca68619e922a6d9ae9",
      },
      width: 170,
      height: 96,
    },
  },
  header: {
    heading: "Journey Lorem ipsum dolor sit amet consectetur adipiscing elit",
    subheading: [
      {
        text: "Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor.",
      },
    ],
    button: {
      state: HeroCardHeaderButtonState.Default,
    },
  },
  footer: undefined,
};

export const GoalForest: Story = {
  name: "Goal (Forest)",
  args: {
    currentLevel: 1,
    yuniversalMap: 0,
  },
};

export const JourneyForest: Story = {
  name: "Journey (Forest)",
  args: {
    currentLevel: 1,
    yuniversalMap: 0,
    ...journeyArgs,
  },
};

export const GoalOcean: Story = {
  name: "Goal (Ocean)",
  args: {
    currentLevel: 51,
    yuniversalMap: 0,
  },
};

export const JourneyOcean: Story = {
  name: "Journey (Ocean)",
  args: {
    ...journeyArgs,
    currentLevel: 51,
    yuniversalMap: 0,
  },
};

export const GoalDesert: Story = {
  name: "Goal (Desert)",
  args: {
    currentLevel: 101,
    yuniversalMap: 0,
  },
};

export const JourneyDesert: Story = {
  name: "Journey (Desert)",
  args: {
    ...journeyArgs,
    currentLevel: 101,
    yuniversalMap: 0,
  },
};

export const GoalMountain: Story = {
  name: "Goal (Mountain)",
  args: {
    currentLevel: 151,
    yuniversalMap: 0,
  },
};

export const JourneyMountain: Story = {
  name: "Journey (Mountain)",
  args: {
    ...journeyArgs,
    currentLevel: 151,
    yuniversalMap: 0,
  },
};

export const GoalYuniversal: Story = {
  name: "Goal (Yuniversal)",
  args: {
    currentLevel: 0,
    yuniversalMap: 1,
  },
};

export const JourneyYuniversal: Story = {
  name: "Journey (Yuniversal)",
  args: {
    ...journeyArgs,
    currentLevel: 0,
    yuniversalMap: 1,
  },
};
