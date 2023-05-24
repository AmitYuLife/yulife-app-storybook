import { BUSINESS_PRODUCT_SA_1_GIP, BUSINESS_PRODUCT_SA_1_GrFun, BUSINESS_PRODUCT_SA_1_LSDC, BUSINESS_PRODUCT_SA_1_MeGL, BUSINESS_PRODUCT_SA_1_SpGL, BUSINESS_PRODUCT_SA_1_TmpGIP, CBP_SA_1_GrFun, CB_GrFun_SA_2_1, CB_GrFun_SA_2_2, CB_MeGL_SA_2, CB_SpGL_SA_2, CPE_GIP_SA_1, CPE_GrFun_SA_1, CPE_GrFun_SA_2, CPE_LSDC_SA_1, CPE_MeGL_SA_1, CPE_MeGL_SA_2, CPE_SpGL_SA_2, CPE_TmpGIP_SA_1 } from "05_SA/_data"
import moment from "moment"
import { beneficiaries, coverAmounts, keyInfo, SAProductData, usefulLinks, productAdditionalInfo, navButton, furtherScreen, checkButton } from "./types"

//Onboarding SA YU screen 
export const moreInsurance = "More insurance available"
export const protectionPowered = "Protection, powered up!"
export const earnRewardsCopy = "Earn rewards faster with increased YuCoin power"
export const buttonText = "Check out my power"
export const yuCoinText = "YuCoin"
export const powerText = "Power"
export const allPoweredUp = "You are all powered up!"

//SA Products
export const lifeCoverProduct = "Life Cover"
export const WellbeingProduct = "Wellbeing Access"
export const FuneralCover = "Funeral Cover"
export const IncomeProtection = "Income Protection"
export const TemporaryIncome = "Temporary Income"
export const LumpSump = "Lump Sum Disability"
export const SpGL = "Spousal Life Cover"

//SA Product details
export const employerScheme = "Employer Scheme"
export const Employerscheme = "Employer scheme"
export const startsSoon = "Starts soon"
export const yugiTextInfo = "This policy is provided by your employer. Should you change jobs, you’ll lose this policy."
export const keyInfoText = "Key Info"
export const membershipNumberText = "Membership number"
export const startDateText = "Start date"
export const coverTypeText = "Cover type"
export const coverAmountsText = "Cover amounts"
export const youText = "You"
export const beneficiaresText = "Beneficiaries"
export const noBeneficiaryText = `Looks like you haven’t added any beneficiaries yet, use the edit beneficiaries button in the section below to add one.`
export const beneficiaryDescription_1 = `These are the nominated individuals who may receive the funds in the event of your passing.`
export const beneficiaryDescription_2 = "If your spouse passes, the main member becomes the automatic beneficiary of the funds."
export const usefulLinksText = "Useful links"
export const additionalInfo_1 = "This information is based on data we received from your employer. Please contact us if you have any questions."
export const additionalInfo_2 = "YuLife SA Ltd is an authorised financial services provider (FSP No 52478). Insurance products are underwritten by Guardrisk Life Limited, an authorised financial services provider (FSP No 76) and a licenced life insurer."
export const child0_12MonthsText = "Child 0 - 12 months"
export const child1_5YearsText = "Child 1 - 5 years"
export const child6_13YearsText = "Child 6 - 13 years"
export const child14_21YearsText = "Child 14 - 21 years"
export const GrFunCoverAmmountsDisclaimer = "Repatriation cover maximum: R 20,000 per claim."
export const currentSumAssured ="Current sum assured"
export const GIPDisclaimer_1 = "Your policy will continue to payout until you reach retirement/age."
export const GIPDisclaimer_2 = "This is the total cover for both the base and Retirement Funding Waiver benefit (if applicable). Note that the overall benefit is limited to your net after-tax salary."


// Buttons 
export const increaseYourCoverText = "Increase your cover"
export const increaseCoverToText = "Increase cover to"

export const editBeneficiariText = "Edit beneficiaries"
export const makeClaimText = "Make a claim"
export const memberCertText = "Member certificate"
export const addBeneficiariesText = "Add a beneficiary"
export const addBeneficiariesButtonText = "Add a Beneficiary"
export const finishButton = "Finish"
export const requestForm = "Request a form"
export const contactSupport = "Contact Support"

