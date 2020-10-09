import { Style } from "@styles";
import { StyleSheet, ViewStyle } from "react-native";

export const LEADERBOARD_ITEM_HEIGHT = Style.adjust(48);
export const DUEL_DIALOG_HEIGHT = Style.adjust(84);
export const DUEL_DIALOG_MARGIN_BOTTOM = Style.adjust(10);

export const styles = StyleSheet.create({
  centered: {
    height: DUEL_DIALOG_HEIGHT,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    paddingBottom: 2,
    marginBottom: DUEL_DIALOG_MARGIN_BOTTOM,
  } as ViewStyle,
});
