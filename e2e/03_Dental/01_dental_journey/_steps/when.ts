import { navigation } from "@utils";
import {
  AVATAR_ITEM,
  CONTENT_ITEM_INPUT,
  DATE_INPUT,
  DATE_PICKER,
  MALE_BODY,
  PRODUCT_STEP_BODY_SCROLL_VIEW,
  LEFT_PRODUCT_STEP_MULTI_BUTTON,
  FULL_SCREEN_LOTTIE_SWIPER,
  ARROW_BUTTON,
} from "@ids";
import moment from "moment";
import { CUSTOMER_37 } from "@data";
import { expect } from 'detox'
import { dataManager, generateRandomPostgresId } from "@yu-life/yulife-bdd-framework";

export const {
  scrollFromText,
  scrollFromID,
  swipeToText,
  scrollUntilTextVisible,
  scrollUntilIdVisible,
  scrollFromIDMultiple,
  scrollToAndTapText,
  swipeFromText,
} = navigation.scrolling;

export const {
  tapText,
  reloadAppToTab,
  tapID,
  typeViaID,
  replaceTextViaID,
  tapTextWithParentID,
  tryTapID,
  tryTapText,
  wait,
  clearFieldByID,
  restartWithData,
  restartWithoutDelete,
  idVisible,
  navigateViaText,
  navigateViaID,
  textVisible,
  slowType,
  tapTextAtIndex,
  tapIDAtPoint,
  tapIDAtIndex,
  booleanIdVisible
} = navigation.common;

export const { loginOnly, logInAndGoToTab, loginToYuScreen } = navigation.login;

export const createDefaultYumoji = async () => {
  await tapText("Create your Yumoji")();
  await tapID(MALE_BODY)();
  await tapText("Continue")();
  await tapText("Save")();
  await tapText("Save changes")();
  await tapText("Done")();
};

export const dismissDentalModal = async () => {
  await navigateViaText("Explore now");
};

export const tapUnlockableItem = (itemName: string) => async () => {
  const itemUrl = `https://yulife-develop.imgix.net/yuscreen_products_assets/default/${itemName}`;

  await tapID(AVATAR_ITEM(itemUrl, "unlockable"))();
};

export const navigateThroughTheFullSwiper = async () => {
  await wait(1000)();
  await tapID(FULL_SCREEN_LOTTIE_SWIPER("RIGHT"))();
};

export const chooseCorrectDoB = (age: number) => async () => {
  const format = "YYYY-MM-DD";
  const date = moment().subtract(age, "years").format(format);

  await navigateViaID(DATE_INPUT);
  await expect(element(by.id(DATE_PICKER))).toBeVisible();
  await element(by.id(DATE_PICKER)).setDatePickerDate(date, format);
  await navigateViaText("Confirm");
};

export const chooseYesOrNo = (answer: string) => async () => {
  await navigateViaText(answer);
};

export const selectOptionAndNavigate = (option: string, navigationText: string) => async () => {
  await tapText(option)();
  await navigateViaText(navigationText);
};

export const scrollToTheBottomAndChooseYesOrNo = (answer: string) => async () => {
  await scrollUntilIdVisible(PRODUCT_STEP_BODY_SCROLL_VIEW, LEFT_PRODUCT_STEP_MULTI_BUTTON, "down")();
  await navigateViaID(answer);
};

/**
 * This skips 1 item. It also takes a while until it gets there
 */
export const swipeOnPicker = (scrollViewId: string, id: string, direction: Detox.Direction) => async () => {
  const scroller = element(by.id(scrollViewId));

  let isVisible = false;
  let attempts = 0;

  while (!isVisible) {
    await scroller.scroll(150, direction);
    await wait(500)();

    isVisible = await booleanIdVisible(id);
    attempts += 1;

    if (attempts > 50) {
      throw new Error("50 attemps have been made to reach to this Id!");
    }
  }
};

