import { GHI_SINGLE_VOUCHER_DETAILS } from "./types";

export const voucherText = (voucher: GHI_SINGLE_VOUCHER_DETAILS) => `£${voucher.value} Voucher - ${voucher.cost} YuCoin`

export const paidBy = "Employer Paid";
export const keyInfo = "Key Info";
export const coverlevel = "Cover Level";
export const startDateText = "Start date";
export const schemeNumber = "Scheme number"
export const coverFor = "What I'm covered for";
export const coverForWApos = "What I’m covered for";
export const howToClaim = "How to make a claim";
export const faq = "FAQs";
export const Bupa_markdown_1 = "This information is based on data we received from your company. Individual circumstances may vary. Please contact us if you have any questions."
export const Bupa_markdown_2 = "Policies paid for by your employer may have implications on your tax status and take-home pay."
export const rewards_exclusive_pill = "Health insurance exclusive"

export const groupHealthRewardsHeading = "Group Health Rewards"
export const groupHealthRewardsCompleted = (completed: string) => `${completed} Rewards unlocked`
export const groupHealthRewardsDescription = "Unlock rewards by completing quests. The more levels you complete, the more rewards you will unlock.\n\n6 days left before it all resets, go go go!"
export const yugiRewardsImageURL = "https://yulife-develop.imgix.net/products/group/rewards/yugi-swipe-2023-07-18.svg?ixlib=js-3.2.1&h=444&w=387&s=0a699bce95b4beadf3b95f99ecfdd6e5"
export const groupHealthRewardsLockedImageURL = "https://yulife-develop.imgix.net/content/icons/lock.svg?ixlib=js-3.2.1&w=192&h=192&s=066080739af592173a3a631e3504fe8c"
export const groupHealthRewardsUnlockedImageURL = "https://yulife-develop.imgix.net/content/icons/chest.svg?ixlib=js-3.2.1&w=96&h=96&s=f298206b4d2b5507d96a6f563c226a33"

export const groupHealthRewardProgressNames = [
    "Exclusive Discounts",
    "Urban Massage Vouchers",
    "Free Thriva Health Screening Kit",
    "Free Living DNA Test Kit",
    "Free In-person Health Assessment",
    "Free Garmin Smartwatch"
]

export const groupHealthRewardProgressLevels = [
    "5",
    "10",
    "50",
    "100",
    "150",
    "200"
]

export const yourRewardHeader = "Your Reward"
export const yourRewardJourneyHeader = "Your Reward Journey:"
export const questionHeader = "Have a question?"
export const questionDescription = "Chat to us through the app, or read more from our Help Centre."
export const helpCentre = "Help centre"
export const termsAndConditions = "Terms & Conditions"
export const rewardsPolicy = "Rewards Policy"
export const claimReward = "Claim my reward"