import { StyleSheet, Platform } from "react-native";
import { Style } from "../../../styles";
import colours from "@styles/colours";

const TOP_HEIGHT = Style.adjust(120);
const BOTTOM_HEIGHT = Style.adjust(88);
const SHADOW_WIDTH = Style.adjust(5);
const FULL_HEIGHT = Style.adjust(213);
const BORDER_RADIUS = Style.adjust(20);

export const IMAGE_SIZE = Style.DEVICE_WIDTH / 2 - Style.adjust(25);

const styles = StyleSheet.create({
  contentRewardWrapper: {
    flexDirection: "row",
    alignItems: "center",
    height: Style.adjust(26),
  },
  contentBottom: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: Style.adjust(8),
  },
  yucoin: {
    marginLeft: Style.adjust(3),
  },
  duration: {
    padding: Style.adjust(5),
    position: "absolute",
    right: Style.adjust(8),
    top: Style.adjust(8),
    borderRadius: Style.adjust(8),
  },
  contentWrapper: {
    flex: 1,
    paddingHorizontal: Style.adjust(15),
    paddingTop: Style.adjust(
      Platform.select({
        ios: 11,
        android: 4,
      })
    ),
  },
  imageBackground: {
    overflow: "hidden",
    bottom: 0,
    height: TOP_HEIGHT,
    left: 0,
    position: "absolute",
    right: 0,
    borderTopLeftRadius: BORDER_RADIUS,
    borderTopRightRadius: BORDER_RADIUS,
  },
  imageBackgroundLocked: {
    backgroundColor: "rgb(128, 128, 128)",
    height: FULL_HEIGHT,
  },
  imageNext: {
    height: Style.adjust(24),
    width: Style.adjust(24),
  },
  completedContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colours.status.su100,
    borderRadius: Style.adjust(48),
    paddingHorizontal: Style.adjust(8),
    height: Style.adjust(26),
  },
  imageWrapper: {
    height: IMAGE_SIZE,
  },
  imageWrapperLocked: {
    alignItems: "center",
    height: FULL_HEIGHT,
    justifyContent: "center",
    borderRadius: BORDER_RADIUS,
    overflow: "hidden",
  },
  lockedImage: {
    marginBottom: Style.adjust(9),
  },
  lockedOverlay: {
    ...StyleSheet.absoluteFillObject,
    alignItems: "center",
    backgroundColor: "rgba(255,255,255,0.7)",
    borderRadius: BORDER_RADIUS,
    height: "auto",
    justifyContent: "center",
  },
  sectionBottomShadow: {
    borderBottomLeftRadius: BORDER_RADIUS,
    borderBottomRightRadius: BORDER_RADIUS,
    backgroundColor: colours.neutral.n250,
  },
  sectionBottomWrapper: {
    backgroundColor: "rgba(255,255,255,1)",
    flexDirection: "row",
    height: BOTTOM_HEIGHT,
    borderBottomLeftRadius: BORDER_RADIUS,
    borderBottomRightRadius: BORDER_RADIUS,
    marginBottom: SHADOW_WIDTH,
    overflow: "hidden",
  },
  wrapper: {
    maxHeight: FULL_HEIGHT,
    justifyContent: "flex-end",
    marginTop: Style.adjust(13),
    width: IMAGE_SIZE,
    overflow: "hidden",
  },
  remoteImage: {
    position: "absolute",
    bottom: 0,
  },
});

export default styles;
