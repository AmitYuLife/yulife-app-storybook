import { AppRegistry } from "react-native";
import { getStorybookUI, configure } from "@storybook/react-native";
import "./addons";

configure(() => {
  require("../molecules/challenge-tile/challenge-tile.stories");
  require("../atoms/button/minimalButton.stories");
  require("../atoms/heading/heading.stories");
  require("../molecules/text-field/text-field.stories");
  require("../molecules/top-bar/top-bar.stories");
  require("../containers/member/member-services/member-services.container.stories");
  require("../screens/member/yu-screen/yu-screen.stories");
  require("../screens/member/yu-screen/intro-yuscreen/intro-yuscreen.stories");
  require("../screens/member/yu-screen/earn-rate-explained/earn-rate-explained.stories");
  require("../screens/member/yu-screen/products/products-details/product-details.stories");
  require("../screens/member/leaderboards/leaderboards.stories");
  require("../screens/products/fib/browse-packages/fib.browse.stories");
}, module);

const StorybookUIRoot = getStorybookUI({
  onDeviceUI: false, // true for mobile navigation, false for browser,
});

AppRegistry.registerComponent("%APP_NAME%", () => StorybookUIRoot);

export default StorybookUIRoot;
