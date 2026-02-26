import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { Image } from "./image";

const meta: Meta<typeof Image> = {
  component: Image,
  title: "Design System/Atoms/Image",
  tags: ["autodocs"],
  parameters: {
    design: {
      type: "figma",
      url: "figma url",
    },
  },
  args: {
    source: {
      uri: "https://yulife-local.imgix.net/email/yulife_logo.png?ixlib=js-3.2.1&s=004cbd9f7c09c706768fa3fde70a93b7",
    },
    width: 228,
    height: 120,
    suppressLoadingUi: true,
  },
};

export default meta;
type Story = StoryObj<typeof Image>;

export const Default: Story = {};
