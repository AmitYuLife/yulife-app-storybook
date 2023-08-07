import path from "path";
import fs from "fs";

let translationMapping;

export function getLocalisedString(key, templateArgs = {}) {
    let translatedString = key;

    if (process.env.TARGET_LOCALE && (process.env.TARGET_LOCALE !== "en-GB")) {
        if (!translationMapping) {
            const translationMappingPath = path.resolve(process.cwd(), "translation-mapping.json");
            translationMapping = JSON.parse(fs.readFileSync(translationMappingPath, "utf8"));
        }

        translatedString = translationMapping[key];
    }

    Object.keys(templateArgs).forEach(arg => {
        const placeholder = "%{" + arg + "}";
        const value = templateArgs[arg];
        translatedString = translatedString.replace(placeholder, value);
    });

    return translatedString;
}