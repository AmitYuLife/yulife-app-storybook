import type { Meta, StoryObj } from "@storybook/react-webpack5";
import Spotlight from "./spotlight";
import { TrophyIcon } from "@atoms/icon/trophy-icon";
import { Colours } from "@styles";
import { HeartIcon } from "@atoms/icon/heart-icon";

const TargetComponent = () => <TrophyIcon width={93} height={88} />;

const meta: Meta<typeof Spotlight> = {
  title: "Design System/Organisms/Spotlight",
  component: Spotlight,
  tags: ["autodocs"],
  decorators: [
    (Story: any) => (
      <div
        style={{
          height: "400px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          border: "1px solid black",
          overflow: "hidden",
        }}
      >
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "customColor",
      values: [{ name: "customColor", value: Colours.world.yuniversal }],
    },
    design: {
      type: "figma",
      url: "https://www.figma.com/design/dM98LkoC7KPL3UQjvuaj76/Smoking-Cessation-Spec?node-id=1-73117&m=dev",
    },
  },
  args: {
    wrapperProps: {
      w: "100%",
      h: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Spotlight>;

export const Default: Story = {
  args: {
    rays: {
      opacity: 0.4,
    },
    glow: {
      radius: 120,
      color: "#D2A935",
      duration: 4000,
    },
    stars: {
      starSize: 10,
      starCount: 30,
      radius: 300,
      shootingSpeed: [200, 1500],
      minDistance: 100,
      colors: ["#FFF", "#FCE93D"],
    },
    shake: true,
    children: <TargetComponent />,
  },
};

export const WithRays: Story = {
  args: {
    rays: {
      opacity: 0.4,
    },
    children: <TargetComponent />,
  },
};

export const WithGlow: Story = {
  args: {
    glow: {
      radius: 120,
      color: "#D2A935",
      duration: 4000,
    },
    children: <TargetComponent />,
  },
};

export const WithStars: Story = {
  args: {
    stars: {
      starSize: 10,
      starCount: 30,
      radius: 300,
      shootingSpeed: [200, 1500],
      minDistance: 100,
      colors: ["#FFF", "#FCE93D"],
    },
    children: <TargetComponent />,
  },
};

export const WithSparkle: Story = {
  args: {
    sparkle: {
      stars: [
        {
          top: 73,
          left: -23,
          size: 16,
          initialDelay: 0,
          delay: [200, 700],
          duration: 1700,
        },
        {
          top: -30,
          right: 9,
          size: 24,
          fadeOutDuration: 1000,
          initialDelay: 200,
          delay: [200, 700],
          duration: 2300,
        },
        {
          bottom: -22,
          right: 35,
          size: 16,
          fadeOutDuration: 500,
          initialDelay: 600,
          delay: [200, 700],
          duration: 2000,
        },
      ],
    },
    children: <HeartIcon width={140} height={128} />,
    wrapperProps: {
      w: 140,
      h: 128,
    },
  },
};

export const WithShake: Story = {
  args: {
    shake: true,
    children: <TargetComponent />,
  },
};
