import moment from "moment";
import { GHI_PAGE_INFO, GHI_REWARD_CLAIM_PAGE_DETAILS, GHI_TEASE_PAGE_DETAILS, GHI_VOUCHER_LIST_DETAILS } from "./types";

export const GHI_REWARDS_PAGE_DETAILS_1: GHI_PAGE_INFO = {
  productId: "YUG1010107",
  startDate: moment().subtract(1, "y").format("DD/MM/YYYY"),
}

export const BOOTS_YORK_GHI_REWARDS_TEASE_PAGE_DETAILS : GHI_TEASE_PAGE_DETAILS = {
    topImageUrl: "https://yulife-develop.imgix.net/reward/teaser/boots-york-2023-07-21.png?ixlib=js-3.2.1&fm=png&w=555&s=deff6db337f6f43ec317b084d8332e74",
    headerText: "Complete Daily Quests to Unlock Boots and YorkTest",
    description: [
        "Prioritising your personal health is important. Care for your health and beauty with Boots vouchers, and understand your body’s food sensitivity with 40% off YorkTest food and intolerance testing."
    ]
}

export const URBAN_GHI_REWARDS_TEASE_PAGE_DETAILS : GHI_TEASE_PAGE_DETAILS = {
    topImageUrl: "https://yulife-develop.imgix.net/reward/teaser/urban-2023-07-24.png?ixlib=js-3.2.1&fm=png&w=555&s=de8774e562ddbaa34e07710adfda98d8",
    headerText: "Complete Daily Quests to Unlock Your Urban Massage Vouchers",
    description: [
        "De-stress with three £10 vouchers for Urban Massage packages of your choosing",
        "With Urban Massage's curated massage packages — including Thai, sports, and deep-tissue, among others — you can indulge in the rest and relaxation that you deserve."
    ]
}

export const THRIVA_GHI_REWARDS_TEASE_PAGE_DETAILS : GHI_TEASE_PAGE_DETAILS = {
  topImageUrl: "https://yulife-develop.imgix.net/reward/teaser/thriva-2023-07-24.png?ixlib=js-3.2.1&fm=png&w=555&s=2ad8f3ff6c9b55819d4e5d477b68a135",
  headerText: "Complete Daily Quests to Unlock Health Insights With Thriva",
  description: [
      "Enjoy Thriva’s at-home blood test kit for free.",
      "Gain health insights through Thriva’s bespoke blood test journey; Take their at-home test to discover multiple facets of your body’s current health status and receive GP advice from an NHS registered doctor."
  ]
}

export const BOOTS_REWARDS_CLAIM_PAGE_DETAILS : GHI_REWARD_CLAIM_PAGE_DETAILS = {
    heading: "Boots",
    companyDescription: [
      "You’ve been there; we’ve been there. Boots is the UK’s leading health and beauty retailer for a reason: they have everything you need, when you need it.",
      "With more than 2,200 stores ranging from local community pharmacies to large health and beauty stores, they reliably support the UK’s health and wellbeing needs — and they’re hard to miss (so don’t miss them)."
    ],
    rewardDescription: [
      "You did it! You unlocked the ability to exchange your well-earned YuCoin for Boots vouchers.",
      "The best part? This reward will remain unlocked every policy year from now on, looks like you’ll be in Boots near you a lot more than expected."
    ],
    rewardStepsAmount: 5,
    rewardSteps: [
      "Claim your reward!",
      "Receive your voucher code.",
      "Head to www.boots.com, and shop till your heart’s content.",
      "Upon checkout, enter the voucher code where it says, “offer code”.",
      "Enjoy your purchase and live well, for less."
    ],
    buttonText: "Claim my voucher",
    voucherExpiryYears: 2

}

