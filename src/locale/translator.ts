import * as RNLocalize from "react-native-localize";
import Polyglot from "node-polyglot";
import { Language } from "./types";
import { DETOX_ENABLED } from "../services/socket";

type Translation = {
  name: string;
  /**
   * https://docs.intercom.com/configure-intercom-for-your-product-or-site/customize-the-intercom-messenger/localize-intercom-to-work-with-multiple-languages
   */
  intercomLanguage: string;
  flag?: string;
  overwrite?: Language;
  isEnabled: boolean;
  load: () => unknown;
};

// lazy requires (metro bundler does not support symlinks)

const translations: Record<Language, Translation> = {
  "en-US": {
    name: "English (US)",
    intercomLanguage: "en",
    flag: "🇺🇸",
    isEnabled: true,
    load: () => require("./translations/en-US.json"),
  },
  "en-GB": {
    name: "English (UK)",
    intercomLanguage: "en",
    flag: "🇬🇧",
    overwrite: "en",
    isEnabled: true,
    load: () => require("./translations/en-GB.json"),
  },
  "pt-PT": {
    name: "Português (Portugal)",
    intercomLanguage: "pt",
    flag: "🇵🇹",
    // TODO: turn it on when the backend's ready too
    isEnabled: false,
    load: () => require("./translations/pt-PT.json"),
  },
  "ja-JP": {
    name: "日本語 (JA)",
    intercomLanguage: "ja",
    flag: "🇯🇵",
    // TODO: turn it on when the backend's ready too
    isEnabled: false,
    load: () => require("./translations/ja-JP.json"),
  },
  en: {
    name: "English",
    intercomLanguage: "en",
    isEnabled: true,
    load: () => require("./translations/en-GB.json"),
  },
};

class Translator {
  private readonly FALLBACK = { languageTag: "en" as const, isRTL: false };
  private dict: Polyglot;

  constructor() {
    // translator needs to be initiated at start
    this.setLocale(this.findBestAvailableLanguage());
  }

  private readonly getAvailableLocales = (showAllOptions = false) =>
    Object.keys(translations).filter((k: Language) => showAllOptions || translations[k].isEnabled);

  public findBestAvailableLanguage = () =>
    (RNLocalize.findBestAvailableLanguage(this.getAvailableLocales(DETOX_ENABLED))?.languageTag as Language) ||
    this.FALLBACK.languageTag;

  public setLocale = async (locale: Language) => {
    if (translations[locale]) {
      this.dict = new Polyglot({ locale, phrases: translations[locale].load() });
    }
  };

  public readonly getCurrentLocale = () => this.dict.locale() as Language;
  public readonly getCurrentLocaleOptions = () => translations[this.dict.locale() as Language];
  public readonly getIntercomLanguage = (locale: Language) => translations[locale]?.intercomLanguage;
  public readonly has = (key: string) => this.dict.has(key);
  public readonly translate = (key: string, config?: Polyglot.InterpolationOptions) => this.dict.t(key, config);

  public readonly getAvailableLocaleOptions = (showAllOptions: boolean) =>
    this.getAvailableLocales(showAllOptions)
      .map((id: Language) => {
        const translation = translations[id];

        return {
          id,
          name: translation.name,
          flag: translation.flag,
          overwrite: translation.overwrite,
          intercomLanguage: translation.intercomLanguage,
        };
      })
      .filter((item) => item.flag);
}

export default new Translator();
