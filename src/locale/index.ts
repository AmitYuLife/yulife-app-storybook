import translator from "./translator";

// aliases for translate function
export const translate = translator.translate;
export const t = translator.translate;
export const getLocale = translator.getLocale;

// utility / helper functions
export const getDateFormat = () => translator.translate("format.date_short");
export const getReadableShortDateFormat = () => translator.translate("format.date_readable_short");
