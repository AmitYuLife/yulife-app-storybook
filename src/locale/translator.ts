import * as RNLocalize from "react-native-localize";
import AsyncStorage from "@react-native-community/async-storage";
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
  private readonly STORAGE_KEY = "@yulife:locale";
  private readonly FALLBACK = { languageTag: "en" as const, isRTL: false };
  private dict: Polyglot;

  constructor() {
    // translator needs to be initiated at start
    this.setLocale(this.FALLBACK.languageTag);
  }

  private readonly getAvailableLocales = (showAllOptions = false) =>
    Object.keys(translations).filter((k: Language) => showAllOptions || translations[k].isEnabled);

  public readonly init = async () => {
    // check if there was a selected language before
    const selectedLang = await AsyncStorage.getItem(this.STORAGE_KEY);

    if (selectedLang) {
      const isAvailable = await this.setLocale(selectedLang as Language);

      // check if the language is still supported
      if (isAvailable) {
        return;
      }
    }

    // check the best available language
    const availableLanguage = RNLocalize.findBestAvailableLanguage(this.getAvailableLocales());

    if (availableLanguage?.languageTag) {
      await this.setLocale(availableLanguage.languageTag as Language, true);
    }

    // defaults to the constructor
  };

  public setLocale = async (locale: Language, shouldSaveTheSelection = false) => {
    if (translations[locale]) {
      this.dict = new Polyglot({ locale, phrases: translations[locale].load() });

      if (shouldSaveTheSelection) {
        await AsyncStorage.setItem(this.STORAGE_KEY, locale);
      }

      return true;
    }

    return false;
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
