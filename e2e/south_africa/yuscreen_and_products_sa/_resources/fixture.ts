import {
  BUSINESS_PRODUCT_SA_1_GCI,
  BUSINESS_PRODUCT_SA_1_GIP,
  BUSINESS_PRODUCT_SA_1_GrFun,
  BUSINESS_PRODUCT_SA_1_LSDC,
  BUSINESS_PRODUCT_SA_1_MeGL,
  BUSINESS_PRODUCT_SA_1_SpGL,
  BUSINESS_PRODUCT_SA_1_TmpGIP,
  CB_GrFun_SA_2_1,
  CB_GrFun_SA_2_2,
  CB_MeGL_SA_2,
  CB_SpGL_SA_2,
  CPE_GCI_SA_3,
  CPE_GIP_SA_1,
  CPE_GrFun_SA_1,
  CPE_GrFun_SA_2,
  CPE_LSDC_SA_1,
  CPE_MeGL_SA_1,
  CPE_MeGL_SA_2,
  CPE_SpGL_SA_2,
  CPE_TmpGIP_SA_1,
} from "south_africa/_data";
import moment from "moment";
import {
  beneficiaries,
  coverAmounts,
  keyInfo,
  SAProductData,
  productAdditionalInfo,
  ProductSlot,
} from "./types";
import * as constant from "./constants";

export const MeGL: SAProductData = {
  productName: "Life Cover",
  schemeType: constant.employerScheme,
  rightImage: constant.compassTopRightImg,
  yuCoinPower: `${CPE_MeGL_SA_1.data.earn_rate}`,
  productDescription: constant.MeGLDescription,
  yugiInfoImgSrc: constant.yugiInfoImg,
  yugiInfotext: constant.yugiTextInfo,
};

export const MeGL_2: SAProductData = {
  productName: "Life Cover",
  schemeType: constant.employerScheme,
  rightImage: constant.compassTopRightImg,
  yuCoinPower: `${CPE_MeGL_SA_2.data.earn_rate}`,
  productDescription: constant.MeGLDescription,
  yugiInfoImgSrc: constant.yugiInfoImg,
  yugiInfotext: constant.yugiTextInfo,
};

export const SpGL_1: SAProductData = {
  productName: constant.SpGL,
  schemeType: constant.employerScheme,
  rightImage: constant.compassTopRightImg,
  yuCoinPower: `${CPE_SpGL_SA_2.data.earn_rate}`,
  productDescription: constant.SpGLDescription,
  yugiInfoImgSrc: constant.yugiInfoImg,
  yugiInfotext: constant.yugiTextInfo,
};

export const MeGLKeyInfo: keyInfo = {
  keyInfo: constant.keyInfoText,
  membershipNumberText: constant.membershipNumberText,
  membershipNumber: BUSINESS_PRODUCT_SA_1_MeGL.product.data.product_id,
  startDateText: constant.startDateText,
  startDate: moment(CPE_MeGL_SA_1.data.startDate).format("DD/MM/YYYY"),
  termsText: constant.termsAndConditionsWarning,
};

export const SpGLKeyInfo: keyInfo = {
  keyInfo: constant.keyInfoText,
  membershipNumberText: constant.membershipNumberText,
  membershipNumber: BUSINESS_PRODUCT_SA_1_SpGL.product.data.product_id,
  startDateText: constant.startDateText,
  startDate: moment(CPE_SpGL_SA_2.data.startDate).format("DD/MM/YYYY"),
  termsText: constant.termsAndConditionsWarning,
};

export const MeGLCoverAmounts: coverAmounts = {
  coverAmountsText: constant.coverAmountsText,
  youText: constant.youText,
  youAmmount: "R 2,000,000",
  increaseCoverText: constant.increaseYourCoverText,
  increaseCoverTextImg: constant.pencilPersonImg,
};

export const MeGL_2_CoverAmounts: coverAmounts = {
  coverAmountsText: constant.coverAmountsText,
  youText: constant.youText,
  youAmmount: "R 2,000,000",
  NOincreaseCoverText: constant.increaseYourCoverText,
  NOincreaseCoverTextImg: constant.pencilPersonImg,
};

export const SpGL_2_CoverAmounts: coverAmounts = {
  coverAmountsText: constant.coverAmountsText,
  youText: constant.youText,
  youAmmount: "R 2,000,000",
};

