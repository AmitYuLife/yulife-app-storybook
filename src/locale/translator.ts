import * as RNLocalize from "react-native-localize";
import Polyglot from "node-polyglot";
import { Language } from "./types";

const translations: Record<Language, () => any> = {
  // lazy requires (metro bundler does not support symlinks)
  "en-US": () => require("@locale/translations/en-US").default,
  "en-GB": () => require("@locale/translations/en-GB").default,
  en: () => require("@locale/translations/en-GB").default,
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
    this.dict = new Polyglot({ locale, phrases: translations[locale]() });
  };

  public readonly getLocale = () => this.dict.locale();

  public readonly translate = (key: string, config?: Polyglot.InterpolationOptions) => this.dict.t(key, config);
}

export default new Translator();
