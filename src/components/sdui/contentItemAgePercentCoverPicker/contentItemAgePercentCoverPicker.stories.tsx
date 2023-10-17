import type { Meta, StoryObj } from "@storybook/react";
import { ContentItemAgePercentCoverPicker } from "./contentItemAgePercentCoverPicker";
import { ContentItemButtonSize, ContentItemButtonType, CoverType } from "@graphql/_core/schema/globalTypes";

type Story = StoryObj<typeof ContentItemAgePercentCoverPicker>;

const meta: Meta<typeof ContentItemAgePercentCoverPicker> = {
  component: ContentItemAgePercentCoverPicker,
  title: "Design System/SDUI/ContentItemAgePercentCoverPicker",
  tags: ["autodocs"],
  parameters: {},
  args: {
    onChangePolicyEndAge: () => {
      /* TODO: Implement mock function */
    },
    onChangeSalaryPercent: () => {
      /* TODO: Implement mock function */
    },
    onChangeCover: () => {
      /* TODO: Implement mock function */
    },
    onChangeMaxSalaryPercent: () => {
      /* TODO: Implement mock function */
    },
    salaryPercent: 10,
    policyEndAge: 75,
    coverType: CoverType.epic,
    onToggleAgeScroller: () => {
      /* TODO: Implement mock function */
    },

    contentItemAgePercentCoverPickerOptions: [
      {
        age: 20,
        contentItemAgePercentCoverPickerAgeOptions: [
          {
            contentItemAgePercentCoverPickerPercentOptionValue: 7,
            cost: "£1,000",
            monthlyPayout: "£1,000",
            coverType: CoverType.common,
          },
        ],
      },
      {
        age: 60,
        contentItemAgePercentCoverPickerAgeOptions: [
          {
            contentItemAgePercentCoverPickerPercentOptionValue: 10,
            cost: "£1,500",
            monthlyPayout: "£1,500",
            coverType: CoverType.epic,
          },
        ],
      },
      {
        age: 75,
        contentItemAgePercentCoverPickerAgeOptions: [
          {
            contentItemAgePercentCoverPickerPercentOptionValue: 12,
            cost: "£2,000",
            monthlyPayout: "£2,000",
            coverType: CoverType.rare,
          },
        ],
      },
    ],

    answerKeyCoverTypeDefaultValue: CoverType.epic,
    userAge: 35,
    id: "agePercentCoverPicker",
    percentsToDefault: [7, 10, 12],
    topHeading: "What % of your salary would you like covered?",
    costPayoutBenefitHeading: "In the event of your passing, we'll pay out:",
    costPayoutBenefitPayoutSchedule: "a month until",
    costPayoutBenefitCostSchedule: "per month",
    ageText: {
      id: "age-text",
      title: "Your policy will stop when you are",
      perkId: null,

      markdown: "Your policy is set to end when you are **${age} years old****. To amend click here",
      parsedMarkdown: "Your policy is set to end when you are **${age} years old****. To amend click here",
      markdownContainerStyle: [
        { property: "marginTop", value: "16" },
        { property: "marginHorizontal", value: "40" },
      ],
      markdownStyles: '{"text":{"textAlign":"center"}}',
      styles: [{ property: "justifyContent", value: "center" }],
    },
    restrictedPercentInfoCardText: {
      id: "restrictedPercentInfoCardText",
      perkId: null,
      title: "Based on your info you can only have ${percent}",
      markdown:
        "Based on the age you would like your policy to stop, the maximum % salary we can cover is ${maxPercent}",
      parsedMarkdown:
        "Based on the age you would like your policy to stop, the maximum % salary we can cover is ${maxPercent}",
      markdownContainerStyle: [
        { property: "marginTop", value: "16" },
        { property: "marginHorizontal", value: "40" },
      ],
      markdownStyles: '{"text":{"textAlign":"center"}}',
      styles: [{ property: "justifyContent", value: "center" }],
    },
    answerKeyPercent: "selectedPremium",
    answerKeyPercentDefaultValue: 25,
    answerKeyAge: "ageToEnd",

    answerKeyAgeDefaultValue: 35,
    answerKeyCoverType: "coverType",
    answerKeyMaxSalaryPercent: "maxAllowedCoverValue",
    answerKeyMaxSalaryPercentDefaultValue: 75,
    agePickerButtonRightIconImageUrl:
      "https://yulife-local.imgix.net/content/icons/edit.svg?ixlib=js-3.2.1&w=72&h=72&s=2f8ac0d34e654c5111c471fa75be4bed",
    customCover: {
      contentItemCoverPickerCustomCoverTitle: "Choose your custom cover",
      button: {
        id: "selectcustompackagebutton",
        label: "Or choose a custom cover (%)",
        icon: {
          id: "https://yulife-local.imgix.net/duotone/custom-cover.svg?ixlib=js-3.2.1&w=344&h=370&s=00e11858fb53e6addd4d843bfef4da34",
          uri: "https://yulife-local.imgix.net/duotone/custom-cover.svg?ixlib=js-3.2.1&w=344&h=370&s=00e11858fb53e6addd4d843bfef4da34",
        },
        contentItemButtonRightIcon: {
          id: "https://yulife-develop.imgix.net/content/icons/right_arrow.svg?ixlib=js-3.2.1&fit=clip&fm=png&s=da1b43660785c6b3a238491409ed856c",
          uri: "https://yulife-develop.imgix.net/content/icons/right_arrow.svg?ixlib=js-3.2.1&fit=clip&fm=png&s=da1b43660785c6b3a238491409ed856c",
        },
        buttonType: ContentItemButtonType.tertiary,
        contentItemButtonUri:
          "https://yulife-develop.imgix.net/content/icons/right_arrow.svg?ixlib=js-3.2.1&fit=clip&fm=png&s=da1b43660785c6b3a238491409ed856c",
        value: "Test",
        disabledState: null,
        borderColor: null,
        backgroundColor: null,
        textColor: null,
        containerStyles: [{ property: "backgroundColor", value: "#FAFAFE" }],
        onPress: null,
        event: null,
        styles: [
          { property: "marginTop", value: "24" },
          { property: "paddingHorizontal", value: "20" },
        ],
        buttonSize: ContentItemButtonSize.Fill,
      },
      itemsPicker: {
        id: "contentItemScrollableItemsPicker",
        styles: [{ property: "marginTop", value: "24" }],
        range: {
          max: 75,
          min: 15,
          step: 1,
        },
        coverMap: [
          { coverType: CoverType.common, max: 49 },
          { coverType: CoverType.rare, max: 74 },
          { coverType: CoverType.epic, max: 75 },
        ],
        answerKey: "selectedPremium",
        styleVariants: [
          {
            id: "common",
            minVisibleIndex: null,
            maxVisibleIndex: 35,
            item: {
              color: "#36CB95",
            },
            overlay: {
              highlightLabel: "%",
              highlightLabelColor: "#36CB95",
              overlayTitle: "Common",
              backdropStyles: [
                {
                  property: "backgroundColor",
                  value: "#EFFBF7",
                },
                {
                  property: "borderColor",
                  value: "#36CB95",
                },
              ],
              overlayTitleWrapperStyles: [
                {
                  property: "backgroundColor",
                  value: "#36CB95",
                },
              ],
            },
          },
          {
            id: "rare",
            minVisibleIndex: 25,
            maxVisibleIndex: 50,
            item: {
              color: "#569DE9",
            },
            overlay: {
              highlightLabel: "%",
              highlightLabelColor: "#569DE9",
              overlayTitle: "Rare",
              backdropStyles: [
                {
                  property: "backgroundColor",
                  value: "#F1F7FD",
                },
                {
                  property: "borderColor",
                  value: "#569DE9",
                },
              ],
              overlayTitleWrapperStyles: [
                {
                  property: "backgroundColor",
                  value: "#569DE9",
                },
              ],
            },
          },

          {
            id: "epic",
            minVisibleIndex: 30,
            maxVisibleIndex: null,
            item: {
              color: "#956AFF",
            },
            overlay: {
              highlightLabel: "%",
              highlightLabelColor: "#956AFF",
              overlayTitle: "Epic",
              backdropStyles: [
                {
                  property: "backgroundColor",
                  value: "#F7F3FF",
                },
                {
                  property: "borderColor",
                  value: "#956AFF",
                },
              ],
              overlayTitleWrapperStyles: [
                {
                  property: "backgroundColor",
                  value: "#956AFF",
                },
              ],
            },
          },
        ],
      },
    },
  },
};

export default meta;

export const Default: Story = {
  args: {},
};
