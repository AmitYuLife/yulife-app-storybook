import enGB from "../../../src/locale/translations/main/en-GB.json"
import enUS from "../../../src/locale/translations/downloaded/en-US.json"
import esUS from "../../../src/locale/translations/downloaded/es-US.json"
import jaJP from "../../../src/locale/translations/downloaded/ja-JP.json"

const translations = {
    "en-GB": enGB,
    "en-US": enUS,
    "es-US": esUS,
    "ja-JP": jaJP
  };

  /**
 * Fetches the translation object for the given locale.
 * @param {string} locale - The locale code (e.g., 'en-GB', 'en-US', 'es-US').
 * @returns {object} - The corresponding translation object.
 */
export const getTranslation = (locale) => {
    return translations[locale] || translations['en-GB'];
  }

  export const replaceName = (template: string, name: string): string => {
    return template.replace(/\*\*(%{name})\*\*|%\{name\}/g, (_, match) => match ? name : '');
  }

export const splitPlural = (template: string, smartCount: number): string => {
    const isPlural = smartCount !== 1;
    const pluralForm = isPlural ? template.split("||||")[1].trim() : template.split("||||")[0].trim();
  
    return pluralForm.replace(/%\{smart_count\}/g, smartCount.toString());
  }