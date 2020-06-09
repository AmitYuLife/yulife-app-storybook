const path = require("path");
const fs = require("fs");

(function readWriteSync() {
  const MAIN = 'import "./main";';
  const STORYBOOK = 'import "./components/storybook";';
  const isReset = process.argv[2] === "reset";
  const PATH_TO_ENTRY = "../src";
  const ENTRY_FILE = "index.ts";
  const data = fs.readFileSync(path.join(__dirname, PATH_TO_ENTRY, ENTRY_FILE), "utf-8");
  const newValue = data.replace(isReset ? STORYBOOK : MAIN, isReset ? MAIN : STORYBOOK);
  fs.writeFileSync(path.join(__dirname, PATH_TO_ENTRY, ENTRY_FILE), newValue, "utf-8");
})();
