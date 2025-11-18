import { Platform } from "react-native";
import { Style, TOP_BAR, StyleSheet } from "@styles";

export const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  backgroundImageWrapper: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    width: "100%",
    height: Style.DEVICE_HEIGHT,
  },
  header: {
    width: "100%",
    paddingHorizontal: Style.adjust(44),
  },
  codeAndLinkCopy: {
    marginTop: Style.adjust(-18),
    marginBottom: Style.adjust(220),
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
  listItemWrapper: {
    backgroundColor: "white",
  },
  listItem: {
    marginHorizontal: Style.adjust(24),
  },
  footer: {
    height: Style.adjust(80),
    ...Platform.select({
      // This fix should only apply to iOS to prevent over-scrolling and having the background image clip beneath. On Android it does not seem that this can scroll anyway, and the negative margin here causes this view not to display.
      ios: {
        paddingBottom: Style.adjust(500),
        marginBottom: Style.adjust(-500),
      },
    }),
    backgroundColor: "white",
  },
  listContentBackground: {
    backgroundColor: "white",
    borderTopLeftRadius: Style.adjust(16),
    borderTopRightRadius: Style.adjust(16),
    paddingTop: Style.adjust(16),
    paddingBottom: Style.adjust(16),
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
});

export const markdownStyles = StyleSheet.create({
  h2: {
    lineHeight: 25,
    fontSize: Style.adjust(20),
    textAlign: "center",
  },
});
