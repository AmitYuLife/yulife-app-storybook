const path = require("path");
const fs = require("fs");
const FormData = require("form-data");
const axios = require("axios");

const createClient = () =>
  axios.create({
    baseURL: "https://app.tolgee.io/v2",
    headers: {
      "X-API-Key": process.env.TOLGEE_API_KEY,
    },
  });

const uploadNewFile = async (client, lang) => {

  // select the main lang file
  const form = new FormData();
  const jsonPath = path.join(__dirname, `../src/locale/translations/main/${lang}.json`);
  form.append("files", fs.createReadStream(jsonPath));
  // upload it
  console.log("Uploading the file ...")
  await client.post(`/projects/import`, form);
  console.log("Applying the changes ...")
  await client.put(`/projects/import/apply`);
}

const updateTranslationState = async (client, lang) => {
  // find the new keys uploaded
  console.log("Checking for the newly uploaded keys ...")
  let cursor;
  let isRunning = true;

  while (isRunning) {
    const { data } = await client.get("/projects/translations", { params: { cursor, size: 100, languages: lang, filterState: `${lang},TRANSLATED` } });
    const keys = data?._embedded?.keys || [];

    for (const key of keys) {
      let wasSuccessful = false;

      try {
        await client.put(`/projects/keys/${key.keyId}/auto-translate`, {}, { params: { useMachineTranslation: true, useTranslationMemory: true } });
        await client.put(`/projects/translations/${key.translations[lang].id}/set-state/REVIEWED`);
        wasSuccessful = true;
      } catch (e) {
        console.log(e?.response?.data);
      } finally {
        console.log(key.keyName, wasSuccessful ? "was successfully translated" : "failed to be translated");
      }
    }

    cursor = data?.nextCursor

    if (!cursor) {
      isRunning = false;
    }
  }
  console.log("Finished.");
};

(async () => {
  const MAIN_LANGUAGE = "en-GB";
  const client = createClient();

  await uploadNewFile(client, MAIN_LANGUAGE);
  await updateTranslationState(client, MAIN_LANGUAGE);
})();
