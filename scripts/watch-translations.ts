const wglob = require("glob");
const { get: wget, flatMap, isObject, isArray, extend } = require("lodash");
const { basename: wbasename } = require("node:path");
const lodash = require("lodash");
const wfs = require("fs");

/**
 * Flattens an object to a single level
 *
 * @remarks
 * { a: { b: { c: 'test' } } } => { 'a.b.c': 'test' }
 */
const flat = (val: Record<string, any>, keys: string[] = []): Record<string, string>[] => {
  if (typeof val === "string") {
    return [{ [keys.join(".")]: val as unknown as string }];
  }

  return flatMap(val, (v: any, k: any) => flat(v, [...keys, k]));
};

const parseTranslation = (translation: string): Record<string, string> => {
  const parsedJson: any = JSON.parse(translation);

  const watchConfig = wget(parsedJson, "watch");
  if (!watchConfig) return;

  const flattenedTranslations = flat(watchConfig);
  return Object.assign({}, ...flattenedTranslations);
};

interface ITranslationKey {
  extractionState: string;
  localizations: Record<string, { stringUnit: { state: "translated"; value: string } }>;
}

/**
 * Read translation files and convert to strings catalog format (.xcstrings)
 */
const getParsedTranslations = (): Record<string, ITranslationKey> => {
  const translationKeys: Record<string, ITranslationKey> = {};

  const files: string[] = wglob.sync(`${__dirname}/../src/locale/translations/**/*.json`);

  for (const file of files) {
    const locale = wbasename(file).replace(".json", "");

    const mergedTranslations = parseTranslation(wfs.readFileSync(file, "utf-8"));
    if (!mergedTranslations) continue;

    for (const [translationKey, translationValue] of Object.entries(mergedTranslations)) {
      if (!translationKeys[translationKey]) {
        translationKeys[translationKey] = {
          extractionState: "manual",
          localizations: {},
        };
      }

      translationKeys[translationKey].localizations = {
        ...translationKeys[translationKey].localizations,
        [locale === "en-GB" ? "en" : locale]: {
          stringUnit: {
            state: "translated",
            value: translationValue,
          },
        },
      };
    }
  }

  return translationKeys;
};

(() => {
  console.log("⌚ Getting watch translations...");

  const translations = getParsedTranslations();
  console.log(`🔍 Converting ${Object.keys(translations).length} locales...`);

  const file = {
    sourceLanguage: "en",
    version: "1.0",
    strings: {
      ...translations,
    },
  };

  console.log("✍️ Writing translations to Localisation.xcstrings...");
  wfs.writeFileSync(`${__dirname}/../targets/YuWatch/Localizable.xcstrings`, JSON.stringify(file));
  

  console.log("✅ Wrote watch translations");
})();
