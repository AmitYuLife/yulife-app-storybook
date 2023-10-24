import { Language, Translation } from "./translations.types";

export * from "./translations.types";

// lazy requires (metro bundler does not support symlinks)
export const translations: Record<Language, Translation> = {
  en: {
    name: "English",
    intercomLanguage: "en",
    isEnabled: true,
    load: () => require("./main/en-GB.json"),
  },
  "en-GB": {
    name: "English (UK)",
    intercomLanguage: "en",
    flag: "🇬🇧",
    overwrite: "en",
    isEnabled: true,
    load: () => require("./main/en-GB.json"),
  },
  "en-US": {
    name: "English (US)",
    intercomLanguage: "en",
    flag: "🇺🇸",
    isEnabled: true,
    load: () => require("./downloaded/en-US.json"),
  },
  "es-US": {
    name: "Español (Estados Unidos)",
    intercomLanguage: "es",
    flag: "🇺🇸",
    isEnabled: false,
    isEnabledForTest: true,
    load: () => require("./downloaded/es-US.json"),
  },
  "ja-JP": {
    name: "日本語 (JA)",
    intercomLanguage: "ja",
    flag: "🇯🇵",
    isEnabled: true,
    load: () => require("./downloaded/ja-JP.json"),
  },
};
