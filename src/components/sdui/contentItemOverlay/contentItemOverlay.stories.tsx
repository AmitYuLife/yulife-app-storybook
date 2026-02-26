import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { ContentItemOverlay } from "./contentItemOverlay";
import { ContentItemButtonType, SduiActionType } from "@graphql/__generated";

type Story = StoryObj<typeof ContentItemOverlay>;

const meta: Meta<typeof ContentItemOverlay> = {
  component: ContentItemOverlay,
  title: "Design System/SDUI/ContentItemOverlay",
  tags: ["autodocs"],
  parameters: {},
  args: {
    id: "header-gradient-1",
    markdown: "This is overlay content",
    buttons: [
      {
        contentItemButtonUri: null,
        value: null,
        event: null,
        icon: null,
        contentItemButtonRightIcon: null,
        styles: null,
        containerStyles: null,
        buttonSize: null,

        id: "1",
        label: "Continue",
        buttonType: ContentItemButtonType.Primary,
        borderColor: "#E30D76",
        backgroundColor: "#E30D76",
        textColor: "#FFFFFF",
        disabledState: null,
        onPress: {
          type: SduiActionType.SduiActionSendMutation,
          payload: JSON.stringify({
            mutation: "submitSduiJourney",
            action: "action",
            journeyId: "YuniversityQuiz",
            stepId: "YuniversityQuizStep1",
            refetchQueries: ["GetSduiJourney"],
          }),
        },
      },
    ],
  },
};

export default meta;

export const Default: Story = {
  args: {},
};
