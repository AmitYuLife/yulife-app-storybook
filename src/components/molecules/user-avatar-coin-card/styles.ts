import { Style } from "@styles";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  wrapper: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
  userWrapper: {
    flexDirection: "row",
    alignItems: "center",
    paddingBottom: Style.adjust(16),
  },
  userInfo: {
    marginLeft: Style.adjust(8),
  },
  referralCoin: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: Style.adjust(12),
  },
  yucoin: {
    width: Style.adjust(18),
    height: Style.adjust(18),
    marginLeft: Style.adjust(4),
  },
});
