import type { Meta, StoryObj } from "@storybook/react";
import { ShowcaseStack } from "..";
import { Box } from "@atoms";

const meta: Meta<typeof ShowcaseStack> = {
  title: "Design System/Organisms/Showcase Stack",
  component: ShowcaseStack,
  tags: ["autodocs"],
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/jXTBhFJJiCN8IAXTmq4IZW/(L)-Google-Health-Connect?type=design&node-id=495-12931&mode=design&t=UqTcltAp5aZ8bs0D-4",
    },
  },
};

export default meta;

type Story = StoryObj<typeof ShowcaseStack>;

export const Default: Story = {
  args: {
    children: Array.from({ length: 6 }).map((_, index) => <Box bg={`red`} key={index} w={100} h={130} />),
  },
};
