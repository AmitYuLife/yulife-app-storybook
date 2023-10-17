import type { Meta, StoryObj } from "@storybook/react";
import { ContentItemCostPayoutBenefitCard } from "./contentItemCostPayoutBenefitCard";
import { CoverType } from "@graphql/_core/schema/globalTypes";

type Story = StoryObj<typeof ContentItemCostPayoutBenefitCard>;

const meta: Meta<typeof ContentItemCostPayoutBenefitCard> = {
  component: ContentItemCostPayoutBenefitCard,
  title: "Design System/SDUI/ContentItemCostPayoutBenefitCard",
  tags: ["autodocs"],
  parameters: {},
  args: {
    id: "cost-payout-benefit-card-1",
    costValue: `150*`,
    costDescription: "150 per month",
    coverType: CoverType.epic,
    benefitDescription: "In the event of your passing, we'll pay out:",
    benefitValue: `£200,000*`,
    benefitIntervalMarkdown: `a year until\n**2024-01-01****`,
    styles: [{ property: "marginHorizontal", value: "24" }],
  },
};

export default meta;

export const Default: Story = {
  args: {},
};
