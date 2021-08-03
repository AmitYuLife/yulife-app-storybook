import { StyleSheet } from "react-native";
import { Style, Media } from "@styles";

const HEADER_HEIGHT = Media.select(
  [
    {
      condition: Style.DEVICE_WIDTH <= Media.DEVICES.QVGA.width,
      value: 300,
    },
  ],
  232
);

export const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  headerBackgroundImage: {
    width: "100%",
    position: "absolute",
    left: 0,
    top: Style.adjust(10),
  },
  header: {
    marginHorizontal: Style.adjust(24),
    marginTop: Style.adjust(20),
    height: Style.adjust(HEADER_HEIGHT),
  },
  tapToCopy: {
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
    marginBottom: Style.adjust(8),
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
