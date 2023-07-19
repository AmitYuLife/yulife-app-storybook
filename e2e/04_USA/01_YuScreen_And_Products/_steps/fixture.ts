import { CPE_GAP_10 } from "04_USA/_data"
import moment from "moment"
import { BoxOption, InfoPanel, USProductData, YuScreenInfo } from "./types"

//Onboarding US YU screen 
export const moreInsurance = "More insurance available"
export const wellbeingAccessText = "Wellbeing Access"
export const protectionPowered = "Protection, powered up!"
export const earnRewardsCopy = "Earn rewards faster with increased YuCoin Power"
export const buttonText = "Check out my power"
export const yuCoinText = "YuCoin"
export const powerText = "Power"

//US YU screen
export const createYumujiHeading = "Earn 100 YuCoin";
export const createYumujiText = "when you create your Yumoji.";
export const createYumujiCTA = "Create Yumoji";

export const WellbeingProduct = "Wellbeing Access"
export const VisionInsurance = "Vision Insurance"
export const ProductSlotWith0EarnRate = "+"           // If products have 0 earn rate then will get "+" sign insteadn of EarnRate 
export const MoreProtection = "More protection"
export const ClosedEnrolment = "Inforce coverage information coming soon!"
export const EnrolmentTitle = "Make your benefit choices today!"
export const EnrolmentEndDate = `You have until\n`
export const EnrolmentButton = "Lets go!"
export const SurveyText = "We love hearing from you.\nHelp shape the future of YuLife!"
export const SurveyLabel = "Share your thoughts"
export const yuMojiBuilder = "Create your Yumoji to step into the Yuniverse"
export const HowToEnroll = "How to enroll"
export const Gap = "GAP insurance"
export const SponsoredBy = "Sponsored by"


//Footer copy texts
export const Guardian_Video_Title = "Watch the following Guardian video to learn more:"
export const Legal_Stuff = "The legal stuff"
export const Footer_Text_Part1 = "*2021 Guardian reporting and January 2021 Fair Health Data"
export const Footer_Text_Part2 = "Guardian insurance coverage options available through your employer are included, but do not reflect your individual elections."
export const Footer_Text_Part3 = "Refer to your enrollment site to make your benefit selection."

//Images URL in product cards
export const Tooth_ImageUrl = "https://yulife-develop.imgix.net/content/icons/tooth.svg?ixlib=js-3.2.1&w=192&h=192&s=f008a03a31007d60652e8982be643659"
export const Wallet_ImageUrl = "https://yulife-develop.imgix.net/content/icons/wallet.svg?ixlib=js-3.2.1&w=192&h=192&s=1975fc5a821b2d1547ecfb47611bb79f"
export const YuMojis_ImageUrl = "https://yulife-develop.imgix.net/content/icons/yumojis.svg?ixlib=js-3.2.1&w=192&h=192&s=d94c9a0b897fae56df13ee23db3b7e8d"
export const Book_ImageUrl = "https://yulife-develop.imgix.net/content/icons/book.svg?ixlib=js-3.2.1&w=192&h=192&s=ff7a8600a3e778287f6b1c32043d4c99"
export const Megaphone_ImageUrl = "https://yulife-develop.imgix.net/content/icons/megaphone.svg?ixlib=js-3.2.1&w=192&h=192&s=4c3dd899f61a06d20d4d0c190a48e01a"
export const Calculator_ImageUrl = "https://yulife-develop.imgix.net/content/icons/calculator.svg?ixlib=js-3.2.1&w=192&h=192&s=dfe3bf1ecff695fac1488fc654444fc2"
export const SmartWatch_ImageUrl = "https://yulife-develop.imgix.net/content/icons/smartwatch.svg?ixlib=js-3.2.1&w=192&h=192&s=6daab4728cf71b5174ecd50429ee22c8"
export const Lock_ImageUrl = "https://yulife-develop.imgix.net/content/icons/lock.svg?ixlib=js-3.2.1&w=192&h=192&s=066080739af592173a3a631e3504fe8c"
export const Calendar_ImageUrl = "https://yulife-develop.imgix.net/content/icons/calendar.svg?ixlib=js-3.2.1&w=192&h=192&s=c3e1d3ba3d13033c3fc963e1b88420cf"
export const Doc_ImageUrl = "https://yulife-develop.imgix.net/content/icons/doc.svg?ixlib=js-3.2.1&w=192&h=192&s=778d19bc59418e7d6bd8868ab3fc698f"
export const Email_ImageUrl = "https://yulife-develop.imgix.net/content/icons/email.svg?ixlib=js-3.2.1&w=192&h=192&s=e0f9b5801e3cd35ea9467147e00947d1"
export const Heart_ImageUrl = "https://yulife-develop.imgix.net/content/icons/heart.svg?ixlib=js-3.2.1&w=192&h=192&s=f7a373c6df8cbbf00ad9ffe90a83b848"
export const Guardian_ImageUrl = "https://yulife-develop.imgix.net/logos/guardian-inline-logo-2022-09-13-2.svg?ixlib=js-3.2.1&w=207&h=42&s=e7aa2c7bb6d5d763a015b6596a863983"
export const Video_ImageUrl = "https://yulife-develop.imgix.net/illustrations/find-out-more-2022-12-13-1.png?ixlib=js-3.2.1&w=1125&h=624&s=55e7f0965ee537b1fccf9846f556de8a"
export const Guardian_Sponsor = "https://yulife-develop.imgix.net/sponsored-logos/guardian-1.svg?ixlib=js-3.2.1&w=285&s=c8c67c84fea37e61f318ba8e6f61deae"
export const Transamerica_Sponsor = "https://yulife-develop.imgix.net/sponsored-logos/transamerica-2.svg?ixlib=js-3.2.1&w=270&s=279b4702ae6fbeefe6175a81ffbde2b6"
export const Yulife_Sponsor = "https://yulife-develop.imgix.net/sponsored-logos/yulife-1.svg?ixlib=js-3.2.1&w=153&s=db02cee6a0d16063f910ad2d3b0cb3be"

//Slot Left Image
export const canEnrolPlusImage = "https://yulife-develop.imgix.net/yuscreen/slots/background/bg-pink-without-shadow-28-04-23.svg?ixlib=js-3.2.1&w=135&h=156&s=0e808ed69faa1199ca9f97c7c36c79ef"

//Wellbeing Hub

export const wellbeingHubDescription = "Welcome to this quick-access hub to all your company’s wellbeing benefits"

// Top Banner Images

