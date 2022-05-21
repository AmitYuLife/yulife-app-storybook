import translator from "./translator";

// aliases for translate function
export const translate = translator.translate;
export const t = translator.translate;
export const getLocale = translator.getLocale;

// utility / helper functions
export const getReadableDateFormat = () => translator.translate("format.date_short");
