import { navigation } from "@utils";
import { screens } from "@appScreens";
import { readInbox } from "@yu-life/yulife-bdd-framework";
import { expect } from "detox";
import * as ids from "@ids";

export const {
  idVisible,
  idNotVisible,
  textVisible,
  textNotVisible,
  expectIsVisibleViaID,
  expectIsVisibleViaText,
  multipleTextVisible,
} = navigation.common;

export const { onRewardScreen } = screens.rewards;

export const { swipeToID } = navigation.scrolling;

export const isOnLoginEmailScreen = async () => {
  await expect(element(by.text("Hi there! What’s your email?"))).toBeVisible();
  await expect(element(by.id(ids.BUTTON_LOGIN(true)))).toBeVisible();
};

export const isOnEmailSentScreen = (email: string) => async () => {
  await expect(element(by.text("Email sent"))).toBeVisible();
};

export const logInbox = (email: string) => async () => {
  const inbox = await readInbox(email, true);

  console.log(inbox[0].subject);
  console.log(inbox[0].text);
};

export const hasReceivedMagicLinkEmail = (email: string) => async () => {
  const inbox = await readInbox(email, true);
  const subject = inbox[0].subject;

  if (subject !== "[detox] Your link to access YuLife") {
    throw new Error("Email subject is incorrect");
  }
};

export const hasReceivedAviosEmail = (email: string) => async () => {
  const inbox = await readInbox(email, true);
  const subject = inbox[0].subject;

  if (subject !== "[detox] YuLife - Your Avios Purchase") {
    throw new Error("Email subject is incorrect");
  }
};

export const hasReceivedNikeEmail = (email: string) => async () => {
  const inbox = await readInbox(email, true);
  const subject = inbox[0].subject;

  if (subject !== "[detox] Your link to your Nike voucher") {
    throw new Error("Email subject is incorrect");
  }
};
