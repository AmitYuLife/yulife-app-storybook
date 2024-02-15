import type { Meta, StoryObj } from "@storybook/react";
import ImpactListItem from "./impact-list-item";

const meta: Meta<typeof ImpactListItem> = {
  component: ImpactListItem,
  title: "Design System/Organisms/ImpactListItem",
  tags: ["autodocs"],
  parameters: {
    design: {
      type: "figma",
      url: "figma url",
    },
  },
  args: {
    title: "Help planting trees",
    description: "32 Trees planted",
    onPress: () => console.log("hehe"),
    image: {
      uri: "https://yulife-local.imgix.net/storybook-assets/tree.png?ixlib=js-3.2.1&s=07f3a097aa8366d058f972ce832a5207g",
    },
    impact: {
      name: "Impact",
      value: "+10",
      isSurge: false,
      image: {
        uri: "https://yulife-local.imgix.net/storybook-assets/earth.png?ixlib=js-3.2.1&s=8b8f5cfab0db5a4424aec9b537ed143d",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof ImpactListItem>;

export const Default: Story = {
  args: {},
};

export const Surge: Story = {
  args: {
    impact: {
      name: "Impact",
      value: "+10",
      isSurge: true,
      image: {
        uri: "https://yulife-local.imgix.net/storybook-assets/earth.png?ixlib=js-3.2.1&s=8b8f5cfab0db5a4424aec9b537ed143d",
      },
    },
  },
};
