import type { Meta, StoryObj } from "@storybook/react-webpack5";
import ListItem from "./list-item";
import { View } from "react-native";

const meta: Meta<typeof ListItem> = {
  component: ListItem,
  title: "Design System/Organisms/ListItem",
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <View style={{ width: 350 }}>
        <Story />
      </View>
    ),
  ],
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/bpwO4qkwPcBErdjtIru9J4/Game-System?type=design&node-id=1663-25751&mode=design&t=p6ACtv7IulXFBbJg-4",
    },
  },
  args: {
    name: "Rayna Bergson Weste rvelt some very big name",
    uri: "https://yulife-develop.imgix.net/avatars/56ZG/96e69fd5-b42d-495a-8873-560d20399062.svg?ixlib=js-3.2.1&fm=png8&w=530&h=1106&fit=clip&s=dca819533fbc29e2c071a7bd7261df81",
  },
};

export default meta;
type Story = StoryObj<typeof ListItem>;

export const Leaderboard: Story = {
  args: {
    type: "leaderboard",
    position: 1,
    score: "3,682,780",
  },
};

export const LeaderboardActive: Story = {
  args: {
    type: "leaderboard",
    position: 1,
    score: "3,682,780",
    theme: "active",
  },
};

export const Search: Story = {
  args: {
    type: "search",
  },
};
