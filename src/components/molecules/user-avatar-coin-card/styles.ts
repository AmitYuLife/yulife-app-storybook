import { Style, StyleSheet } from "@styles";

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
    marginStart: Style.adjust(8),
  },
  referralCoin: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: Style.adjust(12),
  },
  yucoin: {
    width: Style.adjust(18),
    height: Style.adjust(18),
    marginStart: Style.adjust(4),
  },
});