export const Transamerica_Top_Banner = "https://yulife-develop.imgix.net/sponsored-logos/transamerica-2.svg?ixlib=js-3.2.1&fm=png&w=270&s=e71f98424e43a7785f4b8186f30ec7e5"
export const YuLife_Top_Banner = "https://yulife-develop.imgix.net/sponsored-logos/yulife-1.svg?ixlib=js-3.2.1&fm=png&w=153&s=7f9208df27fbc0192162265460290fb3"
export const Guardian_Top_Banner = "https://yulife-develop.imgix.net/sponsored-logos/guardian-1.svg?ixlib=js-3.2.1&fm=png&w=285&s=c827af842b30d6f337411b045fcdabd9"

const year = moment().format("YYYY")


export const Guardian_DENPPO:USProductData = {
    id: "Guardian_DENPPO",
    heading: "Dental insurance",
    description: "With Guardian's Dental insurance you'll have the care needed to help keep you and your family smiling.",
    shortDescription: "With Guardian's Dental insurance you'll have the care needed to help keep you and your family smiling.",
    image_1: Tooth_ImageUrl,
    markdownTitle_1: "Access to dental care",
    markdownSubTitle_1: "Dental care is an important part of a complete health plan",
    image_2: Wallet_ImageUrl,
    markdownTitle_2: "Lower out-of-pocket costs",
    markdownSubTitle_2: "Typical in-network savings on dental work, associated with a root canal and crown, approximate to $1,000*",
    image_3: YuMojis_ImageUrl,
    markdownTitle_3: "Find the perfect provider for you",
    markdownSubTitle_3: "A care plan you can smile about, supported by one of the largest provider networks in the US",
    videoImageUrl: Video_ImageUrl,
    videoUrl: "https://fast.wistia.com/embed/medias/cerkt6avzm",
    footerText: "*2021 Guardian reporting and January 2021 Fair Health Data",
    legalStuff_1: "DentalGuard Insurance is underwritten and issued by The Guardian Life Insurance Company of America, New York, NY. Products are not available in all states.",
    legalStuff_2: "YuLife is neither a subsidiary nor affiliate of The Guardian Life Insurance Company of America (Guardian).  YuLife is an independent, third-party service provider. Guardian is neither responsible nor liable for services, advice or recommendations made by YuLife.",
    legalStuff_3: `Guardian® is a registered trademark of The Guardian Life Insurance Company of America and is used with express permission. \n©Copyright ${year} The Guardian Life Insurance Company of America.`,
    middleImage: "https://yulife-develop.imgix.net/yuscreen/product-details-guardian-hero-2022-09-21-1/Guardian_DENPPO.png?ixlib=js-3.2.1&w=981&h=492&s=7e2621f97ddcb9f121003b4b78723066",
    titleMarkdown: "**Dental insurance**"
}

export const Guardian_DENHMO:USProductData = {
    id: "Guardian_DENHMO",
    heading: "Managed Care plan",
    description: "With Guardian's Managed Dental plan you'll have the care needed to keep you and your family smiling.",
    shortDescription: "With Guardian’s Managed Dental plan you’ll have the care needed to keep you and your family smiling.",
    image_1: Tooth_ImageUrl,
    markdownTitle_1: "Access to dental care",
    markdownSubTitle_1: "Dental care is an important part of a complete health plan",
    image_2: Wallet_ImageUrl,
    markdownTitle_2: "Lower out-of-pocket costs",
    markdownSubTitle_2: "Typical in-network savings on dental work, associated with a root canal and crown, approximate to $1,000*",
    image_3: YuMojis_ImageUrl,
    markdownTitle_3: "Find the perfect provider for you",
    markdownSubTitle_3: "A care plan you can smile about, supported by one of the largest provider networks in the US",
    videoImageUrl: Video_ImageUrl,
    videoUrl: "https://fast.wistia.com/embed/medias/cerkt6avzm",
    footerText: "*2021 Guardian reporting and January 2021 Fair Health Data",
    legalStuff_1: "Managed Care is underwritten and issued by (IL) - First Commonwealth Insurance Company, (MO) - First Commonwealth of Missouri, (IN) - First Commonwealth Limited Health Services Corporation, (MI) - First Commonwealth Inc., (TX) - Managed DentalGuard, Inc. (DHMO), (NJ) - Managed DentalGuard, Inc., (FL, NY) - The Guardian Life Insurance Company of America. All First Commonwealth and Managed DentalGuard, Inc. entities referenced are wholly-owned subsidiaries of The Guardian Life Insurance Company of America, New York, NY. Products are not available in all states",
    legalStuff_2: "For CA: Coverage is underwritten and issued by Managed Dental Care, a California-licensed Knox-Keene prepaid dental plan wholly-owned by The Guardian Life Insurance Company of America, New York, NY.",
    legalStuff_3: "YuLife is neither a subsidiary nor affiliate of The Guardian Life Insurance Company of America (Guardian).  YuLife is an independent, third-party service provider. Guardian is neither responsible nor liable for services, advice or recommendations made by YuLife.",
    legalStuff_4: `Guardian® is a registered trademark of The Guardian Life Insurance Company of America and is used with express permission. \n©Copyright ${year} The Guardian Life Insurance Company of America.`,
    middleImage: "https://yulife-develop.imgix.net/yuscreen/product-details-guardian-hero-2022-09-21-1/Guardian_DENHMO.png?ixlib=js-3.2.1&w=981&h=492&s=9b0f58d52c4d8785c045e6540748e1ef",
    titleMarkdown: "**Managed Care plan**"
}

