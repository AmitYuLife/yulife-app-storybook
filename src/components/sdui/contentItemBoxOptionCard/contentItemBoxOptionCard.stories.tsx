import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { ContentItemBoxOptionCard } from "./contentItemBoxOptionCard";
import { SduiActionType } from "@graphql/__generated";

type Story = StoryObj<typeof ContentItemBoxOptionCard>;

const meta: Meta<typeof ContentItemBoxOptionCard> = {
  component: ContentItemBoxOptionCard,
  title: "Design System/SDUI/ContentItemBoxOptionCard",
  tags: ["autodocs"],
  parameters: {},
  args: {
    contentItemBoxOptionCardTitle: "General Health",
    contentItemBoxOptionCardDescription: "7 Videos",
    contentItemBoxOptionCardDescriptionTextType: "l1",
    image: {
      id: "https://yulife-develop.imgix.net/mood-monitor/illustrations/mood-illustration.svg?ixlib=js-3.2.1&w=360&h=360&s=32ef53f3657d8b256e2daf6b14ead4fb",
      uri: "https://yulife-develop.imgix.net/mood-monitor/illustrations/mood-illustration.svg?ixlib=js-3.2.1&w=360&h=360&s=32ef53f3657d8b256e2daf6b14ead4fb",
    },
    onPress: {
      type: SduiActionType.SduiActionSendMutation,
      payload:
        '{"mutation":"submitSduiJourney","action":"PUSH","journeyId":"paycom_wellness_program","stepId":"paycom_wellness_program_sections","refetchQueries":["GetSduiJourney"]}',
    },
    styles: [
      {
        property: "marginTop",
        value: "8",
      },
      {
        property: "marginHorizontal",
        value: "24",
      },
    ],
    subtitle: "Subtitle",
    subtitleTextType: null,
    titleWrapperStyles: null,
    subtitleWrapperStyles: null,
    innerHeight: 120,
    titleNumberOfLines: 2,
    descriptionNumberOfLines: 2,
  },
};

export default meta;

export const Default: Story = {
  args: {},
};
