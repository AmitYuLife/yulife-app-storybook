import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { ContentItemRadio } from "./contentItemRadio";
import { withSduiProvider } from "@components/sdui/_context/SduiProvider";

type Story = StoryObj<typeof ContentItemRadio>;

const meta: Meta<typeof ContentItemRadio> = {
  component: withSduiProvider(ContentItemRadio),
  title: "Design System/SDUI/ContentItemRadio",
  tags: ["autodocs"],
  parameters: {},
  args: {
    answerKey: "question1",
    choices: [
      { label: "1 - Extremely Tired", renderAsIcon: null, value: "1" },
      { label: "3 - Neutral", renderAsIcon: null, value: "3" },
      { label: "4 - Somewhat Refreshed", renderAsIcon: null, value: "4" },
      { label: "5 - Fully Refreshed", renderAsIcon: null, value: "5" },
    ],
    iconOptions: false,
    id: "daily_survey_rested_today_answers",
    styles: null,
  },
};

export default meta;

export const Default: Story = {
  args: {},
};
