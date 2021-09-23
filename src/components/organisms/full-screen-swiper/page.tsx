import React from "react";
import { StyleSheet, View } from "react-native";
import { Image, TextTemplate } from "@atoms";
import { Colours, Style } from "@styles";
import { IPageItem } from "@organisms/full-screen-swiper/full-screen-swiper";

export const Page = (props: IPageItem) => {
  const { heading, paragraph, backgroundImage } = props;

  return (
    <View style={[styles.wrapper]}>
      {!backgroundImage ? null : (
        <View style={styles.image}>
          <Image source={{ uri: backgroundImage.uri }} width={Style.DEVICE_WIDTH} height={Style.DEVICE_HEIGHT} />
        </View>
      )}
      <View style={styles.container}>
        <View style={styles.header}>
          <TextTemplate color={Colours.neutral.white} type="h1">
            {heading}
          </TextTemplate>
        </View>
        <View style={styles.paragraph}>
          <TextTemplate color={Colours.neutral.white} type="b2">
            {paragraph}
          </TextTemplate>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: Style.DEVICE_WIDTH,
    height: Style.DEVICE_HEIGHT,
  },
  container: {
    marginHorizontal: Style.adjust(32),
  },
  header: {
    marginTop: Style.adjust(80),
  },
  paragraph: {
    marginTop: Style.adjust(8),
  },
  image: {
    alignItems: "center",
    ...StyleSheet.absoluteFillObject,
  },
});
