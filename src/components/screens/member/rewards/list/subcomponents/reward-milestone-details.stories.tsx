import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { RewardMilestoneDetails } from "./reward-milestone-details";
import { View } from "react-native";

const meta: Meta<typeof RewardMilestoneDetails> = {
  component: RewardMilestoneDetails,
  title: "Design System/Screens/RewardMilestoneDetails",
  tags: ["autodocs"],
  parameters: {},
  args: {
    target: 10,
    progress: 5,
    rewardQuantity: 3,
    rewardTitle: "Urban Massage",
    primaryColor: "#923280",
    secondaryColor: "#7A206A",
    rewardImage: {
      id: "",
      uri: "https://yu-local-global-assets.imgix.net/cms/1701868907581_urban.png?ixlib=js-3.2.1&w=200&s=6c2ea33e6342d930161d3037cc39a7b3",
    },
  },
};

const withWrapper = (Story: any) => (
  <View style={{ width: 375, height: 812 }}>
    <Story />
  </View>
);

export default meta;
type Story = StoryObj<typeof RewardMilestoneDetails>;

export const Default: Story = (args: any) => <RewardMilestoneDetails {...args} />;

Default.decorators = [withWrapper];