//SA second screen
export const processingText = "We’re processing your request"
export const increaseCoverSubtitle = "We’ll be in touch to complete the medical process to increase your cover. If you’ve already completed this step, your results may still be in review."
export const beneficiaresSubtitle = "When you’re ready to choose a designated beneficiary, let us know and we’ll guide you through the whole process."
export const increaseCoverTitle = "Let’s get your medical\nunderwriting underway!"
export const beInTouch = "We’ll be in touch"
export const makeCLaimTitle = "When you need to make a claim, we’re here for you."
export const makeClaimSubtitle = "If you’re ready to make a claim, contact our support team and we’ll guide you through the claims process."
export const editBenefRequested = "We’ll be in touch to guide you through the rest of the process."
export const claimRequested = "We’ll be in touch to guide you through the claims process soon."

//SA Product descriptions
export const MeGLDescription = "Pays a lump sum to your nominated beneficiaries in the event of your passing."
export const MeGLSpouseCoverDesciption = "Pays a lump sum to your nominated beneficiaries in the event of your passing or your spouse's passing."
export const basisCover = "The Basis of Cover will impact the taxation of your benefit and how it will be paid out. Refer to your Member Certificate below for more details."
export const GrFunDescriptionChildrenCover = "Pays a lump sum to your nominated beneficiaries in the event of your passing or the passing of your spouse and up to 5 of your children."
export const GrFunDescriptionSpouseCover = "Pays a lump sum to your nominated beneficiaries in the event of your passing or the passing of your spouse."
export const GIPDescription = "Pays you monthly until retirement if you cannot work for a defined period of time due to ill health or disability."
export const GIPDisclaimer = `Your policy will continue to payout until you reach retirement/age.\n\nThis is the total cover for both the base and Retirement Funding Waiver benefit (if applicable). Note that the overall benefit is limited to your net after-tax salary.`
export const TemporaryIncomeDesciption =  "Pays you monthly for a limited period of time if you cannot work for a defined period of time due to ill health or disability."
export const TemporaryIncomeDisclaimer_1 = `Your policy will honour a maximum of 12-6 payments.`
export const TemporaryIncomeDisclaimer_2 = `This is the total cover for both the base and Retirement Funding Waiver benefit (if applicable). Note that the overall benefit is limited to your net after-tax salary.`
export const LumpSumpDescrption = "Pays a lump sum if you become permanently disabled."
export const LumpSumpDisclaimer = "The Basis of Cover will impact the taxation of your benefit and how it will be paid out. Refer to your Member Certificate below for more details."



// CONTENT_SMALL_IMAGE_CARD_URL

//SA YU screen
export const createYumujiHeading = "Earn 100 YuCoin";
export const createYumujiText = "when you create your Yumoji.";
export const createYumujiCTA = "Create Yumoji";
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


//Footer copy texts
export const Guardian_Video_Title = "Watch the following Guardian video to learn more:"
export const Legal_Stuff = "The legal stuff"
export const Footer_Text_Part1 = "*2021 Guardian reporting and January 2021 Fair Health Data"
export const Footer_Text_Part2 = "Guardian insurance coverage options available through your employer are included, but do not reflect your individual elections."
export const Footer_Text_Part3 = "Refer to your enrollment site to make your benefit selection."