export const GrFunCoverAmounts: coverAmounts = {
  coverAmountsText: constant.coverAmountsText,
  youText: constant.youText,
  youAmmount: "R 50,000",
  child_0_12_monthsText: constant.child0_12MonthsText,
  child_0_12_ammount: "R 5,000",
  child_1_5_yearsText: constant.child1_5YearsText,
  child_1_5_ammount: "R 20,000",
  child_6_13_yearsText: constant.child6_13YearsText,
  child_6_13_ammount: "R 60,000",
  child_14_21_yearsText: constant.child14_21YearsText,
  child_14_21_ammount: "R 100,000",
  disclaimer_1: constant.termsAndConditionsWarning,
};

export const GIPCoverAmounts: coverAmounts = {
  coverAmountsText: constant.coverAmountsText,
  youText: constant.currentSumAssured,
  youAmmount: "R 75,000",
  increaseCoverText: `${constant.increaseCoverToText} R 75,000`,
  increaseCoverTextImg: constant.pencilPersonImg,
  disclaimer_1: constant.GIPDisclaimer_1,
  disclaimer_2: constant.GIPDisclaimer_2,
};

export const TmpGIPCoverAmounts: coverAmounts = {
  coverAmountsText: constant.coverAmountsText,
  youText: constant.currentSumAssured,
  youAmmount: "R 27,828",
  increaseCoverText: `${constant.increaseCoverToText} R 27,827.80`,
  increaseCoverTextImg: constant.pencilPersonImg,
  disclaimer_1: constant.TemporaryIncomeDisclaimer_1,
  disclaimer_2: constant.TemporaryIncomeDisclaimer_2,
};

export const LMPSCoverAmounts: coverAmounts = {
  coverAmountsText: constant.coverAmountsText,
  youText: constant.currentSumAssured,
  youAmmount: "R 1,500,000",
  increaseCoverText: `${constant.increaseCoverToText} R 4,800,000`,
  increaseCoverTextImg: constant.pencilPersonImg,
  disclaimer_1: constant.basisCover,
};

export const Beneficiaries: beneficiaries = {
  beneficiaresText: constant.beneficiaresText,
  noBeneficiaryText: constant.noBeneficiaryText,
  addBeneficiaryImage: constant.addDocumentImg,
  beneficiaryDescription_1: constant.beneficiaryDescription_1,
  beneficiaryDescription_2: constant.beneficiaryDescription_2,
};

export const Beneficiaries_MeGL_2: beneficiaries = {
  beneficiaresText: constant.beneficiaresText,
  beneficiary_Name_1: `${CB_MeGL_SA_2.data.beneficiary_first_name} ${CB_MeGL_SA_2.data.beneficiary_last_name}`,
  beneficiary_benefit_1: `${CB_MeGL_SA_2.data.percentage}%`,
  beneficiaryDescription_1: constant.beneficiaryDescription_1,
  beneficiaryDescription_2: constant.beneficiaryDescription_2,
};

export const Beneficiaries_GrFun_2: beneficiaries = {
  beneficiaresText: constant.beneficiaresText,
  beneficiary_Name_1: `${CB_GrFun_SA_2_1.data.beneficiary_first_name} ${CB_GrFun_SA_2_1.data.beneficiary_last_name}`,
  beneficiary_benefit_1: `${CB_GrFun_SA_2_1.data.percentage}%`,
  beneficiary_Name_2: `${CB_GrFun_SA_2_2.data.beneficiary_first_name} ${CB_GrFun_SA_2_2.data.beneficiary_last_name}`,
  beneficiary_benefit_2: `${CB_GrFun_SA_2_2.data.percentage}%`,
  beneficiaryDescription_1: constant.beneficiaryDescription_1,
  beneficiaryDescription_2: constant.beneficiaryDescription_2,
};

export const Beneficiaries_SpGL_2: beneficiaries = {
  beneficiaresText: constant.beneficiaresText,
  beneficiary_Name_1: `${CB_SpGL_SA_2.data.beneficiary_first_name} ${CB_SpGL_SA_2.data.beneficiary_last_name}`,
  beneficiary_benefit_1: `${CB_SpGL_SA_2.data.percentage}%`,
  beneficiaryDescription_1: constant.beneficiaryDescription_1,
  beneficiaryDescription_2: constant.beneficiaryDescription_2,
};

export const ProductAdditionalInfo: productAdditionalInfo = {
  additionalInfo_1: constant.additionalInfo_1,
  additionalInfo_2: constant.additionalInfo_2,
};

