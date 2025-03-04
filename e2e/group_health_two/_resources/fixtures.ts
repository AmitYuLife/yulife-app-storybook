import moment from "moment";
import {
  CAROUSEL_CARD,
  GAME_CAROUSEL,
  GHI_PAGE_INFO,
  GHI_REWARD_CLAIM_PAGE_DETAILS,
  GHI_VOUCHER_LIST_DETAILS,
  IMPORTANT_NOTES_PAGE_DETAILS,
} from "./types";

export const GHI_REWARDS_PAGE_DETAILS_1: GHI_PAGE_INFO = {
  productId: "YUG1010107",
  startDate: moment().subtract(1, "y").format("DD/MM/YYYY"),
  membershipNumber: "12121212",
};

export const GHI_REWARDS_PAGE_DETAILS_2: GHI_PAGE_INFO = {
  productId: "YUG1010107",
  startDate: moment().subtract(1, "y").format("DD/MM/YYYY"),
};

export const BOOTS_REWARDS_CLAIM_PAGE_DETAILS: GHI_REWARD_CLAIM_PAGE_DETAILS = {
  heading: "Boots",
  companyDescription: [
    "You’ve been there; we’ve been there. Boots is the UK’s leading health and beauty retailer for a reason: they have everything you need, when you need it.",
    "With more than 2,200 stores ranging from local community pharmacies to large health and beauty stores, they reliably support the UK’s health and wellbeing needs — and they’re hard to miss (so don’t miss them).",
  ],
  rewardDescription: [
    "You did it! You unlocked the ability to exchange your well-earned YuCoin for Boots vouchers.",
    "The best part? This reward will remain unlocked every policy year from now on, looks like you’ll be in Boots near you a lot more than expected.",
  ],
  rewardStepsAmount: 5,
  rewardSteps: [
    "Claim your reward!",
    "Receive your voucher code.",
    "Head to www.boots.com, and shop till your heart’s content.",
    "Upon checkout, enter the voucher code where it says, “offer code”.",
    "Enjoy your purchase and live well, for less.",
  ],
  buttonText: "Claim my voucher",
  voucherExpiryYears: 2,
};

export const YORK_REWARDS_CLAIM_PAGE_DETAILS: GHI_REWARD_CLAIM_PAGE_DETAILS = {
  heading: "YorkTest",
  companyDescription: [
    "We’ve all had our “bad body days”. You know, headaches, bloating, nausea, fatigue, seemingly out of nowhere? Well it turns out, you could have a food allergy or intolerance.",
    "You’re in luck though! YorkTest has us covered with comprehensive tests for food and allergies that take the guesswork out of your health and nutrition. It sure beats the old theory… that we’re just getting old.",
  ],
  rewardDescription: [
    "Congratulations! You’ve unlocked 40% off YorkTest’s food intolerance or allergy tests.",
    "You can choose from YorkTest’s range of food and allergy tests; do them with your family members or partners too.",
    "Don’t worry, the kits are hassle free and easy to use.",
    "The best part? This reward will remain unlocked from now on, get ready for your health journey to be enhanced!",
  ],
  rewardStepsAmount: 6,
  rewardSteps: [
    "Claim your rewardi!",
    "You will be taken to YorkTest’s website, www.yorktest.com.",
    "Create your YorkTest account.",
    "Add your chosen test to your basket.",
    "At checkout, enter the voucher code ‘YU23LIFE’.",
    "Enjoy your 40% discount! (And figure out where that bloating comes from…)",
  ],
  buttonText: "Claim my voucher",
  voucherExpiryYears: 2,
};

export const BOOTS_GHI_VOUCHER_DETAILS: GHI_VOUCHER_LIST_DETAILS = {
  vouchers: [
    {
      value: "5",
      cost: "4,130",
    },
    {
      value: "10",
      cost: "8,260",
    },
    {
      value: "15",
      cost: "12,390",
    },
  ],
};

