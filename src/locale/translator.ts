import * as RNLocalize from "react-native-localize";
import Polyglot from "node-polyglot";
import socket, { DETOX_ENABLED } from "@services/socket";
import { translations, Language } from "./translations";

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
      const phrases = translations[locale].load();

      if (phrases) {
        this.dict = new Polyglot({ locale, phrases });
      }
    }
  };

  public readonly getCurrentLocale = () => this.dict.locale() as Language;
  public readonly getCurrentLocaleOptions = () => translations[this.getCurrentLocale()];
  public readonly getIntercomLanguage = (locale: Language) => translations[locale]?.intercomLanguage;
  public readonly has = (key: string) => this.dict.has(key);
  public readonly translate = (key: string, config?: Polyglot.InterpolationOptions) => {
    if (DETOX_ENABLED) {
      socket.emitTranslationKeyUsed(key);
    }

    return this.dict.t(key, config);
  };

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
