import { IDatabaseItem, generateRandomMongoId } from "@yu-life/yulife-bdd-framework";
import moment from "moment";
import { BUSINESS_ACCOUNT_12_WELLBEING_ELIGIBILITY, BUSINESS_ACCOUNT_4, BUSINESS_ACCOUNT_6 } from "../postgres/business";

export const WELLBEING_HUB_ITEM_1 = {
  modelName: "wellbeing_hub_item",
  type: "mongo",
  data: {
    _id: generateRandomMongoId(),
    title: {
      "en-GB": "MetLife GP24",
      "ja-JP": "メットライフ生命GP24"
    },
    description: {
      "en-GB": "Immediate access to a GP by phone or video",
      "ja-JP": "電話またはビデオによるGPへの即時アクセス"
    },
    thumbnailImage: "perks/METLIFE_GP24.png",
    iconImage: "content/icons/yulife.png",
    content: [],
    restrictions: {
      businessAccountId: BUSINESS_ACCOUNT_6.data.business_account_id
    },
    isPromoted: true,
    enabled: true,
    source: "hr_portal",
    createdAt: {
      $date: "2024-03-11T10:10:28.035Z"
    },
    updatedAt: {
      $date: "2024-05-13T09:40:35.631Z"
    },
    __v: 0
  }
} as IDatabaseItem;

export const WELLBEING_HUB_ITEM_2 = {
  modelName: "wellbeing_hub_item",
  type: "mongo",
  data: {
    _id: generateRandomMongoId(),
    title: {
      "en-GB": "MetLyfe GP25",
      "ja-JP": "メットライフ生命GP25"
    },
    description: {
      "en-GB": "Immediate access to a doctor by phone or video",
      "ja-JP": "電話またはビデオによるGPへの即時アクセス"
    },
    thumbnailImage: "perks/METLIFE_GP24.png",
    iconImage: "content/icons/yulife.png",
    content: [],
    restrictions: {
      businessAccountId: BUSINESS_ACCOUNT_4.data.business_account_id
    },
    isPromoted: true,
    enabled: true,
    source: "hr_portal",
    createdAt: {
      $date: "2024-03-11T10:10:28.035Z"
    },
    updatedAt: {
      $date: "2024-05-13T09:40:35.631Z"
    },
    __v: 0
  }
} as IDatabaseItem;

export const SMART_HEALTH = {
  modelName: "wellbeing_hub_item",
  type: "mongo",
  data: {
    _id: generateRandomMongoId(),
    title: "Smart Health",
    description: "Immediate access to a GP by phone or video",
    thumbnailImage: "wellbeing_hub/smart-health.png",
    iconImage: "wellbeing_hub/icons/yulife.png",
    content: [
      {
        _id: generateRandomMongoId(),
        type: "MARKDOWN",
        title: "What is Smart Health?",
        markdown:
          "Smart Health is a doctor-on-demand service offered through our partnership with AIG. It gives you 24/7 access to a GP as well as a range of other health and wellbeing expertise including:\n\n- Mental health support\n- Nutritionist consultations\n- An online fitness programme".trim(),
      },
      {
        _id: generateRandomMongoId(),
        type: "MARKDOWN",
        title: "Accessing Smart Health",
        markdown:
          "To access Smart Health, you can download the Smart Health by AIG app. You can also request the service online.\n\nTo create a profile or request services, you will need to enter your group life scheme number.".trim(),
      },
      {
        _id: generateRandomMongoId(),
        type: "BOX",
        title: "Policy number / scheme code",
        markdown: "${BUSINESS_POLICY_NUMBER}",
        canCopy: true,
      },
      {
        _id: generateRandomMongoId(),
        type: "BUTTON",
        image: "wellbeing_hub/icons/smart-health.png",
        label: "Access smart health online",
        uri: "https://www.aiglife-smarthealth.com",
      },
      {
        _id: generateRandomMongoId(),
        type: "BUTTON",
        image: "wellbeing_hub/icons/google-play.png",
        label: "Download Smart Health app",
        uri: "https://play.google.com/store/apps/details?id=com.advancemedical.aig",
        restrictToPlatform: "android",
      },
      {
        _id: generateRandomMongoId(),
        type: "BUTTON",
        image: "wellbeing_hub/icons/app-store.png",
        label: "Download Smart Health app",
        uri: "https://apps.apple.com/gb/app/smart-health-gp-by-aig/id1474584706",
        restrictToPlatform: "ios",
      },
      {
        _id: generateRandomMongoId(),
        type: "MARKDOWN",
        title: "Have a question?",
        markdown: "Chat to us through the app, or read more about Smart Health in our Help Centre.",
      },
      {
        _id: generateRandomMongoId(),
        type: "BUTTON",
        image: "wellbeing_hub/icons/help.png",
        label: "Help centre",
        uri: "https://faq.yulife.com/en/",
      },
    ],
    isPromoted: true,
    restrictions: {
      featureToggleHide: "hideSmartHealthScreen",
    },
    order: 1,
    enabled: true,
  }
} as IDatabaseItem;

