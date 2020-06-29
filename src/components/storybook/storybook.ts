import { AppRegistry } from "react-native";
import { getStorybookUI, configure } from "@storybook/react-native";
import "./addons";

configure(() => {
  require("../molecules/challenge-tile/challenge-tile.stories");
  require("../atoms/button/minimalButton.stories");
  require("../atoms/heading/heading.stories");
  require("../molecules/text-field/text-field.stories");
  require("../molecules/top-bar/top-bar.stories");
  require("../screens/member/yu-screen/intro-yuscreen/intro-yuscreen.stories");
  require("../screens/member/yu-screen/earn-rate-explained/earn-rate-explained.stories");
}, module);

const StorybookUIRoot = getStorybookUI({
  onDeviceUI: false, // true for stories,
});

AppRegistry.registerComponent("%APP_NAME%", () => StorybookUIRoot);

export default StorybookUIRoot;
