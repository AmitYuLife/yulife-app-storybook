import { StyleSheet, ViewStyle } from "react-native";

export default StyleSheet.create({
  activePage: {
    backgroundColor: "rgb(251, 207, 39)",
  } as ViewStyle,
  inactivePage: {
    backgroundColor: "rgba(251, 207, 39, .4)",
  } as ViewStyle,
  pageIndicator: {
    borderRadius: 5,
    height: 6,
    marginHorizontal: 4,
    width: 6,
  } as ViewStyle,
});