const YU_DOC = {
  modelName: "wellbeing_hub_item",
  type: "mongo",
  data: {
    _id: generateRandomMongoId(),
    title: "YuDoc",
    description: "Immediate access to a GP by phone or video",
    thumbnailImage: "wellbeing_hub/yu-doc.png",
    iconImage: "wellbeing_hub/icons/yulife.png",
    content: [
      {
        _id: generateRandomMongoId(),
        type: "MARKDOWN",
        title: "What is YuDoc?",
        markdown:
          "YuDoc is an on-demand virtual service providing you with 24/7 access by phone or video to:\n\n- Remote GP appointments\n- Second opinions\n- Prescription services\n\n...and more, for you and your family. Log in to access services, plus helpful resources on stress management, healthy eating, and keeping fit.".trim(),
      },
      {
        _id: generateRandomMongoId(),
        type: "MARKDOWN",
        title: "Accessing YuDoc",
        markdown: `To create a profile and request services you will need your policy number, found below:`.trim(),
      },
      {
        _id: generateRandomMongoId(),
        type: "BOX",
        title: "Policy number",
        markdown: "${BUSINESS_POLICY_NUMBER}",
        canCopy: true,
      },
      {
        _id: generateRandomMongoId(),
        type: "BUTTON",
        image: "wellbeing_hub/icons/yu-doc.png",
        label: "Access YuDoc",
        uri: "https://some-link",
      },
      {
        _id: generateRandomMongoId(),
        type: "MARKDOWN",
        title: "Contact YuDoc services",
        markdown: ``,
      },
      {
        _id: generateRandomMongoId(),
        type: "BUTTON",
        image: "wellbeing_hub/icons/telephone.png",
        label: "033 3210 0367",
        uri: "tel:033 3210 0367",
      },
      {
        _id: generateRandomMongoId(),
        type: "BUTTON",
        image: "wellbeing_hub/icons/email.png",
        label: "Email customer service",
        uri: "mailto:yudoc@healthhero.com",
      },
      {
        _id: generateRandomMongoId(),
        type: "MARKDOWN",
        title: "Have a question?",
        markdown: "Chat to us through the app, or read more from our Help Centre.",
      },
      {
        _id: generateRandomMongoId(),
        type: "BUTTON",
        image: "wellbeing_hub/icons/help.png",
        label: "Help centre",
        uri: "https://faq.yulife.com/en/",
      },
    ],
    isPromoted: true,
    order: 2,
    enabled: false,
  }
} as IDatabaseItem;

export const YU_MATTER = {
  modelName: "wellbeing_hub_item",
  type: "mongo",
  data: {
    _id: generateRandomMongoId(),
    title: "YuMatter",
    description: "Mental health support when you need it",
    thumbnailImage: "wellbeing_hub/yu-matter.png",
    iconImage: "wellbeing_hub/icons/yulife.png",
    content: [
      {
        _id: generateRandomMongoId(),
        type: "MARKDOWN",
        title: "How does it work?",
        markdown: `YuMatter is a confidential employee assistance program designed to support your mental, financial, and professional wellbeing. We are delighted to offer YuMatter through our partnership with Workplace Options.`,
      },
      {
        _id: generateRandomMongoId(),
        type: "MARKDOWN",
        title: "Structured clinical counselling",
        markdown: `Face‐to‐face or telephone sessions with a local clinician, including evening and weekend appointments.`,
      },
      {
        _id: generateRandomMongoId(),
        type: "MARKDOWN",
        title: "Legal and financial support",
        markdown: `Advisers are available to support people facing legal or financial challenges.`,
      },
      {
        _id: generateRandomMongoId(),
        type: "MARKDOWN",
        title: "Career and life coaching",
        markdown: `Telephone coaching sessions providing advice on career development.`,
      },
      {
        _id: generateRandomMongoId(),
        type: "BUTTON",
        image: "wellbeing_hub/icons/telephone.png",
        label: "0800 243 458",
        uri: "tel:0800 243 458",
      },
      {
        _id: generateRandomMongoId(),
        type: "BUTTON",
        image: "wellbeing_hub/icons/email.png",
        label: "Email customer service",
        uri: "mailto:assistance@workplaceoptions.com",
      },
      {
        _id: generateRandomMongoId(),
        type: "BUTTON",
        image: "wellbeing_hub/icons/yulife.png",
        label: "Access YuMatter online",
        uri: "https://global.resourcesforyourlife.com",
      },
      {
        _id: generateRandomMongoId(),
        type: "BOX",
        title: "Login details",
        markdown: "yulife",
        canCopy: true,
      },
      {
        _id: generateRandomMongoId(),
        type: "MARKDOWN",
        title: "Have a question?",
        markdown: `Chat to us through the app, or read more from our Help Centre.`,
      },
      {
        _id: generateRandomMongoId(),
        type: "BUTTON",
        image: "wellbeing_hub/icons/help.png",
        label: "Help centre",
        uri: "https://faq.yulife.com/en/",
      },
    ],
    isPromoted: true,
    restrictions: {
      featureToggleHide: "hideYuMatterScreen",
    },
    order: 3,
    enabled: true,
  }
} as IDatabaseItem;

