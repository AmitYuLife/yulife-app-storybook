import type { Meta, StoryObj } from "@storybook/react-webpack5";
import Component from "./info-panel";

const meta: Meta<typeof Component> = {
  component: Component,
  title: "Design System/Molecules/InfoPanel",
  tags: ["autodocs"],
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/aNnODOQlMlk38LrQVs63oq/App-%2F-Core-UI?node-id=7074-19458&t=IEaZU7Fd3AjUCcyQ-4",
    },
  },
  args: {},
};

export default meta;
type Story = StoryObj<typeof Component>;

export const Default: Story = {
  args: {
    containerOnPress: () => null,
    markdown: "We haven't received any health data today! Please make sure your permissions are up to date",
    forceShowButton: true,
    hideButtonIcon: false,
    type: "warning",
    titleMarkdown: "Sync issue alert!",
    button: {
      onPress: () => null,
      disabled: true,
      label: "Check permissions",
    },
    showIcon: true,
  },
};
