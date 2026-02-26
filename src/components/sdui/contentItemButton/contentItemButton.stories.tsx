import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { ContentItemButton } from "./contentItemButton";
import { ContentItemButtonSize, ContentItemButtonType, SduiActionType } from "@graphql/__generated";

type Story = StoryObj<typeof ContentItemButton>;

const meta: Meta<typeof ContentItemButton> = {
  component: ContentItemButton,
  title: "Design System/SDUI/ContentItemButton",
  tags: ["autodocs"],
  parameters: {},
  args: {
    backgroundColor: "#E30D76",
    borderColor: "#E30D76",
    buttonSize: ContentItemButtonSize.Fill,
    buttonType: ContentItemButtonType.Tertiary,
    containerStyles: null,
    contentItemButtonRightIcon: {
      id: "1",
      uri: "https://yulife-develop.imgix.net/content/icons/right_arrow.svg?ixlib=js-3.2.1&fit=clip&fm=png&s=da1b43660785c6b3a238491409ed856c",
    },
    contentItemButtonUri: null,
    disabledState: "false",
    event: {
      payload:
        '{"name":"button_pressed","props":{"type":"start","journey_id":"daily_survey","step_id":"daily_survey_intro","sdui_location":"app"}}',
      type: SduiActionType.SduiActionLogEvent,
    },
    icon: {
      id: "1",
      uri: "https://yulife-develop.imgix.net/content/icons/calendar.svg?ixlib=js-3.2.1&w=192&h=192&s=c3e1d3ba3d13033c3fc963e1b88420cf",
    },
    id: "daily_survey_intro_cta",
    label: "Let's Go",
    onPress: {
      payload:
        '{"mutation":"submitSduiJourney","action":"PUSH","journeyId":"daily_survey","stepId":"daily_survey_intro","refetchQueries":["GetSduiJourney"]}',
      type: SduiActionType.SduiActionSendMutation,
    },
    styles: null,
    textColor: "#FFFFFF",
    value: "gone",
  },
};

export default meta;

export const Default: Story = {
  args: {},
};
