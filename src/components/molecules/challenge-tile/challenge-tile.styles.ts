import { Platform } from "react-native";
import { Colours, Style, StyleSheet } from "@styles";
import colours from "@styles/colours";

export const IMAGE_SIZE = Style.DEVICE_WIDTH / 2 - Style.adjust(23);

const TOP_HEIGHT = (IMAGE_SIZE / 165) * 124;
const BOTTOM_HEIGHT = Style.adjust(88);
const SHADOW_WIDTH = Style.adjust(5);
const FULL_HEIGHT = TOP_HEIGHT + BOTTOM_HEIGHT + SHADOW_WIDTH;
const BORDER_RADIUS = Style.adjust(20);

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
    marginStart: Style.adjust(3),
  },
  surgeIcon: {
    position: "absolute",
    top: Style.adjust(8),
    start: Style.adjust(8),
  },
  rightStats: {
    position: "absolute",
    width: "100%",
    justifyContent: "flex-end",
    top: Style.adjust(8),
    end: Style.adjust(8),
  },

  duration: {
    paddingHorizontal: Style.adjust(6),
    height: Style.adjust(22),
    borderRadius: Style.adjust(8),
    justifyContent: "center",
    alignItems: "center",
  },
  contentWrapper: {
    flex: 1,
    paddingHorizontal: Style.adjust(15),
    paddingTop: Style.adjust(
      Platform.select({
        ios: 16,
        android: 13,
      })
    ),
  },
  imageBackground: {
    bottom: 0,
    height: TOP_HEIGHT,
    start: 0,
    position: "absolute",
    end: 0,
    borderTopLeftRadius: BORDER_RADIUS,
    borderTopRightRadius: BORDER_RADIUS,
    overflow: "hidden",
  },
  hasBonusContainer: {
    position: "absolute",
    end: 0,
    bottom: 0,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colours.primary.p40,
    borderRadius: Style.adjust(48),
    paddingStart: Style.adjust(8),
    paddingEnd: Style.adjust(26),
    height: Style.adjust(26),
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
    height: TOP_HEIGHT,
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
  leftPaddingIcon: { width: Style.adjust(22) },
  lockedTextContainer: {
    borderRadius: Style.adjust(6),
    padding: Style.adjust(8),
    paddingVertical: Style.adjust(2),
    paddingEnd: Style.adjust(28),
    backgroundColor: "#E3E3E1",
    justifyContent: "center",
    alignItems: "center",
  },
  lockedBubble: {
    borderWidth: 2,
    borderRadius: 100,
    alignItems: "center",
    position: "absolute",
    top: -Style.adjust(4),
    borderColor: "#ffffff",
    width: Style.adjust(28),
    end: -Style.adjust(5),
    height: Style.adjust(28),
    justifyContent: "center",
    backgroundColor: "#E3E3E1",
  },
  lockedImage: {
    width: Style.adjust(16),
    height: Style.adjust(16),
  },
});

export default styles;
