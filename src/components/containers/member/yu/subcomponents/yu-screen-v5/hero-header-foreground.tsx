import React, { FC, memo, useContext, useEffect, useRef } from "react";
import { Animated, Image, ImageSourcePropType, View } from "react-native";
import { useSelector } from "react-redux";
import { DETOX_ENABLED } from "@services/socket";
import { YuScreenContext } from "../../context/yu-screen.context";
import { Style } from "@styles";
import { Avatar } from "@components/molecules";
import { YumojiAvatar } from "./yumoji-avatar";
import { NameAndLevel } from "./name-and-level";
import { getUserAvatar } from "@redux/user/user.selectors";
import { FOREGROUND_HEIGHT, PLATFORM_SIZE, styles } from "./hero-header.styles";

interface Props {
  collapsed?: boolean;
  backgroundColor?: string;
  platformImage: ImageSourcePropType;
  infoBarOffset?: number;
}

const ANIMATION_DURATION = DETOX_ENABLED ? 0 : 200;
const YUMOJI_FADE_DURATION = DETOX_ENABLED ? 0 : 100;

export const HeroHeaderForeground: FC<Props> = memo(
  ({ collapsed, backgroundColor, platformImage, infoBarOffset = 0 }) => {
    const { yumojiRemoteUrl } = useContext(YuScreenContext);
    const avatar = useSelector(getUserAvatar);

    const infoBarOpacity = useRef(new Animated.Value(0)).current;
    const yumojiOpacity = useRef(new Animated.Value(1)).current;
    const translateY = useRef(new Animated.Value(0)).current;

    useEffect(() => {
      const animation = Animated.parallel([
        Animated.timing(infoBarOpacity, {
          toValue: collapsed ? 1 : 0,
          duration: ANIMATION_DURATION,
          useNativeDriver: true,
        }),
        Animated.timing(yumojiOpacity, {
          toValue: collapsed ? 0 : 1,
          duration: YUMOJI_FADE_DURATION,
          delay: collapsed ? 0 : ANIMATION_DURATION - YUMOJI_FADE_DURATION,
          useNativeDriver: true,
        }),
        Animated.timing(translateY, {
          toValue: collapsed ? Style.adjust(-infoBarOffset) : 0,
          duration: ANIMATION_DURATION,
          useNativeDriver: true,
        }),
      ]);

      animation.start();
      return () => animation.stop();
    }, [collapsed, infoBarOffset]);

    const containerStyle = [
      styles.foregroundContainer,
      {
        height: FOREGROUND_HEIGHT + Style.adjust(infoBarOffset),
        backgroundColor: collapsed ? backgroundColor : null,
      },
    ];

    const wrapperStyle = [
      styles.foregroundWrapper,
      {
        transform: [{ translateY }],
      },
    ];

    const infoBarStyle = [
      styles.infoBar,
      {
        opacity: infoBarOpacity,
        bottom: Style.adjust(-infoBarOffset),
      },
    ];

    const offsetFillStyle = [
      styles.offsetFill,
      {
        height: Style.adjust(infoBarOffset),
      },
    ];

    const yumojiWrapperStyle = [
      styles.yumojiWrapper,
      {
        opacity: yumojiOpacity,
      },
    ];

    return (
      <View style={containerStyle}>
        <View style={styles.bottomHider}>
          <Animated.View style={wrapperStyle}>
            <Image style={styles.platformImage} source={platformImage} {...PLATFORM_SIZE} />
            <View style={styles.platformFill} />
            <View style={offsetFillStyle} />
            <Animated.View style={infoBarStyle}>
              <Avatar uri={avatar.avatarRemoteFiles.pngMini} size={"medium"} />
              <NameAndLevel />
            </Animated.View>
            <Animated.View style={yumojiWrapperStyle}>
              <YumojiAvatar uri={yumojiRemoteUrl} />
            </Animated.View>
          </Animated.View>
        </View>
      </View>
    );
  }
);