export const Guardian_DENCHOI:USProductData = {
    id: "Guardian_DENCHOI",
    slotAbreviation: "Dental Choice Plan (PPO and DHMO/MDC)",
    heading: "Dental plan",
    description: "With Guardian’s Dental plan you’ll have the care needed to help keep you and your family smiling.",
    shortDescription: "With Guardian’s Dental plan you’ll have the care needed to help keep you and your family smiling. ",
    image_1: Tooth_ImageUrl,
    markdownTitle_1: "Access to dental care",
    markdownSubTitle_1: "Dental care is an important part of a complete health plan ",
    image_2: Wallet_ImageUrl,
    markdownTitle_2: "The choice is yours",
    markdownSubTitle_2: "Choose between Dental PPO or DHMO/Managed Care plans to find the coverage that is appropriate for you and your family",
    image_3: Book_ImageUrl,
    markdownTitle_3: "Knowledge is power",
    markdownSubTitle_3: "Visit guardianlife.com to review your options to choose the right plan for you",
    videoImageUrl: Video_ImageUrl,
    videoUrl: "https://fast.wistia.com/embed/medias/cerkt6avzm",
    footerText: "*2021 Guardian reporting and January 2021 Fair Health Data",
    legalStuff_1: "DentalGuard Insurance is underwritten and issued by The Guardian Life Insurance Company of America, New York, NY. Products are not available in all states.",
    legalStuff_2: "Managed Care is underwritten and issued by (IL) - First Commonwealth Insurance Company, (MO) - First Commonwealth of Missouri, (IN) - First Commonwealth Limited Health Services Corporation, (MI) - First Commonwealth Inc., (TX) - Managed DentalGuard, Inc. (DHMO), (NJ) - Managed DentalGuard, Inc., (FL, NY) - The Guardian Life Insurance Company of America. All First Commonwealth and Managed DentalGuard, Inc. entities referenced are wholly-owned subsidiaries of The Guardian Life Insurance Company of America, New York, NY. Products are not available in all states.",
    legalStuff_3: "For CA: Coverage is underwritten and issued by Managed Dental Care, a California-licensed Knox-Keene prepaid dental plan wholly-owned by The Guardian Life Insurance Company of America, New York, NY.",
    legalStuff_4: "YuLife is neither a subsidiary nor affiliate of The Guardian Life Insurance Company of America (Guardian).  YuLife is an independent, third-party service provider. Guardian is neither responsible nor liable for services, advice or recommendations made by YuLife.",
    legalStuff_5: `Guardian® is a registered trademark of The Guardian Life Insurance Company of America and is used with express permission. \n©Copyright ${year} The Guardian Life Insurance Company of America.`,
    middleImage: "https://yulife-develop.imgix.net/yuscreen/product-details-guardian-hero-2022-09-21-1/Guardian_DENCHOI.png?ixlib=js-3.2.1&w=981&h=492&s=7f460a447446ffab629c494471ff5f53",
    titleMarkdown: "**Dental plan**"
}

export const Guardian_TLIF:USProductData = {
    id: "Guardian_TLIF",
    heading: "Term Life insurance",
    slotAbreviation: "Life insurance",
    description: "Guardian’s Term Life insurance protection is here to provide financial support for your loved ones in the event of the unexpected.",
    shortDescription: "Guardian’s Term Life insurance protection is here to provide financial support for your loved ones in the event of the unexpected.",
    image_1: Megaphone_ImageUrl,
    markdownTitle_1: "Good news!",
    markdownSubTitle_1: "Your employer provides this coverage at no cost to you",
    image_2: Wallet_ImageUrl,
    markdownTitle_2: "Financial support",
    markdownSubTitle_2: "Life insurance is paid directly to your beneficiaries",
    image_3: Doc_ImageUrl,
    markdownTitle_3: "Added benefit",
    markdownSubTitle_3: "Generally, Life insurance benefits are not subject to income taxes and value is not affected by market conditions",
    legalStuff_1: "Guardian’s Group Term Life Insurance is underwritten and issued by The Guardian Life Insurance Company of America, New York, NY. Products are not available in all states.",
    legalStuff_2: "Guardian, its subsidiaries, agents, and employees do not provide tax, legal, or accounting advice. Consult your tax, legal, or accounting professional regarding your individual situation.",
    legalStuff_3: "YuLife is neither a subsidiary nor affiliate of The Guardian Life Insurance Company of America (Guardian).  YuLife is an independent, third-party service provider. Guardian is neither responsible nor liable for services, advice or recommendations made by YuLife.",
    legalStuff_4: `Guardian® is a registered trademark of The Guardian Life Insurance Company of America and is used with express permission. \n©Copyright ${year} The Guardian Life Insurance Company of America.`,
    middleImage: "https://yulife-develop.imgix.net/yuscreen/product-details-guardian-hero-2022-09-21-1/Guardian_TLIF.png?ixlib=js-3.2.1&w=981&h=492&s=e6fdbaa89a861293172c74a4f84454b5",
    titleMarkdown: "**Term Life insurance**"
}

export const Guardian_VIS:USProductData = {
    id: "Guardian_VIS",
    heading: "Vision insurance",
    description: "Take a look into the future and plan ahead with Guardian's Vision insurance.",
    shortDescription: "Take a look into the future and plan ahead with Guardian’s Vision insurance.",
    image_1: Calculator_ImageUrl,
    markdownTitle_1: "Let's do the math",
    markdownSubTitle_1: "Roughly 12 million people over the age of 40 have vision impairment in the US*",
    image_2: Calendar_ImageUrl,
    markdownTitle_2: "Prepare for the future",
    markdownSubTitle_2: "Eye exams for children play an important role in ensuring their normal vision development, therefore vision care should start early",
    image_3: Book_ImageUrl,
    markdownTitle_3: "Smart moves",
    markdownSubTitle_3: "Preventative eye care can be an important part of managing your overall health",
    videoImageUrl: Video_ImageUrl,
    videoUrl: "https://fast.wistia.com/embed/medias/cerkt6avzm",
    footerText: "*https://www.cdc.gov/visionhealth/basics/ced/fastfacts.htm",
    legalStuff_1: "Guardian’s Group Vision Insurance is underwritten and issued by The Guardian Life Insurance Company of America, New York, NY. Products are not available in all states.",
    legalStuff_2: "YuLife is neither a subsidiary nor affiliate of The Guardian Life Insurance Company of America (Guardian).  YuLife is an independent, third-party service provider. Guardian is neither responsible nor liable for services, advice or recommendations made by YuLife.",
    legalStuff_3:`Guardian® is a registered trademark of The Guardian Life Insurance Company of America and is used with express permission. \n©Copyright ${year} The Guardian Life Insurance Company of America.`,
    middleImage: "https://yulife-develop.imgix.net/yuscreen/product-details-guardian-hero-2022-09-21-1/Guardian_VIS.png?ixlib=js-3.2.1&w=981&h=492&s=362348106cb897524f820b8fc07f8f7f",
    titleMarkdown: "**Vision insurance**"
}

export const Guardian_WLIF:USProductData = {
    id: "Guardian_WLIF",
    slotAbreviation: "Voluntary life insurance",
    heading: "Voluntary Life insurance",
    description: "Guardian’s Voluntary Life insurance gives you the opportunity to meet your personalized coverage needs and is a key part of a smart financial plan.",
    shortDescription: "Guardian’s Voluntary Life insurance gives you the opportunity to meet your personalized coverage needs.",
    image_1: Calculator_ImageUrl,
    markdownTitle_1: "Let’s do the math",
    markdownSubTitle_1: "A good ‘rule of thumb’ is to have 5-7 times your salary in life insurance coverage if you have financial dependents*",
    image_2: Wallet_ImageUrl,
    markdownTitle_2: "Helps prevent financial hardship",
    markdownSubTitle_2: "Without the proper level of Life insurance, your family can suffer financial hardship if something happens to you",
    image_3: SmartWatch_ImageUrl,
    markdownTitle_3: "Time for a checkup!",
    markdownSubTitle_3: "As your life changes, so do your financial needs, so make sure you regularly assess your coverage levels",
    footerText: "*This is Guardian's “rule of thumb” based on experience and may not apply universally to every individual and their unique set of circumstances.",
    legalStuff_1: "The legal stuff",
    legalStuff_2: "The legal stuff",
    legalStuff_3: "The legal stuff",
    middleImage: "https://yulife-develop.imgix.net/yuscreen/product-details-guardian-hero-2022-09-21-1/Guardian_WLIF.png?ixlib=js-3.2.1&w=981&h=492&s=542daf1099e4ae88d81728d6eea1ca2b",
    titleMarkdown: "**Voluntary Life insurance**"
}

