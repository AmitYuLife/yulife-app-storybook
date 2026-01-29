import { initialWindowMetrics } from "react-native-safe-area-context";
import Style from "./style";

const BORDER_RADIUS = Style.adjust(8);
const OUTER_PADDING = Style.adjust(16);
const HEIGHT = Style.adjust(58);

const getPositionBottom = (options = { additionalBottom: 0 }) => {
  const { additionalBottom } = options;

  return initialWindowMetrics.insets.bottom + additionalBottom;
};

export default {
  DEFAULT_FULL_HEIGHT: HEIGHT + getPositionBottom(),
  HEIGHT,
  BORDER_RADIUS,
  OUTER_PADDING,
  getPositionBottom,
};
