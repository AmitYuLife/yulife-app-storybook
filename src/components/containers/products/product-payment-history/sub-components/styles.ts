import { Style, StyleSheet } from "@styles";

export const styles = StyleSheet.create({
  wrapper: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: Style.adjust(8),
  },
  columnItem: {
    flexDirection: "column",
    flexGrow: 1,
    flexBasis: 0,
  },
  columnLargeItem: {
    flexGrow: 1.25,
    flexBasis: 0,
  },
  columnSmallItem: {
    flexGrow: 0.75,
    flexBasis: 0,
  },
  labelWrapper: {
    borderRadius: Style.adjust(8),
    paddingHorizontal: Style.adjust(17),
    marginHorizontal: Style.adjust(4),
    paddingVertical: Style.adjust(4),
  },
});