export const BEAM = {
  modelName: "wellbeing_hub_item",
  type: "mongo",
  data: {
    _id: generateRandomMongoId(),
    title: "Beam",
    description: "Help someone start a new career",
    thumbnailImage: "wellbeing_hub/beam.png",
    iconImage: "",
    content: [
      {
        _id: generateRandomMongoId(),
        type: "MARKDOWN",
        title: "Beam",
        markdown:
          "Our charity partner - Beam lets you donate to individuals struggling with homelessness. Browse personal campaigns, read their stories, and contribute to helping them get back on their feet!",
      },
      {
        _id: generateRandomMongoId(),
        type: "BUTTON",
        image: "wellbeing_hub/icons/link.png",
        label: "Donate to Beam",
        uri: "https://beam.org/",
      },
    ],
    isPromoted: true,
    order: 4,
    enabled: true,
  }
} as IDatabaseItem;

export const ON_HAND = {
  modelName: "wellbeing_hub_item",
  type: "mongo",
  data: {
    _id: generateRandomMongoId(),
    title: "onHand",
    description: "On-demand employee volunteering",
    thumbnailImage: "wellbeing_hub/on-hand.png",
    iconImage: "",
    content: [
      {
        _id: generateRandomMongoId(),
        type: "MARKDOWN",
        title: "onHand",
        markdown:
          "Our volunteering partner - onHand lets you give back to your community through micro-volunteering opportunities near you. Sign up and find out how you can help!",
      },
      {
        _id: generateRandomMongoId(),
        type: "BUTTON",
        image: "wellbeing_hub/icons/google-play.png",
        label: "Access onHand",
        uri: "https://play.google.com/store/apps/details?hl=en&id=com.sharecare",
        restrictToPlatform: "android",
      },
      {
        _id: generateRandomMongoId(),
        type: "BUTTON",
        image: "wellbeing_hub/icons/app-store.png",
        label: "Access onHand",
        uri: "https://apps.apple.com/gb/app/onhand/id1367396948",
        restrictToPlatform: "ios",
      },
    ],
    isPromoted: true,
    order: 5,
    enabled: false,
  }
} as IDatabaseItem;

export const HI_BOB = {
  modelName: "wellbeing_hub_item",
  type: "mongo",
  data: {
    _id: generateRandomMongoId(),
    title: "HiBob",
    description: "Company policies and time-off requests",
    thumbnailImage: "wellbeing_hub/hi-bob.png",
    iconImage: "",
    content: [
      {
        _id: generateRandomMongoId(),
        type: "MARKDOWN",
        title: "HiBob",
        markdown:
          "HiBob is our employee management platform. It’s where you request holidays, view internal policy documents, and update personal info.",
      },
      {
        _id: generateRandomMongoId(),
        type: "BUTTON",
        image: "wellbeing_hub/icons/link.png",
        label: "Access HiBob",
        uri: "https://app.hibob.com/",
      },
      {
        _id: generateRandomMongoId(),
        type: "MARKDOWN",
        title: "Have a question?",
        markdown: "Chat to us through the app, or read more about Smart Health in our Help Centre.",
      },
      {
        _id: generateRandomMongoId(),
        type: "BUTTON",
        image: "wellbeing_hub/icons/help.png",
        label: "Help Centre",
        uri: "https://faq.yulife.com/en/",
      },
    ],
    isPromoted: true,
    order: 6,
    enabled: true,
  }
} as IDatabaseItem;

export const MORE_HAPPI = {
  modelName: "wellbeing_hub_item",
  type: "mongo",
  data: {
    _id: generateRandomMongoId(),
    title: "More Happi",
    description: "1-1 Coaching twice a month",
    thumbnailImage: "wellbeing_hub/more-happi.png",
    iconImage: "",
    content: [
      {
        _id: generateRandomMongoId(),
        type: "MARKDOWN",
        title: "More Happi",
        markdown:
          "More Happi’s mission is to ensure that you feel seen, heard, supported and cared for, partnering with YuLife to deliver one-to-one online coaching to you at home. Book a session by entering your company details.",
      },
      {
        _id: generateRandomMongoId(),
        type: "BUTTON",
        image: "wellbeing_hub/icons/link.png",
        label: "Access More Happi",
        uri: "https://trial.morehappi.com/yulife",
      },
    ],
    isPromoted: true,
    order: 7,
    enabled: true,
  }
} as IDatabaseItem;

