const path = require("path");
const fs = require("fs");

const STORYBOOK_FILE = `import { Navigation } from "react-native-navigation";
import { AppRegistry } from "react-native";
import { getStorybookUI, configure } from "@storybook/react-native";
import "./addons";

configure(() => {
$$collection$$
}, module);

const STORYBOOK = "STORYBOOK";

const StorybookUIRoot = getStorybookUI({
  onDeviceUI: $$onDeviceUI$$, // true for mobile navigation, false for browser,
});

AppRegistry.registerComponent("%APP_NAME%", () => StorybookUIRoot);


Navigation.registerComponent(STORYBOOK, () => StorybookUIRoot);

Navigation.events().registerAppLaunchedListener(async () => {
  await Navigation.setRoot({
    root: {
      component: {
        id: STORYBOOK,
        name: STORYBOOK,
      },
    },
  });
});
`;

const MAIN_FILE = 'import "./main";\n';
const STORYBOOK_MAIN_FILE = 'import "./components/storybook";\n';
const ENCODING = "utf-8";
const SOURCE_PATH = "../src";

const STORIES_COLLECTION = [];
const DIRECTORIES_TO_SKIP = [];
const COMPONENTS_PATH = path.join(__dirname, SOURCE_PATH, "/components");

function readDirectorySynchronously(directory) {
  const currentDirectoryPath = path.join(COMPONENTS_PATH, directory);

  const currentDirectory = fs.readdirSync(currentDirectoryPath, ENCODING);

  currentDirectory.forEach((file) => {
    const shouldBeSkipped = DIRECTORIES_TO_SKIP.indexOf(file) > -1;
    const pathOfCurrentItem = path.join(COMPONENTS_PATH, directory, file);

    if (!shouldBeSkipped) {
      if (fs.statSync(pathOfCurrentItem).isFile()) {
        // match stories
        if (pathOfCurrentItem.includes(".stories.")) {
          STORIES_COLLECTION.push(pathOfCurrentItem);
        }
      } else {
        const directoryPath = path.join(directory, file);
        readDirectorySynchronously(directoryPath);
      }
    }
  });
}

(function readWriteSync() {
  const pathForMainFile = path.join(__dirname, SOURCE_PATH, "index.ts");
  if (process.argv[2] === "reset") {
    fs.writeFileSync(pathForMainFile, MAIN_FILE, ENCODING);
    return;
  }

  const inBrowser = process.argv[2] === "browser";

  fs.writeFileSync(pathForMainFile, STORYBOOK_MAIN_FILE, ENCODING);

  readDirectorySynchronously("/");

  let collection = "";

  for (const story of STORIES_COLLECTION) {
    const [_, storyFilePath] = story.split("/src/components/");
    collection += `  require("../${storyFilePath}");\n`;
  }

  const storybookFile = STORYBOOK_FILE.replace("$$collection$$", collection).replace(
    "$$onDeviceUI$$",
    String(!inBrowser)
  );

  fs.writeFileSync(path.join(COMPONENTS_PATH, "storybook", "index.ts"), storybookFile, "utf8");
})();
