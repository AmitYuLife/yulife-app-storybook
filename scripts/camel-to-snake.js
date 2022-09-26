const fs = require("fs");
const path = require("path");
const TARGET_FOLDER = path.join(__dirname, "..", "src");
const EXCLUDED_FILES = [".png", ".svg", ".DS_Store", ".json"];
const DEFAULT_TRANSLATION_FILE_PATH = path.join(__dirname, "..", "src", "locale", "translations", "en-GB.json");

async function getFiles(dir) {
  const dirents = await fs.promises.readdir(dir, { withFileTypes: true });
  const files = await Promise.all(
    dirents.map((dirent) => {
      const res = path.resolve(dir, dirent.name);
      return dirent.isDirectory() ? getFiles(res) : res;
    })
  );

  return Array.prototype.concat(...files);
}

async function init() {
  const files = await getFiles(TARGET_FOLDER);
  const filteredFiles = files.filter((filename) => {
    for (const excludedFileType of EXCLUDED_FILES) {
      if (filename.endsWith(excludedFileType)) {
        return false;
      }
    }

    return true;
  });

  const defaultTranslationFile = fs.readFileSync(DEFAULT_TRANSLATION_FILE_PATH, "utf8");
  const parsed = JSON.parse(defaultTranslationFile);
  const flattenedTranslationFile = flatten(parsed);

  const translationKeysCamel = Object.keys(flattenedTranslationFile).sort((a, b) => b.length - a.length);
  const translationKeysCamelToSnakeMap = translationKeysCamel.reduce((acc, curr) =>
    Object.assign(acc, {
      [curr]: curr.replace(/([a-z])([A-Z])/g, (_, p1, p2) => `${p1}_${p2.toLowerCase()}`),
    })
  );

  for (const filteredFile of filteredFiles) {
    fs.readFile(filteredFile, "utf8", (readFileErr, fileContent) => {
      if (readFileErr) {
        console.log("readFileErr :pepe-f:", readFileErr);
      }

      for (const camelKey of translationKeysCamel) {
        const escapedCamelKey = camelKey.replace(/\./g, "\\.");
        const derivedRegex = new RegExp(escapedCamelKey, "g");

        fileContent = fileContent.replace(derivedRegex, translationKeysCamelToSnakeMap[camelKey]);
      }

      fs.writeFile(filteredFile, fileContent, (writeFileErr) => {
        console.log("writeFileErr :pepe-f:", writeFileErr);
      });
    });
  }
}

init();

function flatten(keyPath) {
  const result = {};

  for (const i in keyPath) {
    if (typeof keyPath[i] === "object" && !Array.isArray(keyPath[i])) {
      const temp = flatten(keyPath[i]);
      for (const j in temp) {
        result[`${i}.${j}`] = temp[j];
      }
    } else {
      result[i] = keyPath[i];
    }
  }

  return result;
}
