import { StyleSheet, Platform } from "react-native";
import { Style } from "../../../styles";
import colours from "@styles/colours";

const FULL_HEIGHT = Style.adjust(205);
const BOTOM_HEIGHT = Style.adjust(84);
const RADIUS = Style.adjust(20);

const styles = StyleSheet.create({
  contentRewardWrapper: {
    marginTop: Style.adjust(5),
    flexDirection: "row",
    alignItems: "center",
  },
  contentBottom: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: Style.adjust(2),
  },
  yucoin: {
    marginLeft: Style.adjust(3),
  },
  duration: {
    padding: Style.adjust(5),
    position: "absolute",
    right: Style.adjust(8),
    top: Style.adjust(8),
    backgroundColor: colours.primary.p107,
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
    backgroundColor: "rgba(255,255,255,0.5)",
    overflow: "hidden",
    bottom: 0,
    height: FULL_HEIGHT - BOTOM_HEIGHT,
    left: 0,
    position: "absolute",
    right: 0,
    borderTopLeftRadius: RADIUS,
    borderTopRightRadius: RADIUS,
  },
  imageBackgroundLocked: {
    backgroundColor: "transparent",
    height: FULL_HEIGHT,
  },
  imageNext: {
    height: Style.adjust(24),
    width: Style.adjust(24),
  },
  completedContainer: {
    backgroundColor: colours.status.su100,
    borderRadius: 100,
    paddingHorizontal: Style.adjust(8),
    padding: Style.adjust(4),
  },
  imageWrapper: {
    height: Style.adjust(165),
  },
  imageWrapperLocked: {
    alignItems: "center",
    height: FULL_HEIGHT,
    justifyContent: "center",
    borderRadius: RADIUS,
    overflow: "hidden",
  },
  lockedImage: {
    marginBottom: Style.adjust(9),
  },
  lockedOverlay: {
    alignItems: "center",
    backgroundColor: "rgba(255,255,255,0.7)",
    borderRadius: RADIUS,
    bottom: 0,
    height: "auto",
    justifyContent: "center",
    left: 0,
    position: "absolute",
    right: 0,
    top: 0,
  },
  sectionBottomWrapper: {
    backgroundColor: "rgba(255,255,255,1)",
    flexDirection: "row",
    height: BOTOM_HEIGHT,
    borderBottomLeftRadius: RADIUS,
    borderBottomRightRadius: RADIUS,
    borderBottomWidth: 5,
    borderColor: colours.neutral.n250,
    overflow: "hidden",
  },
  wrapper: {
    maxHeight: FULL_HEIGHT,
    justifyContent: "flex-end",
    marginTop: Style.adjust(13),
    width: Style.DEVICE_WIDTH / 2 - Style.adjust(25),
    overflow: "hidden",
  },
  remoteImage: {
    position: "absolute",
    bottom: 0,
  },
});

export default styles;
