import { Colours, Style } from "@styles";
import { StyleSheet } from "react-native";

const slotContainerBase = {
  borderRadius: Style.adjust(8),
  height: Style.adjust(51),
  width: Style.adjust(170),
};

export const styles = StyleSheet.create({
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
  slotSocketOnboarding: {
    backgroundColor: "#5D4275",
  },
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
    backgroundColor: "#875EAD",
  },
  slotYucoinPowerWrapper: {
    alignItems: "center",
    justifyContent: "center",
    height: Style.adjust(54),
    width: Style.adjust(45),
    position: "absolute",
    zIndex: 3,
  },
  slotYucoinPowerImage: {
    height: Style.adjust(54),
    width: Style.adjust(45),
    resizeMode: "contain",
    position: "absolute",
  },
  rightIconImageWrapper: {
    height: Style.adjust(52),
    width: Style.adjust(43),
  },
  rightIconImage: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: "contain",
  },
  titleWrapper: {
    flex: 1,
    paddingLeft: Style.adjust(10),
  },
  slotStatusWrapper: {
    alignItems: "center",
    justifyContent: "center",
    height: Style.adjust(18),
    width: Style.adjust(18),
    position: "absolute",
    zIndex: 3,
    right: Style.adjust(-9),
    top: Style.adjust(-9),
  },
  slotStatusImage: {
    height: Style.adjust(18),
    width: Style.adjust(18),
  },
  spacer: {
    height: Style.adjust(54),
    width: Style.adjust(45),
  },
});
