import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { ContentItemImageChoice } from "./contentItemImageChoice";

type Story = StoryObj<typeof ContentItemImageChoice>;

const options = [
  {
    value: "PORTIONS_0",
    label: "0 portions",
    image: {
      id: "portions_0",
      uri: "https://yulife-local.imgix.net/journeys/health-questionnaire/answer-food-portions-0.svg?ixlib=js-3.2.1&w=96&h=56&s=e38d13ad266703e724dea86436a2337c",
    },
  },
  {
    value: "PORTIONS_1-2",
    label: "1-2 portions",
    image: {
      id: "portions_1-2",
      uri: "https://yulife-local.imgix.net/journeys/health-questionnaire/answer-food-portions-1-2.svg?ixlib=js-3.2.1&w=96&h=56&s=e38d13ad266703e724dea86436a2337c",
    },
  },
  {
    value: "PORTIONS_3-4",
    label: "3-4 portions",
    image: {
      id: "portions_3-4",
      uri: "https://yulife-local.imgix.net/journeys/health-questionnaire/answer-food-portions-3-4.svg?ixlib=js-3.2.1&w=96&h=56&s=e38d13ad266703e724dea86436a2337c",
    },
  },
  {
    value: "PORTIONS_5_PLUS",
    label: "5+ portions",
    image: {
      id: "portions_5plus",
      uri: "https://yulife-local.imgix.net/journeys/health-questionnaire/answer-food-portions-5plus.svg?ixlib=js-3.2.1&w=96&h=56&s=e38d13ad266703e724dea86436a2337c",
    },
  },
  {
    value: "PORTIONS_LONG",
    label: "A two line copy option",
    image: {
      id: "portions_long",
      uri: "https://yulife-local.imgix.net/journeys/health-questionnaire/answer-food-portions-5plus.svg?ixlib=js-3.2.1&w=96&h=56&s=e38d13ad266703e724dea86436a2337c",
    },
  },
  {
    value: "PORTIONS_SHORT",
    label: "Short option",
    image: {
      id: "portions_short",
      uri: "https://yulife-local.imgix.net/journeys/health-questionnaire/answer-food-portions-5plus.svg?ixlib=js-3.2.1&w=96&h=56&s=e38d13ad266703e724dea86436a2337c",
    },
  },
];

const meta: Meta<typeof ContentItemImageChoice> = {
  component: ContentItemImageChoice,
  title: "Design System/SDUI/ContentItemImageChoice",
  tags: ["autodocs"],
  parameters: {},
  args: {
    id: "5",
    answerKey: "answerKey",
    columns: 2,
    options,
    value: { PORTIONS_0: true },
    styles: [{ property: "width", value: "320" }],
    labelTextType: "b2",
    textStyles: [],
    rowStyles: [],
    onChange: () => {
      /* */
    },
  },
};

export default meta;

export const Default: Story = {
  args: {},
};

export const SingleSelection: Story = {
  args: {
    multiSelect: false,
  },
};

export const SmallImageGrid: Story = {
  args: {
    multiSelect: true,
    hideCheckbox: true,
    columns: 3,
    options: options.map((option) => ({
      ...option,
      label: undefined as string,
    })),
    imageStyles: [
      {
        property: "width",
        value: "48",
      },
      {
        property: "height",
        value: "48",
      },
    ],
  },
};
