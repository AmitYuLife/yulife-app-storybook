import { Button, Text } from "@atoms";
import { Colours, Style } from "@styles";
import React, { memo } from "react";
import { StyleSheet, View } from "react-native";
import FastImage from "react-native-fast-image";

interface IProps {
  title: string;
  description: string;
  buttonText: string;
  imageUrl: string;
  buttonAction: () => void;
}

export const UpdateScreen = memo(function (props: IProps) {
  const { title, description, buttonText, imageUrl, buttonAction } = props;

  return (
    <View style={styles.wrapper}>
      <View style={styles.imageWrapper}>
        <FastImage source={{ uri: imageUrl }} style={styles.image} />
      </View>
      <View>
        <Text bold={true} style={styles.title}>
          {title}
        </Text>
        <Text style={styles.description}> {description}</Text>
        <Button label={buttonText} onPress={buttonAction} />
      </View>
    </View>
  );
});

const IMAGE_HEIGHT_WIDTH = Style.adjust(Style.isShortToMediumAndroid() || Style.isThinIOS() ? 280 : 320);
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    paddingHorizontal: Style.adjust(32),
    justifyContent: "center",
  },
  imageWrapper: {
    width: IMAGE_HEIGHT_WIDTH,
    height: IMAGE_HEIGHT_WIDTH,
    alignSelf: "center",
    marginBottom: Style.adjust(21),
  },
  image: {
    width: IMAGE_HEIGHT_WIDTH,
    height: IMAGE_HEIGHT_WIDTH,
  },
  title: {
    fontSize: Style.adjust(32),
    lineHeight: Style.adjust(40),
    letterSpacing: Style.adjust(1),
    color: Colours.neutral.n800,
    marginBottom: Style.adjust(16),
    textAlign: "center",
  },
  description: {
    fontSize: Style.adjust(20),
    lineHeight: Style.adjust(24),
    letterSpacing: Style.adjust(0.8),
    color: Colours.neutral.n800,
    textAlign: "center",
    marginBottom: Style.adjust(32),
  },
});
