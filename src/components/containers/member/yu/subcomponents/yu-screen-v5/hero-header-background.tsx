import React, { FC, memo } from "react";
import { Image, ImageSourcePropType, View } from "react-native";
import { Style } from "@styles";
import { AnimatedClouds } from "./animated-clouds";
import { CentredScreen } from "@molecules";
import { IThemeScreens } from "@theme";
import { styles } from "./hero-header.styles";

interface Props {
  theme: IThemeScreens;
  image?: ImageSourcePropType;
  imageSize?: {
    width: number;
    height: number;
  };
  colours: {
    sky: string;
    ground?: string;
    cloud?: string;
    text?: string;
  };
  disperseClouds?: boolean;
}

export const HeroHeaderBackground: FC<Props> = memo(({ theme, image, imageSize, colours, disperseClouds }) => {
  const containerStyle = [
    styles.heroHeaderBackground,
    {
      backgroundColor: colours.sky,
      height: !colours.ground ? Style.DEVICE_HEIGHT : null,
    },
  ];

  return (
    <View style={containerStyle}>
      {!colours.cloud ? null : <AnimatedClouds colour={colours.cloud} dispersed={disperseClouds} />}
      {image && imageSize ? (
        <Image style={imageSize} source={image} {...imageSize} />
      ) : (
        <CentredScreen {...theme.dailyStepsScreen.online} />
      )}
    </View>
  );
});