export const URBAN_REWARDS_CLAIM_PAGE_DETAILS: GHI_REWARD_CLAIM_PAGE_DETAILS = {
  heading: "Urban",
  companyDescription: [
    "If you’ve ever wanted all your massage, beauty, osteopathy, physiotherapy, and pregnancy wellness needs to be met in a day, Urban massage can deliver! (Bet that’ll be a really relaxing day.)",
    "Urban Massage works with qualified mobile therapists of these respective disciplines, to deliver safe home treatment. If you ever have a bad day, Urban Massage Therapist to the rescue.",
  ],
  rewardStepsAmount: 7,
  rewardSteps: [
    "Claim your reward!",
    "You will be taken to Urban Massages’s website, www.urban.co",
    "Create your Urban Massage account.",
    "Choose your desired package.",
    "Check your email inbox for your unique voucher code.",
    "At checkout, enter your unique voucher code.",
    "Enjoy your massage session.",
  ],
  buttonText: "Claim my voucher",
  voucherDescription: "You deserve to relax!",
  voucherClaimMessage: ["Make sure you claim ", " of your vouchers by "],
  voucherExpiryYears: 1,
};

export const THRIVA_REWARDS_CLAIM_PAGE_DETAILS: GHI_REWARD_CLAIM_PAGE_DETAILS = {
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
    "HbA1c - understand your diabetes risk with your average blood glucose levels.",
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
    "Enjoy your health insights!",
  ],
  buttonText: "Claim my kit",
  voucherDescription: "Insights on your health await! ",
  voucherClaimMessage: ["Make sure you claim ", " of your vouchers by "],
  voucherExpiryYears: 1,
};

