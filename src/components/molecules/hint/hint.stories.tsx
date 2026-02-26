import type { Meta, StoryObj } from "@storybook/react-webpack5";
import Hint from "./hint";

const meta: Meta<typeof Hint> = {
  component: Hint,
  title: "Design System/Molecules/Hint",
  tags: ["autodocs"],
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/aydPPuMj1o9RLZfuQlAWQc/(L)-Hints?type=design&node-id=441-25372&mode=dev",
    },
  },
  args: {
    label: "Fancy a new look?",
    description: "You can always change how your Yumoji looks. Head to the YU tab and give yourself a make over!",
    image: {
      uri: "https://yu-local-global-assets.imgix.net/cms/1691684959916_Duel%20your%20friends%20(1).png?ixlib=js-3.2.1&fit=clip&fm=png&s=c2aab1cd633d2626f93b3664d2741266",
    },
    variant: "default",
    markdownDescription: "",
  },
};

export default meta;
type Story = StoryObj<typeof Hint>;

export const Default: Story = {
  args: {},
};

export const Challenges: Story = {
  args: {
    variant: "challenges",
    image: undefined,
  },
};
