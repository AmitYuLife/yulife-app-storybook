const path = require("path");
const util = require("util");
const fs = require("fs");
const FormData = require("form-data");
const axios = require("axios");
const axiosRetry = require("axios-retry");

/** ZIP HELPERS START */

const fromBuffer = util.promisify(require("yauzl").fromBuffer);

const ZIP_OPTIONS = {
    strictFileNames: true,
    decodeStrings: true,
    lazyEntries: true,
};

function unzip(zip, dest) {
    // Enforce expected & security options.
    // Lazy entries is what this reader is based upon.
    // Decode strings ensures file paths are sanitized by yazul
    // and does not present any security threat to the machine.
    if (!zip.lazyEntries || !zip.decodeStrings) {
        throw new Error("Invalid ZIP file: lazyEntries and decodeStrings both must be set to true.");
    }

    return new Promise((resolve, reject) => {
        zip.on("error", reject);
        zip.on("end", resolve);

        // There is no mechanism for zip files to contain directories
        // by standards, and implementations diverge. Some make an explicit
        // directory entry (ending with /), some don't make any specific treatment.
        // The "safest" way is to check the path on files and create them as necessary.
        const seenDirectories = new Set([dest]);

        zip.readEntry();

        zip.on("entry", entry => {
            if (entry.fileName.endsWith("/")) {
                zip.readEntry();
                return;
            }

            const entryPath = path.join(dest, entry.fileName);

            // Handle directory creation
            const entryDirName = path.dirname(entryPath);

            if (!seenDirectories.has(entryDirName)) {
                fs.mkdirSync(entryDirName, { recursive: true });
            }

            dumpFile(zip, entry, entryPath);
        });
    });
}

function dumpFile(zip, entry, dest) {
    zip.openReadStream(entry, (err, stream) => {
        if (err) {
            throw err;
        }

        const writeStream = fs.createWriteStream(dest);
        stream.pipe(writeStream);

        // Unlock reading loop
        stream.on("end", () => zip.readEntry());
    });
}

/** ZIP HELPERS END */

const createClient = () => {
    // eslint-disable-next-line no-restricted-properties
    const client = axios.create({
        baseURL: "https://app.tolgee.io/v2",
        headers: {
            "X-API-Key": process.env.TOLGEE_API_KEY,
        },
    });
    axiosRetry(client, { retryDelay: axiosRetry.exponentialDelay, retries: 3 });
    return client;
};

const downloadFiles = async (client, languages, filterNamespace) => {
    const dir = path.join(__dirname, "../src/locale/translations/downloaded");

    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir);
    }

    try {
        const a = await client.post(
            `/projects/export`,
            { zip: true, format: "JSON", languages, filterNamespace },
            { responseType: "arraybuffer" },
        );

        const zip = await fromBuffer(Buffer.from(a.data), ZIP_OPTIONS);
        unzip(zip, dir);
    } catch (e) {
        console.error(e?.response?.data);
    }
};

const uploadNewFile = async (client, lang) => {
    // select the main lang file
    const form = new FormData();
    const jsonPath = path.join(__dirname, `../src/locale/translations/main/${lang}.json`);
    form.append("files", fs.createReadStream(jsonPath));
    // upload it
    console.log("Uploading the file ...");
    await client.post(`/projects/import`, form);
    console.log("Applying the changes ...");
    await client.put(`/projects/import/apply`, null, { params: { forceMode: "OVERRIDE" } });
};

const updateTranslationState = async (client, lang, shouldAutoTranslate) => {
    // find the new keys uploaded
    console.log("Checking for the newly uploaded keys ...");
    let cursor;
    let isRunning = true;

    while (isRunning) {
        const { data } = await client.get("/projects/translations", {
            params: { cursor, size: 100, languages: lang, filterState: `${lang},TRANSLATED` },
        });
        const keys = data?._embedded?.keys || [];

        for (const key of keys) {
            let wasSuccessful = false;

            try {
                if (shouldAutoTranslate) {
                    await client.put(
                        `/projects/keys/${key.keyId}/auto-translate`,
                        {},
                        { params: { useMachineTranslation: true, useTranslationMemory: true } },
                    );
                }
                await client.put(`/projects/translations/${key.translations[lang].id}/set-state/REVIEWED`);
                wasSuccessful = true;
            } catch (e) {
                console.log(e?.response?.data);
            } finally {
                console.log(key.keyName, wasSuccessful ? "was successfully translated" : "failed to be translated");
            }
        }

        cursor = data?.nextCursor;

        if (!cursor) {
            isRunning = false;
        }
    }
    console.log("Finished.");
};

(async () => {
    const [, , method, langs, ns] = process.argv;

    const MAIN_LANGUAGE = "en-GB";
    const client = createClient();

    if (method === "upload") {
        console.log("Running @tolgee:upload ...");
        await uploadNewFile(client, MAIN_LANGUAGE);
        await updateTranslationState(client, MAIN_LANGUAGE, true);
        return;
    }

    if (method === "download") {
        console.log("Running @tolgee:download ...");
        const languages = (langs || "").split(",").filter(Boolean);

        if (!languages.length) {
            console.error("You must provide languages as an argument!");
            return;
        }

        await downloadFiles(client, languages, ns);
        return;
    }

    if (method === "review") {
        console.log("Running @tolgee:review ...");
        await updateTranslationState(client, MAIN_LANGUAGE, false);
        return;
    }
})();
