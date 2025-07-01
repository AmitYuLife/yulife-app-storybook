import {
  SCROLL_PICKER_ACTIVE_ITEM,
  TEXT_TEMPLATE,
  BUTTON_BASE,
  SCROLL_PICKER_CONFIRM_BUTTON,
  CHIP_LIST_ITEM,
  EVENT_CARD_COLOUR,
} from "@ids";
import { element } from "detox";

export const finishHealthQuestionnaire = async () => {
  // YuCoin tab
  await element(by.id(EVENT_CARD_COLOUR("#FFFFFF"))).tap();

  // Journey intro
  const swipeTarget = element(by.id(TEXT_TEMPLATE("Getting to know Yu!", "h3")));
  await waitFor(swipeTarget).toBeVisible().withTimeout(10000);
  await swipeTarget.swipe("up", "fast", 1);
  await element(by.id(BUTTON_BASE("Let’s go!", false))).tap();

  // Journey consent
  await element(by.id(BUTTON_BASE("Consent and continue", false))).tap();

  // Journey weight
  await element(by.id(TEXT_TEMPLATE("Enter your weight", "l1b"))).tap();
  await element(by.id(SCROLL_PICKER_ACTIVE_ITEM("30 kg"))).swipe("up", "slow");
  await element(by.id(CHIP_LIST_ITEM("Pounds (lbs)"))).tap();
  await element(by.id(SCROLL_PICKER_ACTIVE_ITEM("50 lbs"))).swipe("up", "slow");
  await element(by.id(SCROLL_PICKER_CONFIRM_BUTTON)).tap();
  await element(by.id(BUTTON_BASE("Next", false))).tap();

  // Journey submission
  await element(by.id(BUTTON_BASE("Claim", false))).tap();
};
