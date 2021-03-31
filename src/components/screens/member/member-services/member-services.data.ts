import { BUTTON_ICON } from "@atoms/button/tertiary-button/tertiary-button.helpers";
import { Platform } from "react-native";

export const yuMatterData = {
  website: "http://global.resourcesforyourlife.com",
  companyCode: "yulife",
  password: "employee",
  contactNumber: "0800 243 458",
  customerServiceEmail: "assistance@workplaceoptions.com",
  yulifeHelpCenter: "https://intercom.help/yu-life/en/articles/3322540-yumatter",
};

export const smartHealthData = {
  website: "https://www.aiglife-smarthealth.com/",
  yulifeHelpCenter: "https://intercom.help/yu-life/en/articles/3322271-smart-health-by-aig",
  contactNumber: "033 3210 0367",
  customerServiceEmail: "yudoc@healthhero.com",
  appUrl: Platform.select({
    ios: "https://apps.apple.com/at/app/smart-health-gp-by-aig/id1474584706?l=en",
    android: "https://play.google.com/store/apps/details?id=com.advancemedical.aig&hl=en_GB",
  }),
  appIcon: Platform.select({
    ios: BUTTON_ICON.APP_STORE,
    android: BUTTON_ICON.GOOGLE_PLAY,
  }),
};
