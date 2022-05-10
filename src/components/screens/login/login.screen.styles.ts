import { Style } from "@styles";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  flex: {
    flex: 1,
  },
  headingWrapper: {
    width: "100%",
    paddingHorizontal: Style.adjust(40),
  },
  headingInnerWrapper: { flexDirection: "row", justifyContent: "space-between", alignItems: "flex-end" },
});
