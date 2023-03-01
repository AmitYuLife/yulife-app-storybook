import * as RNLocalize from "react-native-localize";
import Polyglot from "node-polyglot";
import { Language } from "./types";

const translations: Record<Language, () => any> = {
  // lazy requires (metro bundler does not support symlinks)
  "en-US": () => require("./translations/en-US.json"),
  "en-GB": () => require("./translations/en-GB.json"),
  "pt-PT": () => require("./translations/pt-PT.json"),
  en: () => require("./translations/en-GB.json"),
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
  public readonly has = (key: string) => this.dict.has(key);
  public readonly translate = (key: string, config?: Polyglot.InterpolationOptions) => this.dict.t(key, config);
}

export default new Translator();
