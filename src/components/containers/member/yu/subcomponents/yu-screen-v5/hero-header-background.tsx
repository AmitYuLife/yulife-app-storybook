import React, { FC, memo } from "react";
import { Image, ImageSourcePropType, View } from "react-native";
import { Style } from "@styles";
import { AnimatedClouds } from "./animated-clouds";
import { CentredScreen } from "@molecules";
import { IThemeScreens } from "@theme";
import { styles } from "./hero-header.styles";
import { IAchievement } from "@organisms/achievements-showcase/achievements-showcase";

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
  achievement: IAchievement;
}

export const HeroHeaderBackground: FC<Props> = memo(
  ({ theme, image, imageSize, colours, disperseClouds, achievement }) => {
    const containerStyle = [
      styles.heroHeaderBackground,
      {
        backgroundColor: achievement?.backgroundColor || colours.sky,
        height: !colours.ground ? Style.DEVICE_HEIGHT : null,
      },
    ];

    return (
      <View style={containerStyle}>
        {!colours.cloud || achievement?.backgroundImage ? null : (
          <AnimatedClouds colour={colours.cloud} dispersed={disperseClouds} />
        )}
        {image && imageSize ? (
          <Image
            style={imageSize}
            source={achievement?.backgroundImage ? { uri: achievement?.backgroundImage?.uri } : image}
            {...imageSize}
          />
        ) : (
          <CentredScreen {...theme.dailyStepsScreen.online} />
        )}
      </View>
    );
  }
);
