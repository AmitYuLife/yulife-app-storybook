import { ImageStyle, StyleSheet, ViewStyle } from "react-native";
import { Style } from "@styles";

const imageDimensions = {
  height: Style.adjust(165),
  width: Style.adjust(265),
};

const styles = StyleSheet.create({
  icon: {
    marginRight: Style.adjust(16),
  } as ImageStyle,
  image: {
    ...imageDimensions,
  } as ImageStyle,
  imageWrapper: {
    marginBottom: Style.adjust(44),
    marginTop: Style.adjust(100),
    ...imageDimensions,
  } as ViewStyle,
  imageWrapperFailed: {
    backgroundColor: "rgb(235,235,235)",
  } as ViewStyle,
  imageWrapperRefunded: {
    backgroundColor: "rgb(235,235,235)",
  } as ViewStyle,
  overlayWrapper: {
    ...StyleSheet.absoluteFillObject,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
  } as ViewStyle,
  text: {
    fontSize: Style.adjust(17),
  },
});

export default styles;
