import { StyleSheet } from "react-native";
import { Style } from "@styles";

export const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  backgroundImageWrapper: {
    position: "absolute",
    top: Style.adjust(20),
  },
  headerWrapper: {
    marginTop: Style.adjust(20),
    marginBottom: Style.adjust(-30),
  },
  header: {
    position: "absolute",
    width: "100%",
    paddingHorizontal: Style.adjust(24),
  },
  tapToCopy: {
    marginTop: Style.adjust(-24),
    marginBottom: Style.adjust(16),
  },
  shareButton: {
    marginTop: Style.adjust(8),
    marginBottom: Style.adjust(16),
  },
  disclaimer: {
    marginBottom: Style.adjust(16),
  },
  body: {
    marginHorizontal: Style.adjust(24),
  },
  referralsWrapper: {
    marginTop: Style.adjust(16),
    marginLeft: Style.adjust(5),
  },
  owlFenceIcon: {
    marginTop: Style.adjust(20),
    marginBottom: Style.adjust(40),
    alignItems: "flex-end",
  },
});

export const markdownStyles = StyleSheet.create({
  text: {
    textAlign: "center",
  },
  imageWrapper: {
    flexDirection: "row",
    alignItems: "flex-end",
    width: Style.adjust(16),
    height: Style.adjust(55),
  },
  image: {
    width: Style.adjust(16),
    height: Style.adjust(16),
  },
});
