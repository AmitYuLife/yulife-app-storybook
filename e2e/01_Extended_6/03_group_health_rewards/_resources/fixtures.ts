import moment from "moment";
import { GHI_PAGE_INFO, GHI_REWARD_CLAIM_PAGE_DETAILS, GHI_TEASE_PAGE_DETAILS, GHI_VOUCHER_LIST_DETAILS, IMPORTANT_NOTES_PAGE_DETAILS } from "./types";

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

export const LIVING_DNA_GHI_REWARDS_TEASE_PAGE_DETAILS : GHI_TEASE_PAGE_DETAILS = {
  topImageUrl: "https://yulife-develop.imgix.net/reward/teaser/living-dna-2023-07-24.png?ixlib=js-3.2.1&fm=png&w=555&s=54ed7a3ac61216cdea3068b68978f4cf",
  headerText: "Complete Daily Quests to Unlock Insights Into Your DNA",
  description: [
      "Gain insights with a free Living DNA test kit for ancestry and wellbeing.",
      "Unlock your body’s response to nutrients and exercise, personality traits determined by genes, and even interesting ancestral connections you’ve never known before — all within a swab of your cheek."
  ]
}

export const BUPA_GHI_REWARDS_TEASE_PAGE_DETAILS : GHI_TEASE_PAGE_DETAILS = {
  topImageUrl: "https://yulife-develop.imgix.net/reward/teaser/bupa-2023-07-24.png?ixlib=js-3.2.1&fm=png&w=555&s=884d67bde90387029b25b36ed8cd5ae5",
  headerText: "Complete Daily Quests to Unlock Your Health Assessment",
  description: [
      "Benefit from a free Bupa Be.Motivated in-person health assessment.",
      " Start impacting your future self with a one hour health check to outline your physical and mental wellbeing. Then, receive a year’s worth of lifestyle coaching and behaviour change support!"
  ]
}