export const addContactDetails = async () => {
  await navigateViaText("Continue to checkout");
  await tapID(ARROW_BUTTON)();
  await tapText("Mr")();
  await scrollUntilTextVisible(PRODUCT_STEP_BODY_SCROLL_VIEW, "Continue", "down")();
  await tapText("Continue")();
  await typeViaID(CONTENT_ITEM_INPUT("contactDetailsAddress1"), "Harry's House\n")();
  await typeViaID(CONTENT_ITEM_INPUT("contactDetailsTown"), "London\n")();
  await typeViaID(CONTENT_ITEM_INPUT("contactDetailsPostcode"), "HA9 7FN\n")();
  await typeViaID(CONTENT_ITEM_INPUT("contactDetailsEmail"), `${CUSTOMER_37.data.email}\n`)();
  await scrollFromID(PRODUCT_STEP_BODY_SCROLL_VIEW, "up", "slow")();
  await typeViaID(CONTENT_ITEM_INPUT("contactDetailsPhone"), "07123456789\n")();
  await scrollUntilTextVisible(PRODUCT_STEP_BODY_SCROLL_VIEW, "Continue", "down")();
  await tapText("Continue")();
};

export const addPaymentDetails = async () => {
  const cardNumber = "4242424242424242";
  const cardExpiry = "424";
  const cardCVC = "242";
  const postcode = "42424";

  await navigateViaText("Continue to payment", 2000);
  await scrollUntilTextVisible(PRODUCT_STEP_BODY_SCROLL_VIEW, "Add payment details", "down")();
  await navigateViaText("Add payment details");
  await element(by.label("Card number")).atIndex(0).typeText(cardNumber);
  await element(by.label("MM / YY")).atIndex(0).typeText(cardExpiry);
  await element(by.label("CVC")).atIndex(0).typeText(cardCVC);
  await element(by.label("Postcode")).atIndex(0).typeText(postcode);
  await tapText("Set up")();
};

export const acceptConditions = async () => {
  const acceptStatement = "I have read and agreed to the above statements.";
  const acceptAndRead =
    "I have received, read and agree to Bupa’s Membership Guide, and YuLife’s Information about our service document.";
  const bupaPrivacy = "Bupa's Privacy Notice";

  await scrollUntilTextVisible(PRODUCT_STEP_BODY_SCROLL_VIEW, bupaPrivacy, "down")();
  await tapText(acceptStatement)();
  await tapText(acceptAndRead)();
};

export const addPaymentDetailsMastercard = async () => {
  const cardNumber = "5555555555554444";
  const cardExpiry = "424";
  const cardCVC = "242";
  const postcode = "42424";

  await navigateViaText("+ Add");
  await element(by.label("Card number")).atIndex(0).typeText(cardNumber);
  await element(by.label("MM / YY")).atIndex(0).typeText(cardExpiry);
  await element(by.label("CVC")).atIndex(0).typeText(cardCVC);
  await element(by.label("Postcode")).atIndex(0).typeText(postcode);
  await tapText("Set up")();
};

export const continueCheckoutDental = async () => {
  const acceptStatement = "I have read and agreed to the above statements.";
  const acceptAndRead =
    "I have received, read and agree to Bupa’s Membership Guide, and YuLife’s Information about our service document.";

  await navigateViaText("Continue to checkout");
  await tapID(ARROW_BUTTON)();
  await tapText("Mr")();
  await wait(2000)();
  await tapText("Continue")();
  await swipeFromText("Postcode*", "up", "fast")();
  await wait(2000)();
  await tapText("Continue")();
  await scrollFromID(PRODUCT_STEP_BODY_SCROLL_VIEW, "up", "fast")();
  await tapText(acceptStatement)();
  await tapText(acceptAndRead)();
  await navigateViaText("Continue to payment");
};

export const sendStripeInvoice = (id: string, subscription: string, charge: number) => async () => {
  await dataManager.sendStripeWebhookEvent({
  id: generateRandomPostgresId(),
  type: "invoice.created",
  data: {
    object: {
      id: id,
      subscription: subscription,
      subtotal: charge
      }
    }
  })
  await wait(5000)()
}

export const sendStripePayment = (id: string, subscription: string, charge: number) => async () => {
  await dataManager.sendStripeWebhookEvent({
  id: generateRandomPostgresId(),
  type: "invoice.payment_succeeded",
  data: {
    object: {
      id: id,
      subscription: subscription,
      subtotal: charge
      }
    }
  })
  await wait(5000)()
}