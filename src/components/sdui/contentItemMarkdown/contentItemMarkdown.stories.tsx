import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { ContentItemMarkdown } from "./contentItemMarkdown";

type Story = StoryObj<typeof ContentItemMarkdown>;

const meta: Meta<typeof ContentItemMarkdown> = {
  component: ContentItemMarkdown,
  title: "Design System/SDUI/ContentItemMarkdown",
  tags: ["autodocs"],
  parameters: {},
  args: {
    id: "daily_survey_intro_markdowm",
    markdown: `Our Mood Monitor helps you keep tabs on your daily feelings and energy levels, so you can better understand yourself and ultimately feel good about your wellbeing journey.

  As an added bonus, you will be rewarded with a YuCoin bounty!`,
    markdownContainerStyle: [
      { property: "marginTop", value: "16" },
      { property: "marginHorizontal", value: "40" },
      { property: "textAlign", value: "center" },
      { property: "justifyContent", value: "center" },
    ],
    markdownStyles: '{"text":{"textAlign":"center"}}',
    parsedMarkdown: `Our Mood Monitor helps you keep tabs on your daily feelings and energy levels, so you can better understand yourself and ultimately feel good about your wellbeing journey.
  
  As an added bonus, you will be rewarded with a YuCoin bounty!`,
    perkId: null,
    styles: [
      { property: "justifyContent", value: "center" },
      { property: "textAlign", value: "center" },
    ],
    title: "Welcome to your Mood Monitor",
  },
};

export default meta;

export const Default: Story = {
  args: {},
};