export const Guardian_ULIF:USProductData = {
    id: "Guardian_ULIF",
    slotAbreviation: "Voluntary life insurance",
    heading: "Voluntary Life insurance",
    description: "Guardian’s Voluntary Life insurance gives you the opportunity to meet your personalized coverage needs and is a key part of a smart financial plan.",
    shortDescription: "Guardian’s Voluntary Life insurance gives you the opportunity to meet your personalized coverage needs.",
    image_1: Calculator_ImageUrl,
    markdownTitle_1: "Let's do the math",
    markdownSubTitle_1: "A good ‘rule of thumb’ is to have 5-7 times your salary in life insurance coverage if you have financial dependents*",
    image_2: Wallet_ImageUrl,
    markdownTitle_2: "Helps prevent financial hardship",
    markdownSubTitle_2: "Without the proper level of Life insurance, your family can suffer financial hardship if something happens to you",
    image_3: SmartWatch_ImageUrl,
    markdownTitle_3: "Time for a checkup!",
    markdownSubTitle_3: "As your life changes, so do your financial needs, so make sure you regularly assess your coverage levels",
    footerText: "*This is Guardian's “rule of thumb” based on experience and may not apply universally to every individual and their unique set of circumstances.",
    legalStuff_1: "The legal stuff",
    legalStuff_2: "The legal stuff",
    legalStuff_3: "The legal stuff",
    middleImage: "https://yulife-develop.imgix.net/yuscreen/product-details-guardian-hero-2022-09-21-1/Guardian_ULIF.png?ixlib=js-3.2.1&w=981&h=492&s=42585eb9cf614bd58356eb2f22ca36c8",
    titleMarkdown: "**Voluntary Life insurance**"
}

export const Guardian_ADD:USProductData = {
    id: "Guardian_ADD",
    slotAbreviation: "AD&D insurance",
    heading: "Accidental Death & Dismemberment insurance",
    description: "We hope you never need to use your Guardian AD&D insurance, but it's here if you do.",
    shortDescription: "We hope you never need to use your Guardian AD&D insurance, but it's here if you do.",
    image_1: Megaphone_ImageUrl,
    markdownTitle_1: "Great news!",
    markdownSubTitle_1: "Your employer provides this coverage at no cost to you",
    image_2: Wallet_ImageUrl,
    markdownTitle_2: "Lump sum payment",
    markdownSubTitle_2: "Keeping things simple, with a single lump sum payment, should you get seriously injured or unexpectedly pass away from an accident",
    image_3: Lock_ImageUrl,
    markdownTitle_3: "Added protection",
    markdownSubTitle_3: "Pays in addition to your employer paid Life insurance benefit",
    legalStuff_1: "Guardian’s Group Accidental Death and Dismemberment Insurance is underwritten and issued by The Guardian Life Insurance Company of America, New York, NY. Products are not available in all states.",
    legalStuff_2: "Guardian, its subsidiaries, agents, and employees do not provide tax, legal, or accounting advice. Consult your tax, legal, or accounting professional regarding your individual situation.",
    legalStuff_3: "YuLife is neither a subsidiary nor affiliate of The Guardian Life Insurance Company of America (Guardian).  YuLife is an independent, third-party service provider. Guardian is neither responsible nor liable for services, advice or recommendations made by YuLife.",
    legalStuff_4: `Guardian® is a registered trademark of The Guardian Life Insurance Company of America and is used with express permission. \n©Copyright ${year} The Guardian Life Insurance Company of America.`,
    middleImage: "https://yulife-develop.imgix.net/yuscreen/product-details-guardian-hero-2022-09-21-1/Guardian_ADD.png?ixlib=js-3.2.1&w=981&h=492&s=610962cd257da048ab7c834b2d15be9b",
    titleMarkdown: "**AD&D insurance**"
}

export const Guardian_STD:USProductData = {
    id: "Guardian_STD",
    slotAbreviation: "Short term disability insurance",
    heading: "Short Term Disability insurance",
    description: "Guardian’s Short Term Disability insurance helps protect your most important asset, your paycheck, and provides financial confidence for you and those who depend on you.",
    shortDescription: "Guardian’s Short Term Disability insurance helps protect your most important asset, your paycheck.",
    image_1: Megaphone_ImageUrl,
    markdownTitle_1: "Good news!",
    markdownSubTitle_1: "Your employer provides this coverage at no cost to you",
    image_2: Wallet_ImageUrl,
    markdownTitle_2: "Replaces lost income",
    markdownSubTitle_2: "Works by replacing a portion of your earnings when you're unable to work due to a covered injury or illness",
    image_3: Calendar_ImageUrl,
    markdownTitle_3: "Added security",
    markdownSubTitle_3: "Pays a weekly cash benefit directly to you",
    legalStuff_1: "Guardian’s Group Short Term Disability Insurance is underwritten and issued by The Guardian Life Insurance Company of America, New York, NY. Products are not available in all states.",
    legalStuff_2: "YuLife is neither a subsidiary nor affiliate of The Guardian Life Insurance Company of America (Guardian).  YuLife is an independent, third-party service provider. Guardian is neither responsible nor liable for services, advice or recommendations made by YuLife.",
    legalStuff_3: `Guardian® is a registered trademark of The Guardian Life Insurance Company of America and is used with express permission. \n©Copyright ${year} The Guardian Life Insurance Company of America.`,
    middleImage: "https://yulife-develop.imgix.net/yuscreen/product-details-guardian-hero-2022-09-21-1/Guardian_STD.png?ixlib=js-3.2.1&w=981&h=492&s=9ddf215ce380b3dfdb7d2c61e293f6e4",
    titleMarkdown: "**Short Term Disability insurance**"
}

