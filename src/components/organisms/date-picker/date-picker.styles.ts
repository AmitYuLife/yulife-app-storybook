import { Colours, Style, StyleSheet } from "@styles";

export const ICON_SIZE = Style.adjust(24);
export const CALENDAR_ICON = require("@assets/icons/calendar.png");
export const EDIT_ICON = require("@assets/icons/edit.png");

export const styles = StyleSheet.create({
  wrapper: {
    alignSelf: "center",
    width: "100%",
  },
  flex: {
    alignItems: "center",
  },
  main: {
    width: "100%",
    paddingHorizontal: Style.adjust(16),
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colours.neutral.white,
    borderWidth: 1,
    borderColor: Colours.neutral.n100,
    borderRadius: 16,
  },
  notPressed: {
    bottom: 4,
    borderBottomColor: Colours.neutral.n100,
    borderBottomWidth: 5,
  },
  leftSide: {
    flexDirection: "row",
    alignItems: "center",
  },
  titleWrapper: {
    marginStart: Style.adjust(16),
  },
  rightIcon: {
    marginStart: "auto",
  },
});