//Images URL in product cards
export const yugiInfoImg = "https://yulife-develop.imgix.net/yugi/info-banner/info-2022-07-18.svg?ixlib=js-3.2.1&w=144&height=144&s=71154cfde1b87ec9d46e4d6c432b4b46"
export const compassTopRightImg = "https://yulife-develop.imgix.net/yuscreen_products_assets/default/compass_active.svg?ixlib=js-3.2.1&w=180&h=180&s=92413536eff010fc80b8885f3efcaa6d"
export const pencilPersonImg = "https://yulife-develop.imgix.net/personalProducts/pencil_bell.svg?ixlib=js-3.2.1&w=72&h=72&s=469468a94240463c9f5d31095cf780ad"
export const addDocumentImg = "https://yulife-develop.imgix.net/content/icons/add-document.svg?ixlib=js-3.2.1&w=192&h=192&s=47192cb9ad054902be572fedd0a22a5e"
export const editBeneficiariImg = "https://yulife-develop.imgix.net/content/icons/add-document.svg?ixlib=js-3.2.1&w=72&h=72&s=04ff27bc06280ca84fd4cab04ededebd"
export const makeClaimImg = "https://yulife-develop.imgix.net/content/icons/doc_yellow.svg?ixlib=js-3.2.1&w=72&h=72&s=8c9ef3bef7688d6da5721ea227204211"
export const envelopeImg = "https://yulife-develop.imgix.net/content/icons/underwriting.svg?ixlib=js-3.2.1&w=540&h=540&s=74e3494e4702fb47707f0e5c27724a91"
export const bookImg = "https://yulife-develop.imgix.net/content/icons/beneficiary.svg?ixlib=js-3.2.1&w=540&h=540&s=47a609f658f3beae45a1e7586eebf8a0"
export const claimImg = "https://yulife-develop.imgix.net/content/icons/claim.svg?ixlib=js-3.2.1&w=540&h=540&s=070c3c3c99859ee08a5897252365336e"
export const certificateImg = "https://yulife-develop.imgix.net/content/icons/doc_certificate.svg?ixlib=js-3.2.1&w=72&h=72&s=bcefc8d51f33e8dcd54346cabac94b70"
export const funeralCoverBookImg = "https://yulife-develop.imgix.net/yuscreen_products_assets/default/book_active.svg?ixlib=js-3.2.1&w=180&h=180&s=0a79d9421c2645937a55830121c4d62d"
export const roadMapGipImg = "https://yulife-develop.imgix.net/yuscreen_products_assets/default/map_active.svg?ixlib=js-3.2.1&w=180&h=180&s=3920546e7b21527daf8b2999648a0303"
export const binocularTmpGIP = "https://yulife-develop.imgix.net/yuscreen_products_assets/default/binoculars_active.svg?ixlib=js-3.2.1&w=180&h=180&s=d0df46d98601ec6591606f0ffe4cbac6"
export const lumpSumpImg = "https://yulife-develop.imgix.net/yuscreen_products_assets/default/lantern_active.svg?ixlib=js-3.2.1&w=180&h=180&s=034cd9c70886ebbac50210813cb97e8d"

export const MeGL: SAProductData = {
    productName: "Life Cover",
    schemeType: employerScheme,
    rightImage:  compassTopRightImg,
    yuCoinPower: `${CPE_MeGL_SA_1.data.earn_rate}`,
    productDescription: MeGLDescription,
    yugiInfoImgSrc: yugiInfoImg,
    yugiInfotext: yugiTextInfo 
}

export const MeGL_2: SAProductData = {
    productName: "Life Cover",
    schemeType: employerScheme,
    rightImage:  compassTopRightImg,
    yuCoinPower: `${CPE_MeGL_SA_2.data.earn_rate}`,
    productDescription: MeGLDescription,
    yugiInfoImgSrc: yugiInfoImg,
    yugiInfotext: yugiTextInfo 
}

export const SpGL_1: SAProductData = {
    productName: SpGL,
    schemeType: employerScheme,
    rightImage:  compassTopRightImg,
    yuCoinPower: `${CPE_SpGL_SA_2.data.earn_rate}`,
    productDescription: MeGLDescription,
    yugiInfoImgSrc: yugiInfoImg,
    yugiInfotext: yugiTextInfo 
}

export const MeGLKeyInfo: keyInfo = {
   keyInfo: keyInfoText,
   membershipNumberText: membershipNumberText,
   membershipNumber: BUSINESS_PRODUCT_SA_1_MeGL.product.data.product_id,
   startDateText: startDateText,
   startDate: moment(CPE_MeGL_SA_1.data.startDate).format("DD/MM/YYYY"),
   coveredTypeText: coverTypeText,
   coverType: "Unapproved",
   keyInfoDescription: basisCover
}

export const SpGLKeyInfo: keyInfo = {
    keyInfo: keyInfoText,
    membershipNumberText: membershipNumberText,
    membershipNumber: BUSINESS_PRODUCT_SA_1_SpGL.product.data.product_id,
    startDateText: startDateText,
    startDate: moment(CPE_SpGL_SA_2.data.startDate).format("DD/MM/YYYY"),
    coveredTypeText: coverTypeText,
    coverType: "Unapproved",
    keyInfoDescription: basisCover
 }

