import { StyleSheet, ViewStyle } from "react-native";

export default StyleSheet.create({
  wrapper: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    borderColor: "#6E6E70",
    borderBottomWidth: 2,
    paddingLeft: 24,
    marginTop: 8,
  },
  picker: {
    width: "100%",
  } as ViewStyle,
  cancelButton: { marginVertical: 10 } as ViewStyle,
});
