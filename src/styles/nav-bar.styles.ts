import { Platform } from "react-native";
import { hasNotch } from "@utils";
import Style from "./style";

const BORDER_RADIUS = Style.adjust(8);
const OUTER_PADDING = Style.adjust(16);
const HEIGHT = Style.adjust(58);

const getPositionBottom = (options = { additionalBottom: 0 }) => {
  const { additionalBottom } = options;

  if (Platform.OS === "ios" && hasNotch()) {
    return 30 + additionalBottom;
  }

  return Style.adjust(20) + additionalBottom;
};

export default {
  DEFAULT_FULL_HEIGHT: HEIGHT + getPositionBottom(),
  HEIGHT,
  BORDER_RADIUS,
  OUTER_PADDING,
  getPositionBottom,
};
