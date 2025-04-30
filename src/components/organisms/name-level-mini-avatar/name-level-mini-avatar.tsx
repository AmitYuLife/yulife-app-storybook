import React, { FC, memo, useEffect, useRef } from "react";
import { Animated, Easing, Image, StyleSheet, View } from "react-native";
import { Style } from "@styles";
import { TextTemplate } from "@atoms";
import { getCurrentWorld, getCurrentWorldText } from "@utils";
import { useSelector } from "react-redux";
import { getUserAvatar, getUserName } from "@redux/user/user.selectors";
import { getCurrentLevel, getYuniversalProgress } from "@redux/levels/levels.selectors";
import { ROMAN_NUMERALS, getCurrentWorldIcon } from "@utils/yuScreenV5";
import { YUSCREEN_V5_USERNAME, YUSCREEN_V5_WORLD_AND_LEVEL } from "@ids";
import { Avatar } from "@components/molecules";
import { DETOX_ENABLED } from "@services/socket";

interface IProps {
  showYumoji?: boolean;
  animateYumoji?: boolean;
  textColour?: string;
  centerContent?: boolean;
}

const ANIMATION_DURATION = DETOX_ENABLED ? 0 : 200;
const HIDDEN_YUMOJI_POSITION = Style.adjust(-76);

const NameLevelMiniAvatar: FC<IProps> = memo(({ showYumoji, animateYumoji, textColour, centerContent }) => {
  const userName = useSelector(getUserName);
  const currentLevel = useSelector(getCurrentLevel);
  const { yuniversalMap, yuniversalLevel } = useSelector(getYuniversalProgress);
  const avatar = useSelector(getUserAvatar);

  const isYuniversal = !!yuniversalMap;
  const currentWorld = getCurrentWorld(currentLevel);
  const worldIcon = getCurrentWorldIcon(currentWorld, isYuniversal);
  const worldName = getCurrentWorldText(currentWorld, isYuniversal);
  const displayedLevel = isYuniversal ? ROMAN_NUMERALS[yuniversalLevel] : currentLevel;

  const translateX = useRef(new Animated.Value(HIDDEN_YUMOJI_POSITION)).current;

  useEffect(() => {
    if (DETOX_ENABLED) {
      return;
    }

    const animation = Animated.timing(translateX, {
      duration: ANIMATION_DURATION,
      toValue: animateYumoji ? 0 : HIDDEN_YUMOJI_POSITION,
      useNativeDriver: true,
      easing: Easing.inOut(Easing.ease),
    });

    animation.start();
    return () => animation.stop();
  }, [animateYumoji]);

  return (
    <Animated.View style={{ transform: [{ translateX }] }}>
      {!showYumoji ? null : (
        <View style={styles.avatarWrapper}>
          <Avatar uri={avatar?.avatarRemoteFiles?.pngMini} showEmpty={true} size={52} />
        </View>
      )}
      <View style={[styles.wrapper, centerContent ? { alignItems: "center" } : {}]}>
        <TextTemplate type="b1b" numberOfLines={1} color={textColour} testID={YUSCREEN_V5_USERNAME(userName)}>
          {userName}
        </TextTemplate>
        <View style={styles.worldContainer}>
          <Image style={styles.image} source={worldIcon} />
          <TextTemplate
            type="l1"
            color={textColour}
            testID={YUSCREEN_V5_WORLD_AND_LEVEL(worldName, displayedLevel)}
          >{`${worldName} ${displayedLevel}`}</TextTemplate>
        </View>
      </View>
    </Animated.View>
  );
});

export default NameLevelMiniAvatar;

const styles = StyleSheet.create({
  avatarWrapper: {
    position: "absolute",
  },
  wrapper: {
    left: Style.adjust(76),
    width: Style.adjust(194),
  },
  worldContainer: {
    flexDirection: "row",
    marginTop: Style.adjust(4),
    alignItems: "center",
    gap: Style.adjust(8),
  },
  image: {
    width: Style.adjust(16),
    height: Style.adjust(16),
    borderRadius: Style.adjust(5),
  },
});
