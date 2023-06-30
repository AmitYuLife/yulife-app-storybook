import * as RNLocalize from "react-native-localize";
import Polyglot from "node-polyglot";
import { Language } from "./types";

type Translation = {
  name: string;
  flag?: string;
  overwrite?: Language;
  isEnabled: boolean;
  load: () => unknown;
};

// lazy requires (metro bundler does not support symlinks)

const translations: Record<Language, Translation> = {
  "en-US": {
    name: "English (US)",
    flag: "🇺🇸",
    isEnabled: true,
    load: () => require("./translations/en-US.json"),
  },
  "en-GB": {
    name: "English (UK)",
    flag: "🇬🇧",
    overwrite: "en",
    isEnabled: true,
    load: () => require("./translations/en-GB.json"),
  },
  "pt-PT": {
    name: "Português (Portugal)",
    flag: "🇵🇹",
    // TODO: turn it on when the backend's ready too
    isEnabled: false,
    load: () => require("./translations/pt-PT.json"),
  },
  en: {
    name: "English",
    isEnabled: true,
    load: () => require("./translations/en-GB.json"),
  },
};

class Translator {
  private readonly FALLBACK = { languageTag: "en", isRTL: false };
  private dict: Polyglot;

  constructor() {
    this.init();
  }

  private readonly getAvailableLocales = (showAllOptions = false) =>
    Object.keys(translations).filter((k: Language) => showAllOptions || translations[k].isEnabled);

  // TODO: need to store the selected options and use it for initialisation
  private readonly init = () => {
    const { languageTag } = RNLocalize.findBestAvailableLanguage(this.getAvailableLocales()) || this.FALLBACK;
    this.setLocale(languageTag as Language);
  };

  public setLocale = (locale: Language) => {
    if (translations[locale]) {
      this.dict = new Polyglot({ locale, phrases: translations[locale].load() });
    }
  };

  public readonly getLocale = () => this.dict.locale();
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
        };
      })
      .filter((item) => item.flag);
}

export default new Translator();
