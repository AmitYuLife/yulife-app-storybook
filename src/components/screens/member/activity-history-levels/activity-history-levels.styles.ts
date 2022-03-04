import { Style, Colours } from "@styles/index";
import { Platform, StyleSheet, ViewStyle } from "react-native";

const headerTwoWidth = Style.adjust(56);
const distanceTwoThree = Style.adjust(12);

export const dividerHeight = Style.adjust(34);
export const rowHeight = Style.adjust(23);
export const bottomDividerHeight = Style.adjust(20);

export default StyleSheet.create({
  activityLabelWrapper: {
    height: rowHeight,
    marginLeft: distanceTwoThree,
  } as ViewStyle,
  activityLabelsWrapper: {
    width: Style.adjust(150),
  } as ViewStyle,
  bottomDivider: {
    borderBottomColor: Colours.neutral.n100,
    borderBottomWidth: 1,
    flex: 1,
  } as ViewStyle,
  bottomDividerWrapper: {
    height: bottomDividerHeight,
  } as ViewStyle,
  closeWrapper: {
    height: Style.adjust(28),
    position: "absolute",
    right: 0,
    top: Style.adjust(Platform.OS === "android" ? 20 : 40),
    width: Style.adjust(28),
  } as ViewStyle,
  dayOfMonthMargin: {
    marginBottom: Style.adjust(-3),
  },
  dayWrapper: {
    width: headerTwoWidth,
  } as ViewStyle,
  divider: {
    backgroundColor: Colours.activityHistoryHeading,
    bottom: 0,
    position: "absolute",
    right: Style.adjust(24),
    top: 0,
    width: Style.adjust(2),
  } as ViewStyle,
  dividerLeft: {
    backgroundColor: Colours.activityHistoryHeading,
    height: "100%",
    width: Style.adjust(60),
  } as ViewStyle,
  dividerRight: {
    backgroundColor: Colours.primary.p600,
    flex: 1,
    height: "100%",
  } as ViewStyle,
  dividerRightLabelWrapper: {
    paddingLeft: Style.adjust(10),
    alignItems: "flex-start",
    height: "100%",
    justifyContent: "center",
    width: Style.adjust(160),
  } as ViewStyle,
  dividerWrappers: {
    flexDirection: "row",
    height: dividerHeight,
  } as ViewStyle,
  headerBase: {
    alignItems: "center",
    height: "100%",
    justifyContent: "center",
  } as ViewStyle,
  headerFourWrapper: {
    width: Style.adjust(46),
    alignItems: "flex-end",
  } as ViewStyle,
  headerOneWrapper: {
    width: Style.adjust(45),
  } as ViewStyle,
  headerThreeWrapper: {
    alignItems: "flex-start",
    flex: 1,
    paddingLeft: distanceTwoThree,
  } as ViewStyle,
  headerTwoWrapper: {
    width: headerTwoWidth,
  } as ViewStyle,
  headersWrapper: {
    flexDirection: "row",
    height: Style.adjust(65),
    paddingHorizontal: Style.adjust(15),
  } as ViewStyle,
  levelCircle: {
    alignItems: "center",
    backgroundColor: Colours.activityHistoryHeading,
    borderRadius: Style.adjust(45) / 2,
    height: Style.adjust(45),
    justifyContent: "center",
    position: "absolute",
    right: Platform.OS === "ios" ? (Style.DEVICE_WIDTH > 400 ? 5 : 3) : Style.isShortAndroid() ? 4 : 2,
    top: Style.adjust(18),
    width: Style.adjust(45),
  } as ViewStyle,
  levelTextTopMargin: {
    marginTop: Style.adjust(-3),
    marginBottom: Style.adjust(-5),
  } as ViewStyle,
  levelTextWrapper: {
    marginBottom: Style.adjust(-6),
  } as ViewStyle,
  levelWrapper: {
    width: Style.adjust(60),
  } as ViewStyle,
  listItemContentWrapper: {
    flex: 1,
    paddingRight: Style.adjust(15),
    paddingTop: Style.adjust(20),
  } as ViewStyle,
  listItemRow: {
    flexDirection: "row",
  } as ViewStyle,
  listItemWrapper: {
    flexDirection: "row",
  } as ViewStyle,
  scrollView: {
    flex: 1,
  } as ViewStyle,
  starWrapper: {
    marginLeft: Style.adjust(5),
  } as ViewStyle,
  starsColumn: {
    width: Style.adjust(60),
  } as ViewStyle,
  starsWrapper: {
    alignItems: "center",
    flexDirection: "row",
    height: rowHeight,
  } as ViewStyle,
  wrapper: {
    flex: 1,
  } as ViewStyle,
  yuCoinEarnedColumn: {
    flex: 1,
  } as ViewStyle,
  yuCoinEarnedWrapper: {
    alignItems: "center",
    flexDirection: "row",
    height: rowHeight,
    justifyContent: "flex-end",
  } as ViewStyle,
});
