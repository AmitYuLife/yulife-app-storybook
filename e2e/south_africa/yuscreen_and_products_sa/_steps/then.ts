import { navigation } from "@utils";
import { screens } from "@appScreens";
import {
  beneficiaries,
  coverAmounts,
  keyInfo,
  ProductSlot,
  SAProductData,
} from "../_resources/types";
import * as ids from "@ids";
import * as constant from "../_resources/constants";
import { scrollUntilIdVisible, scrollUntilTextVisible } from "./when";

export const {
  idVisible,
  idNotVisible,
  idExist,
  textVisible,
  textExists,
  textNotVisible,
  expectIsVisibleViaID,
  expectIsVisibleViaText,
  multipleTextVisible,
  idVisibleAtIndex,
  textVisibleAtIndex,
  tapIDNotBeingVisible,
} = navigation.common;

export const {
  onEmptyYuscreen,
  onYuscreen,
  onCreateAvatarScreen,
  onAvatarBuilder,
  onAvatarCompletionScreen,
  onYourYuCoin,
  avatarBodyVisible,
  avatarBodyVisibleWithUser,
  leaderboardAvatarVisible,
  personalProductsVisible,
  onSurveyScreen,
  onSurveySubmitScreen,
  onPackageScreen,
  packageScreenCorrect,
  onSkinToneScreen,
} = screens.yuscreen;

export const { swipeToID, swipeFromText } = navigation.scrolling;

export { rewardsLocationModalVisible } from "benefits/rewards/_steps/then";

export { yuScreenV5HeaderVisible } from "../../../yuscreen/yuscreen_v5/_steps/then";

export const productCardVisible = (productCard: ProductSlot) => async () => {
  await idExist(ids.YUSCREEN_V5_PRODUCT_INDIVIDUAL_CARD(productCard.name))();
  await idExist(ids.YUSCREEN_V5_PRODUCT_INDIVIDUAL_CARD_TITLE(productCard.title))();
  productCard.img &&
    (await idExist(ids.YUSCREEN_V5_PRODUCT_INDIVIDUAL_CARD_ILLUSTRATION(productCard.img))());
  productCard.body &&
    (await idExist(ids.YUSCREEN_V5_PRODUCT_INDIVIDUAL_CARD_BODY_DESC(productCard.body))());
  productCard.logo && (await idExist(ids.YUSCREEN_V5_PRODUCT_CARD_LOGO)());
};

export const productCheck =
  (
    productPage: SAProductData,
    keyInfo: keyInfo,
    beneficiarySection: boolean,
    coverInfo?: coverAmounts,
    beneficiaries?: beneficiaries
  ) =>
  async () => {
    await onProductPage(productPage)();
    if (coverInfo) {
      await scrollUntilTextVisible(
        ids.PRODUCT_DETAILS_SCROLL_VIEW,
        constant.termsAndConditionsWarning,
        "down"
      )();
    } else if (beneficiarySection) {
      await scrollUntilTextVisible(
        ids.PRODUCT_DETAILS_SCROLL_VIEW,
        constant.usefulLinksText,
        "down"
      )();
    } else {
      await scrollUntilIdVisible(
        ids.PRODUCT_DETAILS_SCROLL_VIEW,
        ids.CONTENT_ITEM_BUTTON_IMAGE(constant.certificateImg),
        "down"
      )();
    }
    await keyInfoVisible(keyInfo)();
    coverInfo &&
      (await scrollUntilTextVisible(
        ids.PRODUCT_DETAILS_SCROLL_VIEW,
        constant.beneficiaresText,
        "down"
      )());
    coverInfo && (await coverAmountsVisible(coverInfo)());
    beneficiarySection &&
      (await scrollUntilTextVisible(
        ids.PRODUCT_DETAILS_SCROLL_VIEW,
        constant.usefulLinksText,
        "down"
      )());
    beneficiarySection && (await beneficiariesSectionVisible(beneficiaries)());
    await scrollUntilTextVisible(
      ids.PRODUCT_DETAILS_SCROLL_VIEW,
      constant.additionalInfo_2,
      "down"
    )();
    await usefulLinksVisible(beneficiarySection)();
    await additionalInfoVisible(constant.additionalInfo_2);
  };

