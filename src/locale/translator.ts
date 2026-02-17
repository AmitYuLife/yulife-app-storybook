import Polyglot from "node-polyglot";
import { getLocales } from "expo-localization";
import { DETOX_ENABLED } from "@services/socket";
import { translations, Language, Translation } from "./translations";
import { IS_DEVELOP, isWeb } from "@utils";

class Translator {
  private dict: Polyglot;
  private readonly fallbackLocale: Language = "en";

  /**
   * Translator needs to be initiated at start
   */
  constructor() {
    this.setLocale(this.findBestAvailableLanguage());
  }

  /**
   * Get an array of all available locales
   *
   * @param showAllOptions when true we return all locales (even if they are not enabled)
   */
  private readonly getAvailableLocales = (showAllOptions = false): Language[] => {
    return Object.keys(translations).filter((language: Language) => {
      const translation = translations[language];

      const isEnabled = translation.isEnabled || (IS_DEVELOP && translation.isEnabledForTest);

      return showAllOptions || isEnabled;
    }) as Language[];
  };

  /**
   * Try and determine the best available language
   * for the user based on thier device language settings
   *
   * Locale codes are in the format of {language}-{region}
   * so first we will try to find the locale via an exact match
   * for example "en-US" or "en-GB", if we can't find a match then
   * we will try to find a match based on the language code only for
   * example "en-JP" uses the "en" language so it would match "en-GB".
   */
  public findBestAvailableLanguage = (): Language => {
    if (isWeb()) {
      return this.fallbackLocale;
    }

    let language: string | undefined;
    let region: string | undefined;
    try {
      const locales = getLocales();
      const locale = locales[0];
      language = locale?.languageCode;
      region = locale?.regionCode;
    } catch (e) {
      console.error(e);
    }

    if (!language) {
      return this.fallbackLocale;
    }

    const availableLocales = this.getAvailableLocales(DETOX_ENABLED);

    const foundLocaleViaLocale = availableLocales.find((locale) => locale.includes(`${language}-${region}`));
    const foundLocaleViaLanguage = availableLocales.find((locale) => locale.includes(language));

    return foundLocaleViaLocale || foundLocaleViaLanguage || this.fallbackLocale;
  };

  public setLocale = async (locale: Language): Promise<void> => {
    if (!translations[locale]) {
      return;
    }

    const phrases = translations[locale].load();

    if (!phrases) {
      return;
    }

    translations[locale].setMomentLocale();
    this.dict = new Polyglot({ locale, phrases, allowMissing: DETOX_ENABLED });
  };

  public readonly getCurrentLocale = (): Language => {
    return this.dict.locale() as Language;
  };

  public readonly getCurrentLocaleOptions = (): Translation => {
    return translations[this.getCurrentLocale()];
  };

  public readonly getIntercomLanguage = (locale: Language): string => {
    return translations[locale]?.intercomLanguage;
  };

  public readonly has = (key: string): boolean => {
    return this.dict.has(key);
  };

  public readonly translate = (key: string, config?: Polyglot.InterpolationOptions): string => {
    return this.dict.t(key, config);
  };

  public readonly getAvailableLocaleOptions = (
    showAllOptions: boolean
  ): { id: Language; name: string; flag: string; overwrite: Language; intercomLanguage: string }[] => {
    return this.getAvailableLocales(showAllOptions)
      .map((id) => {
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
  };
}

export default new Translator();
