import { StyleSheet, TextStyle, ViewStyle } from "react-native";
import { Style } from "@styles/index";

export default StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  } as ViewStyle,
  elementWrapper: {
    flex: 1,
  } as ViewStyle,
  avatarWrapper: {
    height: Style.adjust(248),
    width: "100%",
    alignItems: "center",
    justifyContent: "flex-end",
    overflow: "hidden",
  } as ViewStyle,
  fullAvatarWrapper: {
    paddingBottom: Style.SCALE_UP_AND_DOWN(8),
  } as ViewStyle,
  bodyElementsListTest: {
    height: Style.SCALE_UP_AND_DOWN(50),
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
  } as ViewStyle,
  noItemSelected: {
    fontSize: Style.SCALE_UP_AND_DOWN(20),
    lineHeight: Style.SCALE_UP_AND_DOWN(24),
    letterSpacing: Style.SCALE_UP_AND_DOWN(0.8),
    fontFamily: Style.FONT_FAMILY_PRIMARY,
    color: "#464647",
    alignSelf: "center",
    textAlign: "center",
  } as TextStyle,
  bodyElementsList: {
    height: Style.SCALE_UP_AND_DOWN(56),
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    paddingTop: Style.SCALE_UP_AND_DOWN(3),
    paddingBottom: Style.SCALE_UP_AND_DOWN(3),
  } as ViewStyle,
  separator: {
    backgroundColor: "#f7f7f7",
    height: Style.SCALE_UP_AND_DOWN(1),
    width: "100%",
  } as ViewStyle,

  bodyItemWrapper: {
    flexDirection: "row",
    justifyContent: "space-around",
    height: Style.SCALE_UP_AND_DOWN(50),
    width: Style.SCALE_UP_AND_DOWN(100),
    borderRadius: Style.SCALE_UP_AND_DOWN(30),
    backgroundColor: "#F1F1F1",
    alignItems: "center",
  } as ViewStyle,

  flatListStyle: {
    marginVertical: Style.SCALE_UP_AND_DOWN(8),
    paddingLeft: Style.SCALE_UP_AND_DOWN(6),
    paddingRight: Style.SCALE_UP_AND_DOWN(6),
    width: "100%",
  } as ViewStyle,
  itemSelectedColorWrapper: {
    height: Style.SCALE_UP_AND_DOWN(110),
    width: Style.SCALE_UP_AND_DOWN(88),
    backgroundColor: "#FEF5FA",
    borderRadius: Style.SCALE_UP_AND_DOWN(17),
    borderColor: "#F43E8E",
    borderWidth: Style.SCALE_UP_AND_DOWN(2),
    alignItems: "center",
    justifyContent: "center",
  } as ViewStyle,
  itemColorWrapper: {
    height: Style.SCALE_UP_AND_DOWN(110),
    width: Style.SCALE_UP_AND_DOWN(88),
    alignItems: "center",
    justifyContent: "center",
  } as ViewStyle,
  itemColorSelectedWrapper: {
    height: Style.SCALE_UP_AND_DOWN(110),
    width: Style.SCALE_UP_AND_DOWN(88),
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FEF5FA",
    borderRadius: Style.SCALE_UP_AND_DOWN(17),
    borderColor: "#F43E8E",
    borderWidth: Style.SCALE_UP_AND_DOWN(2),
  } as ViewStyle,
  itemColor: {
    height: Style.SCALE_UP_AND_DOWN(62),
    width: Style.SCALE_UP_AND_DOWN(62),
    borderRadius: Style.SCALE_UP_AND_DOWN(30),
  } as ViewStyle,
  row: {
    flex: 1,
    justifyContent: "space-around",
  } as ViewStyle,
  flatListContainerStyle: {
    paddingBottom: Style.SCALE_UP_AND_DOWN(50),
  },
  itemsTitle: {
    marginTop: Style.SCALE_UP_AND_DOWN(16),
    marginLeft: Style.SCALE_UP_AND_DOWN(24),
    color: "#333333",
    fontSize: Style.SCALE_UP_AND_DOWN(12),
    letterSpacing: Style.SCALE_UP_AND_DOWN(1),
    fontFamily: Style.FONT_FAMILY_PRIMARY_BOLD,
  } as TextStyle,
  emptyItemState: {
    height: Style.SCALE_UP_AND_DOWN(88),
    width: Style.SCALE_UP_AND_DOWN(88),
    backgroundColor: "#F3F3F3",
    borderRadius: Style.SCALE_UP_AND_DOWN(20),
  } as ViewStyle,
  buttonsSavingWrapper: {
    alignItems: "center",
    left: 0,
    position: "absolute",
    right: 0,
    bottom: Style.SCALE_Y_UP_AND_DOWN(40),
  } as ViewStyle,
});
