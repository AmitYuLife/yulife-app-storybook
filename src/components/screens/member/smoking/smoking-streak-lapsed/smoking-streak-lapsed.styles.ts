import { Style, StyleSheet } from "@styles";
export const IMAGE = require("@assets/smoking/streak-lapsed-illustration.png");
export const IMAGE_SIZE = Math.min(Math.max(Style.DEVICE_HEIGHT - 630, Style.adjust(98)), Style.adjust(196));

export const styles = StyleSheet.create({
  wrapper: {
    height: Style.DEVICE_HEIGHT,
  },
  scrollview: {
    paddingHorizontal: Style.adjust(32),
  },
  imageWrapper: {
    marginTop: Style.adjust(40),
    marginBottom: Style.adjust(32),
    alignItems: "center",
  },
  textBody: {
    marginTop: Style.adjust(16),
    marginBottom: Style.adjust(24),
    gap: Style.adjust(8),
  },
  title: {
    marginTop: Style.adjust(40),
    marginBottom: Style.adjust(8),
  },
  markdown: {
    marginBottom: Style.adjust(32),
  },
  bottomPad: {
    height: Style.adjust(118),
  },
  buttonSection: {
    position: "absolute",
    bottom: Style.adjust(40),
    left: Style.adjust(24),
    right: Style.adjust(24),
  },
});
