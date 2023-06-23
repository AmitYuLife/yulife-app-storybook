import * as RNLocalize from "react-native-localize";
import Polyglot from "node-polyglot";
import { Language } from "./types";

type Translation = { load: () => unknown; name: string; flag?: string; overwrite?: Language };

// lazy requires (metro bundler does not support symlinks)

const translations: Record<Language, Translation> = {
  "en-US": {
    name: "English (US)",
    flag: "🇺🇸",
    load: () => require("./translations/en-US.json"),
  },
  "en-GB": {
    name: "English (UK)",
    flag: "🇬🇧",
    overwrite: "en",
    load: () => require("./translations/en-GB.json"),
  },
  // TODO: turn it on when the backend's ready too
  // "pt-PT": {
  //   name: "Português (Portugal)",
  //   flag: "🇵🇹",
  //   load: () => require("./translations/pt-PT.json"),
  // },
  en: {
    name: "English",
    load: () => require("./translations/en-GB.json"),
  },
};

class Translator {
  private readonly FALLBACK = { languageTag: "en", isRTL: false };
  private dict: Polyglot;

  constructor() {
    this.init();
  }

  private readonly init = () => {
    const { languageTag } = RNLocalize.findBestAvailableLanguage(Object.keys(translations)) || this.FALLBACK;
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
  public readonly getAvailableLocales = () =>
    Object.keys(translations)
      .map((lang) => {
        const id = lang as Language;
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
