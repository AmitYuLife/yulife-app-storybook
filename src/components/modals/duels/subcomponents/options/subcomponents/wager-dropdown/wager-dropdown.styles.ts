import { StyleSheet, ViewStyle, TextStyle } from "react-native";
import { ImageStyle } from "react-native-fast-image";
import { Colours, Style } from "@styles/index";

export const DUEL_WAGER_BUTTON_HEIGHT = Style.adjust(84);
export const DUEL_WAGER_BUTTON_TOP_MARGIN = Style.adjust(20);

export default StyleSheet.create({
  dropdownArrow: {
    height: Style.adjust(20),
    width: Style.adjust(20),
    marginRight: Style.adjust(20),
    transform: [{ rotate: "270deg" }],
  } as ImageStyle,
  yucoinLabel: {
    color: Colours.neutral.n600,
    fontSize: Style.adjust(16),
    lineHeight: Style.adjust(24),
  } as TextStyle,
  wagerButton: {
    height: DUEL_WAGER_BUTTON_HEIGHT,
    marginTop: Style.adjust(20),
  } as ViewStyle,
  coinsWrapper: {
    marginRight: Style.adjust(16),
  } as ViewStyle,
  yucoinWrapper: {
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: Style.adjust(20),
  } as ViewStyle,
  boxShadow: {
    position: "absolute",
    flex: 1,
    height: Style.adjust(80),
    width: "100%",
    bottom: -Style.adjust(2),
    backgroundColor: Colours.neutral.n100,
    borderRadius: 10,
  } as ViewStyle,
  wagerTrigger: {
    backgroundColor: Colours.neutral.white,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: Colours.neutral.n100,
    marginBottom: Style.adjust(24),
    height: Style.adjust(80),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  } as ViewStyle,
});
