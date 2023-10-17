import type { Meta, StoryObj } from "@storybook/react";
import { ContentItemFaqs } from "./contentItemFaqs";

type Story = StoryObj<typeof ContentItemFaqs>;

const meta: Meta<typeof ContentItemFaqs> = {
  component: ContentItemFaqs,
  title: "Design System/SDUI/ContentItemFaqs",
  tags: ["autodocs"],
  parameters: {},
  args: {
    id: "2",
    headingImage: {
      id: "1",
      image: {
        id: "personalProducts/yugi_faq.png",
        uri: "https://yulife-develop.imgix.net/personalProducts/yugi_faq.png?ixlib=js-3.2.1&fit=clip&fm=png&s=8faaf0951e1b14bcc826d31425221c57",
      },
    },
    headingMarkdown: {
      id: "2",
      markdown: "Frequently Asked Questions.",
      parsedMarkdown: "Frequently Asked Questions.",
    },
    faqs: [
      {
        id: "why_yu_life",
        accessButtonText: "Why YuLife?",
        content: {
          id: "faq1-content",
          markdown:
            "At YuLife, we're transforming products once focused on death and illness to ones that inspire life and reward living. We want to help you live a longer, happier, healthier life - and we've got your back if something unexpected happens.\n\nWe think life protection is one of the most important products you'll ever own. So we have made ours easy to understand, easy to take out, and (most importantly) easy to claim on should it ever be needed.\n\nWe harness intuitive tech to give our members great rewards for doing healthy stuff because we believe in creating a virtuous cycle of inspiration, motivation, and healthy living. As an employee of a company that has a policy with us, you have access to our mobile app and rewards program. \n\nThese benefits will be retained if you leave your employer and continue to pay your premiums for this personal life insurance cover.",
          parsedMarkdown:
            "At YuLife, we're transforming products once focused on death and illness to ones that inspire life and reward living. We want to help you live a longer, happier, healthier life - and we've got your back if something unexpected happens.\n\nWe think life protection is one of the most important products you'll ever own. So we have made ours easy to understand, easy to take out, and (most importantly) easy to claim on should it ever be needed.\n\nWe harness intuitive tech to give our members great rewards for doing healthy stuff because we believe in creating a virtuous cycle of inspiration, motivation, and healthy living. As an employee of a company that has a policy with us, you have access to our mobile app and rewards program. \n\nThese benefits will be retained if you leave your employer and continue to pay your premiums for this personal life insurance cover.",
          title: "Why YuLife?",
          styles: [
            {
              property: "paddingLeft",
              value: "24",
            },
            {
              property: "paddingRight",
              value: "24",
            },
          ],
        },
        links: null,
      },
      {
        id: "should_i_consider_life_insurance",
        accessButtonText: "Should I consider Life Insurance?",
        content: {
          id: "faq2-content",
          markdown:
            "Our personal life insurance provides a regular income for your loved ones should you pass away or get diagnosed with a terminal illness. \n\nUnlike other life insurances, our product is linked to your monthly salary. \n\nNo one knows better than you the impact your salary has each month, and what your monthly expenses are. You also know how much you're able to save and what you're saving for, be that a holiday, emergency money, an expensive item, or peace of mind for the future. If you were to pass away your income would stop coming in - that's where YuLife's personal life insurance comes in. \n\nShould you pass away while employed and your employer provides a group life insurance benefit (or ‘death in service' as it's sometimes known), your employer's group life insurance would pay out to your beneficiaries. While group life insurance is a fantastic benefit, it typically pays out a lump sum. Although it can seem like a large sum of money, it may not be enough to last your loved ones in the long term. \n\nIt may be that you also already have life insurance that pays off some or all of your mortgage were you to pass away. \n\nWhile both of these types of life insurance are really important and play an important part in you and your family's financial wellbeing, YuLife's personal life insurance allows you to protect your loved ones financially by providing a set income each month for the remainder of the policy which can be up to 40 years or until you would have been 70 years old, which ever is sooner. This could be used to pay for monthly expenses or to save and plan for their future.\n\nThe future is uncertain, but knowing that those you leave behind will be supported by a regular income can give you peace of mind should the worst happen.",
          parsedMarkdown:
            "Our personal life insurance provides a regular income for your loved ones should you pass away or get diagnosed with a terminal illness. \n\nUnlike other life insurances, our product is linked to your monthly salary. \n\nNo one knows better than you the impact your salary has each month, and what your monthly expenses are. You also know how much you're able to save and what you're saving for, be that a holiday, emergency money, an expensive item, or peace of mind for the future. If you were to pass away your income would stop coming in - that's where YuLife's personal life insurance comes in. \n\nShould you pass away while employed and your employer provides a group life insurance benefit (or ‘death in service' as it's sometimes known), your employer's group life insurance would pay out to your beneficiaries. While group life insurance is a fantastic benefit, it typically pays out a lump sum. Although it can seem like a large sum of money, it may not be enough to last your loved ones in the long term. \n\nIt may be that you also already have life insurance that pays off some or all of your mortgage were you to pass away. \n\nWhile both of these types of life insurance are really important and play an important part in you and your family's financial wellbeing, YuLife's personal life insurance allows you to protect your loved ones financially by providing a set income each month for the remainder of the policy which can be up to 40 years or until you would have been 70 years old, which ever is sooner. This could be used to pay for monthly expenses or to save and plan for their future.\n\nThe future is uncertain, but knowing that those you leave behind will be supported by a regular income can give you peace of mind should the worst happen.",
          title: "Should I consider Life Insurance?",
          styles: [
            {
              property: "paddingLeft",
              value: "24",
            },
            {
              property: "paddingRight",
              value: "24",
            },
          ],
        },
        links: null,
      },
      {
        id: "will_i_need_a_medical_exam",
        accessButtonText: "Will I need a medical exam?",
        content: {
          id: "faq3-content",
          markdown:
            "YuLife may need to arrange a medical assessment for you to complete the application for our personal life insurance, which you will be made aware of before you are given the option to purchase.\n\nOnce you have completed an application we will tell you whether we need additional medical evidence. We will insure you for accidental death benefit for free up until we process your application. This would be until we accept, decline, or postpone your policy, for up to 90 days. \n\n• If you die due to an accident during this time, we'll pay your loved ones your lump sum up to a maximum benefit of £300,000. \n• The amount is paid out if the insured person sustains bodily injury which is the only reason for the death and the person dies within 90 days of the incident.\n\nYuLife also reserves the right to ask you for access to your medical records from your GP to verify that the questions we asked in the underwriting process have been answered accurately, even if we did not require this at the time of purchase.",
          parsedMarkdown:
            "YuLife may need to arrange a medical assessment for you to complete the application for our personal life insurance, which you will be made aware of before you are given the option to purchase.\n\nOnce you have completed an application we will tell you whether we need additional medical evidence. We will insure you for accidental death benefit for free up until we process your application. This would be until we accept, decline, or postpone your policy, for up to 90 days. \n\n• If you die due to an accident during this time, we'll pay your loved ones your lump sum up to a maximum benefit of £300,000. \n• The amount is paid out if the insured person sustains bodily injury which is the only reason for the death and the person dies within 90 days of the incident.\n\nYuLife also reserves the right to ask you for access to your medical records from your GP to verify that the questions we asked in the underwriting process have been answered accurately, even if we did not require this at the time of purchase.",
          title: "Will I need a medical exam?",
          styles: [
            {
              property: "paddingLeft",
              value: "24",
            },
            {
              property: "paddingRight",
              value: "24",
            },
          ],
        },
        links: null,
      },
      {
        id: "what_if_my_salary_increases",
        accessButtonText: "What if my salary increases?",
        content: {
          id: "faq4-content",
          markdown:
            "Your salary and percentage are chosen and fixed at the time you take out the policy. There is no automatic increase in your cover and premium as a result of inflation or a pay rise. \n\nHowever, you can increase your cover when certain life events happen, for example marriage, an increase in mortgage payments etc. within the terms contained in the ‘How can I adjust my policy?' FAQ.",
          parsedMarkdown:
            "Your salary and percentage are chosen and fixed at the time you take out the policy. There is no automatic increase in your cover and premium as a result of inflation or a pay rise. \n\nHowever, you can increase your cover when certain life events happen, for example marriage, an increase in mortgage payments etc. within the terms contained in the ‘How can I adjust my policy?' FAQ.",
          title: "What if my salary increases?",
          styles: [
            {
              property: "paddingLeft",
              value: "24",
            },
            {
              property: "paddingRight",
              value: "24",
            },
          ],
        },
        links: [
          {
            id: "faq4-l1",
            contentItemDocumentId: "how_can_i_adjust_my_policy",
            label: "How can I adjust my policy?",
          },
        ],
      },
      {
        id: "how_can_i_adjust_my_policy",
        accessButtonText: "How can I adjust my policy?",
        content: {
          id: "faq5-content",
          markdown:
            "You have the option to increase your amount of cover without the need for further medical questions in the event of:\n\n• Change in marital status\n• Increase in mortgage\n• Birth of your child or legal adoption\n• Change in salary due to a new job or promotion\n\nThe amount you can increase your cover by is limited to the following:\n\nWhichever is lower:\n• £1050 x remaining term in months\n• Percentage increase in monthly mortgage\n• Percentage increase in your monthly income up to a maximum of 10%\n\nWhen you can't change your cover amount:\n\n• If you are older than 55\n• If the policy started after your 45th birthday\n• If you are diagnosed with or receiving medical treatment for a terminal illness",
          parsedMarkdown:
            "You have the option to increase your amount of cover without the need for further medical questions in the event of:\n\n• Change in marital status\n• Increase in mortgage\n• Birth of your child or legal adoption\n• Change in salary due to a new job or promotion\n\nThe amount you can increase your cover by is limited to the following:\n\nWhichever is lower:\n• £1050 x remaining term in months\n• Percentage increase in monthly mortgage\n• Percentage increase in your monthly income up to a maximum of 10%\n\nWhen you can't change your cover amount:\n\n• If you are older than 55\n• If the policy started after your 45th birthday\n• If you are diagnosed with or receiving medical treatment for a terminal illness",
          title: "How can I adjust my policy?",
          styles: [
            {
              property: "paddingLeft",
              value: "24",
            },
            {
              property: "paddingRight",
              value: "24",
            },
          ],
        },
        links: null,
      },
      {
        id: "can_i_cancel_my_policy",
        accessButtonText: "Can I cancel my policy?",
        content: {
          id: "faq6-content",
          markdown:
            "You can cancel any time by chatting with us.\n\nIf this cancellation is within 30 days of the policy being purchased you will receive a refund of the premiums already paid. \n\nCancellations outside the first 30 days will be effective on the date the next premium payment is due. Except as otherwise agreed in writing, we will not refund any previously paid premiums in these circumstances.",
          parsedMarkdown:
            "You can cancel any time by chatting with us.\n\nIf this cancellation is within 30 days of the policy being purchased you will receive a refund of the premiums already paid. \n\nCancellations outside the first 30 days will be effective on the date the next premium payment is due. Except as otherwise agreed in writing, we will not refund any previously paid premiums in these circumstances.",
          title: "Can I cancel my policy?",
          styles: [
            {
              property: "paddingLeft",
              value: "24",
            },
            {
              property: "paddingRight",
              value: "24",
            },
          ],
        },
        links: null,
      },
      {
        id: "does_this_effect_group_life_cover",
        accessButtonText: "Does this affect my Group Life Insurance?",
        content: {
          id: "faq7-content",
          markdown:
            "This life insurance is separate to the life insurance, or death in service, provided by your employer. This is your own personal insurance, and you own it for as long as you keep making your monthly payments.\n\nThere is no conflict between the life insurance paid out by your employer and this life insurance. Were you to pass away, any life insurance provided by your employer would payout, as would this life insurance.\n\nIf you were to leave your current employer, you would still own this personal life insurance, take it with you, and keep the YuLife app and associated health & wellbeing benefits wherever you go.\n\nWe will not share any of your data, or the fact that you own this life insurance, with your employer.",
          parsedMarkdown:
            "This life insurance is separate to the life insurance, or death in service, provided by your employer. This is your own personal insurance, and you own it for as long as you keep making your monthly payments.\n\nThere is no conflict between the life insurance paid out by your employer and this life insurance. Were you to pass away, any life insurance provided by your employer would payout, as would this life insurance.\n\nIf you were to leave your current employer, you would still own this personal life insurance, take it with you, and keep the YuLife app and associated health & wellbeing benefits wherever you go.\n\nWe will not share any of your data, or the fact that you own this life insurance, with your employer.",
          title: "Does this affect my Group Life Insurance?",
          styles: [
            {
              property: "paddingLeft",
              value: "24",
            },
            {
              property: "paddingRight",
              value: "24",
            },
          ],
        },
        links: null,
      },
    ],
  },
};

export default meta;

export const Default: Story = {
  args: {},
};
