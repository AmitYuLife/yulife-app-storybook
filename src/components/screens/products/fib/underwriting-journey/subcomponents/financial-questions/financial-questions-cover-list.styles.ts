import { Style, Colours } from "@styles";
import { StyleSheet } from "react-native";

const HEIGHT = Style.adjust(112);

export const styles = StyleSheet.create({
  wrapper: {
    marginVertical: Style.adjust(16),
    paddingHorizontal: Style.adjust(16),
  },
  coverCardWrapper: {
    marginTop: Style.adjust(16),
    height: HEIGHT,
    flexDirection: "row",
    borderWidth: 2,
    borderRadius: 8,
    paddingVertical: Style.adjust(16),
    paddingLeft: Style.adjust(24),
  },
  coverCardTextWrapper: {
    flex: 1,
    justifyContent: "space-between",
    height: "100%",
  },
  coverCardText: {
    fontSize: Style.adjust(16),
    lineHeight: Style.adjust(24),
  },
  bold: { fontFamily: Style.FONT_FAMILY_PRIMARY_BOLD },
  bin: {
    justifyContent: "flex-end",
    height: "100%",
    paddingLeft: Style.adjust(8),
    paddingRight: Style.adjust(24),
  },
  addCoverWrapper: {
    backgroundColor: Colours.lightestGray,
    height: HEIGHT,
    borderColor: Colours.lightGray,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    marginVertical: Style.adjust(16),
    borderRadius: 8,
    borderStyle: "dashed",
  },
  addCoverText: {
    color: "#D9D9D7",
    fontFamily: Style.FONT_FAMILY_PRIMARY_BOLD,
    marginTop: Style.adjust(8),
    fontSize: Style.adjust(18),
    letterSpacing: 0.8,
  },
});

export function getColorScheme(index: number) {
  if (index % 4 === 1) {
    return {
      iconColor: Colours.forest.fp101,
      backgroundColor: Colours.forest.fp106,
      borderColor: Colours.forest.fp103,
    };
  }

  if (index % 4 === 2) {
    return {
      iconColor: Colours.forest.fp305,
      backgroundColor: Colours.forest.fp309,
      borderColor: Colours.forest.fp308,
    };
  }

  if (index % 4 === 3) {
    return {
      iconColor: Colours.mp304,
      backgroundColor: Colours.forest.fp205,
      borderColor: Colours.forest.fp204,
    };
  }

  return {
    iconColor: Colours.ocean.up204,
    backgroundColor: Colours.ocean.up306,
    borderColor: Colours.blue.mp108,
  };
}