export const GrFun: SAProductData = {
  productName: constant.FuneralCover,
  schemeType: constant.employerScheme,
  rightImage: constant.funeralCoverBookImg,
  yuCoinPower: `${CPE_GrFun_SA_1.data.earn_rate}`,
  productDescription: constant.GrFunDescriptionChildrenCover,
  yugiInfoImgSrc: constant.yugiInfoImg,
  yugiInfotext: constant.yugiTextInfo,
};

export const GrFun_2: SAProductData = {
  productName: constant.FuneralCover,
  schemeType: constant.employerScheme,
  rightImage: constant.funeralCoverBookImg,
  yuCoinPower: `${CPE_GrFun_SA_2.data.earn_rate}`,
  productDescription: constant.GrFunDescriptionChildrenCover,
  yugiInfoImgSrc: constant.yugiInfoImg,
  yugiInfotext: constant.yugiTextInfo,
};

export const GIP: SAProductData = {
  productName: constant.IncomeProtection,
  schemeType: constant.employerScheme,
  rightImage: constant.roadMapGipImg,
  yuCoinPower: `${CPE_GIP_SA_1.data.earn_rate}`,
  productDescription: constant.GIPDescription,
  yugiInfoImgSrc: constant.yugiInfoImg,
  yugiInfotext: constant.yugiTextInfo,
};

export const TmpGIP: SAProductData = {
  productName: constant.TemporaryIncome,
  longname: `${constant.TemporaryIncome} Protection`,
  schemeType: constant.employerScheme,
  rightImage: constant.binocularTmpGIP,
  yuCoinPower: `${CPE_TmpGIP_SA_1.data.earn_rate}`,
  productDescription: constant.TemporaryIncomeDesciption,
  yugiInfoImgSrc: constant.yugiInfoImg,
  yugiInfotext: constant.yugiTextInfo,
};

export const LumpSum: SAProductData = {
  productName: constant.LumpSump,
  schemeType: constant.employerScheme,
  rightImage: constant.lumpSumpImg,
  yuCoinPower: `${CPE_LSDC_SA_1.data.earn_rate}`,
  productDescription: constant.LumpSumpDescrption,
  yugiInfoImgSrc: constant.yugiInfoImg,
  yugiInfotext: constant.yugiTextInfo,
};

export const GrFunKeyInfo: keyInfo = {
  keyInfo: constant.keyInfoText,
  membershipNumberText: constant.membershipNumberText,
  membershipNumber: BUSINESS_PRODUCT_SA_1_GrFun.product.data.product_id,
  startDateText: constant.startDateText,
  startDate: moment(CPE_GrFun_SA_1.data.startDate).format("DD/MM/YYYY"),
};

export const GrFunKeyInfo_2: keyInfo = {
  keyInfo: constant.keyInfoText,
  membershipNumberText: constant.membershipNumberText,
  membershipNumber: BUSINESS_PRODUCT_SA_1_GrFun.product.data.product_id,
  startDateText: constant.startDateText,
  startDate: moment(CPE_GrFun_SA_2.data.startDate).format("DD/MM/YYYY"),
};

export const GIPKeyInfo: keyInfo = {
  keyInfo: constant.keyInfoText,
  membershipNumberText: constant.membershipNumberText,
  membershipNumber: BUSINESS_PRODUCT_SA_1_GIP.product.data.product_id,
  startDateText: constant.startDateText,
  startDate: moment(CPE_GIP_SA_1.data.startDate).format("DD/MM/YYYY"),
};

export const TmpGIPKeyInfo: keyInfo = {
  keyInfo: constant.keyInfoText,
  membershipNumberText: constant.membershipNumberText,
  membershipNumber: BUSINESS_PRODUCT_SA_1_TmpGIP.product.data.product_id,
  startDateText: constant.startDateText,
  startDate: moment(CPE_TmpGIP_SA_1.data.startDate).format("DD/MM/YYYY"),
};

export const LMPSKeyInfo: keyInfo = {
  keyInfo: constant.keyInfoText,
  membershipNumberText: constant.membershipNumberText,
  membershipNumber: BUSINESS_PRODUCT_SA_1_LSDC.product.data.product_id,
  startDateText: constant.startDateText,
  startDate: moment(CPE_LSDC_SA_1.data.startDate).format("DD/MM/YYYY"),
  termsText: constant.termsAndConditionsWarning,
};

