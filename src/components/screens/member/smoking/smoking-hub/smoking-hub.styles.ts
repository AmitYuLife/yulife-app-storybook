import { StyleSheet } from "react-native";
import { Colours, Style } from "@styles";

const FOOTER_HEIGHT = Style.adjust(40);
const FOOTER_HIDE_BACKGROUND_HEIGHT = Style.adjust(1000);

const CARD_PADDING = Style.adjust(24);

const YUMOJI_RIGHT_SPACING = Style.adjust(48);
const YUMOJI_OUTER_BORDER_SIZE = Style.adjust(86);
export const YUMOJI_AVATAR_SIZE = 80;

const PLANTS_HEIGHT = (Style.DEVICE_WIDTH / 375) * 184;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    width: Style.DEVICE_WIDTH,
    paddingBottom: PLANTS_HEIGHT + Style.adjust(32),
  },
  headerWrapper: {
    borderWidth: 1,
    borderRadius: Style.adjust(16),
    borderColor: Colours.neutral.n150,
    marginHorizontal: Style.adjust(24),
    backgroundColor: "white",
    paddingTop: CARD_PADDING,
    paddingBottom: CARD_PADDING - Style.adjust(4),
    marginTop: Style.adjust(28),
  },
  headerTitle: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: Style.DEVICE_WIDTH,
    paddingLeft: CARD_PADDING,
    paddingRight: Style.adjust(140),
  },
  backgroundImage: {
    position: "absolute",
    bottom: 0,
  },
  yumojiHeadOuterBorder: {
    alignItems: "flex-end",
    justifyContent: "center",
    position: "absolute",
    top: -1,
    right: YUMOJI_RIGHT_SPACING - 1,
    borderRadius: YUMOJI_OUTER_BORDER_SIZE,
    width: YUMOJI_OUTER_BORDER_SIZE,
    height: YUMOJI_OUTER_BORDER_SIZE,
    borderWidth: 1,
    borderColor: Colours.neutral.n150,
    backgroundColor: Colours.neutral.n150,
  },
  yumojiHeadContainer: {
    alignItems: "flex-end",
    justifyContent: "center",
    position: "absolute",
    left: 0,
    right: YUMOJI_RIGHT_SPACING,
  },
  yumojiHeadInnerBorder: {
    borderColor: Colours.neutral.white,
    borderWidth: Style.adjust(2),
    borderRadius: YUMOJI_AVATAR_SIZE,
  },
  headerText: {
    flex: 1,
  },
  button: {
    paddingHorizontal: CARD_PADDING - Style.adjust(4),
    paddingTop: Style.adjust(16),
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
    paddingTop: Style.adjust(32),
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
  box: {
    marginHorizontal: Style.adjust(20),
    marginTop: Style.adjust(40),
    paddingVertical: Style.adjust(12),
  },
  boxSection: {
    paddingBottom: Style.adjust(8),
  },
  smokingCardSection: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: Style.adjust(20),
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