export const YORK_REWARDS_CLAIM_PAGE_DETAILS : GHI_REWARD_CLAIM_PAGE_DETAILS = {
  heading: "YorkTest",
  companyDescription: [
    "We’ve all had our “bad body days”. You know, headaches, bloating, nausea, fatigue, seemingly out of nowhere? Well it turns out, you could have a food allergy or intolerance.",
    "You’re in luck though! YorkTest has us covered with comprehensive tests for food and allergies that take the guesswork out of your health and nutrition. It sure beats the old theory… that we’re just getting old."
  ],
  rewardDescription: [
    "Congratulations! You’ve unlocked 40% off YorkTest’s food intolerance or allergy tests.",
    "You can choose from YorkTest’s range of food and allergy tests; do them with your family members or partners too.",
    "Don’t worry, the kits are hassle free and easy to use.",
    "The best part? This reward will remain unlocked from now on, get ready for your health journey to be enhanced!"
  ],
  rewardStepsAmount: 6,
  rewardSteps: [
    "Claim your rewardi!",
    "You will be taken to YorkTest’s website, www.yorktest.com.",
    "Create your YorkTest account.",
    "Add your chosen test to your basket.",
    "At checkout, enter the voucher code ‘YU23LIFE’.",
    "Enjoy your 40% discount! (And figure out where that bloating comes from…)"
  ],
  buttonText: "Claim my voucher",
  voucherExpiryYears: 2

}

export const BOOTS_GHI_VOUCHER_DETAILS: GHI_VOUCHER_LIST_DETAILS = {
  vouchers: [
    {
      value: "5",
      cost: "4,130"
    },
    {
      value: "10",
      cost: "8,260"
    },
    {
      value: "15",
      cost: "12,390"
    }
  ]
}

export const URBAN_REWARDS_CLAIM_PAGE_DETAILS : GHI_REWARD_CLAIM_PAGE_DETAILS = {
    heading: "Urban",
    companyDescription: [
      "If you’ve ever wanted all your massage, beauty, osteopathy, physiotherapy, and pregnancy wellness needs to be met in a day, Urban massage can deliver! (Bet that’ll be a really relaxing day.)",
      "Urban Massage works with qualified mobile therapists of these respective disciplines, to deliver safe home treatment. If you ever have a bad day, Urban Massage Therapist to the rescue."
    ],
    rewardStepsAmount: 7,
    rewardSteps: [
      "Claim your reward!",
      "You will be taken to Urban Massages’s website, www.urban.co",
      "Create your Urban Massage account.",
      "Choose your desired package.",
      "Check your email inbox for your unique voucher code.",
      "At checkout, enter your unique voucher code.",
      "Enjoy your massage session."
    ],
    buttonText: "Claim my voucher",
    vouchers: true,
    voucherDescription: "You deserve to relax!",
    voucherClaimMessage: [
        "Make sure you claim ",
        " of your vouchers by "
    ],
    voucherExpiryYears: 1
}

export const THRIVA_REWARDS_CLAIM_PAGE_DETAILS : GHI_REWARD_CLAIM_PAGE_DETAILS = {
  heading: "Thriva",
  companyDescription: [
    "We know. A blood test can sound scary; but let’s be positive — it’s only a little finger prick. What you get in return are insights about your health that can help you make decisions for your future wellbeing. After all, prevention is a whole lot better than cure.",
  ],
  rewardDescription: [
    "Congratulations! You’ve unlocked a take-home blood test kit from Thriva worth £73.",
    "Of course, it doesn’t just stop there (that’d be silly). In return for your blood sample, you’ll get a GP report back.",
    "You’ll be able to access these documents through your Thriva account — which will be made on your behalf after filling in some details with us. (We’re making it as hassle free as possible, you’re welcome!)",
  ],
  secondaryHeader: "What Will You Be Tested For?",
  secondaryDescription: [
    "Ferritin C - understand your iron levels, which can affect your energy, sleep, or heart health.",
    "Cholesterol - understand your heart health through this essential fat.",
    "Liver profile - understand your liver health as an indicator for long-term health.",
    "Creatinine and eGFR - understand your kidney function, another indicator for long-term health.",
    "HbA1c - understand your diabetes risk with your average blood glucose levels."
  ],
  rewardStepsAmount: 7,
  rewardSteps: [
    "Claim your reward!",
    "Fill in your details to get your Thriva account set up, and your test will be shipped to your desired address.",
    "Check your email, we’ve sent you a link to Thriva’s website.",
    "Create your Thriva account.",
    "Your test kit will arrive in 3 – 5 days!",
    "After you’ve posted the blood sample, the GP report will be accessible on your Thriva account after 10 working days.",
    "Enjoy your health insights!"
  ],
  buttonText: "Claim my kit",
  vouchers: true,
  voucherDescription: "Insights on your health await! ",
  voucherClaimMessage: [
      "Make sure you claim ",
      " of your vouchers by "
  ],
  voucherExpiryYears: 1
}