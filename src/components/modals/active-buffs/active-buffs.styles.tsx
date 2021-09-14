import { StyleSheet } from "react-native";
import { Style, Colours } from "@styles";

export default StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  container: {
    paddingBottom: Style.adjust(60),
  },
  pressable: {
    minHeight: Style.DEVICE_HEIGHT,
  },
  headImage: {
    marginTop: Style.adjust(60),
    marginBottom: Style.adjust(24),
  },
  titleWrapper: {
    marginBottom: Style.adjust(16),
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  powerUpIcon: {
    marginLeft: Style.adjust(16),
  },
  itemWrapper: {
    marginBottom: Style.adjust(9),
    flexDirection: "row",
    paddingHorizontal: Style.adjust(28),
  },
  toolItem: {
    position: "absolute",
  },
  itemImageWrapper: {
    padding: Style.adjust(8),
    justifyContent: "center",
    backgroundColor: Colours.metallic.m100,
    borderTopLeftRadius: Style.adjust(8),
    borderBottomLeftRadius: Style.adjust(8),
    borderWidth: 1,
    borderRightWidth: 0,
    borderColor: Colours.metallic.m200,
  },
  perksContainer: {
    flexGrow: 1,
    padding: Style.adjust(8),
    paddingLeft: 0,
    paddingBottom: 0,
    alignItems: "stretch",
    backgroundColor: Colours.metallic.m100,
    borderTopRightRadius: Style.adjust(8),
    borderBottomRightRadius: Style.adjust(8),
    borderWidth: 1,
    borderLeftWidth: 0,
    borderColor: Colours.metallic.m200,
  },
  gradient: {
    position: "absolute",
    bottom: 0,
    width: Style.DEVICE_WIDTH,
    height: Style.adjust(100),
    paddingTop: Style.adjust(26),
  },
});
