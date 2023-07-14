import { LeaderboardMetric } from "@graphql/member";
import translator from "./translator";

export * from "./types";

// aliases for translate function
export const translate = translator.translate;
export const t = translator.translate;
export const findBestAvailableLanguage = translator.findBestAvailableLanguage;
export const getIntercomLanguage = translator.getIntercomLanguage;
export const getCurrentLocale = translator.getCurrentLocale;
export const getCurrentLocaleOptions = translator.getCurrentLocaleOptions;
export const setLocale = translator.setLocale;
export const getAvailableLocaleOptions = translator.getAvailableLocaleOptions;

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
