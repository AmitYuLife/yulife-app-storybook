import { Colours, Style } from "@styles";
import { ImageStyle, ViewStyle } from "react-native";

export const fullImageStyle: Pick<ImageStyle, "width" | "height"> = {
  width: "100%",
  height: Style.DEVICE_HEIGHT,
};

export const commonStyles: Pick<ViewStyle, "width" | "height"> = {
  width: "100%",
  height: Style.SCALE_UP_AND_DOWN(300),
};

export const LINE_COLOR = Colours.activityHistoryHeading;
