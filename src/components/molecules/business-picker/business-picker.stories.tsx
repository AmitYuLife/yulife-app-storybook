import type { Meta, StoryObj } from "@storybook/react";
import { BusinessPicker } from ".";

type Story = StoryObj<typeof BusinessPicker>;

const meta: Meta<typeof BusinessPicker> = {
  component: BusinessPicker,
  title: "Design System/Molecules/BusinessPicker",
  tags: ["autodocs"],
  parameters: {},
  args: {
    businessAccountState: {
      setSelectedBusinessAccount: () => {
        return;
      },
      activeBusinessAccounts: [
        {
          businessAccountId: "1",
          businessAccountName: "Business One",
          id: "1",
        },
        {
          businessAccountId: "2",
          businessAccountName: "Business Two",
          id: "2",
        },
      ],
      selectedBusinessAccount: {
        businessAccountId: "1",
        businessAccountName: "Business One",
        id: "1",
      },
    },
  },
};

export default meta;

export const Default: Story = {
  args: {},
};