export const MeGLCoverAmounts: coverAmounts = {
    coverAmountsText: coverAmountsText,
    youText: youText,
    youAmmount: "R 2,000,000",
    increaseCoverText: increaseYourCoverText,
    increaseCoverTextImg: pencilPersonImg
}

export const MeGL_2_CoverAmounts: coverAmounts = {
    coverAmountsText: coverAmountsText,
    youText: youText,
    youAmmount: "R 2,000,000",
    NOincreaseCoverText: increaseYourCoverText,
    NOincreaseCoverTextImg: pencilPersonImg
}

export const SpGL_2_CoverAmounts: coverAmounts = {
    coverAmountsText: coverAmountsText,
    youText: youText,
    youAmmount: "R 2,000,000",
}

export const GrFunCoverAmounts: coverAmounts = {
    coverAmountsText: coverAmountsText,
    youText: youText,
    youAmmount: "R 50,000",
    child_0_12_monthsText: child0_12MonthsText,
    child_0_12_ammount: "R 5,000",
    child_1_5_yearsText: child1_5YearsText,
    child_1_5_ammount: "R 20,000",
    child_6_13_yearsText: child6_13YearsText,
    child_6_13_ammount: "R 60,000",
    child_14_21_yearsText: child14_21YearsText,
    child_14_21_ammount: "R 100,000",
    disclaimer_1: GrFunCoverAmmountsDisclaimer
}

export const GIPCoverAmounts: coverAmounts = {
    coverAmountsText: coverAmountsText,
    youText: currentSumAssured,
    youAmmount: "R 75,000",
    increaseCoverText: `${increaseCoverToText} R 75,000`,
    increaseCoverTextImg: pencilPersonImg,
    disclaimer_1: GIPDisclaimer_1,
    disclaimer_2: GIPDisclaimer_2
}

export const TmpGIPCoverAmounts: coverAmounts = {
    coverAmountsText: coverAmountsText,
    youText: currentSumAssured,
    youAmmount: "R 27,828",
    increaseCoverText: `${increaseCoverToText} R 27,827.80`,
    increaseCoverTextImg: pencilPersonImg,
    disclaimer_1: TemporaryIncomeDisclaimer_1,
    disclaimer_2: TemporaryIncomeDisclaimer_2,
}

export const LMPSCoverAmounts: coverAmounts = {
    coverAmountsText: coverAmountsText,
    youText: currentSumAssured,
    youAmmount: "R 1,500,000",
    increaseCoverText: `${increaseCoverToText} R 4,800,000`,
    increaseCoverTextImg: pencilPersonImg,
    disclaimer_1:  basisCover,
}

export const Beneficiaries: beneficiaries = {
    beneficiaresText: beneficiaresText,
    noBeneficiaryText: noBeneficiaryText,
    addBeneficiaryImage: addDocumentImg,
    beneficiaryDescription_1: beneficiaryDescription_1,
    beneficiaryDescription_2: beneficiaryDescription_2
}

export const Beneficiaries_MeGL_2: beneficiaries = {
    beneficiaresText: beneficiaresText,
    beneficiary_Name_1: `${CB_MeGL_SA_2.data.beneficiary_first_name} ${CB_MeGL_SA_2.data.beneficiary_last_name}`,
    benefeciary_benefit_1: `${CB_MeGL_SA_2.data.percentage}%`,
    beneficiaryDescription_1: beneficiaryDescription_1,
    beneficiaryDescription_2: beneficiaryDescription_2
}

export const Beneficiaries_GrFun_2: beneficiaries = {
    beneficiaresText: beneficiaresText,
    beneficiary_Name_1: `${CB_GrFun_SA_2_1.data.beneficiary_first_name} ${CB_GrFun_SA_2_1.data.beneficiary_last_name}`,
    benefeciary_benefit_1: `${CB_GrFun_SA_2_1.data.percentage}%`,
    beneficiary_Name_2: `${CB_GrFun_SA_2_2.data.beneficiary_first_name} ${CB_GrFun_SA_2_2.data.beneficiary_last_name}`,
    benefeciary_benefit_2: `${CB_GrFun_SA_2_2.data.percentage}%`,
    beneficiaryDescription_1: beneficiaryDescription_1,
    beneficiaryDescription_2: beneficiaryDescription_2
}