export const Guardian_LTD:USProductData = {
    id: "Guardian_LTD",
    slotAbreviation: "Long term disability insurance",
    heading: "Long Term Disability insurance",
    description: "Guardian’s Long Term Disability insurance helps protect your most important asset, your paycheck, and provides financial confidence for you and those who depend on you.",
    shortDescription: "Guardian’s Long Term Disability insurance helps protect your most important asset, your paycheck.",
    image_1: Megaphone_ImageUrl,
    markdownTitle_1: "Good news!",
    markdownSubTitle_1: "Your employer provides this coverage at no cost to you",
    image_2: Wallet_ImageUrl,
    markdownTitle_2: "Replaces lost income",
    markdownSubTitle_2: "Protects a portion of your paycheck in case you are unable to work for an extended period of time",
    image_3: Calendar_ImageUrl,
    markdownTitle_3: "Added security",
    markdownSubTitle_3: "Pays a monthly cash benefit directly to you",
    legalStuff_1: "Guardian’s Group Long Term Disability Insurance is underwritten and issued by The Guardian Life Insurance Company of America, New York, NY. Products are not available in all states.",
    legalStuff_2: "YuLife is neither a subsidiary nor affiliate of The Guardian Life Insurance Company of America (Guardian).  YuLife is an independent, third-party service provider. Guardian is neither responsible nor liable for services, advice or recommendations made by YuLife.",
    legalStuff_3: `Guardian® is a registered trademark of The Guardian Life Insurance Company of America and is used with express permission. \n©Copyright ${year} The Guardian Life Insurance Company of America.`,
    middleImage: "https://yulife-develop.imgix.net/yuscreen/product-details-guardian-hero-2022-09-21-1/Guardian_LTD.png?ixlib=js-3.2.1&w=981&h=492&s=8d0faf76ebbf167c97cb829f4ec9ce2b",
    titleMarkdown: "**Long Term Disability insurance**"
}

export const Guardian_VADD:USProductData = {
    id: "Guardian_VADD",
    slotAbreviation: "Voluntary AD&D insurance",
    heading: "Voluntary Accidental Death & Dismemberment insurance",
    description: "Guardian AD&D insurance provides additional protection.",
    shortDescription: "Guardian's Voluntary AD&D insurance gives you an affordable way to personalize your coverage and meet your family's needs.",
    image_1: Wallet_ImageUrl,
    markdownTitle_1: "Lump sum payment",
    markdownSubTitle_1: "Keeping things simple, with a single lump sum payment should you get seriously injured or unexpectedly pass away from a covered accident",
    image_2: Calendar_ImageUrl,
    markdownTitle_2: "Plan for the unexpected",
    markdownSubTitle_2: "Accidents are the 4th leading cause of unexpected fatalities in the US*",
    image_3: Lock_ImageUrl,
    markdownTitle_3: "Added protection",
    markdownSubTitle_3: "Helps protect your family’s financial future",
    footerText: "*Medical News Today, July 2019.",
    legalStuff_1: "Guardian’s Group Accidental Death and Dismemberment Insurance is underwritten and issued by The Guardian Life Insurance Company of America, New York, NY. Products are not available in all states.",
    legalStuff_2: "YuLife is neither a subsidiary nor affiliate of The Guardian Life Insurance Company of America (Guardian).  YuLife is an independent, third-party service provider. Guardian is neither responsible nor liable for services, advice or recommendations made by YuLife.",
    legalStuff_3: `Guardian® is a registered trademark of The Guardian Life Insurance Company of America and is used with express permission. \n©Copyright ${year} The Guardian Life Insurance Company of America.`,
    middleImage: "https://yulife-develop.imgix.net/yuscreen/product-details-guardian-hero-2022-09-21-1/Guardian_VADD.png?ixlib=js-3.2.1&w=981&h=492&s=cd0ed3219ccbffa0e5439ae055605a81",
    titleMarkdown: "**Voluntary Accidental Death & Dismemberment insurance**"
}

export const Guardian_VLTD:USProductData = {
    id: "Guardian_VLTD",
    heading: "Voluntary Long Term Disability insurance",
    slotAbreviation: "Voluntary long term disability insurance",
    description: "Guardian’s Long Term Disability insurance helps protect your most important asset, your paycheck, and provides financial confidence for you and those who depend on you.",
    shortDescription: "Guardian’s Long Term Disability insurance helps protect your most important asset, your paycheck.",
    image_1: Wallet_ImageUrl,
    markdownTitle_1: "Replaces lost income",
    markdownSubTitle_1: "Works by replacing a portion of your earnings when you're unable to work due to a covered injury or illness",
    image_2: Calendar_ImageUrl,
    markdownTitle_2: "Added security",
    markdownSubTitle_2: "Pays a monthly cash benefit directly to you",
    image_3: Calculator_ImageUrl,
    markdownTitle_3: "Let's do the math",
    markdownSubTitle_3: "Good rule of thumb is to have have enough disability insurance to cover 50-60% of your after-tax income*",
    videoImageUrl: Video_ImageUrl,
    videoUrl: "https://glic.wistia.com/medias/zow5dtetoe",
    footerText: "*Guardian's rule of thumb is based on experience and may not be appropriate for a wide audience. It may not universally cover an individual's unique set of experiences.",
    legalStuff_1: "Guardian’s Group Long Term Disability Insurance is underwritten and issued by The Guardian Life Insurance Company of America, New York, NY. Products are not available in all states.",
    legalStuff_2: "YuLife is neither a subsidiary nor affiliate of The Guardian Life Insurance Company of America (Guardian).  YuLife is an independent, third-party service provider. Guardian is neither responsible nor liable for services, advice or recommendations made by YuLife.",
    legalStuff_3: `Guardian® is a registered trademark of The Guardian Life Insurance Company of America and is used with express permission. \n©Copyright ${year} The Guardian Life Insurance Company of America.`,
    middleImage: "https://yulife-develop.imgix.net/yuscreen/product-details-guardian-hero-2022-09-21-1/Guardian_VLTD.png?ixlib=js-3.2.1&w=981&h=492&s=cfad4c6f4bfdb02b91e4384cc885d639",
    titleMarkdown: "**Voluntary Long Term Disability insurance**"
}

