import { Colours, Style } from "@styles";
import { StyleSheet } from "react-native";
import { ITEM_SLOT_WIDTH } from "../constants";

const slotContainerBase = {
  borderRadius: Style.adjust(8),
  height: Style.adjust(51),
  width: Style.adjust(170),
};

const altSlotContainerBase = {
  borderRadius: Style.adjust(8),
  height: Style.adjust(51),
  width: Style.adjust(170),
};

const defaultSlotYuCoinPowerImageDimensions = {
  height: Style.adjust(54),
  width: Style.adjust(45),
};

const depressedSlotYuCoinPowerImageDimensions = {
  height: Style.adjust(52.75),
  width: Style.adjust(45),
};

const defaultRightIconImageDimensions = {
  height: Style.adjust(52),
  width: Style.adjust(40),
};

const depressedRightIconImageDimensions = {
  height: Style.adjust(45),
  width: Style.adjust(40),
};

export const slotStatusImageDimensions = {
  height: Style.adjust(18),
  width: Style.adjust(18),
};

export const getRightIconImageDimensions = (isDepressed: boolean) => {
  return isDepressed ? depressedRightIconImageDimensions : defaultRightIconImageDimensions;
};

export const getSlotYuCoinPowerImageDimensions = (isDepressed: boolean) => {
  return isDepressed ? depressedSlotYuCoinPowerImageDimensions : defaultSlotYuCoinPowerImageDimensions;
};

export const getStyles = (isDepressed: boolean) => {
  return isDepressed ? depressedStyles : defaultStyles;
};

export const defaultStyles = StyleSheet.create({
  container: {
    alignItems: "flex-end",
    paddingRight: Style.adjust(5),
    marginTop: Style.adjust(12),
  },
  slotWrapper: {
    height: Style.adjust(54),
    width: ITEM_SLOT_WIDTH,
  },
  slotInnerWrapperTop: {
    ...slotContainerBase,
    position: "absolute",
    top: 0,
  },
  slotInnerWrapperBottom: {
    ...slotContainerBase,
    position: "absolute",
    top: Style.adjust(3),
    zIndex: 1,
  },
  slotInnerWrapper: {
    ...slotContainerBase,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    overflow: "hidden",
    position: "absolute",
    top: Style.adjust(1),
    zIndex: 2,
    paddingLeft: Style.adjust(4),
  },
  slotSocket: {
    borderRadius: Style.adjust(8),
    height: Style.adjust(54),
    width: Style.adjust(174),
    position: "absolute",
    left: Style.adjust(-2),
    top: Style.adjust(2),
  },
  slotSocketYuScreen: {
    backgroundColor: Colours.neutral.n100,
  },
  slotSocketOnboarding: {},
  slotSocketInner: {
    borderRadius: Style.adjust(8),
    height: Style.adjust(51),
    width: Style.adjust(172),
    position: "absolute",
    top: Style.adjust(2),
    left: Style.adjust(1),
  },
  slotSocketInnerYuScreen: {
    backgroundColor: Colours.neutral.n50,
  },
  slotSocketInnerOnboarding: {
    borderRadius: Style.adjust(8),
  },
  slotYucoinPowerWrapper: {
    ...defaultSlotYuCoinPowerImageDimensions,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    zIndex: 3,
  },
  slotYucoinPowerImage: {
    position: "absolute",
  },
  rightIconImageWrapper: {
    ...defaultRightIconImageDimensions,
  },
  titleWrapper: {
    flex: 1,
    paddingLeft: Style.adjust(2),
    paddingRight: Style.adjust(1),
  },
  slotStatusWrapper: {
    ...slotStatusImageDimensions,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    right: Style.adjust(-5),
    top: Style.adjust(-5),
  },
  spacer: {
    height: Style.adjust(54),
    width: Style.adjust(45),
  },
  leftTextWrapper: {},
});

const depressedStyles = StyleSheet.create({
  container: {
    alignItems: "flex-end",
    marginRight: Style.adjust(5),
    marginTop: Style.adjust(12),
  },
  slotWrapper: {
    height: Style.adjust(54),
    width: Style.adjust(170),
  },
  slotInnerWrapperTop: {
    ...altSlotContainerBase,
    position: "absolute",
    top: Style.adjust(2),
    zIndex: 2,
  },
  slotInnerWrapperBottom: {
    ...altSlotContainerBase,
    position: "absolute",
  },
  slotInnerWrapper: {
    ...altSlotContainerBase,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    overflow: "hidden",
    position: "absolute",
    top: Style.adjust(4),
    zIndex: 3,
    paddingLeft: Style.adjust(4),
    paddingTop: Style.adjust(4),
  },
  slotSocket: {
    height: Style.adjust(57),
    width: Style.adjust(173),
    borderRadius: Style.adjust(8),
    position: "absolute",
    left: Style.adjust(-1.5),
    top: Style.adjust(0),
  },
  slotSocketYuScreen: {
    backgroundColor: Colours.neutral.n100,
  },
  slotSocketOnboarding: {
    backgroundColor: Colours.neutral.n100,
  },
  slotSocketInner: {
    borderRadius: Style.adjust(8),
    height: Style.adjust(51),
    width: Style.adjust(168),
    position: "absolute",
    top: Style.adjust(2),
    left: Style.adjust(2),
  },
  slotSocketInnerYuScreen: {
    backgroundColor: Colours.neutral.n50,
  },
  slotSocketInnerOnboarding: {
    backgroundColor: Colours.neutral.n50,
  },
  slotYucoinPowerWrapper: {
    ...depressedSlotYuCoinPowerImageDimensions,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    zIndex: 4,
    top: Style.adjust(0.5),
    left: Style.adjust(1),
    paddingRight: Style.adjust(3),
  },
  slotYucoinPowerImage: {
    position: "absolute",
  },
  rightIconImageWrapper: {
    ...depressedRightIconImageDimensions,
  },
  titleWrapper: {
    flex: 1,
    paddingLeft: Style.adjust(2),
    paddingRight: Style.adjust(1),
  },
  slotStatusWrapper: {
    ...slotStatusImageDimensions,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    right: Style.adjust(-9),
    top: Style.adjust(-9),
  },
  spacer: {
    height: Style.adjust(54),
    width: Style.adjust(45),
  },
  leftTextWrapper: {
    marginTop: Style.adjust(6),
  },
});
