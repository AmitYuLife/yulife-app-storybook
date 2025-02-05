import type { Meta, StoryObj } from "@storybook/react";
import Avatar from "./avatar";

const meta: Meta<typeof Avatar> = {
  component: Avatar,
  title: "Design System/Molecules/Avatar",
  tags: ["autodocs"],
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/bpwO4qkwPcBErdjtIru9J4/Game-System?type=design&node-id=1743-36842&mode=design&t=CM7YAPcBGpvm0yNe-4",
    },
  },
  argTypes: {
    backgroundColor: {
      control: {
        type: "color",
      },
    },
  },
  args: {
    uri: "https://yulife-develop.imgix.net/avatars/56ZG/96e69fd5-b42d-495a-8873-560d20399062.svg?ixlib=js-3.2.1&fm=png8&w=530&h=1106&fit=clip&s=dca819533fbc29e2c071a7bd7261df81",
  },
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Large: Story = {
  args: {
    size: 64,
  },
};

export const Small: Story = {
  args: {
    size: 40,
  },
};
