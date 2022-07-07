import { Style } from "@styles";
import { StyleSheet, ViewStyle, ImageStyle } from "react-native";

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "center",
    alignItems: "center",
  } as ViewStyle,
  chestContainer: {
    width: Style.DEVICE_WIDTH,
    height: Style.adjust(350),
    alignItems: "center",
  } as ViewStyle,
  chestWrapper: {
    position: "absolute",
    bottom: 0,
  } as ViewStyle,
  chestImage: {
    width: Style.adjust(230),
    height: Style.adjust(160),
  } as ImageStyle,
  fogClosedImage: {
    width: Style.adjust(395),
    height: Style.adjust(120),
  } as ImageStyle,
  fogClosedWrapper: {
    position: "absolute",
    bottom: Style.adjust(147),
  } as ViewStyle,
  starsClosedImage: {
    width: Style.adjust(292),
    height: Style.adjust(133),
  } as ImageStyle,
  starsClosedWrapper: {
    position: "absolute",
    bottom: Style.adjust(160),
  } as ViewStyle,
  starsOpenedImage: {
    width: Style.adjust(186),
    height: Style.adjust(176),
  } as ImageStyle,
  starsOpenedWrapper: {
    position: "absolute",
    bottom: Style.adjust(4),
  } as ViewStyle,
  fogOpenedImage: {
    width: Style.adjust(338),
    height: Style.adjust(259),
  } as ImageStyle,
  fogOpenedWrapper: {
    position: "absolute",
    bottom: Style.adjust(82),
    paddingLeft: Style.adjust(10),
  } as ViewStyle,
  buttonWrapper: {
    bottom: 40,
    left: 0,
    position: "absolute",
    width: Style.DEVICE_WIDTH,
  } as ViewStyle,
  cardList: {
    position: "absolute",
    flexDirection: "row",
    top: 0,
  },
  cardOuter: {
    width: Style.adjust(106),
    height: Style.adjust(148),
    borderRadius: Style.adjust(8),
    marginHorizontal: Style.adjust(4),
  },
  cardInner: {
    width: Style.adjust(106),
    height: Style.adjust(144),
    borderRadius: Style.adjust(8),
  },
  stars: {
    position: "absolute",
    top: 0,
    left: 0,
    width: Style.adjust(106),
    height: Style.adjust(144),
  },
  icon: {
    paddingTop: Style.adjust(24),
    paddingHorizontal: Style.adjust(23),
    paddingBottom: Style.adjust(8),
  },
});

export default styles;
