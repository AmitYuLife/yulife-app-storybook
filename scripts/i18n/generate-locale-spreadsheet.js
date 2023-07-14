const axios = require("axios");
const path = require("path");
const fs = require("fs");

async function getApiTranslations(apiUrl, targetLang, gbLocale, targetLocale) {
    const gbApiLocale = await axios.get(`${apiUrl}detox/translations?locale=en-GB`);
    const targetApiLocale = await axios.get(`${apiUrl}detox/translations?locale=${targetLang}`);

    gbLocale.api = gbApiLocale.data;
    targetLocale.api = targetApiLocale.data;
}

function flattenJson(input, currentPath = '', flattenedObject = {}) {
    for (let key in input) {
      let newPath = currentPath ? `${currentPath}.${key}` : key;
  
      if (typeof input[key] === 'object' && input[key] !== null) {
        flattenJson(input[key], newPath, flattenedObject);
      } else {
        flattenedObject[newPath] = input[key];
      }
    }
    return flattenedObject;
  }

function mergeTranslations(englishObject, nonEnglishObject, targetLang) {
    const mergedObject = {};
    
    for (let key in englishObject) {
        mergedObject[key] = {
            'en-GB': englishObject[key],
            [targetLang]: nonEnglishObject[key] || `MISSING IN ${targetLang}` 
        };
    }

    for (let key in nonEnglishObject) {
        if (!(key in mergedObject)) {
            mergedObject[key] = {
                'en-GB': `MISSING IN en-GB`,
                [targetLang]: nonEnglishObject[key]
            };
        }
    }
    
    return mergedObject;
}

function jsonToCsv(jsonData, targetLang) {
    let csvString = 'key,en-GB,' + targetLang + '\n'; 

    for (let key in jsonData) {
        let englishText = jsonData[key]['en-GB'].replace(/,/g, ' ');
        let translatedText = jsonData[key][targetLang].replace(/,/g, ' '); 

        csvString += `${key},${JSON.stringify(englishText)},${JSON.stringify(translatedText)}\n`;
    }

    return csvString;
}

function writeCsvToFile(csvString, targetLang) {
    let filename = `translations_en-GB_${targetLang}_${Date.now()}.csv`;

    const filePath = path.join(process.cwd(), filename);

    fs.writeFile(filePath, csvString, (err) => {
        if (err) throw err;
        console.log('CSV file has been saved in the current working directory!');
    });
}

async function main() {
    const targetLocaleKey = process.env.TARGET_LOCALE || "ja-JP";

    console.log(`Writing CSV for translations from en-GB to ${targetLocaleKey}`);   

    const gbLocale = { app: require("../../src/locale/translations/en-GB.json"), api: {} };
    const targetLocale = { app: require(`../../src/locale/translations/${targetLocaleKey}.json`), api: {} };

    const apiUrl = process.env.API_URL || `http://localhost:5000/`;

    console.log(`Connecting to API at ${apiUrl} to get translations for ${targetLocaleKey}`);

    await getApiTranslations(apiUrl, targetLocaleKey, gbLocale, targetLocale);

    console.log(`Transforming translations for ${targetLocaleKey}`);
    const flattenedGBLocale = flattenJson(gbLocale);
    const flattenedTargetLocale = flattenJson(targetLocale);
    const mergedTranslations = mergeTranslations(flattenedGBLocale, flattenedTargetLocale, targetLocaleKey);
    const translationCsv = jsonToCsv(mergedTranslations, targetLocaleKey);
    
    console.log(`Writing CSV for translations to ${process.cwd()}`)
    writeCsvToFile(translationCsv, targetLocaleKey);
}

main();
