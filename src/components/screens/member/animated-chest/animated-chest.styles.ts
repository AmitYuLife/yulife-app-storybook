import { StyleSheet, TextStyle, ViewStyle } from "react-native";
import { Style } from "@styles";

export default StyleSheet.create({
  chestBaseWrapper: {
    marginTop: "auto",
  } as ViewStyle,
  chestCoinWrapper: {
    alignItems: "center",
  } as ViewStyle,
  chestWrapper: {
    borderColor: "transparent",
    borderWidth: 1,
    height: Style.SCALE_UP_AND_DOWN(200),
    overflow: "hidden",
    position: "absolute",
    top: 0,
  } as ViewStyle,
  heading: {
    fontSize: Style.SCALE_UP_AND_DOWN(25),
    marginBottom: Style.SCALE_UP_AND_DOWN(20),
    marginHorizontal: Style.SCALE_UP_AND_DOWN(80),
    textAlign: "center",
  } as TextStyle,
  imageWrapper: {
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    width: "100%",
  } as ViewStyle,
  image: {
    height: Style.adjust(250),
    width: "100%",
    resizeMode: "contain",
  },
  lidWrapper: {
    bottom: 0,
    position: "absolute",
  } as ViewStyle,
  secondaryCtaWrapper: {
    alignItems: "center",
    alignSelf: "center",
    marginTop: Style.SCALE_UP_AND_DOWN(8),
  } as ViewStyle,
  wrapper: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  } as ViewStyle,
});
