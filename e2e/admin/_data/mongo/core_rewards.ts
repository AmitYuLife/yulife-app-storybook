import { generateRandomMongoId, IDatabaseItem } from "@yu-life/yulife-bdd-framework";

export const CORE_REWARDS_JOHN_LEWIS = {
  type: "mongo",
  modelName: "core_rewards",
  data: {
    _id: generateRandomMongoId(),
    redemptionSteps: {
      steps: [
        "Your e-voucher can only be redeemed online at johnlewis.com The John Lewis website hosts a range of high quality fashion, furnishings, flowers and household goods, all delivered direct to your door. All you need to do is 'shop' the website and once you've proceeded to checkout, select 'Add Gift Voucher or e-voucher'. You will then be asked to enter two codes for the e-voucher you wish to spend:",
        "The 10 digit serial number off the e-voucher and the 7 character online security code.",
        "Your e-voucher is worth £ After entering in the e-voucher code, your order will be automatically updated with credit to the value of the e-voucher.",
        "If there's any balance to pay, you can use a debit or credit card in the usual way. If you do not spend the full value of the e-voucher, the remaining credit will be stored in your johnlewis.com online account and can be used towards your next purchase on johnlewis.com.",
        "If you find that your e-voucher is not accepted at checkout, check the serial number and online security code you have entered and try again. If you continue to experience any further difficulties, email John Lewis Customer Service team https://www.johnlewis.com/contact-us/ or call on 03456 049 049 between 7am and midnight, 7 days a week.",
      ],
      info: "To redeem John Lewis:",
    },
    images: {
      listItemImageKey: "reward/background/JLS-GB.jpg",
      detailHeaderKey: "reward/header/JLS-GB.jpg",
    },
    loyaltyProgramme: [],
    sortOrder: 14,
    rewardProviderId: "wegift",
    redemptionUrl: "stocked",
    code: "JLS-GB",
    currencyCode: "GBP",
    description:
      "John Lewis is a British institution, with a legacy spanning over 150 years and stores all over the country. Redeem your voucher for one of the many products on johnlewis.com, where you can find everything from face creams to sofas!",
    name: "John Lewis",
    maximum_value: 250,
    minimum_value: 5,
    restrictions: {
      locations: ["GB"],
    },
    termsAndConditionsUrl: "https://gift-sandbox.wegift.io/public/terms/JLS-GB.pdf",
    availableDenominations: [
      {
        _id: generateRandomMongoId(),
        yuCoin: 4132,
        value: 5,
        stock: 7,
        availableForRewardsStore: true,
      },
      {
        _id: generateRandomMongoId(),
        yuCoin: 8260,
        value: 10,
        stock: 7,
      },
      {
        _id: generateRandomMongoId(),
        yuCoin: 16520,
        value: 20,
        stock: 7,
      },
    ],
    __v: 0,
  },
} as IDatabaseItem;

export const CORE_REWARDS_BUZZBIKE = {
  type: "mongo",
  modelName: "core_rewards",
  data: {
    _id: generateRandomMongoId(),
    loyaltyProgramme: [],
    restrictions: {
      locations: ["GB"],
      availableForLabels: [],
      restrictedForLabels: [],
    },
    tags: [
      {
        "en-GB": "Entertainment",
        _id: generateRandomMongoId(),
      },
    ],
    badge: {
      name: "Discount",
      colour: "#E30D76",
    },
    code: "BUZZ-GB",
    rewardProviderId: "link",
    images: {
      listItemImageKey: "reward/background/BUZZ-GB.jpg",
      detailHeaderKey: "cms/1628676590136_buzzbike.png",
    },
    name: "Buzzbike",
    description:
      "Buzzbike is a cancel anytime subscription service offering a stunning 3-speed bike & award winning lock for only £27/month. On-demand repairs and stolen bike replacement are included. Get ready to ride!",
    availableDenominations: [
      {
        _id: generateRandomMongoId(),
        yuCoin: 0,
        value: 0,
        stock: 7,
        availableForRewardsStore: true,
      },
    ],
    currencyCode: "GBP",
    redemptionSteps: {
      steps: [
        "Visit buzzbike.cc",
        "Proceed to Sign up page",
        "Enter YULIFE10OFFSUB into the Promo Code field to claim a 10% discount for every month of your subscription. Discount will be applied automatically to all the subsequent months.",
      ],
      info: "How to redeem Buzzbike:",
    },
    copy: {
      id: "BUZZ-GB",
      ctaLabel: "Claim Reward",
      offerHeading: "10% offf",
      offerSubheading: "   ",
      alertHeading: "Claim your discount",
      alertSubheading: "Do you want to claim your 10% Discount",
    },
    termsAndConditionsUrl: "https://buzzbike.cc/termsofuse",
    sortOrder: 0.001,
    archived: false,
    __v: 1,
    _migrated: true,
  },
} as IDatabaseItem;