export const GARMIN_GHI_REWARDS_TEASE_PAGE_DETAILS : GHI_TEASE_PAGE_DETAILS = {
  topImageUrl: "https://yulife-develop.imgix.net/reward/teaser/garmin-2023-07-24.png?ixlib=js-3.2.1&fm=png&w=555&s=0823079e15cf748fbf93a74613673909",
  headerText: "Complete Daily Quests to Unlock Your Fitness Accessories*",
  description: [
      "Track your fitness goals with a free Garmin Forerunner 55 smartwatch, and feel motivated to stay active every single day.",
      " *If you’d prefer not to have a smartwatch, £100 will be set aside for Great Ormond Street Hospital on your behalf instead."
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
  secondaryHeader: "What will you be tested for?",
  secondaryDescription: [
    "Ferritin C - understand your iron levels, which can affect your energy, sleep, or heart health.",
    "Cholesterol - understand your heart health through this essential fat.",
    "Liver profile - understand your liver health as an indicator for long-term health.",
    "Creatinine and eGFR - understand your kidney function, another indicator for long-term health.",
    "HbA1c - understand your diabetes risk with your average blood glucose levels."
  ],
  rewardStepsAmount: 9,
  rewardSteps: [
    "Claim your reward!",
    "You will be taken to Thriva’s website, thriva.co.",
    "Add the specialised-for-YuLife Thriva test kit to your cart.",
    "Secure your checkout by creating your Thriva account.",
    "Check your email, we’ve sent you the voucher code.",
    "At checkout, enter your unique voucher code to receive your free kit.",
    "Your test kit will arrive in 2 – 4 days!",
    "After you’ve posted the blood sample, the GP report will be accessible on your Thriva account after 2 working days.",
    "Enjoy your health insights!"
  ],
  buttonText: "Claim my kit",
  voucherDescription: "Insights on your health await! ",
  voucherClaimMessage: [
      "Make sure you claim ",
      " of your vouchers by "
  ],
  voucherExpiryYears: 1
}

export const LIVING_DNA_REWARDS_CLAIM_PAGE_DETAILS : GHI_REWARD_CLAIM_PAGE_DETAILS = {
  heading: "Living DNA",
  companyDescription: [
    "Have you ever wondered if you were part neanderthal; or why you just can’t seem to lose that belly fat; or why on a bad day, you can’t even remember what you ate for lunch? These seemingly unrelated things can actually be understood by analysing your DNA.",
    "Living DNA’s world-leading ancestry and wellbeing tests not only allows you to trace your family’s regional history around the world, but also brings to light aspects of yourself you didn’t know could be measured. Their tests uncover personality traits like memory processing and imagination; nutrigenomics like your response to carbohydrates or metabolism; fitness genomics like your fat loss response to exercise; and much more.",
    "Discover truths about your body and mind with Living DNA’s tests — and unlock your full potential!"
  ],
  rewardStepsAmount: 6,
  rewardSteps: [
    "Claim your reward!",
    "Fill in your details to get your Living DNA kit ordered, and your test will be shipped to your desired address.",
    "Your test kit will arrive in 3 – 5 days!",
    "Follow the simple instructions in your kit to activate your account and take your sample.",
    "After you’ve posted the sample, your DNA results will be accessible on your Living DNA account within 6 – 8 weeks of arrival at the lab (their scientists are hard at work processing thousands of years of DNA data for you).",
    "Enjoy insights on your DNA!",
  ],
  buttonText: "Claim my reward",
  voucherDescription: "Discover your DNA now! ",
  voucherClaimMessage: [
      "Make sure you claim ",
      " of your vouchers by "
  ],
  voucherExpiryYears: 0
}

export const BUPA_REWARDS_CLAIM_PAGE_DETAILS : GHI_REWARD_CLAIM_PAGE_DETAILS = {
  heading: "Health assessment",
  companyDescription: [
    "Life can get very busy — we hear ya — sometimes our health is the last thing on our minds. That’s why Bupa Be.Motivated brings the opportunity to you, to get ahead of your health. Not only will the assessment be comprehensive, the results from them will also be analysed and your next steps can be laid out for you. Your health advisor will also connect you with a centre nearest to you. ",
    "Take this opportunity to work health into your schedule, and form healthier habits. After all, we all want to live our best lives don’t we? ",
  ],
  rewardDescription: [
    "Congrats! You’ve unlocked a free in-person health assessment with Bupa Be.Motivated worth over £200.",
    "You are now entitled to a comprehensive one hour health check which includes 11 core tests. After which, a Bupa Be.Motivated health adviser will discuss with you how you can set lifestyle, health, and fitness goals based on your results. Even better, they will also provide lifestyle coaching and behaviour change support for a whole year. How grand!",
  ],
  secondaryHeader: "What Will You Be Tested For?",
  secondaryDescription: [
    "Height assessment ",
    "Weight assessment ",
    "Body mass index (BMI)",
    "Waist to height ratio",
    "Body fat percentage",
    "Estimated energy requirement ",
    "Blood pressure test in both arms ",
    "Mobility and flexibility review",
    "Comprehensive cholesterol profile ",
    "Check for Diabetes - HbA1c (non-fasting blood sugar test)",
    "Lung age (if you’re a smoker or recent ex-smoker)"
  ],
  rewardStepsAmount: 5,
  rewardSteps: [
    "Claim your reward!",
    "Check your email, we’ve sent you the voucher code.",
    "Call the Bupa Clinics number on 0370 218 4965 to book your in-person health assessment.",
    "Mention that you are a YuLife member, and make sure you give the consultant your unique voucher number (in your email) to get your health assessment for free. Your membership details can be found in your Bupa Touch account.",
    "Enjoy your free in-person health assessment! (And, a healthy life ahead.)",
  ],
  buttonText: "Claim my voucher",
  voucherDescription: "Be motivated to get your health assessed! ",
  voucherClaimMessage: [
      "Make sure you claim ",
      " of your vouchers by "
  ],
  voucherExpiryYears: 1
}

export const GARMIN_REWARDS_CLAIM_PAGE_DETAILS : GHI_REWARD_CLAIM_PAGE_DETAILS = {
  heading: "Garmin",
  companyDescription: [
    "Walking or running won’t be the only way you can maintain your fitness tracking. If you want to go for a swim, take a dance class, do some yoga, you will be able to track your fitness goals with ease with the Forerunner 55 smartwatch. (You will now also be able to track your steps from your desk to the kitchen — without having to bring your phone.) #you’rewelcome",
  ],
  rewardDescription: [
    "CONGRATULATIONS! ",
    "You’ve done it. You’ve unlocked a free Garmin smartwatch worth £179.99.",
    "This swanky timepiece comes in 4 colourways; can track your time, distance, pace, and speed, with a built in GPS; monitor your overall health and wellness with wrist-band heart rate and more; tracks more than just running with an array of built-in activity profiles; and much, much more. ",
    "OR",
    "If you'd prefer — and don't need a smartwatch — you can also choose to donate £100 to the children of Great Ormand Street Hospital (GOSH). You won't be able to claim the smartwatch at a later date after donating, but you'll be giving hundreds of children the chance to live to their full potential!"
  ],
  
  rewardStepsAmount: 6,
  rewardSteps: [
    "Make your selection of a Garmin smartwatch or GOSH donation by claiming your reward!",
    "Check your email, we sent you something! (It’s the voucher code.)",
    "Head to Garmin’s website, www.garmin.com.",
    "Choose your Garmin Forerunner 55 colour way. ",
    "At checkout, enter your unique voucher code. ",
    "Enjoy your Garmin Forerunner 55 Smartwatch free of charge!"
  ],
  buttonText: "Claim my voucher",
  voucherDescription: "Get your Garmin!",
  voucherClaimMessage: [
      "Make sure you claim ",
      " of your vouchers by "
  ],
  voucherExpiryYears: 1
}

export const THRIVA_IMPORTANT_NOTES_DETAILS: IMPORTANT_NOTES_PAGE_DETAILS = {
  heading: "Your Thriva Blood Test Kit Awaits",
  subheadings: [
    "Ready to get insights on your health?",
    "We just need a few details from you."
    ],
  importantNotes: [
    "Important points to note:",
    "This is a take-home blood test kit, you will be conducting the test at home and sending in the results to Thriva’s experts. If blood gives you the jitters, do try to have a loved one with you when you take the test.",
    "You can only use the test kit on yourself. Resale of this kit is not allowed under any circumstances.",
    "You can only claim one test kit per reward year. The next test kit will be available in the next reward year. For more types of tests, you can visit Thriva’s website.",
    "Should you have any complaints or comments on the kit, YuLife will happily forward them on your behalf to Thriva’s experts. YuLife is not responsible for the manufacturing, distribution, warranty, or returns of Thriva blood test kits beyond the point of claim — but we’ll do our best to help if we can!"
    ]
}

export const LIVING_DNA_IMPORTANT_NOTES_DETAILS: IMPORTANT_NOTES_PAGE_DETAILS = {
  heading: "Your Living DNA Test Kit Awaits",
  subheadings: [
    "Ready to get insights on your DNA?",
    "We just need a few details from you."
    ],
  importantNotes: [
    "Important points to note:",
    "This is a take-home DNA test kit. You will be conducting the test at home — it’s a cheek swab — and sending in the results to Living DNA’s experts.",
    "You can only use the test kit on yourself. Resale of this kit is not allowed under any circumstances.",
    "You can only claim one test kit this reward year. The next test kit will be available 3 reward years later. For more types of tests, you can visit Living DNA’s website.",
    "Should you have any complaints or comments on the kit, YuLife will happily forward them on your behalf to Living DNA’s experts. YuLife is not responsible for the manufacturing, distribution, warranty, or returns of Living DNA’s test kits beyond the point of claim — but we’ll do our best to help if we can!"
    ]
}