export const LIVING_DNA_REWARDS_CLAIM_PAGE_DETAILS: GHI_REWARD_CLAIM_PAGE_DETAILS = {
  heading: "Living DNA",
  companyDescription: [
    "Have you ever wondered if you were part neanderthal; or why you just can’t seem to lose that belly fat; or why on a bad day, you can’t even remember what you ate for lunch? These seemingly unrelated things can actually be understood by analysing your DNA.",
    "Living DNA’s world-leading ancestry and wellbeing tests not only allows you to trace your family’s regional history around the world, but also brings to light aspects of yourself you didn’t know could be measured. Their tests uncover personality traits like memory processing and imagination; nutrigenomics like your response to carbohydrates or metabolism; fitness genomics like your fat loss response to exercise; and much more.",
    "Discover truths about your body and mind with Living DNA’s tests — and unlock your full potential!",
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
  voucherClaimMessage: ["Make sure you claim ", " of your vouchers by "],
  voucherExpiryYears: 0,
};

export const BUPA_REWARDS_CLAIM_PAGE_DETAILS: GHI_REWARD_CLAIM_PAGE_DETAILS = {
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
    "Lung age (if you’re a smoker or recent ex-smoker)",
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
  voucherClaimMessage: ["Make sure you claim ", " of your vouchers by "],
  voucherExpiryYears: 1,
};

export const GARMIN_REWARDS_CLAIM_PAGE_DETAILS: GHI_REWARD_CLAIM_PAGE_DETAILS = {
  heading: "Garmin",
  companyDescription: [
    "Walking or running won’t be the only way you can maintain your fitness tracking. If you want to go for a swim, take a dance class, do some yoga, you will be able to track your fitness goals with ease with the Forerunner 55 smartwatch. (You will now also be able to track your steps from your desk to the kitchen — without having to bring your phone.) #you’rewelcome",
  ],
  rewardDescription: [
    "CONGRATULATIONS! ",
    "You’ve done it. You’ve unlocked a free Garmin smartwatch worth £179.99.",
    "This swanky timepiece comes in 4 colourways; can track your time, distance, pace, and speed, with a built in GPS; monitor your overall health and wellness with wrist-band heart rate and more; tracks more than just running with an array of built-in activity profiles; and much, much more. ",
    "OR",
    "If you'd prefer — and don't need a smartwatch — you can also choose to donate £100 to the children of Great Ormand Street Hospital (GOSH). You won't be able to claim the smartwatch at a later date after donating, but you'll be giving hundreds of children the chance to live to their full potential!",
  ],

  rewardStepsAmount: 6,
  rewardSteps: [
    "Make your selection of a Garmin smartwatch or GOSH donation by claiming your reward!",
    "Check your email, we sent you something! (It’s the voucher code.)",
    "Head to Garmin’s website, www.garmin.com.",
    "Choose your Garmin Forerunner 55 colour way. ",
    "At checkout, enter your unique voucher code. ",
    "Enjoy your Garmin Forerunner 55 Smartwatch free of charge!",
  ],
  buttonText: "Claim my voucher",
  voucherDescription: "Get your Garmin!",
  voucherClaimMessage: ["Make sure you claim ", " of your vouchers by "],
  voucherExpiryYears: 1,
};

export const THRIVA_IMPORTANT_NOTES_DETAILS: IMPORTANT_NOTES_PAGE_DETAILS = {
  heading: "Your Thriva Blood Test Kit Awaits",
  subheadings: ["Ready to get insights on your health?", "We just need a few details from you."],
  importantNotes: [
    "Important points to note:",
    "This is a take-home blood test kit, you will be conducting the test at home and sending in the results to Thriva’s experts. If blood gives you the jitters, do try to have a loved one with you when you take the test.",
    "You can only use the test kit on yourself. Resale of this kit is not allowed under any circumstances.",
    "You can only claim one test kit per reward year. The next test kit will be available in the next reward year. For more types of tests, you can visit Thriva’s website.",
    "Should you have any complaints or comments on the kit, YuLife will happily forward them on your behalf to Thriva’s experts. YuLife is not responsible for the manufacturing, distribution, warranty, or returns of Thriva blood test kits beyond the point of claim — but we’ll do our best to help if we can!",
  ],
};

export const LIVING_DNA_IMPORTANT_NOTES_DETAILS: IMPORTANT_NOTES_PAGE_DETAILS = {
  heading: "Your Living DNA Test Kit Awaits",
  subheadings: ["Ready to get insights on your DNA?", "We just need a few details from you."],
  importantNotes: [
    "Important points to note:",
    "This is a take-home DNA test kit. You will be conducting the test at home — it’s a cheek swab — and sending in the results to Living DNA’s experts.",
    "You can only use the test kit on yourself. Resale of this kit is not allowed under any circumstances.",
    "You can only claim one test kit this reward year. The next test kit will be available 3 reward years later. For more types of tests, you can visit Living DNA’s website.",
    "Should you have any complaints or comments on the kit, YuLife will happily forward them on your behalf to Living DNA’s experts. YuLife is not responsible for the manufacturing, distribution, warranty, or returns of Living DNA’s test kits beyond the point of claim — but we’ll do our best to help if we can!",
  ],
};

export const exclusiveDisountsCard: CAROUSEL_CARD = {
  title: "Exclusive Discounts",
  img: "https://yulife-develop.imgix.net/cms/1691152361046_Illustration-discounts@2x.png?ixlib=js-3.2.1&s=5c31a964035cb1899ff6716ba85cb121",
};

export const massageVouchersCard: CAROUSEL_CARD = {
  title: "Massage Vouchers",
  img: "https://yulife-develop.imgix.net/cms/1691153142045_Illustration-urban@3x.png?ixlib=js-3.2.1&s=3563672f4c9a059c6edae09408d0608c",
};

export const healthScreeningCard: CAROUSEL_CARD = {
  title: "Free Health Screening Kit",
  img: "https://yulife-develop.imgix.net/cms/1691153338274_Illustration-thriva@3x.png?ixlib=js-3.2.1&s=d4403ba6c8659a418be49ec2e6cdd845",
};

export const dnaKitCard: CAROUSEL_CARD = {
  title: "Free DNA Kit",
  img: "https://yulife-develop.imgix.net/cms/1691153464467_Illustration-livingDNA@3x.png?ixlib=js-3.2.1&s=607aa83e5ef97f3a51e17b4df6d4d0c3",
};

export const healthAssessmentCard: CAROUSEL_CARD = {
  title: "Free Health Assessment",
  img: "https://yulife-develop.imgix.net/cms/1691153946782_Illustration-healthassessment@3x.png?ixlib=js-3.2.1&s=ae1788885c2c76e570708484d09b26b6",
};

export const smartwatchCard: CAROUSEL_CARD = {
  title: "Free Smartwatch",
  img: "https://yulife-develop.imgix.net/cms/1691153993964_Illustration-garmin@3x.png?ixlib=js-3.2.1&s=b91166176f0d5a9cde51115c46c6acdf",
};

export const ghiRewardGameCarousel: GAME_CAROUSEL = {
  cards: [
    exclusiveDisountsCard,
    massageVouchersCard,
    healthScreeningCard,
    dnaKitCard,
    healthAssessmentCard,
    smartwatchCard,
  ],
};
