import type { Meta, StoryObj } from "@storybook/react-webpack5";
import DonationListItem from "./donation-list-item";

const meta: Meta<typeof DonationListItem> = {
  component: DonationListItem,
  title: "Design System/Organisms/DonationListItem",
  tags: ["autodocs"],
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/fOA03KUZB0kAv4Rj3zEg1h/YuCoin-for-Enterprise?type=design&node-id=1165-68477&mode=design&t=WOVst8Dz2jhYHXhQ-4",
    },
  },
  args: {
    title: "Help planting trees",
    description: "32 Trees planted",
    onSubmit: () => console.log("hehe"),
    image: {
      uri: "https://yulife-local.imgix.net/storybook-assets/tree.png?ixlib=js-3.2.1&s=07f3a097aa8366d058f972ce832a5207g",
    },
    yuCoin: 1,
  },
};

export default meta;
type Story = StoryObj<typeof DonationListItem>;

export const Default: Story = {
  args: {},
};
