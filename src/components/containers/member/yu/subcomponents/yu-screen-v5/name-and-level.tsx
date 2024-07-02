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
}

const ANIMATION_DURATION = DETOX_ENABLED ? 0 : 400;

export const NameAndLevel: FC<IProps> = memo(({ showYumoji }) => {
  const userName = useSelector(getUserName);
  const currentLevel = useSelector(getCurrentLevel);
  const { yuniversalMap, yuniversalLevel } = useSelector(getYuniversalProgress);
  const avatar = useSelector(getUserAvatar);

  const isYuniversal = !!yuniversalMap;
  const currentWorld = getCurrentWorld(currentLevel);
  const worldIcon = getCurrentWorldIcon(currentWorld, isYuniversal);
  const worldName = getCurrentWorldText(currentWorld, isYuniversal);
  const displayedLevel = isYuniversal ? ROMAN_NUMERALS[yuniversalLevel] : currentLevel;

  const translateX = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (DETOX_ENABLED) {
      return;
    }

    const animation = Animated.timing(translateX, {
      duration: ANIMATION_DURATION,
      toValue: showYumoji ? 0 : Style.adjust(-76),
      useNativeDriver: true,
      easing: Easing.inOut(Easing.ease),
    });

    animation.start();
    return () => animation.stop();
  }, [showYumoji]);

  return (
    <Animated.View style={{ transform: [{ translateX }] }}>
      <View style={styles.avatarWrapper}>
        <Avatar uri={avatar?.avatarRemoteFiles?.pngMini} showEmpty={true} size={"medium"} />
      </View>
      <View style={styles.wrapper}>
        <TextTemplate type="b1b" numberOfLines={2} testID={YUSCREEN_V5_USERNAME(userName)}>
          {userName}
        </TextTemplate>
        <View style={styles.worldContainer}>
          <Image style={styles.image} source={worldIcon} />
          <TextTemplate
            type="l1"
            testID={YUSCREEN_V5_WORLD_AND_LEVEL(worldName, displayedLevel)}
          >{`${worldName} ${displayedLevel}`}</TextTemplate>
        </View>
      </View>
    </Animated.View>
  );
});

const styles = StyleSheet.create({
  avatarWrapper: {
    position: "absolute",
  },
  wrapper: {
    position: "absolute",
    left: Style.adjust(76),
    width: Style.adjust(194),
  },
  worldContainer: {
    display: "flex",
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
