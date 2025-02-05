import { StyleSheet } from "react-native";
import { Colours, Style } from "@styles";

export const BACKGROUND_IMAGE = require("@assets/smoking/commitment-background.png");
export const YUMOJI_AVATAR_SIZE = 80;

export const styles = StyleSheet.create({
  wrapper: {
    height: Style.DEVICE_HEIGHT,
    backgroundColor: "#F9E2FF",
  },
  backgroundImage: {
    position: "absolute",
    bottom: 0,
    width: Style.DEVICE_WIDTH,
  },
  scrollview: {
    paddingHorizontal: Style.adjust(24),
  },
  content: {
    marginTop: Style.adjust(60),
    paddingTop: Style.adjust(60),
    paddingHorizontal: Style.adjust(24),
    paddingBottom: Style.adjust(16),
    backgroundColor: Colours.neutral.white,
    borderRadius: 16,
  },
  avatarWrapper: {
    position: "absolute",
    top: Style.adjust(-40),
    width: Style.DEVICE_WIDTH - Style.adjust(48),
    alignItems: "center",
  },
  avatar: {
    borderWidth: 2,
    borderColor: Colours.neutral.white,
    borderRadius: 999,
  },
  textBody: {
    marginTop: Style.adjust(16),
    marginBottom: Style.adjust(24),
    gap: Style.adjust(8),
  },
  row: {
    flexDirection: "row",
    gap: Style.adjust(8),
    flexGrow: 1,
    marginBottom: Style.adjust(12),
  },
  flex: {
    flex: 1,
  },
  bottomPad: {
    height: Style.adjust(300),
  },
  buttonSection: {
    position: "absolute",
    bottom: Style.adjust(40),
    left: Style.adjust(24),
    right: Style.adjust(24),
    gap: 8,
  },
});