export const Guardian_VSTD:USProductData = {
    id: "Guardian_VSTD",
    heading: "Voluntary Short Term Disability insurance",
    slotAbreviation: "Voluntary short term disability insurance",
    description: "Guardian’s Short Term Disability insurance helps protect your most important asset, your paycheck, and provides financial confidence for you and those who depend on you.",
    shortDescription: "Guardian’s Short Term Disability insurance helps protect your most important asset, your paycheck.",
    image_1: Wallet_ImageUrl,
    markdownTitle_1: "Replaces lost income",
    markdownSubTitle_1: "Works by replacing a portion of your earnings when you're unable to work due to a covered injury or illness",
    image_2: Calendar_ImageUrl,
    markdownTitle_2: "Added security",
    markdownSubTitle_2: "Pays a weekly cash benefit directly to you",
    image_3: Book_ImageUrl,
    markdownTitle_3: "Resources and support",
    markdownSubTitle_3: "Provides access to resources and support that can help you get back to work",
    videoImageUrl: Video_ImageUrl,
    videoUrl: "https://glic.wistia.com/medias/qa6p6m7ylk",
    legalStuff_1: "Guardian’s Group Short Term Disability Insurance is underwritten and issued by The Guardian Life Insurance Company of America, New York, NY. Products are not available in all states.",
    legalStuff_2: "YuLife is neither a subsidiary nor affiliate of The Guardian Life Insurance Company of America (Guardian).  YuLife is an independent, third-party service provider. Guardian is neither responsible nor liable for services, advice or recommendations made by YuLife.",
    legalStuff_3: `Guardian® is a registered trademark of The Guardian Life Insurance Company of America and is used with express permission. \n©Copyright ${year} The Guardian Life Insurance Company of America.`,
    middleImage: "https://yulife-develop.imgix.net/yuscreen/product-details-guardian-hero-2022-09-21-1/Guardian_VSTD.png?ixlib=js-3.2.1&w=981&h=492&s=2353eb78ef7d3ee7322c91ead6d8736c",
    titleMarkdown: "**Voluntary Short Term Disability insurance**"
}

export const Guardian_ACC:USProductData = {
    id: "Guardian_VSTD",
    heading: "Accident insurance",
    description: "Guardian’s Accident insurance provides a layer of protection that pays you cash when you suffer from a covered injury.",
    shortDescription: "Guardian’s Accident insurance provides a layer of protection that pays you cash when you suffer from a covered injury.",
    image_1: Lock_ImageUrl,
    markdownTitle_1: "Added protection",
    markdownSubTitle_1: "This coverage pays in addition to your existing medical plan",
    image_2: Email_ImageUrl,
    markdownTitle_2: "Flexible",
    markdownSubTitle_2: "Benefits are paid directly to you",
    image_3: Wallet_ImageUrl,
    markdownTitle_3: "Safety net for the unexpected",
    markdownSubTitle_3: "Use this benefit to offset your medical co-pays or non-medical expenses like childcare",
    videoImageUrl: Video_ImageUrl,
    videoUrl: "https://fast.wistia.com/embed/medias/9qkr0boxkh",
    legalStuff_1: "Guardian’s Group Accident Insurance is underwritten and issued by The Guardian Life Insurance Company of America, New York, NY. Products are not available in all states.",
    legalStuff_2: "YuLife is neither a subsidiary nor affiliate of The Guardian Life Insurance Company of America (Guardian).  YuLife is an independent, third-party service provider. Guardian is neither responsible nor liable for services, advice or recommendations made by YuLife.",
    legalStuff_3: `Guardian® is a registered trademark of The Guardian Life Insurance Company of America and is used with express permission. \n©Copyright ${year} The Guardian Life Insurance Company of America.`,
    middleImage: "https://yulife-develop.imgix.net/yuscreen/product-details-guardian-hero-2022-09-21-1/Guardian_ACC.png?ixlib=js-3.2.1&w=981&h=492&s=957c0afd993a7db02b1e15545bdcae96",
    titleMarkdown: "**Accident insurance**"
}

export const Guardian_CRI:USProductData = {
    id: "Guardian_CRI",
    heading: "Critical Illness insurance",
    slotAbreviation: "Critical illness insurance",
    description: "Guardian’s Critical Illness insurance gives you financial protection if you experience a covered serious illness or medical condition, such as stroke, heart attack, or cancer.",
    shortDescription: "Guardian’s Critical Illness insurance gives you financial protection if you experience a covered serious illness or medical condition.",
    image_1: Lock_ImageUrl,
    markdownTitle_1: "Added protection",
    markdownSubTitle_1: "This coverage supplements your existing medical plan",
    image_2: Email_ImageUrl,
    markdownTitle_2: "Flexible",
    markdownSubTitle_2: "Pays a cash benefit for covered conditions to use as you wish - such as traveling for treatment, additional childcare or household expenses",
    image_3: Heart_ImageUrl,
    markdownTitle_3: "Focus on recovery, not finances",
    markdownSubTitle_3: "Have confidence that you’ll have the protection you need so you can focus on your recovery",
    videoImageUrl: Video_ImageUrl,
    videoUrl: "https://fast.wistia.com/embed/medias/moyrwtrlvf",
    legalStuff_1: "Guardian’s Group Critical Illness Insurance is underwritten and issued by The Guardian Life Insurance Company of America, New York, NY. Products are not available in all states.",
    legalStuff_2: "YuLife is neither a subsidiary nor affiliate of The Guardian Life Insurance Company of America (Guardian).  YuLife is an independent, third-party service provider. Guardian is neither responsible nor liable for services, advice or recommendations made by YuLife.",
    legalStuff_3: `Guardian® is a registered trademark of The Guardian Life Insurance Company of America and is used with express permission. \n©Copyright ${year} The Guardian Life Insurance Company of America.`,
    middleImage: "https://yulife-develop.imgix.net/yuscreen/product-details-guardian-hero-2022-09-21-1/Guardian_CRI.png?ixlib=js-3.2.1&w=981&h=492&s=1cc656f7554b4659d1aa04bde698b318",
    titleMarkdown: "**Critical Illness insurance**"
}

export const Guardian_HI:USProductData = {
    id: "Guardian_HI",
    heading: "Hospital Indemnity insurance",
    slotAbreviation: "Hospital indemnity insurance",
    description: "Guardian’s Hospital Indemnity insurance helps you manage costs that come from a covered hospital admission, such as your deductible or out-of-pocket expenses.",
    shortDescription: "Guardian’s Hospital Indemnity insurance helps you manage costs that come from a covered hospital admission.",
    image_1: Lock_ImageUrl,
    markdownTitle_1: "Added protection",
    markdownSubTitle_1: "Most standard health plans don’t cover all the costs of a hospital stay",
    image_2: Calculator_ImageUrl,
    markdownTitle_2: "Ouch!",
    markdownSubTitle_2: "The average cost of a 3-day hospital stay is $30,000 dollars*",
    image_3: Email_ImageUrl,
    markdownTitle_3: "Flexible",
    markdownSubTitle_3: "Pays a cash benefit directly to you, if you are hospitalized, to help you cover out of pocket expenses such as: deductibles, childcare, travel, or income recovery",
    videoImageUrl: Video_ImageUrl,
    videoUrl: "https://fast.wistia.com/embed/medias/az39e6tu00",
    footerText: "*Protection from high medical costs, 2022.",
    legalStuff_1: "Guardian’s Group Hospital Indemnity Insurance is underwritten and issued by The Guardian Life Insurance Company of America, New York, NY. Products are not available in all states.",
    legalStuff_2: "YuLife is neither a subsidiary nor affiliate of The Guardian Life Insurance Company of America (Guardian).  YuLife is an independent, third-party service provider. Guardian is neither responsible nor liable for services, advice or recommendations made by YuLife.",
    legalStuff_3: `Guardian is a registered trademark of The Guardian Life Insurance Company of America and is used with express permission.\n©Copyright ${year} The Guardian Life Insurance Company of America.`,
    middleImage: "https://yulife-develop.imgix.net/yuscreen/product-details-guardian-hero-2022-09-21-1/Guardian_HI.png?ixlib=js-3.2.1&w=981&h=492&s=11cb617d95ff146501cc7ffbb1fb7081",
    titleMarkdown: "**Hospital Indemnity insurance**"

}

