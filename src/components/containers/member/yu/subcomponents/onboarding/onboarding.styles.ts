import { Style } from "@styles";
import { TOP_BAR_WITH_PAD } from "@styles/top-bar.styles";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    width: Style.DEVICE_WIDTH,
    height: Style.DEVICE_HEIGHT,
    position: "absolute",
  },
  contentWrapper: {
    flex: 1,
    paddingTop: TOP_BAR_WITH_PAD + Style.adjust(32),
    paddingHorizontal: Style.adjust(32),
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
    marginTop: Style.adjust(32),
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
  heading: {
    paddingHorizontal: Style.adjust(20),
    paddingVertical: Style.adjust(8),
  },
  text: {
    paddingBottom: Style.adjust(32),
  },
});