export const Beneficiaries_SpGL_2: beneficiaries = {
    beneficiaresText: beneficiaresText,
    beneficiary_Name_1: `${CB_SpGL_SA_2.data.beneficiary_first_name} ${CB_SpGL_SA_2.data.beneficiary_last_name}`,
    benefeciary_benefit_1: `${CB_SpGL_SA_2.data.percentage}%`,
    beneficiaryDescription_1: beneficiaryDescription_1,
    beneficiaryDescription_2: beneficiaryDescription_2
}


export const UsefulLinks: usefulLinks = {
    usefulLinksText: usefulLinksText,
    editBeneficiariText: editBeneficiariText,
    editBeneficiariImg: editBeneficiariImg,
    makeClaimText: makeClaimText,
    makeClaimImg: makeClaimImg,
    memberCertText: memberCertText,
    memberCertImg: certificateImg
}

export const UsefulLinksNoBeneficiaries: usefulLinks = {
    usefulLinksText: usefulLinksText,
    makeClaimText: makeClaimText,
    makeClaimImg: makeClaimImg,
    memberCertText: memberCertText,
    memberCertImg: certificateImg
}

export const ProductAdditionalInfo: productAdditionalInfo = {
    additionalInfo_1: additionalInfo_1,
    additionalInfo_2: additionalInfo_2
}

export const IncreaseCover: checkButton = {
    buttonName: increaseYourCoverText,
    middleImageSrc: envelopeImg,
    titleText: increaseCoverTitle,
    subTitle: increaseCoverSubtitle,
    button: requestForm,
    newRequestFormTitleText: beInTouch,
    requestedFormScreenTitleText: processingText,
    requestedFormScreenSubtitle: increaseCoverSubtitle,
    finishFormScreenButton: finishButton
}

export const IncreaseCoverToGIP: checkButton = {
    buttonName: `${increaseCoverToText} R 75,000`,
    middleImageSrc: envelopeImg,
    titleText: increaseCoverTitle,
    subTitle: increaseCoverSubtitle,
    button: requestForm,
    newRequestFormTitleText: beInTouch,
    requestedFormScreenTitleText: processingText,
    requestedFormScreenSubtitle: increaseCoverSubtitle,
    finishFormScreenButton: finishButton
}

export const IncreaseCoverToTempGIP: checkButton = {
    buttonName: `${increaseCoverToText} R 27,827.80`,
    middleImageSrc: envelopeImg,
    titleText: increaseCoverTitle,
    subTitle: increaseCoverSubtitle,
    button: requestForm,
    newRequestFormTitleText: beInTouch,
    requestedFormScreenTitleText: processingText,
    requestedFormScreenSubtitle: increaseCoverSubtitle,
    finishFormScreenButton: finishButton
}

export const IncreaseCoverToTempLMSP: checkButton = {
    buttonName: `${increaseCoverToText} R 4,800,000`,
    middleImageSrc: envelopeImg,
    titleText: increaseCoverTitle,
    subTitle: increaseCoverSubtitle,
    button: requestForm,
    newRequestFormTitleText: beInTouch,
    requestedFormScreenTitleText: processingText,
    requestedFormScreenSubtitle: increaseCoverSubtitle,
    finishFormScreenButton: finishButton
}

export const EditBeneficiariesInfo: checkButton = {
    buttonName: editBeneficiariText,
    middleImageSrc: bookImg,
    titleText: addBeneficiariesText,
    subTitle: beneficiaresSubtitle,
    button: addBeneficiariesButtonText,
    newRequestFormTitleText: beInTouch,
    requestedFormScreenTitleText: processingText,
    requestedFormScreenSubtitle: editBenefRequested,
    finishFormScreenButton: finishButton
}

export const MakeClaimInfo: checkButton = {
    buttonName: makeClaimText,
    middleImageSrc: claimImg,
    titleText: makeCLaimTitle,
    subTitle: makeClaimSubtitle,
    button: contactSupport,
    newRequestFormTitleText: beInTouch,
    requestedFormScreenTitleText: processingText,
    requestedFormScreenSubtitle: claimRequested,
    finishFormScreenButton: finishButton
}

export const IncreaseCoverInfoFurther: furtherScreen = {
    buttonName: requestForm,
    middleImageSrc: envelopeImg,
    titleText: beInTouch,
    button: finishButton
}

export const EditBeneficiariesFurther: furtherScreen = {
    buttonName: addBeneficiariesButtonText,
    middleImageSrc: bookImg,
    titleText: beInTouch,
    button: finishButton
}

