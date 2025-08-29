import { Platform } from "react-native";
import { Style, TOP_BAR, StyleSheet } from "@styles";

export const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  backgroundImageWrapper: {
    position: "absolute",
    top: Style.adjust(20),
  },
  headerWrapper: {
    marginTop: Style.adjust(20),
    paddingTop: Style.adjust(70),
    marginBottom: Style.adjust(-30),
  },
  header: {
    position: "absolute",
    width: "100%",
    paddingHorizontal: Style.adjust(24),
  },
  tapToCopy: {
    marginTop: Style.adjust(-62),
    marginBottom: Style.adjust(16),
  },
  shareButton: {
    marginTop: Style.adjust(8),
    marginBottom: Style.adjust(16),
  },
  disclaimer: {
    marginBottom: Style.adjust(32),
  },
  body: {
    marginHorizontal: Style.adjust(24),
  },
  referralsWrapper: {
    marginTop: Style.adjust(16),
    height: Style.DEVICE_HEIGHT - TOP_BAR.TOP_BAR_WITH_PAD - TOP_BAR.PADDING_TOP,
  },
  listItem: {
    marginHorizontal: Style.adjust(24),
  },
  footer: { height: Style.adjust(80) },
  qrCode: {
    alignItems: "center",
    marginBottom: Style.adjust(10),
  },
  info: {
    flexDirection: "column",
  },
});

export const markdownStyles = StyleSheet.create({
  text: {
    textAlign: "left",
  },
  imageWrapper: {
    width: Style.adjust(16),
  },
  image: {
    width: Style.adjust(16),
    height: Style.adjust(16),
    bottom: Style.adjust(
      Platform.select({
        ios: -5,
        android: -2,
      })
    ),
  },
});
