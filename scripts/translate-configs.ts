const glob = require("glob");
const { get } = require("lodash");
const { EOL } = require("node:os");
const { exit } = require("node:process");
const { basename } = require('node:path');
const { readFileSync, writeFileSync, mkdirSync } = require("node:fs");

interface ITranslation {
    locale: string;
    translation: Record<string, unknown>;
}

const CONFIG = {
    rootPath: __dirname + "/..",
    translationMap: {
        android: {},
        ios: {
            NSCameraUsageDescription: "config.ios.plist.ns_camera_usage_description",
            NSMotionUsageDescription: "config.ios.plist.ns_motion_usage_description",
            NSHealthShareUsageDescription: "config.ios.plist.ns_health_share_usage_description",
            NSHealthUpdateUsageDescription: "config.ios.plist.ns_health_update_usage_description",
            NSPhotoLibraryUsageDescription: "config.ios.plist.ns_photo_library_usage_description",
            NSLocationAlwaysUsageDescription: "config.ios.plist.ns_location_always_usage_description",
            NSPhotoLibraryAddUsageDescription: "config.ios.plist.ns_photo_library_add_usage_description",
            NSLocationWhenInUseUsageDescription: "config.ios.plist.ns_location_when_in_use_usage_description",
        },
    }
}

abstract class Parser {
    /**
     * Takes the translations and writes them to 
     * specified config file format, based on the parser.
     * 
     * @param translations the translations to write
     */
    public abstract writeTranslations(translations: ITranslation[]): void 
}

class ParseriOS extends Parser {
    /**
     * Takes the translations and writes them to 
     * specified config file format, based on the parser.
     * 
     * @param translations the translations to write
     */    
    public writeTranslations(translations: ITranslation[]): void {
        const fallbackTranslation = translations.find(translation => translation.locale === "en-GB");

        translations.forEach((translation) => {
            const path = `${CONFIG.rootPath}/ios/${this._convertLocale(translation.locale)}.lproj`;
            const file = `${path}/InfoPlist.strings`;

            mkdirSync(path, { recursive: true });
            writeFileSync(file, this._translatePlist(translation, fallbackTranslation))
            console.log(`📝 Created file ${file}`);
        })
    }

    /**
     * plists use locale shortcodes, although
     * sometimes they use standard shortcodes for
     * specific languages, e.g. en-GB for british english.
     * 
     * @param locale the locale to convert
     */
    private _convertLocale(locale: string): string {
        const whitelistedLocales = ["en-GB"];
        const [shortcode] = locale.split("-");

        if(whitelistedLocales.includes(locale)){
            return locale;
        }

        return shortcode;
    }

    /**
     * Converts the translation into 
     * the plist string format.
     * 
     * @param translation the translation to convert into a plist string
     * @param fallbackTranslation the fallback translation used if the translation is missing a key
     */
    private _translatePlist(translation: ITranslation, fallbackTranslation: ITranslation): string {
        return Object.entries(CONFIG.translationMap.ios).map(([key, translationKey]) => {
            const translatedKey = get(translation.translation, translationKey) || get(fallbackTranslation.translation, translationKey);

            // we want to allow empty strings
            if (typeof translatedKey !== "string") {
                throw Error(`❌ Translation key ${translationKey} not found in ${translation.locale}.json or ${fallbackTranslation.locale}.json`);
            }

            return [key, translatedKey]
        }).map(([key, value]) => `${key} = "${value}";`).join(EOL);
    }
}

class ParserAndroid extends Parser {
    /**
     * Takes the translations and writes them to 
     * specified config file format, based on the parser.
     * 
     * @param translations the translations to write
     */    
    public writeTranslations(_translations: ITranslation[]): void {
        console.warn("🤖 Android translations are not implemented yet");
    }
}

/**
 * Get's the translations from the locale folder.
 */
function getTranslations(): ITranslation[] {
    const files: string[] = glob.sync(`${CONFIG.rootPath}/src/locale/translations/**/*.json`)

    return files.map(file => ({
        locale: basename(file).replace(".json", ""),
        translation: JSON.parse(readFileSync(file, "utf-8"))
    }));
}

(() => {
    const translations = getTranslations();
    const parsers = [new ParseriOS(), new ParserAndroid()];

    parsers.map(parser => parser.writeTranslations(translations));
})();