export const CORE_REWARDS_BLOOM_UNAVAILABLE = {
  type: "mongo",
  modelName: "core_rewards",
  data: {
    _id: generateRandomMongoId(),
    redemptionSteps: {
      steps: [
        "Visit bloomandwild.com/send-flowers",
        "Select your bouquet or gift",
        "Fill in the delivery details, delivery date and select a free gift card",
        "When prompted at checkout enter your unique voucher code",
      ],
      info: "How to redeem Bloom & Wild:",
    },
    images: {
      listItemImageKey: "reward/background/YLBAW-GB.jpg",
      detailHeaderKey: "reward/header/YLBAW-GB.jpg",
    },
    loyaltyProgramme: [],
    sortOrder: 1.3,
    rewardProviderId: "wegift",
    redemptionUrl: "stocked",
    progression_level: "5",
    code: "YLBAW-GB",
    currencyCode: "GBP",
    link_type: "20% Your Next Order",
    denomination_type: "fixed",
    description:
      "Bloom & Wild is the UK's most-loved online florist. They invented letterbox flowers to make sending beautiful blooms easier and more delightful. Every box is hand-packed with seasonal stems and sent with fun arranging tips! But the best bit? How posties can deliver them through the door when no one's home. Make someone's day with fresh blooms and save 20% off your next order.",
    e_code_usage_type: "url-only",
    expiry_date_policy: "24 months from last use",
    maximum_value: 2500,
    minimum_value: 1,
    name: "Bloom & Wild",
    restrictions: {
      locations: ["GB"],
    },
    termsAndConditionsUrl: "https://gift.wegift.io/public/terms/YLBAW-GB.pdf",
    uiSettings: {
      id: "YLBAW-GB",
      logoWidth: 87,
      logoHeight: 50,
      ctaLabel: "Claim Reward",
      offerHeading: "20% off",
      offerSubheading: "   ",
      alertHeading: "Claim your discount",
      alertSubheading: "20% discount for all yulife members",
    },
    availableDenominations: [],
    __v: 0,
  },
} as IDatabaseItem;

export const CORE_REWARDS_NIKE = {
  type: "mongo",
  modelName: "core_rewards",
  data: {
    _id: generateRandomMongoId(),
    redemptionSteps: {
      steps: [
        "In-store: At any Nike-owned retail store in the UK (includes Factory Stores). Please print the eGift or show it on your smart phone at the till (UK only). An unlimited amount of gift cards/eGifts can be used in one transaction in store",
        "Online: http://www.nike.com/gb/en_gb/ . Up to 10 gift cards/eGifts can be used in one transaction online",
        "Exceptions & exclusions: Cannot be redeemed in franchise stores or third party retailers",
        "Balance checker: http://store.nike.com/gb/en_gb/?l=shop%2Cgift_cards&amp;balance=true/",
        "Multiple redemptions possible are possible as the balance will remain on the eGift card.",
        "You can pay outstanding balance with cash/debit card if the value of the gift card is not enough.",
      ],
      info: "How to redeem Nike",
    },
    images: {
      listItemImageKey: "reward/list-detail/v1/Nike.png",
      detailHeaderKey: "https://gift-sandbox.wegift.io/static/product_assets/NIKE/NIKE-card.png",
    },
    loyaltyProgramme: [],
    sortOrder: 18,
    rewardProviderId: "wegift",
    redemptionUrl: "realtime",
    progression_level: "5",
    code: "NIKE-GB",
    currencyCode: "GBP",
    description:
      "As one of the leading sports brands in the world, Nike offers authentic athletic footwear, apparel, equipment, and accessories for a wide variety of sports and fitness activities. Redeem your voucher online or in any Nike UK store.",

    name: "Nike",
    restrictions: {
      locations: ["GB"],
    },
    termsAndConditionsUrl: "https://gift-sandbox.wegift.io/public/terms/NIKE-GB.pdf",
    reward_sticker: null,
    uiSettings: {
      id: "NIKE-GB",
      logoWidth: 71,
      logoHeight: 37,
    },
    availableDenominations: [
      {
        _id: generateRandomMongoId(),
        yuCoin: 7750,
        value: 10,
        stock: 7,
        availableForRewardsStore: true,
      },
      {
        _id: generateRandomMongoId(),
        yuCoin: 15500,
        value: 20,
        stock: 7,
      },
      {
        _id: generateRandomMongoId(),
        yuCoin: 31000,
        value: 40,
        stock: 7,
      },
    ],
    __v: 0,
  },
} as IDatabaseItem;
