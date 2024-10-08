import React, { memo, useCallback } from "react";
import { PressableWithDelay } from "@molecules";
import { Style } from "@styles";
import { Image, ImageStyle } from "@atoms";
import { useSelector } from "react-redux";
import { getRouteState } from "@redux/app/app.selectors";
import { Navigation } from "@navigation/main";
import { handleLinkPress } from "@services/app-link";
import { StyleProp } from "react-native";
import { AD_BANNERS } from "@ids";
import { labels } from "@navigation/root";

interface IProps {
  width: number;
  height: number;
  imageUrl: string;
  navigateTo: string;
  routeProps?: string;
  style?: StyleProp<ImageStyle>;
}

const AdBanner = ({ width, height, imageUrl, navigateTo, routeProps, style }: IProps) => {
  const currentRoute = useSelector(getRouteState);

  const onPress = useCallback(async () => {
    if (navigateTo.startsWith("https://")) {
      const openLink = handleLinkPress(navigateTo);
      return await openLink();
    }

    const routeInNavBar = labels.find(({ id }) => id === navigateTo);

    if (routeInNavBar) {
      // If the banner should redirect to a navbar route, we need to handle it differently, as simply pushing the route will break the stack
      return routeInNavBar.onPress();
    }

    let passProps: object;

    try {
      passProps = JSON.parse(routeProps);
    } catch (e) {
      passProps = {};
    }

    return Navigation.push(currentRoute, {
      component: {
        id: navigateTo,
        name: navigateTo,
        passProps,
      },
    });
  }, [navigateTo, routeProps, currentRoute]);
  return (
    <PressableWithDelay onPress={onPress} testID={AD_BANNERS} delay={1000}>
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
