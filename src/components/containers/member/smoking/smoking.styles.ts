import { Colours, Style } from "@styles";
import { StyleSheet } from "react-native";

const FOOTER_HEIGHT = Style.adjust(40);
const FOOTER_HIDE_BACKGROUND_HEIGHT = Style.adjust(1000);

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: "#D6FFFF",
    width: Style.DEVICE_WIDTH,
  },
  headerWrapper: {
    borderWidth: 1,
    borderRadius: Style.adjust(16),
    borderColor: Colours.neutral.n150,
    marginHorizontal: Style.adjust(24),
    backgroundColor: "white",
    paddingTop: Style.adjust(28),
    paddingBottom: Style.adjust(16),
    marginTop: Style.adjust(32),
  },
  headerTitle: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: Style.DEVICE_WIDTH,
    paddingLeft: Style.adjust(28),
    paddingRight: Style.adjust(140),
  },
  yumojiHeadContainer: {
    alignItems: "flex-end",
    justifyContent: "center",
    position: "absolute",
    left: 0,
    right: Style.adjust(40),
  },
  yumojiHeadBorderContainer: {
    alignItems: "flex-end",
    justifyContent: "center",
    position: "absolute",
    left: 0,
    right: Style.adjust(39),
    top: -1,
  },
  yumojiHeadBorder: {
    borderRadius: Style.adjust(41),
    backgroundColor: Colours.neutral.n150,
    width: 82,
    height: 82,
  },
  headerText: {
    flex: 1,
  },
  button: {
    paddingHorizontal: Style.adjust(20),
    paddingTop: Style.adjust(24),
  },
  innerWrapper: {
    flex: 1,
    alignItems: "center",
    ...StyleSheet.absoluteFillObject,
  },
  scrollView: {
    width: Style.DEVICE_WIDTH,
  },
  content: {
    backgroundColor: Colours.neutral.white,
    borderTopLeftRadius: Style.adjust(16),
    borderTopRightRadius: Style.adjust(16),
    paddingTop: Style.adjust(40),
  },
  title: {
    paddingHorizontal: Style.adjust(20),
  },
  bestStreak: {
    paddingHorizontal: Style.adjust(20),
  },
  bodyText: {
    paddingHorizontal: Style.adjust(20),
    paddingTop: Style.adjust(20),
  },
  info: {
    paddingHorizontal: Style.adjust(20),
    paddingTop: Style.adjust(20),
  },
  box: {
    marginHorizontal: Style.adjust(20),
    marginTop: Style.adjust(40),
    borderColor: Colours.neutral.n150,
    borderWidth: 1,
    borderRadius: Style.adjust(24),
    paddingHorizontal: Style.adjust(24),
    paddingVertical: Style.adjust(12),
  },
  boxSection: {
    paddingVertical: Style.adjust(12),
  },
  footer: {
    paddingHorizontal: Style.adjust(20),
    paddingTop: Style.adjust(40),
  },
  footerPadding: {
    width: Style.DEVICE_WIDTH,
    height: FOOTER_HEIGHT + FOOTER_HIDE_BACKGROUND_HEIGHT,
    marginBottom: -FOOTER_HIDE_BACKGROUND_HEIGHT,
    backgroundColor: Colours.neutral.white,
  },
});
