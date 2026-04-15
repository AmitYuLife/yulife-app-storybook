import { navigation } from "@utils";
import { screens } from "@appScreens";
import { IDatabaseItem, readInbox } from "@yu-life/yulife-bdd-framework";
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

export const { swipeToID } = navigation.scrolling;

export { rewardScreenVisible, given200coins } from "../../login_and_routing/_steps/then";

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

  const validSubjects = [
    "[detox] 🔑 Your login to the Yuniverse!",
    "[detox] Your YuLife verification code",
  ];

  if (!validSubjects.includes(subject)) {
    throw new Error(`Email subject is incorrect: "${subject}"`);
  }
};

export const hasReceivedAviosEmail = (email: string) => async () => {
  const inbox = await readInbox(email, true);
  const subject = inbox[0].subject;

  if (subject !== "[detox] YuLife - Your Avios Purchase") {
    throw new Error("Email subject is incorrect");
  }
};

export const hasReceivedAdidasEmail = (email: string) => async () => {
  const inbox = await readInbox(email, true);
  const subject = inbox[0].subject;

  if (subject !== "[detox] Your link to your Adidas voucher") {
    throw new Error(
      `Email subject is incorrect. Expected "[detox] Your link to your Adidas voucher" but got "${subject}"`
    );
  }
};

export const hasReceivedGiftedEmail = (email: string, sender: IDatabaseItem) => async () => {
  const inbox = await readInbox(email, true);
  const subject = inbox[0].subject;

  if (subject !== `[detox] ${sender.data.firstName} ${sender.data.lastName} sent you a gift`) {
    throw new Error("Email subject is incorrect");
  }
};
