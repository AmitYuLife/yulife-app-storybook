import { GHI_SINGLE_VOUCHER_DETAILS } from "./types";

export const voucherText = (voucher: GHI_SINGLE_VOUCHER_DETAILS) => `£${voucher.value} Voucher - ${voucher.cost} YuCoin`

// rewards claim page - before unlock

export const paidBy = "Employer Scheme";
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

//rewards page

export const groupHealthRewardsHeading = "Group Health Rewards"
export const groupHealthRewardsCompleted = (completed: string) => `${completed} Rewards unlocked`
export const groupHealthRewardsDescription = "Unlock rewards by completing quests. The more levels you complete, the more rewards you will unlock.\n\n6 days left before it all resets, go go go!"
export const yugiRewardsImageURL = "https://yulife-develop.imgix.net/products/group/rewards/yugi-swipe-2023-07-18.svg?ixlib=js-3.2.1&h=444&w=387&s=0a699bce95b4beadf3b95f99ecfdd6e5"
export const groupHealthRewardsLockedImageURL = "https://yulife-develop.imgix.net/content/icons/lock.svg?ixlib=js-3.2.1&w=192&h=192&s=066080739af592173a3a631e3504fe8c"
export const groupHealthRewardsUnlockedImageURL = "https://yulife-develop.imgix.net/content/icons/chest.svg?ixlib=js-3.2.1&w=96&h=96&s=f298206b4d2b5507d96a6f563c226a33"

// rewards values and titles

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

// reward claim page - after unlock

export const yourRewardHeader = "Your Reward"
export const yourRewardJourneyHeader = "Your Reward Journey:"
export const questionHeader = "Have a question?"
export const questionDescription = "Chat to us through the app, or read more from our Help Centre."
export const helpCentre = "Help centre"
export const termsAndConditions = "Terms & Conditions"
export const rewardsPolicy = "Rewards Policy"
export const claimReward = "Claim my reward"

// important notes page

export const importantNotesHeaderImage = "https://yulife-develop.imgix.net/reward-claiming/intro-logo.svg?ixlib=js-3.2.1&w=960&h=672&s=e268f41154dbb95f1ab1bfa4cdadb25e"
export const importantNotesButtonText = "Fill in details"

// fill in details page

export const detailsPageHeading = "Help us get the test kit to you safely! Carefully fill in your details:"
export const thrivaDetailsGender = "Thriva's lab needs this to process your tests — we respect that your identifying gender might be different."

// generic details warnings

export const detailsCorrectWarningMessages = [
    "Wait! Please check that you have filled in your details correctly.",
    "\nYou will not be able to change them once you’ve submitted."
]
export const detailsCorrectWarningYugiImg = "https://yulife-develop.imgix.net/yugi/info-banner/info-2022-07-18.svg?ixlib=js-3.2.1&w=144&height=144&s=71154cfde1b87ec9d46e4d6c432b4b46"

// Kit ordered page

export const parcelImg = "https://yulife-develop.imgix.net/reward-claiming/shipment.svg?ixlib=js-3.2.1&w=672&h=546&s=eb52e3f40b29b599ad49f11f689d6a44"
export const kitOrderedSuccessButtonText = "Got it!"
export const thrivaSuccessHeader = "Your Thriva test kit is on its way!"
export const thrivaDeliveryMessages = [
    "Delivery can take around 3-5 working days.",
    "To track your kit delivery, check your email. We’ve sent you a link!"
]
export const livingDNASuccessHeader = "Your Living DNA test kit is on its way!"
export const livingDNADeliveryMessages = [
    "Delivery can take around 3-5 working days.",
    "Head over to your Living DNA rewards page to view the rest of your rewards journey!"
]

// email subjects

export const urbanMassageEmailSubject = "[detox] Your Urban Massage Voucher Awaits!"
export const bupaEmailSubject = "[detox] Your Bupa Be.Motivated Voucher Awaits!"
export const garminEmailSubject = "[detox] Your Garmin Voucher Awaits!"
export const thrivaEmailSubject = "[detox] Your Thriva Voucher Awaits!"

// sparkle animation

export const sparkleAnimation = "https://yulife-develop.imgix.net/products/group/rewards/card-stars.png?ixlib=js-3.2.1&s=bf4beba34d32a3c412a95c90caadb320"

