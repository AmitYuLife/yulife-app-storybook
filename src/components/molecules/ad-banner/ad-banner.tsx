import React, { memo, useCallback } from "react";
import { PressableWithDelay } from "@molecules";
import { Style } from "@styles";
import { Image } from "@atoms";
import { useSelector } from "react-redux";
import { getRouteState } from "@redux/app/app.selectors";
import { Navigation } from "react-native-navigation";
import { handleLinkPress } from "@services/app-link";
import { StyleProp } from "react-native";
import { ImageStyle } from "react-native-fast-image";

interface IProps {
  width: number;
  height: number;
  imageUrl: string;
  navigateTo: string;
  style?: StyleProp<ImageStyle>;
}

const AdBanner = ({ width, height, imageUrl, navigateTo, style }: IProps) => {
  const currentRoute = useSelector(getRouteState);

  const onPress = useCallback(async () => {
    if (navigateTo.startsWith("https://")) {
      const openLink = handleLinkPress(navigateTo);
      return await openLink();
    }

    return Navigation.push(currentRoute, {
      component: {
        id: navigateTo,
        name: navigateTo,
      },
    });
  }, [navigateTo, currentRoute]);
  return (
    <PressableWithDelay onPress={onPress}>
      <Image
        source={{ uri: imageUrl }}
        width={Style.adjust(width)}
        height={Style.adjust(height)}
        resizeMode="stretch"
        imageStyle={style}
      />
    </PressableWithDelay>
  );
};

export default memo(AdBanner);
