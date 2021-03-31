import { Style } from "@styles";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  pad: {
    marginBottom: 40,
  },
  button: {
    marginTop: 24,
  },
  padBottom: {
    marginBottom: Style.adjust(100),
  },
});

export default styles;