export const Guardian_SPDIS:USProductData = {
    id: "Guardian_SPDIS",
    heading: "Specified Disease insurance",
    slotAbreviation: "Hospital indemnity insurance",
    description: "For employees located in New York, Guardian’s Specified Disease insurance gives you financial protection if you experience a covered serious illness or medical condition, such as stroke, heart attack, or cancer.",
    shortDescription: "Guardian’s Specified Disease insurance gives you financial protection if you experience a covered serious illness or medical condition.",
    image_1: Lock_ImageUrl,
    markdownTitle_1: "Added protection",
    markdownSubTitle_1: "This coverage supplements your existing medical plan",
    image_2: Email_ImageUrl,
    markdownTitle_2: "Flexible",
    markdownSubTitle_2: "Pays a cash benefit for covered conditions to use as you wish - such as traveling for treatment, additional childcare or household expenses",
    image_3: Heart_ImageUrl,
    markdownTitle_3: "Focus on recovery, not finances",
    markdownSubTitle_3: "Have confidence that you’ll have the protection you need so you can focus on your recovery",
    videoImageUrl: Video_ImageUrl,
    videoUrl: "https://www.youtube.com/watch?v=9GqHTqNnzC4",
    legalStuff_1: "Guardian’s Group Specified Disease Insurance is underwritten and issued by The Guardian Life Insurance Company of America, New York, NY. Products are not available in all states.",
    legalStuff_2: "YuLife is neither a subsidiary nor affiliate of The Guardian Life Insurance Company of America (Guardian).  YuLife is an independent, third-party service provider. Guardian is neither responsible nor liable for services, advice or recommendations made by YuLife.",
    legalStuff_3: `Guardian® is a registered trademark of The Guardian Life Insurance Company of America and is used with express permission. \n©Copyright ${year} The Guardian Life Insurance Company of America.`,
    middleImage: "https://yulife-develop.imgix.net/yuscreen/product-details-guardian-hero-2022-09-21-1/Guardian_SPDIS.png?ixlib=js-3.2.1&w=981&h=492&s=fc0512dc822b38cd257292def6cef945",
    titleMarkdown: "**Specified Disease insurance**"

}
export const Guardian_CAN:USProductData = {
    id: "Guardian_CAN",
    heading: "Cancer insurance",
    slotAbreviation: "Cancer insurance",
    description: "Protect your savings with cash benefits based on your covered diagnosis, procedures, screenings, and treatment with Guardian’s Cancer insurance.",
    image_1: Heart_ImageUrl,
    markdownTitle_1: "Focus on recovery, not finances",
    markdownSubTitle_1: "Recovering from cancer can bring unexpected expenses",
    image_2: Lock_ImageUrl,
    markdownTitle_2: "Added protection",
    markdownSubTitle_2: "This benefit pays in addition to any health insurance you may have",
    image_3: Email_ImageUrl,
    markdownTitle_3: "Flexible",
    markdownSubTitle_3: "Payments are sent directly to you, for a second surgical opinion, transportation costs, or however you choose!",
    videoImageUrl: Video_ImageUrl,
    videoUrl: "https://glic.wistia.com/medias/4a24j8s7dm",
    legalStuff_1: "Guardian’s Group Cancer Insurance is underwritten and issued by The Guardian Life Insurance Company of America, New York, NY. Products are not available in all states.",
    legalStuff_2: "YuLife is neither a subsidiary nor affiliate of The Guardian Life Insurance Company of America (Guardian).  YuLife is an independent, third-party service provider. Guardian is neither responsible nor liable for services, advice or recommendations made by YuLife.",
    legalStuff_3: `Guardian® is a registered trademark of The Guardian Life Insurance Company of America and is used with express permission. \n©Copyright ${year} The Guardian Life Insurance Company of America.`,
    middleImage: "https://yulife-develop.imgix.net/yuscreen/product-details-guardian-hero-2022-09-21-1/Guardian_CAN.png?ixlib=js-3.2.1&w=981&h=492&s=aed144247ccb2c3bd6a5e346e15aa3ae",
    titleMarkdown: "**Cancer insurance**"
}

export const Guardian_ACCSICK:USProductData = {
    id: "Guardian_ACCSICK",
    heading: "Accident and Sickness Indemnity insurance (CO)",
    slotAbreviation: "Accident and Sickness Indemnity insurance (CO)",
    description: "For employees located in Colorado, Guardian’s Accident and Sickness Indemnity insurance helps you manage costs that come from a covered hospital admission, such as your deductible or out-of-pocket expenses.",
    image_1: Lock_ImageUrl,
    markdownTitle_1: "Added protection",
    markdownSubTitle_1: "Most standard health plans don’t cover all the costs of a hospital stay",
    image_2: Calculator_ImageUrl,
    markdownTitle_2: "Ouch!",
    markdownSubTitle_2: "The average cost of a 3-day hospital stay is $30,000 dollars*",
    image_3: Email_ImageUrl,
    markdownTitle_3: "Flexible",
    markdownSubTitle_3: "Pays a cash benefit directly to you, if you are hospitalized, to help you cover out of pocket expenses such as: deductibles, childcare, travel, or income recovery",
    videoImageUrl: Video_ImageUrl,
    footerText: "*Protection from high medical costs, 2022.",
    legalStuff_1: "Guardian’s Group Accident and Sickness Indemnity Insurance is underwritten and issued by The Guardian Life Insurance Company of America, New York, NY. Products are not available in all states.",
    legalStuff_2: "YuLife is neither a subsidiary nor affiliate of The Guardian Life Insurance Company of America (Guardian).  YuLife is an independent, third-party service provider. Guardian is neither responsible nor liable for services, advice or recommendations made by YuLife. ",
    legalStuff_3: `Guardian® is a registered trademark of The Guardian Life Insurance Company of America and is used with express permission. \n©Copyright ${year} The Guardian Life Insurance Company of America.`,
    middleImage: "https://yulife-develop.imgix.net/yuscreen/product-details-guardian-hero-2022-09-21-1/Guardian_ACCSICK.png?ixlib=js-3.2.1&w=981&h=492&s=71266d94d57c2bcbd75a1b5ee3d1eb3e",
    titleMarkdown: "**Accident and Sickness Indemnity insurance (CO)**"
}

