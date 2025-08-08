const fs = require("fs");
const path = require("path");
const axios = require("axios");

const TARGET_LOCALE = process.env.TARGET_LOCALE || "en-GB";
const TRANSLATION_PATH = TARGET_LOCALE === "en-GB" ? "main" : "downloaded";
const API_URL = process.env.API_URL || `http://localhost:${mapRegionToPort(process.env.API_REGION || "UK")}/`;

const gbLocale = { app: require(`../src/locale/translations/main/en-GB.json`), api: {} };
const targetLocale = { app: require(`../src/locale/translations/${TRANSLATION_PATH}/${TARGET_LOCALE}.json`), api: {} };

function generateMapping(englishJson, targetJson) {
  let mapping = {};

  function walkObject(englishObj, targetJson) {
    for (let key in englishObj) {
      if (typeof englishObj[key] === "object") {
        walkObject(englishObj[key], targetJson?.[key]);
      } else {
        // Prioritise the app translation over the API translation
        if (!mapping[englishObj[key]]) {
          mapping[englishObj[key]] = targetJson?.[key];
        }
      }
    }
  }

  walkObject(englishJson, targetJson);

  return mapping;
}

function mapRegionToPort(region) {
  switch (region) {
    case "UK":
      return 5000;
    case "SA":
      return 5002;
    case "US":
      return 5001;
    case "JP":
      return 5003;
  }
}

(async () => {
  const gbApiLocale = await axios.get(`${API_URL}detox/translations?locale=en-GB`);
  gbLocale.api = gbApiLocale.data;

  if (TARGET_LOCALE === "en-GB") {
    targetLocale.api = gbLocale.api;
  } else {
    const targetApiLocale = await axios.get(`${API_URL}detox/translations?locale=${TARGET_LOCALE}`);
    targetLocale.api = targetApiLocale.data;
  }

  translationMapping = generateMapping(gbLocale, targetLocale);

  fs.writeFileSync(path.join(process.cwd(), "translation-mapping.json"), JSON.stringify(translationMapping, null, 2));
})();
