import axios from "axios";

const TARGET_LOCALE = process.env.TARGET_LOCALE || "en-GB";

const gbLocale = { app: require("../../../src/locale/translations/en-GB.json"), api: {} };
const targetLocale = { app: require(`../../../src/locale/translations/${TARGET_LOCALE}.json`), api: {} };

const API_URL = (process.env.API_URL as string) || `http://localhost:5000/`;

export async function getApiTranslations() {
    const gbApiLocale = await axios.get(`${API_URL}detox/translations?locale=en-GB`);
    const targetApiLocale = await axios.get(`${API_URL}detox/translations?locale=${TARGET_LOCALE}`);

    gbLocale.api = gbApiLocale.data;
    targetLocale.api = targetApiLocale.data;
}

/**
 * Check if two objects have the same structure.
 * @param {Object} obj1 - The first object.
 * @param {Object} obj2 - The second object.
 * @param {String} path - Current path in the JSON structure.
 * @return {Array} - Array of inconsistencies if they exist, otherwise an empty array.
 */
function checkStructure(obj1, obj2, path = '') {
    const keys1 = Object.keys(obj1).sort();
    const keys2 = Object.keys(obj2).sort();

    let issues = [];

    // Check if both objects have the same number of keys
    if (keys1.length !== keys2.length) {
        issues.push(`Objects have different number of keys at path "${path}"`);
    }

    // Check if both objects have the same keys
    for (let i = 0; i < Math.max(keys1.length, keys2.length); i++) {
        if (keys1[i] !== keys2[i]) {
            if (!keys2.includes(keys1[i])) {
                issues.push(`Missing key in second object: "${keys1[i]}" at path "${path}"`);
            } else if (!keys1.includes(keys2[i])) {
                issues.push(`Missing key in first object: "${keys2[i]}" at path "${path}"`);
            }
        }
    }

    // If the current level is identical, dive deeper
    for (let key of keys1) {
        if (obj1[key] !== undefined && obj2[key] !== undefined && typeof obj1[key] === "object" && obj1[key] !== null && typeof obj2[key] === "object" && obj2[key] !== null) {
            issues.push(...checkStructure(obj1[key], obj2[key], `${path}.${key}`));
        } else if ((obj1[key] !== undefined && typeof obj1[key] === "object") || (obj2[key] !== undefined && typeof obj2[key] === "object")) {
            issues.push(`Type mismatch in key: "${key}" at path "${path}"`);
        }
    }

    // Return the list of issues
    return issues;
}

/**
 * Check if translations between two objects are consistent.
 * @param {Object} englishJson - The JSON object with English terms.
 * @param {Object} targetJson - The JSON object with the target translations.
 * @param {Array} pathsToIgnore - The JSON paths to ignore during validation.
 * @return {Array} - Array of inconsistencies if they exist, otherwise an empty array.
 */
function checkConsistency(englishJson, targetJson, pathsToIgnore = []) {
    let mapping = {};
    let issues = [];

    function walkObjects(englishObj, targetJob, path = '') {
        for (let key in englishObj) {
            const newPath = path ? `${path}.${key}` : key;
            if (pathsToIgnore.includes(newPath)) {
                console.log(`Ignoring path "${newPath}" from consistency check.`);
                continue;
            }
            if (typeof englishObj[key] === 'object') {
                walkObjects(englishObj[key], targetJob[key], newPath);
            } else {
                if (mapping[englishObj[key]] && mapping[englishObj[key]] !== targetJob[key]) {
                    issues.push(`Inconsistent translation for "${englishObj[key]}" at path "${newPath}": previously "${mapping[englishObj[key]]}", now "${targetJob[key]}"`);
                }
                mapping[englishObj[key]] = targetJob[key];
            }
        }
    }

    walkObjects(englishJson, targetJson);
    return issues;
}


/**
 * Generate a mapping from English to Japanese terms.
 *
 * This function traverses two parallel JSON objects (one English, one Japanese), 
 * creating a mapping from each English term to its corresponding Japanese translation. 
 * It assumes that the two JSON objects have the same structure.
 *
 * @param {Object} englishJson - The JSON object with English terms.
 * @param {Object} targetJson - The JSON object with the target translations.
 * @return {Object} The generated mapping from English terms to Japanese translations.
 */
function generateMapping(englishJson, targetJson) {
    let mapping = {};

    function walkObject(englishObj, targetJson) {
        for (let key in englishObj) {
            if (typeof englishObj[key] === 'object') {
                walkObject(englishObj[key], targetJson[key]);
            } else {
                mapping[englishObj[key]] = targetJson[key];
            }
        }
    }

    walkObject(englishJson, targetJson);

    return mapping;
}

let translationMapping: Record<string, string>;

export async function initialiseTranslationMapping() {
    console.log(`Initialising translation mapping for locale "${TARGET_LOCALE}"...`);

    const pathsToIgnore = [
        "api.default.email.common.employee_footer_with_unsubscribe.us",
        "api.default.events.cta",
        "api.default.today_earning.pension.header",
        "api.default.static_steps.gdent.other_dental_benefits.items.item_5.levels.level_2",
        "api.default.static_steps.gdent.other_dental_benefits.items.item_5.levels.level_3",
        "api.default.static_steps.gdent.other_dental_benefits.items.item_5.levels.level_5",
        "api.default.static_steps.guardian.legal_text",
        "api.default.email.rewards.voucher.success.opening_line",
        "api.default.email.rewards.voucher.success.footer.sign_off",
        "api.default.email.rewards.partner_voucher_code.heading",
        "api.default.email.rewards.partner_voucher_code.sign_off",
        "api.default.email.rewards.charity.purchase.thoughts_message",
        "api.default.email.rewards.voucher.purchased.opening_line",
        "api.default.email.rewards.voucher.purchased.footer.sign_off",
        "api.default.email.rewards.sms_delivery_confirmation.heading",
        "api.default.email.rewards.sms_delivery_confirmation.sign_off",
        "api.default.email.rewards.voucher.error.opening_line",
        "api.default.email.rewards.charity.purchase.opening_line"
    ]
    await getApiTranslations();

    const isLocaleStructured = checkStructure(gbLocale, targetLocale);

    if (isLocaleStructured.length) {
        console.log("Locale structure is not consistent", isLocaleStructured);
    }

    const isLocaleConsistent = checkConsistency(gbLocale, targetLocale, pathsToIgnore);

    if (isLocaleConsistent.length) {
        console.log("Locale translations are not consistent", isLocaleConsistent);
    }

    translationMapping = generateMapping(gbLocale, targetLocale);
}

export function getLocalisedString(key, templateArgs = {}) {
    if (!translationMapping) {
        throw new Error("Translation mapping not initialised");
    }

    if (!translationMapping[key]) {
        return "NO_TRANSLATION_FOUND";
    }

    let translatedString = translationMapping[key];

    Object.keys(templateArgs).forEach(arg => {
        const placeholder = "%{" + arg + "}";
        const value = templateArgs[arg];
        translatedString = translatedString.replace(placeholder, value);
    });

    return translatedString;
}