import type { Meta, StoryObj } from "@storybook/react-webpack5";
import Heading from "./heading";

const meta: Meta<typeof Heading> = {
  component: Heading,
  title: "Design System/Atoms/Header",
  tags: ["autodocs"],
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/aNnODOQlMlk38LrQVs63oq/App-%2F-Core-UI?type=design&node-id=20%3A59&mode=design&t=f0IDCFEF09LgDGJ3-1",
    },
  },
  args: {
    label: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id mauris felis.",
  },
};

export default meta;
type Story = StoryObj<typeof Heading>;

export const Small: Story = {
  args: {
    size: "small",
  },
};

export const Medium: Story = {
  args: {
    size: "medium",
  },
};

export const Large: Story = {
  args: {
    size: "large",
  },
};
