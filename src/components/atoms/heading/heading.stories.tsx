import type { Meta, StoryObj } from "@storybook/react";
import Heading from "./heading";

const meta: Meta<typeof Heading> = {
  component: Heading,
};

export default meta;
type Story = StoryObj<typeof Heading>;

export const Small: Story = {
  render: () => (
    <Heading size="small" label="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id mauris felis." />
  ),
};

export const Large: Story = {
  render: () => (
    <Heading size="large" label="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id mauris felis." />
  ),
};
