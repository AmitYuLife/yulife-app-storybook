import {
  BUTTON_BASE,
  BUTTON_LOGIN,
  INPUT_LOGIN_EMAIL,
  INPUT_LOGIN_PASSWORD,
  LOGIN_HERO_CLAIM_ACCOUNT_BUTTON,
  LOGIN_SCREEN_HEADER,
  LOGIN_WITH_PASSWORD,
  SCREEN_ONBOARDING_FITKIT_CONNECT_BUTTON_SKIP,
} from "@ids";
import { authoriseFitkit } from "@socket";
import { element } from "detox";
import seed from "./_data";

export const login = async () => {
  // Sign-in
  await element(by.id(LOGIN_HERO_CLAIM_ACCOUNT_BUTTON)).tap();

  // Password login form
  await element(by.id(INPUT_LOGIN_EMAIL)).tap();
  const loginField = element(by.id(INPUT_LOGIN_EMAIL));
  await loginField.tap();
  await loginField.replaceText(seed.CUSTOMER.data.email);
  await element(by.id(BUTTON_LOGIN(false))).tap();
  await element(by.text("PASS")).tap();
  await element(by.id(LOGIN_WITH_PASSWORD)).tap();
  const passwordField = element(by.id(INPUT_LOGIN_PASSWORD("Password")));
  await passwordField.tap();
  await passwordField.replaceText(seed.AUTH.data.password);
  await element(by.id(LOGIN_SCREEN_HEADER)).tap();
  await authoriseFitkit()();
  await element(by.id(BUTTON_LOGIN(false))).tap();

  // Skip Fitkit Connect
  await element(by.id(BUTTON_BASE("SIGN_UP_REWARD_SCREEN"))).tap();
  await element(by.id(SCREEN_ONBOARDING_FITKIT_CONNECT_BUTTON_SKIP)).tap();
};
