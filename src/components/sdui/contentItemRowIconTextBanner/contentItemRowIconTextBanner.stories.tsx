import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { ContentItemRowIconTextBanner } from "./contentItemRowIconTextBanner";
import { ContentItemRowIconTextBannerType } from "@graphql/__generated";

type Story = StoryObj<typeof ContentItemRowIconTextBanner>;

const meta: Meta<typeof ContentItemRowIconTextBanner> = {
  component: ContentItemRowIconTextBanner,
  title: "Design System/SDUI/ContentItemRowIconTextBanner",
  tags: ["autodocs"],
  parameters: {},
  args: {
    bannerButton: null,
    bannerIcon: {
      id: "https://yulife-develop.imgix.net/yugi/info-banner/info-2022-07-18.svg?ixlib=js-3.2.1&w=144&height=144&s=71154cfde1b87ec9d46e4d6c432b4b46",
      uri: "https://yulife-develop.imgix.net/yugi/info-banner/info-2022-07-18.svg?ixlib=js-3.2.1&w=144&height=144&s=71154cfde1b87ec9d46e4d6c432b4b46",
    },
    bannerType: ContentItemRowIconTextBannerType.Info,
    containerActions: null,
    markdown:
      "This survey is confidential and will not be shared externally with your employer or any other third party.",
    showCloseIcon: null,
    showIcon: true,
    styles: [
      { property: "marginTop", value: "40" },
      { property: "paddingHorizontal", value: "24" },
    ],
    titleMarkdown: null,
  },
};

export default meta;

export const Default: Story = {
  args: {},
};