export const onProductPage = (product: SAProductData) => async () => {
  await idVisible(ids.BUTTON_CLOSE_HEADER("button_only"))();
  await textExists(product.productName)();
  product.schemeType && (await textVisible(product.schemeType)());
  product.rightImage && (await idVisible(ids.TOP_RIGHT_ITEM_IMAGE(product.rightImage))());
  product.yuCoinPower && (await idVisible(ids.YUCOIN_POWER(product.yuCoinPower))());
  product.productDescription &&
    (await scrollUntilTextVisible(
      ids.PRODUCT_DETAILS_SCROLL_VIEW,
      product.productDescription,
      "down"
    )());
};

export const keyInfoVisible = (product: keyInfo) => async () => {
  await textVisible(product.keyInfo)();
  await textVisible(product.membershipNumberText)();
  await textVisible(product.membershipNumber)();
  await textVisible(product.startDateText)();
  await textVisible(product.startDate)();
  product.coveredTypeText && (await textVisible(product.coveredTypeText)());
  product.coverType && (await textVisible(product.coverType)());
  product.keyInfoDescription && (await textVisible(product.keyInfoDescription)());
  product.termsText && (await textVisible(product.termsText)());
};

export const beneficiariesSectionVisible = (beneficiaries?: beneficiaries) => async () => {
  await textVisible(constant.beneficiaresText)();
  if (beneficiaries) {
    await textVisible(beneficiaries.beneficiary_Name_1)();
    await textVisible(beneficiaries.beneficiary_benefit_1)();
    beneficiaries.beneficiary_Name_2 && (await textVisible(beneficiaries.beneficiary_Name_2)());
    beneficiaries.beneficiary_benefit_2 &&
      (await textVisible(beneficiaries.beneficiary_benefit_2)());
    await textVisible(beneficiaries.beneficiaryDescription_1)();
    await textVisible(beneficiaries.beneficiaryDescription_2)();
  } else {
    await textVisible(constant.noBeneficiaryText)();
    await idVisible(ids.CONTENT_SMALL_IMAGE_CARD_URL(constant.addDocumentImg))();
  }
};

export const usefulLinksVisible = (beneficiaries: boolean) => async () => {
  beneficiaries && (await textVisible(constant.editBeneficiariText)());
  beneficiaries && (await idVisible(ids.CONTENT_ITEM_BUTTON_IMAGE(constant.editBeneficiariImg))());
  !beneficiaries && (await textNotVisible(constant.editBeneficiariText)());
  await idVisible(ids.CONTENT_ITEM_BUTTON_IMAGE(constant.makeClaimImg))();
  await textVisible(constant.makeClaimText)();
  await textVisible(constant.memberCertText)();
  await textVisible(constant.memberCertDisclaimer)();
};

export const additionalInfoVisible = (info2: string) => async () => {
  await textVisible(constant.additionalInfo_1)();
  await textVisible(info2)();
};

export const coverAmountsVisible = (product: coverAmounts) => async () => {
  const coverLevels = [
    "spouse",
    "stillborn",
    "child_0_12_months",
    "child_0_5_years",
    "child_1_5_years",
    "child_6_13_years",
    "child_14_21_years",
    "child_14_plus",
  ] as const;
  await textVisible(product.coverAmountsText)();
  await textVisible(product.youText)();
  await textVisible(product.youAmount)();
  product.increaseCoverText && (await textVisible(product.increaseCoverText)());
  product.increaseCoverTextImg &&
    (await idVisible(ids.CONTENT_ITEM_BUTTON_IMAGE(product.increaseCoverTextImg))());

  for (const level of coverLevels) {
    const textKey = `${level}Text` as keyof typeof product;
    const amountKey = `${level}Amount` as keyof typeof product;

    const text = product[textKey];
    const amount = product[amountKey];

    if (text) {
      await textVisible(text)();
    }

    if (amount) {
      await textVisible(amount)();
    }
  }
  product.disclaimer_1 && (await textVisible(product.disclaimer_1)());
  product.disclaimer_2 && (await textVisible(product.disclaimer_2)());
  product.NOincreaseCoverText && (await textNotVisible(product.NOincreaseCoverText)());
  product.NOincreaseCoverTextImg &&
    (await idNotVisible(ids.CONTENT_ITEM_BUTTON_IMAGE(product.NOincreaseCoverTextImg))());
};
