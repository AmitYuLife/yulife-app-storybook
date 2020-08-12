import React from "react";
import { StyleSheet, View, Text, TextStyle, ViewStyle, Image, ImageStyle, ImageRequireSource } from "react-native";
import { Colours, Style } from "@styles";
import { SvgFromXml } from "react-native-svg";
import { TouchableOpacityWithDelay } from "@components/molecules";

type ChipIconType = "xml" | "image";

export interface ChipProps {
  id: string;
  active: boolean;
  label: string;
  icon: string;
  iconType: ChipIconType;
  onPress: () => void;
}

interface ChipStateProps {
  chipStyle: ViewStyle;
  textStyle: TextStyle;
  imageStyle: ImageStyle;
  xmlString: string;
  image: ImageRequireSource;
}

function Chip(props: ChipProps) {
  const { active, label, icon, iconType, onPress } = props;

  const stateProps = getStateProperties(active, iconType, icon);

  return (
    <TouchableOpacityWithDelay style={StyleSheet.flatten([styles.wrapper, stateProps.chipStyle])} onPress={onPress}>
      <View style={styles.viewWrapper}>
        <View style={styles.iconWrapper}>
          {iconType === "xml" ? (
            <SvgFromXml xml={stateProps.xmlString} />
          ) : (
            <Image source={stateProps.image} style={stateProps.imageStyle} />
          )}
        </View>
        <View style={styles.textWrapper}>
          <Text style={StyleSheet.flatten([styles.textStyle, stateProps.textStyle])}>{label}</Text>
        </View>
      </View>
    </TouchableOpacityWithDelay>
  );
}

// RN needs to load all images before compiling the bundle. Cannot load dynamically images
// we need to add here the list of icons available when using images
function getImage(icon: string): ImageRequireSource {
  switch (icon) {
    case "ears-nose-throat":
      return require("../../../../assets/top-ups/Ears-Nose-Throat.png");
    default:
      return require("../../../../assets/icons/yucoin.png");
  }
}

function getStateProperties(active: boolean, iconType: ChipIconType, icon: string): ChipStateProps {
  const isXmlString = iconType === "xml";
  const isImagePath = iconType === "image";
  if (active) {
    return {
      chipStyle: { backgroundColor: Colours.primary.p400 },
      textStyle: { color: Colours.neutral.white },
      imageStyle: { tintColor: Colours.neutral.white },
      xmlString: isXmlString ? icon.replace(/dynamicColor/g, "white") : "",
      image: isImagePath ? getImage(icon) : null,
    };
  }

  return {
    chipStyle: { backgroundColor: Colours.solid.grey },
    textStyle: { color: Colours.neutral.n600 },
    imageStyle: { tintColor: Colours.neutral.n600 },
    xmlString: isXmlString ? icon.replace(/dynamicColor/g, "#828284") : "",
    image: isImagePath ? getImage(icon) : null,
  };
}

const styles = StyleSheet.create({
  wrapper: {
    width: 160,
    height: 56,
    borderRadius: 60,
  } as ViewStyle,
  viewWrapper: {
    flexDirection: "row",
    marginHorizontal: 23,
    height: "100%",
    alignContent: "center",
  } as ViewStyle,
  textWrapper: {
    width: 78,
    alignSelf: "center",
  } as ViewStyle,
  iconWrapper: {
    alignSelf: "center",
    width: 36,
  },
  textStyle: {
    fontFamily: Style.FONT_FAMILY_PRIMARY_BOLD,
    fontSize: 14,
    letterSpacing: 1,
    lineHeight: 24,
    textAlign: "left",
    width: "100%",
  } as TextStyle,
});

export default Chip;
