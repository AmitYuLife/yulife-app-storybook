import { Style, StyleSheet, TOP_BAR } from "@styles";

export const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "#FFFFFF",
    flex: 1,
  },
  backgroundImageWrapper: {
    position: "absolute",
    top: -TOP_BAR.TOP_BAR_WITH_PAD,
    left: 0,
    right: 0,
    width: "100%",
  },
  titleWrapper: {
    width: "100%",
    paddingHorizontal: Style.adjust(44),
    zIndex: 10,
  },
  codeCopyWrapper: {
    marginHorizontal: Style.adjust(24),
    marginTop: Style.adjust(10),
  },
  referralsWrapper: {
    height: Style.DEVICE_HEIGHT - TOP_BAR.TOP_BAR_WITH_PAD - TOP_BAR.PADDING_TOP,
  },
  listItemWrapper: {
    backgroundColor: "white",
  },
  listItem: {
    marginHorizontal: Style.adjust(24),
  },
  qrCode: {
    alignItems: "center",
    marginBottom: Style.adjust(10),
  },
  info: {
    flexDirection: "column",
  },
  safeAreaBackground: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: Style.adjust(50),
    backgroundColor: "white",
  },
  emptyMessageSkeleton: {
    width: "100%",
    height: Style.adjust(20),
    marginTop: Style.adjust(8),
  },
});

export const markdownStyles = StyleSheet.create({
  h2: {
    lineHeight: 25,
    fontSize: Style.adjust(20),
    textAlign: "center",
  },
});