export const gciProduct1: SAProductData = {
  productName: "Critical Illness",
  schemeType: constant.employerScheme,
  rightImage: constant.magnifyingGlassTopRightImg,
  yuCoinPower: "4",
  productDescription: constant.gciDescription,
  yugiInfoImgSrc: constant.yugiInfoImg,
  yugiInfotext: constant.yugiTextInfo,
};

export const gciKeyInfo: keyInfo = {
  keyInfo: constant.keyInfoText,
  membershipNumberText: constant.membershipNumberText,
  membershipNumber: BUSINESS_PRODUCT_SA_1_GCI.product.data.product_id,
  startDateText: constant.startDateText,
  startDate: moment(CPE_GCI_SA_3.data.startDate).format("DD/MM/YYYY"),
  termsText: constant.termsAndConditionsWarning,
};

export const gciCoverAmounts: coverAmounts = {
  coverAmountsText: constant.coverAmountsText,
  youText: constant.currentSumAssured,
  youAmmount: "R 30,000",
  increaseCoverText: `${constant.increaseCoverToText} R 50,000`,
  increaseCoverTextImg: constant.pencilPersonImg,
  disclaimer_1: constant.gciDisclaimer,
};

export const lifeCoverTallCard: ProductSlot = {
  name: "Life Cover",
  cardSize: "tall",
  title: "Secure your family’s future",
  img: "https://yulife-develop.imgix.net/yuscreen/product-card-carousel/illustrations/gli-tall.png?ixlib=js-3.2.1&fit=clip&fm=png&dpr=1&s=0c8355dfb123786896286ee0fcad068d",
  beneficiaries: true,
};

export const lifeCoverSquareCard: ProductSlot = {
  name: "Life Cover",
  cardSize: "square",
  title: `Policy starting from ${moment().add(1, "days").format("DD/MM/YYYY")}`,
  img: "https://yulife-develop.imgix.net/yuscreen/product-card-carousel/illustrations/gli-tall.png?ixlib=js-3.2.1&fit=clip&fm=png&dpr=1&s=0c8355dfb123786896286ee0fcad068d",
  beneficiaries: false,
};

export const funeralCoverSquareCard: ProductSlot = {
  name: "Funeral cover",
  cardSize: "square",
  title: "Protecting your loved ones",
  img: "https://yulife-develop.imgix.net/yuscreen/product-card-carousel/illustrations/funeral-square.png?ixlib=js-3.2.1&fit=clip&fm=png&dpr=1&s=6d4dab8432967bbf90ebb0f9ae8fae95",
  beneficiaries: true,
};

export const incomeProtectionSquareCard: ProductSlot = {
  name: "Income protection",
  cardSize: "square",
  title: "Be assured in times of illness or injury",
  img: "https://yulife-develop.imgix.net/yuscreen/product-card-carousel/illustrations/gip-square.png?ixlib=js-3.2.1&fit=clip&fm=png&dpr=1&s=6e7632f4354376d9ef6c6844a8d13876",
  beneficiaries: false,
};

export const lumpSumDisabilitySquareCard: ProductSlot = {
  name: "Lump Sum Disability Cover",
  cardSize: "square",
  title: "Feel reassured even if you can't work",
  img: "https://yulife-develop.imgix.net/yuscreen/product-card-carousel/illustrations/lump-sum-disability-square.png?ixlib=js-3.2.1&fit=clip&fm=png&dpr=1&s=b3cdf1a5312f99f76b91b3c1faf96eac",
  beneficiaries: false,
};

export const tempIncomeProtectionSquareCard: ProductSlot = {
  name: "Temporary Income Protection",
  cardSize: "square",
  title: "Be assured in times of illness or injury",
  img: "https://yulife-develop.imgix.net/yuscreen/product-card-carousel/illustrations/gip-square.png?ixlib=js-3.2.1&fit=clip&fm=png&dpr=1&s=6e7632f4354376d9ef6c6844a8d13876",
  beneficiaries: false,
};

export const gciWideCard: ProductSlot = {
  name: "Critical Illness Cover",
  cardSize: "wide",
  title: "Feel supported in your time of need",
  logo: "Lump-sum payment in case of defined critical illness.",
  img: "https://yulife-develop.imgix.net/yuscreen/product-card-carousel/illustrations/gci-wide.png?ixlib=js-3.2.1&fit=clip&fm=png&dpr=1&s=c9fd033d5eae3e9b79656c0b38e17d66",
  beneficiaries: false,
};
