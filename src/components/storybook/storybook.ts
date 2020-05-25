import { AppRegistry } from "react-native";
import { getStorybookUI, configure } from "@storybook/react-native";
import "./addons";

configure(() => {
  require("../atoms/button/minimalButton.stories");
}, module);

const StorybookUIRoot = getStorybookUI({
  onDeviceUI: true // true for stories, 
});

AppRegistry.registerComponent("%APP_NAME%", () => StorybookUIRoot);

export default StorybookUIRoot;
