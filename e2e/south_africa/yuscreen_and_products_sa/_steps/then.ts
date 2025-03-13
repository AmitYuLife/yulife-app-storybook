import { navigation } from "@utils";
import { screens } from "@appScreens";
import { ProductSlot } from "../_resources/types";
import * as ids from "@ids";
import * as constant from "../_resources/constants";

export const {
  idVisible,
  idNotVisible,
  textVisible,
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

export const productSlotVisible =
  (product: ProductSlot, schemeIndex = 0, slotBackgroundIndex = 0, yucoin?: string) =>
  async () => {
    await textVisible(product.name)();
    await textVisibleAtIndex(product.scheme, schemeIndex)();
    await idVisible(ids.RIGHT_SIDE_IMAGE_SLOT(product.img))();
    if (yucoin) {
      await idVisibleAtIndex(
        ids.LEFT_SIDE_BACKGROUD_IMAGE_SLOT(constant.yellowProductSlotBackground),
        slotBackgroundIndex
      )();
      await textVisible(yucoin)();
    }
  };
