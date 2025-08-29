import { Colours, Style, StyleSheet } from "@styles";

export default StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    alignSelf: "center",
  },
  claimableActivity: {
    borderRadius: Style.adjust(15),
    flexDirection: "column",
    justifyContent: "center",
    height: Style.adjust(80),
    marginTop: Style.adjust(8),
    marginHorizontal: Style.adjust(24),
    paddingHorizontal: Style.adjust(16),
    backgroundColor: Colours.neutral.white,
  },
  titleWrapper: { flex: 1, maxWidth: "100%", flexDirection: "row", alignItems: "center" },
  wrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  isDisabledIcon: {
    width: Style.adjust(16),
    height: Style.adjust(16),
    backgroundColor: "rgba(250,250,254,0.5)",
    position: "absolute",
  },
  yuCoinSubTotal: {
    justifyContent: "flex-end",
    paddingStart: Style.adjust(6),
  },
  icon: {
    marginEnd: Style.adjust(12),
  },
  starsWrapper: {
    marginEnd: Style.adjust(4),
  },
  yuCoin: {
    marginStart: Style.adjust(4),
    width: Style.adjust(24),
    height: Style.adjust(24),
  },
  progressBar: {
    marginTop: Style.adjust(8),
  },
  progressWrapper: {
    height: Style.adjust(30),
    alignItems: "center",
    justifyContent: "center",
  },
  joinedActivityBlock: {
    backgroundColor: "rgb(250,250,250)",
  },
  completedActivityBlock: {
    backgroundColor: Colours.products.fib.commonLight,
    borderColor: Colours.status.su400,
  },
  selectedActivityBlock: {
    borderColor: "rgb(138,95,255)",
    backgroundColor: "rgb(248,245,255)",
  },
  selectedCheck: {
    position: "absolute",
    height: Style.adjust(22),
    width: Style.adjust(22),
    right: Style.adjust(18),
    top: Style.adjust(2),
  },
  selectedCheckContainer: {
    position: "absolute",
    height: Style.adjust(22),
    width: Style.adjust(22),
    right: Style.adjust(18),
    top: Style.adjust(2),
  },
});
