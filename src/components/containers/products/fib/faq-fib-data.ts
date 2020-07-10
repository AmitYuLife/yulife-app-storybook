export interface IFibFAQ {
  id: string;
  question: string;
  answer: string;
}

export default [
  {
    id: "lump-sum",
    question: "What is a lump sum?",
    answer:
      "The lump sum is a one time payment equating to the amount of total benefit that will be paid to your loved ones following a successful claim. This amount is calculated as your chosen percentage of your monthly salary multiplied by the remaining term (in months) left on the policy. ",
  },
  {
    id: "how-lump-sum-calculated",
    question: "How is the lump sum calculated?",
    answer: `This policy will pay out a lump sum to your loved ones if you die during the term of the policy. The amount that will be paid to your loved ones is calculated as follows:\n\n
Your chosen percentage multiplied by your monthly salary at the start of the policy multiplied by the remaining term (number of months) left on the policy. This amount reduces as the term of the policy reduces.\n\n
The amount that would be paid out to your loved ones decreases every month. Therefore the older you get, the lower the lump sum would be. The value of the lump sum reduces to zero at the end of the term of the policy. reduces to zero at the end of the term of the policy.`,
  },
  {
    id: "policy-pay",
    question: "When does the policy pay?",
    answer:
      "This policy pays if you die as a result of an accident, ill health or natural causes during the term of the policy.",
  },
  {
    id: "policy-not-pay",
    question: "When does the policy not pay?",
    answer: `The insurance benefits will not pay out if:

- You give us inaccurate, incomplete or false information when purchasing the policy or completing the sign-up journey which would have affected our decision to offer the relevant insurance cover, or would have led us to offer it with different conditions;
- The person paying the premiums has stopped paying for the protection or has defaulted on the payment of another amount due to yulife and we have cancelled the policy;
- The client or their legal representatives or doctors they have attended do not give us medical or other evidence that we ask for at the time of the claim.
    `,
  },
  {
    id: "salary-increase",
    question: "What if my salary increases?",
    answer:
      "Your salary and percentage are chosen and fixed at the time you take out the policy. There is no automatic increase in your cover and premium as a result of inflation or a pay rise. However, you can increase your cover when certain life events happen, for example marriage, buying a mortgage etc. For more details, visit this section:",
  },
  {
    id: "policy-end",
    question: "When does my policy end?",
    answer: `The policy will end the earliest of 40 years from inception or on the policy anniversary following your 70th birthday.\n\n
The policy is designed to cover most people until they would have retired. To simplify things, if you are over 30 we have set this to be the policy anniversary after your 70th birthday. This means that you could end up being covered for a few years after you reach retirement. We cannot provide a term that is longer than 40 years. So if you are lucky enough to be under 30, your cover will end after 40 years from the date you bought it.`,
  },
  {
    id: "policy-valid",
    question: "How long is my policy valid for?",
    answer:
      "The term is the duration the policy will be valid. The policy term will end on the next Policy Anniversary Date following your 70th birthday. For this product, the minimum term is 5 years and maximum term is 40 years. You can cancel the policy at any time, if you so wish to.",
  },
  {
    id: "medical-evidence",
    question: "What happens if YuLife needs medical evidence?",
    answer: `Once you have completed an application we will tell you whether we need additional medical evidence. We will insure you for accidental death benefit for free up until we process your application. This would be until we accept, decline or postpone your policy, for up to 90 days.

- If you die due to an accident during this time, we’ll pay your loved ones your lump sum up to a maximum benefit of £300,000
- The amount is paid out if the insured person sustains bodily injury which is the only reason for the death and the person dies within 90 days of the incident.`,
  },
  {
    id: "i-cancel-policy",
    question: "Can I cancel my policy?",
    answer: `Yes, you can by simply contacting Yulife at changeMe@yulife.com. If this cancellation is within 30 days of the policy being purchased, the exercise by the person paying the premiums of their right to cancel will be effective immediately and we will refund the premiums already paid.\n\n
All other cancellations by the person paying the premiums will be effective on the date the next premium payment is due. Except as otherwise agreed in writing, we will not refund any previously paid premiums in these circumstances.`,
  },
  {
    id: "yu-cancel-policy",
    question: "Can YuLife cancel my policy?",
    answer: `Yulife may cancel a policy in any of the following circumstances:\n\n
- The person paying the premiums fails to keep up with their payments (see the section above for further details);
- The client or the person paying the premium acts fraudulently, or deliberately provides untrue, inaccurate or misleading information.
- When making a purchase, completing the sign-up journey, making a claim or taking part in the Yulife wellbeing benefits; or Yulife suspects a client of fraudulent activity or other financial crime relating to their policy.

In such circumstances, the cancellation will be effective immediately and no refunds will be due.`,
  },
  {
    id: "verify-medical-questions",
    question: "Can YuLife verify your medical questions?",
    answer:
      "Yulife reserves the right to ask you for access to your medical records from your GP to verify that the questions we asked in the underwriting process have been answered accurately.",
  },
  {
    id: "increase-cover",
    question: "Can I increase my cover in future?",
    answer: `Yes, you have the option to increase your amount of cover without the need for further medical questions in the event of:

- Change in marital status
- Increase in mortgage
- Change in salary due to a new job or promotion
- Birth of your child or legal adoption

**The amount you can increase your cover by is limited to the following:**\n
*Whichever is lower:*\n
- £1050 x remaining term in months
- Percentage increase in monthly mortgage
- Percentage increase in your monthly income up to a maximum of 10%

**When you can’t change your cover amount:**

- If you are older than 55
- If you are diagnosed with or receiving medical treatment for a terminal illness`,
  },
];
