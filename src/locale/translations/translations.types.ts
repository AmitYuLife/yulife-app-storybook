export type Language = "en" | "en-US" | "en-GB" | "ja-JP" | "es-US" | "ar-SA" | "nl-NL";

export type Translation = {
  name: string;
  /**
   * https://docs.intercom.com/configure-intercom-for-your-product-or-site/customize-the-intercom-messenger/localize-intercom-to-work-with-multiple-languages
   */
  intercomLanguage: string;
  flag?: string;
  overwrite?: Language;
  isEnabled: boolean;
  isEnabledForTest?: boolean;
  load: () => unknown;
  setMomentLocale: () => void;
  direction: "ltr" | "rtl";
};
