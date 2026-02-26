import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { ContentItemLottie } from "./contentItemLottie";
import { SduiActionType } from "@graphql/__generated";

type Story = StoryObj<typeof ContentItemLottie>;

const meta: Meta<typeof ContentItemLottie> = {
  component: ContentItemLottie,
  title: "Design System/SDUI/ContentItemLottie",
  tags: ["autodocs"],
  parameters: {},
  args: {
    id: "lottie-1",
    uri: "https://yulife-local.imgix.net/group-products/group-dental/lottie/yugi-loading-1.json?ixlib=js-3.2.1&s=c8ffb8ff5243429998eb3565f7963d91",
    autoPlay: true,
    loop: true,
    onAnimationEnd: {
      type: SduiActionType.SduiActionSendMutation,
      payload:
        '{"mutation":"submitSduiJourney","action":"PUSH","journeyId":"ordo_claim_bupa_gdent","stepId":"ordo_claim_bupa_gdent_order_details_loading","refetchQueries":["GetSduiJourney"]}',
    },
    aspectRatio: 1.75,
    styles: [
      {
        property: "marginTop",
        value: "120",
      },
    ],
  },
};

export default meta;

export const Default: Story = {
  args: {},
};
