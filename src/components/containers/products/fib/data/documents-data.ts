import Config from "react-native-config";
import { BUTTON_ICON } from "@atoms/button/tertiary-button/tertiary-button.helpers";

export const policyTermsConditions = {
  id: "policy-terms-conditions",
  question: "Terms & Conditions",
  icon: BUTTON_ICON.YELLOW_DOC,
  url: `${Config.WEB_SITE_URL}static/docs/insurance/personal/1.0.0/personal-life-insurance-terms-and-conditions.pdf`,
};

export const privacyPolicy = {
  id: "privacy-policy",
  question: "Privacy Policy",
  icon: BUTTON_ICON.BLUE_DOC,
  url: `${Config.WEB_SITE_URL}privacy-policy/`,
};

export const rewardsPolicy = {
  id: "rewards-policy",
  question: "Rewards Policy",
  icon: BUTTON_ICON.BLUE_DOC,
  url: `${Config.WEB_SITE_URL}rewards-policy/`,
};

export const keyFacts = {
  id: "key-facts",
  question: "Key Facts",
  icon: BUTTON_ICON.PDF,
  url: `${Config.WEB_SITE_URL}static/docs/insurance/personal/1.0.0/personal-life-insurance-key-facts.pdf`,
};

export const policySummary = {
  id: "policy-summary",
  question: "Policy Guide",
  icon: BUTTON_ICON.PDF,
  url: `${Config.WEB_SITE_URL}static/docs/insurance/personal/1.0.0/personal-life-insurance-policy-guide.pdf`,
};

export const generalTermsOfBusiness = {
  id: "general-term-of-business",
  question: "General Terms of Business",
  icon: BUTTON_ICON.PDF,
  url: `${Config.WEB_SITE_URL}static/docs/e2e/general-terms-of-business/1.0.3/general-terms-of-business.pdf`,
};

export default [policyTermsConditions, privacyPolicy, rewardsPolicy, keyFacts, policySummary, generalTermsOfBusiness];

export const checkoutDocs = [rewardsPolicy, keyFacts, policySummary];