export const Guardian_VLIF:USProductData = {
    id: "Guardian_VLIF",
    heading: "Voluntary Term Life insurance",
    slotAbreviation: "Voluntary life insurance",
    description: "Guardian’s Voluntary Term Life insurance gives you the opportunity to meet your personalized coverage needs and is a key part of a smart financial plan.",
    image_1: Calculator_ImageUrl,
    markdownTitle_1: "Let’s do the math",
    markdownSubTitle_1: "A good ‘rule of thumb’ is to have 5-7 times your salary in life insurance coverage if you have financial dependents*",
    image_2: Wallet_ImageUrl,
    markdownTitle_2: "Helps prevent financial hardship",
    markdownSubTitle_2: "Without the proper level of Life insurance, your family can suffer financial hardship if something happens to you",
    image_3: SmartWatch_ImageUrl,
    markdownTitle_3: "Time for a checkup!",
    markdownSubTitle_3: "As your life changes, so do your financial needs, so make sure you regularly assess your coverage levels",
    videoImageUrl: Video_ImageUrl,
    videoUrl:"https://fast.wistia.com/embed/medias/69pkiek5ur",
    footerText: "*This is Guardian's “rule of thumb” based on experience and may not apply universally to every individual and their unique set of circumstances.",
    legalStuff_1: "Guardian’s Group Term Life Insurance is underwritten and issued by The Guardian Life Insurance Company of America, New York, NY. Products are not available in all states.",
    legalStuff_2: "Guardian, its subsidiaries, agents, and employees do not provide tax, legal, or accounting advice. Consult your tax, legal, or accounting professional regarding your individual situation.",
    legalStuff_3: "YuLife is neither a subsidiary nor affiliate of The Guardian Life Insurance Company of America (Guardian).  YuLife is an independent, third-party service provider. Guardian is neither responsible nor liable for services, advice or recommendations made by YuLife.",
    legalStuff_4: `Guardian® is a registered trademark of The Guardian Life Insurance Company of America and is used with express permission. \n©Copyright ${year} The Guardian Life Insurance Company of America.`,
    middleImage: "https://yulife-develop.imgix.net/yuscreen/product-details-guardian-hero-2022-09-21-1/Guardian_VLIF.png?ixlib=js-3.2.1&w=981&h=492&s=4a017aa145a015b1bcbb3ee5afeb4758",
    titleMarkdown: "**Voluntary Term Life insurance**"
}

export const MyWellbeingHubBox:BoxOption = {
    imageUrl: "https://yulife-develop.imgix.net/yuscreen/box-option-card/wellbeing-hub.png?ixlib=js-3.2.1&w=360&h=312&s=10e0f8e3fa178066a180ca7828345458",
    title: "My Wellbeing Hub",
    description: "Access your exclusive wellness benefits here"
}

export const ExploreInsureanceBox:BoxOption = {
    imageUrl: "https://yulife-develop.imgix.net/yuscreen/box-option-card/policy-details.svg?ixlib=js-3.2.1&w=360&h=312&s=3d7cbb8ed2198852ab149a7e2fdbf9de",
    title: "Explore Insurance",
    description: "Find out more about your employer provided coverage"
}

export const VisionInsuranceBox:BoxOption = {
    imageUrl: "https://yulife-develop.imgix.net/core-products/transamerica-vision.svg?ixlib=js-3.2.1&w=360&h=312&s=505a99904a597da95d84f134f9381d01",
    title: "Vision Insurance",
    description: "Transamerica’s SightAdvantage vision plan will keep you looking sharp."
}

export const PCPListInfoPanel: InfoPanel = {
    imageUrl: "https://yulife-develop.imgix.net/yugi/info-banner/info-2022-07-18.svg?ixlib=js-3.2.1&w=144&height=144&s=71154cfde1b87ec9d46e4d6c432b4b46",
    description: "This list shows group insurance made available to you by your employer. Please refer to your policy documents for eligibility and benefit details"
}

export const GapVisInsuranceInEnrolment: YuScreenInfo = {
    mainYuCoinPower: "1",
    SlotProductTitle: Gap,
    SlotYuCoinPowerText: "+",
    SlotLeftBackgroundImgSrc: canEnrolPlusImage,
    SecondSlotProductTitle: Guardian_VIS.heading,
    SecondSlotLeftBackgroundImgSrc: canEnrolPlusImage
};

export const VisInsuranceInEnrolment: YuScreenInfo = {
    mainYuCoinPower: "1",
    SlotProductTitle: Guardian_VIS.heading,
    SlotLeftBackgroundImgSrc: canEnrolPlusImage,
};

export const NoProduct: YuScreenInfo = {
    mainYuCoinPower: "1",
    SlotProductTitle: moreInsurance,
};

export const GapInsurance: YuScreenInfo = {
    mainYuCoinPower: "1",
    SlotProductTitle: Gap,
};

export const VisInsurance: YuScreenInfo = {
    mainYuCoinPower: "1",
    SlotProductTitle: Guardian_VIS.heading,
};

export const GapInEnrolVisOutEnrol: YuScreenInfo = {
    mainYuCoinPower: "1",
    SlotProductTitle: Gap,
    SlotYuCoinPowerText: "+",
    SlotLeftBackgroundImgSrc: canEnrolPlusImage,
    SecondSlotProductTitle: Guardian_VIS.heading,
};

export const AccCanInsuranceInEnrolment: YuScreenInfo = {
    mainYuCoinPower: "1",
    SlotProductTitle: Guardian_CAN.heading,
    SecondSlotProductTitle: Guardian_ACC.heading,
};

export const AccidentInsuranceBox:BoxOption = {
    imageUrl: "https://yulife-develop.imgix.net/core-products/guardian-accident.svg?ixlib=js-3.2.1&w=360&h=312&s=eb1043542f518fc7229573060b87bcc3",
    title: "Accident Insurance",
    description: "Guardian accident insurance pays you cash in the event of an accident."
}

export const CancerInsuranceBox:BoxOption = {
    imageUrl: "https://yulife-develop.imgix.net/core-products/guardian-cancer.svg?ixlib=js-3.2.1&w=360&h=312&s=c76b28b3c615b2da32e0d25fca9114f5",
    title: "Cancer Insurance",
    description: "Guardian provides cash benefits for cancer diagnosis, procedures, and treatment."
}