import type { Meta, StoryObj } from "@storybook/react";
import { ShineButton } from "..";
import { VoucherIcon } from "@atoms/icon/voucher-icon";

const meta: Meta<typeof ShineButton> = {
  component: ShineButton,
  title: "Design System/Molecules/ShineButton",
  tags: ["autodocs"],
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/8wsC1URsc5EL3B1p6kIlDs/New-Rewards-Store-Home?node-id=6226-9387&t=fYCMcjLnxdSz4xui-4",
    },
  },
  args: {
    label: "Wallet",
    icon: <VoucherIcon size={26} />,
  },
};

export default meta;
type Story = StoryObj<typeof ShineButton>;

export const Default: Story = {};
