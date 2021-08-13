import React, { memo, useState } from "react";
import { StyleSheet, View } from "react-native";
import { Image, TextTemplate } from "@atoms";
import { Colours, Style } from "@styles";
import { PressableWithDelay } from "@components/molecules";

const styleImages = [
  //@TODO PLI: Remove this when we connect with the api
  {
    id: "desert",
    imageUrl:
      "https://yulife-local.imgix.net/package-intro/desert.png?ixlib=js-v3.1.3&s=17225d39b5f0c30467d47d94c5941b25",
  },
  {
    id: "mountain",
    imageUrl:
      "https://yulife-local.imgix.net/package-intro/mountain.png?ixlib=js-v3.1.3&s=8851881672cf1833a65193de29ed3dd3",
  },
  {
    id: "florest",
    imageUrl:
      "https://yulife-local.imgix.net/package-intro/florest.png?ixlib=js-v3.1.3&s=841650d3110a8893c1edbb0fdad160a6",
  },
  {
    id: "ocean",
    imageUrl:
      "https://yulife-local.imgix.net/package-intro/ocean.png?ixlib=js-v3.1.3&s=3c686c2a18f9b598365eb32d22d2148c",
  },
];

//@TODO PLI: Remove this when we connect with the api
const avatarUrl =
  "https://yulife-local.imgix.net/package_intro/male-ocean.png?ixlib=js-v3.1.3&s=0f48179fe6287ee1e1a4937fc5ff6199";

interface IProps {
  children: JSX.Element | JSX.Element[];
  defaultStyle?: string;
  stylesTitle: string;
}

const PackageAvatarChooseStyle = ({ defaultStyle, children, stylesTitle }: IProps) => {
  const [currentStyle, setCurrentStyle] = useState(defaultStyle);

  return (
    <View style={styles.wrapper}>
      <Image source={{ uri: avatarUrl }} width={Style.adjust(127)} height={Style.adjust(260)} theme="light" />
      <View style={styles.container}>
        {children}
        <View style={styles.footer}>
          <TextTemplate type="l1b">{stylesTitle}</TextTemplate>
          <View style={styles.chooseStyles}>
            {styleImages.map((item, index: number) => (
              <PressableWithDelay key={item.id} onPress={() => setCurrentStyle(item.id)}>
                <Image
                  source={{ uri: item.imageUrl }}
                  width={Style.adjust(Style.isHuaweiMate10() ? 34 : 40)}
                  height={Style.adjust(Style.isHuaweiMate10() ? 34 : 40)}
                  theme="light"
                  style={styleImages.length !== index + 1 ? styles.remoteWrapper : null}
                  imageStyle={[styles.styleImage, currentStyle === item.id ? styles.styleSelected : null]}
                />
              </PressableWithDelay>
            ))}
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    alignItems: "flex-end",
  },
  container: {
    flex: 1,
    flexDirection: "column",
    marginLeft: Style.adjust(8),
  },
  footer: {
    marginTop: Style.adjust(24),
  },
  chooseStyles: {
    maxWidth: Style.adjust(200),
    marginTop: Style.adjust(8),
    backgroundColor: Colours.neutral.white,
    borderColor: Colours.metallic.m100,
    borderWidth: 1,
    borderRadius: 16,
    flexDirection: "row",
    justifyContent: "center",
    paddingVertical: Style.adjust(8),
  },
  remoteWrapper: {
    marginRight: Style.adjust(8),
  },
  styleImage: {
    borderRadius: 8,
  },
  styleSelected: {
    borderColor: Colours.primary.p600,
    borderWidth: 1,
  },
});

export default memo(PackageAvatarChooseStyle);