export const MakeClaimFurther: furtherScreen = {
    buttonName: contactSupport,
    middleImageSrc: claimImg,
    titleText: beInTouch,
    button: finishButton
}

export const GrFun: SAProductData = {
    productName: FuneralCover,
    schemeType: employerScheme,
    rightImage:  funeralCoverBookImg,
    yuCoinPower: `${CPE_GrFun_SA_1.data.earn_rate}`,
    productDescription: GrFunDescriptionChildrenCover,
    yugiInfoImgSrc: yugiInfoImg,
    yugiInfotext: yugiTextInfo 
}

export const GrFun_2: SAProductData = {
    productName: FuneralCover,
    schemeType: employerScheme,
    rightImage:  funeralCoverBookImg,
    yuCoinPower: `${CPE_GrFun_SA_2.data.earn_rate}`,
    productDescription: GrFunDescriptionChildrenCover,
    yugiInfoImgSrc: yugiInfoImg,
    yugiInfotext: yugiTextInfo 
}

export const GIP: SAProductData = {
    productName:  IncomeProtection,
    schemeType: employerScheme,
    rightImage:  roadMapGipImg,
    yuCoinPower: `${CPE_GIP_SA_1.data.earn_rate}`,
    productDescription: GIPDescription,
    yugiInfoImgSrc: yugiInfoImg,
    yugiInfotext: yugiTextInfo 
}

export const TmpGIP: SAProductData = {
    productName:  TemporaryIncome,
    longname: `${TemporaryIncome} Protection`,
    schemeType: employerScheme,
    rightImage:  binocularTmpGIP,
    yuCoinPower: `${CPE_TmpGIP_SA_1.data.earn_rate}`,
    productDescription: TemporaryIncomeDesciption,
    yugiInfoImgSrc: yugiInfoImg,
    yugiInfotext: yugiTextInfo 
}

export const LumpSum: SAProductData = {
    productName:  LumpSump,
    schemeType: employerScheme,
    rightImage:  lumpSumpImg,
    yuCoinPower: `${CPE_LSDC_SA_1.data.earn_rate}`,
    productDescription: LumpSumpDescrption,
    yugiInfoImgSrc: yugiInfoImg,
    yugiInfotext: yugiTextInfo 
}

export const GrFunKeyInfo: keyInfo = {
    keyInfo: keyInfoText,
    membershipNumberText: membershipNumberText,
    membershipNumber: BUSINESS_PRODUCT_SA_1_GrFun.product.data.product_id,
    startDateText: startDateText,
    startDate: moment(CPE_GrFun_SA_1.data.startDate).format("DD/MM/YYYY"),
}

export const GrFunKeyInfo_2: keyInfo = {
    keyInfo: keyInfoText,
    membershipNumberText: membershipNumberText,
    membershipNumber: BUSINESS_PRODUCT_SA_1_GrFun.product.data.product_id,
    startDateText: startDateText,
    startDate: moment(CPE_GrFun_SA_2.data.startDate).format("DD/MM/YYYY"),
}

export const GIPKeyInfo: keyInfo = {
    keyInfo: keyInfoText,
    membershipNumberText: membershipNumberText,
    membershipNumber: BUSINESS_PRODUCT_SA_1_GIP.product.data.product_id,
    startDateText: startDateText,
    startDate: moment(CPE_GIP_SA_1.data.startDate).format("DD/MM/YYYY"),
}

export const TmpGIPKeyInfo: keyInfo = {
    keyInfo: keyInfoText,
    membershipNumberText: membershipNumberText,
    membershipNumber: BUSINESS_PRODUCT_SA_1_TmpGIP.product.data.product_id,
    startDateText: startDateText,
    startDate: moment(CPE_TmpGIP_SA_1.data.startDate).format("DD/MM/YYYY"),
}

export const LMPSKeyInfo: keyInfo = {
    keyInfo: keyInfoText,
    membershipNumberText: membershipNumberText,
    membershipNumber: BUSINESS_PRODUCT_SA_1_LSDC.product.data.product_id,
    startDateText: startDateText,
    startDate: moment(CPE_LSDC_SA_1.data.startDate).format("DD/MM/YYYY"),
    coverType: "Unapproved",
    keyInfoDescription: basisCover
}