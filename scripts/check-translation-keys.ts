const fs = require("fs");

const BASE_PATH = __dirname + "/../src/locale/translations";
const translationFiles = fs.readdirSync(BASE_PATH);

// Iterate each file and transform nested keys into strings
// e.g. {a: {b: {c: true}}} => ["a.b.c"]
const getTranslationKeys = (obj: Record<string, any>, prefix = ""): string[] => {
    const values: string[] = [];
    Object.entries(obj).map(([key, value]) => {
        const nestedPropStr = `${prefix}${key}`;
        if (typeof value === "object") {
            values.push(...getTranslationKeys(value, `${nestedPropStr}.`));
        } else {
            values.push(nestedPropStr);
        }
    });

    return values;
}

// Read all translation files and get all keys
const translations: Record<string, Record<string, boolean>> = {};
for (const translationFile of translationFiles) {
    const translationText = fs.readFileSync(`${BASE_PATH}/${translationFile}`);
    const translation = JSON.parse(translationText);

    const values = getTranslationKeys(translation);
    

    translations[translationFile.replace(".json", "")] = values.reduce((acc, key) => {
        acc[key] = true;
        return acc;
    }, {} as Record<string, boolean>);
}

const missingTranslationFiles: Record<string, {source: string, key: string}[]> = {};

// Iterate through each file and check each key exists in every file
for(const sourceTranslation of Object.keys(translations)) {
    for(const [translationFile, languageTranslations] of Object.entries(translations)) {

        const missingKeys = Object.keys(translations[sourceTranslation])
            .filter(key => !languageTranslations[key])
            .filter(key => missingTranslationFiles[translationFile] ? missingTranslationFiles[translationFile].find(m => m.key === key) === undefined : true);

        if (missingKeys.length > 0) {

            if(!missingTranslationFiles[translationFile]) {
                missingTranslationFiles[translationFile] = [];
            }
         
            missingTranslationFiles[translationFile].push(...missingKeys.map(key => ({source: sourceTranslation, key})));
        }
    }
}

// Error if any missing keys
if(Object.values(missingTranslationFiles).length){
    console.log(`\n\x1b[0mFound missing translation keys for languages: ${Object.keys(missingTranslationFiles).map(file => `\x1b[41m\x1b[37m${file}`).join("\x1b[0m, ")}`);
    console.log("\x1b[0mPush with --no-verify to ignore\n")
    for(const language of Object.keys(missingTranslationFiles)) {
        console.log(`\x1b[0m\x1b[4m${language.replace(".json", "")}:`)
        missingTranslationFiles[language].forEach(missing => {
            console.log(`\x1b[0m${missing.key}\x1b[0m\x1b[2m (from ${missing.source})`);
        });

        // Empty line
        console.log();
    }

    // Empty line
    console.log();

    process.exit(1);
}