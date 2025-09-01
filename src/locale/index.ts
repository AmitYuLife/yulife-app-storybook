import { I18nManager } from "react-native";
import translator from "./translator";
import { RegionService } from "./region";

type LeaderboardMetric = "steps" | "distance" | "coins" | "meditation" | null;

export * from "./region";
export * from "./translations/translations.types";

export const isRTL = I18nManager.isRTL;

export const region = new RegionService();
export const translate: typeof translator["translate"] = (key, args) => {
  const keyWithRegion = `${key}.${region.getPreferredRegion()?.toLowerCase()}`;

  if (translator.has(keyWithRegion)) {
    return translator.translate(keyWithRegion, args);
  }

  const keyWithRegionDefault = `${key}.default`;

  if (translator.has(keyWithRegionDefault)) {
    return translator.translate(keyWithRegionDefault, args);
  }

  return translator.translate(key, args);
};

// aliases for translate function
export const t = translate;
export const findBestAvailableLanguage = translator.findBestAvailableLanguage;
export const getIntercomLanguage = translator.getIntercomLanguage;
export const getCurrentLocale = translator.getCurrentLocale;
export const getCurrentLocaleOptions = translator.getCurrentLocaleOptions;
export const setLocale = translator.setLocale;
export const getAvailableLocaleOptions = translator.getAvailableLocaleOptions;
export const getLocaleDirection = () => translator.getCurrentLocaleOptions().direction;

// utility / helper functions
export const getMetricName = (metric: LeaderboardMetric, form: "singular" | "plural" = "singular") => {
  if (translator.has(`screens.leaderboard.metrics.${metric}.${form}`)) {
    return translator.translate(`screens.leaderboard.metrics.${metric}.${form}`);
  }

  const otherForm = form === "singular" ? "plural" : "singular";
  return translator.translate(`screens.leaderboard.metrics.${metric}.${otherForm}`);
};

export const getDateFormat = () => translator.translate("format.date_short");
export const getReadableShortDateFormat = () => translator.translate("format.date_readable_short");
export const getDatePickerDisplayFormat = () => translator.translate("format.date_picker_display");
