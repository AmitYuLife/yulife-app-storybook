import { Language, Translation } from "./translations.types";

export * from "./translations.types";

// lazy requires (metro bundler does not support symlinks)
export const translations: Record<Language, Translation> = {
  en: {
    name: "English",
    intercomLanguage: "en",
    isEnabled: true,
    load: () => require("./main/en-GB.json"),
    direction: "ltr",
    setMomentLocale: () => {
      require("moment/locale/en-gb");
      require("moment").locale("en-gb");
    },
  },
  "en-GB": {
    name: "English (UK)",
    intercomLanguage: "en",
    flag: "🇬🇧",
    overwrite: "en",
    isEnabled: true,
    load: () => require("./main/en-GB.json"),
    direction: "ltr",
    setMomentLocale: () => {
      require("moment/locale/en-gb");
      require("moment").locale("en-gb");
    },
  },
  "en-US": {
    name: "English (US)",
    intercomLanguage: "en",
    flag: "🇺🇸",
    isEnabled: true,
    load: () => require("./downloaded/en-US.json"),
    direction: "ltr",
    setMomentLocale: () => {
      // default is en, so no need to load anything
      require("moment").locale("en");
    },
  },
  "es-US": {
    name: "Español (Estados Unidos)",
    intercomLanguage: "es",
    flag: "🇪🇸",
    isEnabled: false,
    isEnabledForTest: true,
    load: () => require("./downloaded/es-US.json"),
    direction: "ltr",
    setMomentLocale: () => {
      require("moment/locale/es-us");
      require("moment").locale("es-us");
    },
  },
  "ja-JP": {
    name: "日本語 (JA)",
    intercomLanguage: "ja",
    flag: "🇯🇵",
    isEnabled: true,
    load: () => require("./downloaded/ja-JP.json"),
    direction: "ltr",
    setMomentLocale: () => {
      require("moment/locale/ja");
      require("moment").locale("ja");
    },
  },
  "ar-SA": {
    name: "العربية",
    intercomLanguage: "ar",
    flag: "🇸🇦",
    isEnabled: false,
    isEnabledForTest: true,
    load: () => require("./downloaded/ar-SA.json"),
    direction: "rtl",
    setMomentLocale: () => {
      const moment = require("moment");
      require("moment/locale/ar-sa");
      moment.updateLocale("ar-sa", { postformat: (str: string) => str });
      moment.locale("ar-sa");
    },
  },
};
