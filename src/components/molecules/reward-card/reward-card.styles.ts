import { Style, Colours } from "@styles";
import { StyleSheet } from "react-native";

export const MAX_PROGRESS_WIDTH = Style.DEVICE_WIDTH * 0.7;

export const rewardCardStyles = StyleSheet.create({
  wrapper: {
    paddingTop: Style.adjust(10),
  },
  imageWrapper: {
    position: "absolute",
    top: Style.adjust(16),
    right: Style.adjust(12),
  },
  imageOverlay: {
    position: "absolute",
    top: Style.adjust(15),
    right: Style.adjust(11),
    width: Style.adjust(57),
    height: Style.adjust(57),
    borderRadius: Style.adjust(56),
    borderWidth: 1,
  },
  innerWrapper: {
    alignItems: "center",
    borderWidth: 1,
    borderColor: Colours.neutral.n100,
    borderRadius: 8,
  },
  row: {
    flexDirection: "row",
  },
  flex: {
    flex: 1,
  },
  textWrapper: {
    flex: 1,
    maxWidth: Style.adjust(195),
    paddingTop: Style.adjust(34),
    paddingBottom: Style.adjust(2),
    paddingLeft: Style.adjust(24),
    marginRight: "auto",
    minHeight: Style.adjust(84),
  },
  worldCardWrapper: {
    position: "absolute",
    top: 0,
    right: Style.adjust(22),
  },
  barTargetWrapper: {
    position: "absolute",
    top: 4,
    right: Style.adjust(40),
    backgroundColor: Colours.metallic.m100,
    paddingHorizontal: Style.adjust(12),
    height: Style.adjust(16),
    borderRadius: Style.adjust(16),
    justifyContent: "center",
    alignItems: "center",
    width: Style.adjust(40),
  },
  emptyBar: {
    position: "absolute",
    top: 8,
    bottom: 2,
    left: 0,
    right: Style.adjust(50),
    backgroundColor: Colours.metallic.m100,
    height: Style.adjust(8),
  },
  filledBar: {
    position: "absolute",
    top: 8,
    bottom: 2,
    left: 0,
    borderTopRightRadius: 999,
    borderBottomRightRadius: 999,
    backgroundColor: Colours.primary.p600,
    height: Style.adjust(8),
  },
  barWrapper: {
    height: Style.adjust(32),
    marginTop: Style.adjust(8),
    width: "100%",
  },
});
