import { DEFAULT_HEIGHT as buttonHeight } from "@components/molecules/button/button.styles";
import { Style } from "@styles";
import { TOP_BAR_WITH_PAD } from "@styles/top-bar.styles";
import navBar from "@styles/nav-bar.styles";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    width: Style.DEVICE_WIDTH,
    height: Style.DEVICE_HEIGHT,
  },
  contentWrapper: {
    flex: 1,
    paddingBottom: buttonHeight + navBar.DEFAULT_FULL_HEIGHT,
    paddingHorizontal: Style.adjust(32),
    paddingTop: TOP_BAR_WITH_PAD,
  },
  backgroundImage: {
    width: Style.DEVICE_WIDTH,
    height: Style.DEVICE_HEIGHT,
    position: "absolute",
  },
  itemSlotContainer: {
    alignItems: "center",
    height: Style.adjust(322),
    marginBottom: Style.adjust(20),
    marginTop: Style.adjust(22),
  },
  itemSlotContainerImage: {
    width: Style.adjust(229),
    height: Style.adjust(322),
    position: "absolute",
  },
  yuCoinPower: {
    position: "absolute",
    top: Style.adjust(-20),
  },
  itemSlotsContainer: {
    paddingTop: Style.adjust(45),
  },
  heading: { paddingVertical: Style.adjust(8) },
  text: {
    paddingBottom: Style.adjust(32),
  },
});
