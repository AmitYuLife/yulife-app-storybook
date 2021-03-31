import * as React from "react";
import { TouchableOpacityWithDelay } from "@molecules";
import { Text } from "@atoms";
import { StyleSheet } from "react-native";
import { Colours, Style } from "@styles";
import { handleLinkPress } from "@services/app-link";

interface IHyperLink {
  title: string;
  url: string;
}

const Hyperlink = ({ title, url }: IHyperLink) => (
  <TouchableOpacityWithDelay onPress={handleLinkPress(url)}>
    <Text style={styles.link}>{title}</Text>
  </TouchableOpacityWithDelay>
);

const styles = StyleSheet.create({
  link: {
    color: Colours.darkHotPink,
    textDecorationLine: "underline",
    fontSize: Style.adjust(16),
    letterSpacing: Style.adjust(0.8),
    fontFamily: Style.FONT_FAMILY_PRIMARY,
    marginTop: 8,
  },
});

export default Hyperlink;
