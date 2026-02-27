import {
  BUSINESS_PRODUCT_1_OM_MeGL,
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
  CPE_OM_MeGL_SA_1,
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
  productDescription: constant.MeGLDescription,
  yugiInfoImgSrc: constant.yugiInfoImg,
  yugiInfotext: constant.yugiTextInfo,
};

export const MeGL_2: SAProductData = {
  productName: "Life Cover",
  productDescription: constant.MeGLDescription,
  yugiInfoImgSrc: constant.yugiInfoImg,
  yugiInfotext: constant.yugiTextInfo,
};

export const SpGL_1: SAProductData = {
  productName: constant.SpGL,
  yugiInfoImgSrc: constant.yugiInfoImg,
  yugiInfotext: constant.yugiTextInfo,
};

export const MeGL_OM: SAProductData = {
  productName: "Group Life Assurance",
  yugiInfoImgSrc: constant.yugiInfoImg,
  yugiInfotext: constant.yufiTextInfoSA,
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

export const MeGL_OMKeyInfo: keyInfo = {
  keyInfo: constant.keyInfoText,
  membershipNumberText: constant.policyNumberText,
  membershipNumber: BUSINESS_PRODUCT_1_OM_MeGL.product.data.product_id,
  startDateText: constant.startDateText,
  startDate: moment(CPE_OM_MeGL_SA_1.data.startDate).format("DD/MM/YYYY"),
  termsText: constant.basisCover,
};

export const MeGLCoverAmounts: coverAmounts = {
  coverAmountsText: constant.coverAmountsText,
  youText: constant.youText,
  youAmount: "R 2,000,000",
};

export const MeGL_2_CoverAmounts: coverAmounts = {
  coverAmountsText: constant.coverAmountsText,
  youText: constant.youText,
  youAmount: "R 2,000,000",
  NOincreaseCoverText: constant.increaseYourCoverText,
  spouseText: constant.spouseText,
  spouseAmount: "R 100,000",
  stillbornText: constant.stillborn26WeeksText,
  stillbornAmount: "R 25,000",
  child_0_5_yearsText: constant.child0_5YearsText,
  child_0_5_yearsAmount: "R 30,000",
  child_6_13_yearsText: constant.child6_13YearsText,
  child_6_13_amount: "R 40,000",
  child_14_plusText: constant.child14PlusText,
  child_14_plusAmount: "R 50,000",
};

export const SpGL_2_CoverAmounts: coverAmounts = {
  coverAmountsText: constant.coverAmountsText,
  youText: constant.youText,
  youAmount: "R 2,000,000",
};

export const GrFunCoverAmounts: coverAmounts = {
  coverAmountsText: constant.coverAmountsText,
  youText: constant.youText,
  youAmount: "R 50,000",
  child_0_12_monthsText: constant.child0_12MonthsText,
  child_0_12_amount: "R 5,000",
  child_1_5_yearsText: constant.child1_5YearsText,
  child_1_5_amount: "R 20,000",
  child_6_13_yearsText: constant.child6_13YearsText,
  child_6_13_amount: "R 60,000",
  child_14_21_yearsText: constant.child14_21YearsText,
  child_14_21_amount: "R 100,000",
  disclaimer_1: constant.termsAndConditionsWarning,
};

export const GIPCoverAmounts: coverAmounts = {
  coverAmountsText: constant.coverAmountsText,
  youText: constant.currentSumAssured,
  youAmount: "R 75,000",
  increaseCoverText: `${constant.increaseCoverToText} R 75,000`,
  increaseCoverTextImg: constant.pencilPersonImg,
  disclaimer_1: constant.GIPDisclaimer_1,
  disclaimer_2: constant.GIPDisclaimer_2,
};

export const TmpGIPCoverAmounts: coverAmounts = {
  coverAmountsText: constant.coverAmountsText,
  youText: constant.currentSumAssured,
  youAmount: "R 27,828",
  increaseCoverText: `${constant.increaseCoverToText} R 27,827.80`,
  increaseCoverTextImg: constant.pencilPersonImg,
  disclaimer_1: constant.TemporaryIncomeDisclaimer_1,
  disclaimer_2: constant.TemporaryIncomeDisclaimer_2,
};

export const LMPSCoverAmounts: coverAmounts = {
  coverAmountsText: constant.coverAmountsText,
  youText: constant.currentSumAssured,
  youAmount: "R 1,500,000",
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
  productDescription: constant.GrFunDescriptionChildrenCover,
  yugiInfoImgSrc: constant.yugiInfoImg,
  yugiInfotext: constant.yugiTextInfo,
};

export const GrFun_2: SAProductData = {
  productName: constant.FuneralCover,
  productDescription: constant.GrFunDescriptionChildrenCover,
  yugiInfoImgSrc: constant.yugiInfoImg,
  yugiInfotext: constant.yugiTextInfo,
};

export const GIP: SAProductData = {
  productName: constant.IncomeProtection,
  yugiInfoImgSrc: constant.yugiInfoImg,
  yugiInfotext: constant.yugiTextInfo,
};

export const TmpGIP: SAProductData = {
  productName: constant.TemporaryIncome,
  longname: `${constant.TemporaryIncome} Protection`,
  productDescription: constant.TemporaryIncomeDesciption,
  yugiInfoImgSrc: constant.yugiInfoImg,
  yugiInfotext: constant.yugiTextInfo,
};

export const LumpSum: SAProductData = {
  productName: constant.LumpSump,
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
  youAmount: "R 30,000",
  increaseCoverText: `${constant.increaseCoverToText} R 50,000`,
  increaseCoverTextImg: constant.pencilPersonImg,
  disclaimer_1: constant.gciDisclaimer,
};

export const lifeCoverTallCard: ProductSlot = {
  name: "Life Cover",
  cardSize: "tall",
  title: "Secure your family’s future",
  img: "https://yulife-develop.imgix.net/yuscreen/product-card-carousel/illustrations/yulifeSA/guardrisk-lc-tall.png?ixlib=js-3.2.1&fit=clip&fm=png&dpr=1&s=19ff74d93d03b8de16e41d75f7c2552b",
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
  img: "https://yulife-develop.imgix.net/yuscreen/product-card-carousel/illustrations/yulifeSA/guardrisk-fc-square.png?ixlib=js-3.2.1&fit=clip&fm=png&dpr=1&s=4e83b53de73d4c5df42467e8f32d9867",
  beneficiaries: true,
};

export const incomeProtectionSquareCard: ProductSlot = {
  name: "Income protection",
  cardSize: "square",
  title: "Be assured in times of illness or injury",
  img: "https://yulife-develop.imgix.net/yuscreen/product-card-carousel/illustrations/yulifeSA/guardrisk-gip-square.png?ixlib=js-3.2.1&fit=clip&fm=png&dpr=1&s=8cb26cab1804ff5800b09c60e69e0f10",
  beneficiaries: false,
};

export const lumpSumDisabilitySquareCard: ProductSlot = {
  name: "Lump Sum Disability Cover",
  cardSize: "square",
  title: "Feel reassured even if you can't work",
  img: "https://yulife-develop.imgix.net/yuscreen/product-card-carousel/illustrations/yulifeSA/guardrisk-lsdc-square.png?ixlib=js-3.2.1&fit=clip&fm=png&dpr=1&s=de28dd45650a7359b071b07acb36f0ca",
  beneficiaries: false,
};

export const tempIncomeProtectionSquareCard: ProductSlot = {
  name: "Temporary Income Protection",
  cardSize: "square",
  title: "Be assured in times of illness or injury",
  img: "https://yulife-develop.imgix.net/yuscreen/product-card-carousel/illustrations/yulifeSA/guardrisk-tip-square.png?ixlib=js-3.2.1&fit=clip&fm=png&dpr=1&s=976bd7292fed955848f41df39489a599",
  beneficiaries: false,
};

export const gciWideCard: ProductSlot = {
  name: "Critical Illness Cover",
  cardSize: "wide",
  title: "Feel supported in your time of need",
  beneficiaries: false,
};

export const groupLifeAssuranceOMWideCard: ProductSlot = {
  name: "Life Assurance",
  cardSize: "wide",
  title: "Protection for your loved ones",
  img: constant.oldMutualMeGLImg,
  beneficiaries: true,
  logo: true,
};
