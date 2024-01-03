import { Style, Colours } from "@styles";
import { StyleSheet } from "react-native";

export const MAX_PROGRESS_WIDTH = Style.DEVICE_WIDTH * 0.7;
export const MAX_UI_PROGRESS_PERCENTAGE = 0.97;

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
    borderRadius: 16,
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
    top: 2,
    right: Style.adjust(51),
    backgroundColor: Colours.neutral.white,
    borderWidth: 1,
    borderColor: Colours.neutral.n200,
    height: Style.adjust(20),
    width: Style.adjust(20),
    borderRadius: Style.adjust(16),
    justifyContent: "center",
    alignItems: "center",
  },
  barTargetWrapperShimLeft: {
    backgroundColor: Colours.neutral.white,
    height: 6,
    width: 8,
    position: "absolute",
    left: 0,
    top: Style.adjust(9),
    bottom: 0,
  },
  barTargetWrapperShimRight: {
    backgroundColor: Colours.neutral.white,
    height: 6,
    width: 8,
    position: "absolute",
    right: Style.adjust(67),
    top: Style.adjust(9),
    bottom: 0,
  },
  starIconWrapper: {
    marginTop: -1,
  },
  emptyBar: {
    position: "absolute",
    top: 8,
    bottom: 2,
    left: 0,
    right: Style.adjust(54),
    backgroundColor: Colours.neutral.white,
    height: Style.adjust(8),
    borderWidth: 1,
    borderColor: Colours.neutral.n200,
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
    marginTop: Style.adjust(12),
    width: "100%",
  },
});
