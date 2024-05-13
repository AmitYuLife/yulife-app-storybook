import React, { FC, memo } from "react";
import { Image, StyleSheet, View } from "react-native";
import { Style } from "@styles";
import { TextTemplate } from "@atoms";
import { getCurrentWorld, getCurrentWorldText } from "@utils";
import { useSelector } from "react-redux";
import { getUserName } from "@redux/user/user.selectors";
import { getCurrentLevel, getYuniversalProgress } from "@redux/levels/levels.selectors";
import { ROMAN_NUMERALS, getCurrentWorldIcon } from "@utils/yuScreenV5";
import { YUSCREEN_V5_USERNAME, YUSCREEN_V5_WORLD_AND_LEVEL } from "@ids";

interface IProps {
  color?: string;
}

export const NameAndLevel: FC<IProps> = memo(({ color }) => {
  const userName = useSelector(getUserName);
  const currentLevel = useSelector(getCurrentLevel);
  const { yuniversalMap, yuniversalLevel } = useSelector(getYuniversalProgress);

  const isYuniversal = !!yuniversalMap;
  const currentWorld = getCurrentWorld(currentLevel);
  const worldIcon = getCurrentWorldIcon(currentWorld, isYuniversal);
  const worldName = getCurrentWorldText(currentWorld, isYuniversal);
  const displayedLevel = isYuniversal ? ROMAN_NUMERALS[yuniversalLevel] : currentLevel;

  return (
    <View style={styles.wrapper}>
      <TextTemplate type="b1b" numberOfLines={1} color={color} testID={YUSCREEN_V5_USERNAME(userName)}>
        {userName}
      </TextTemplate>
      <View style={styles.worldContainer}>
        <Image style={styles.image} source={worldIcon} />
        <TextTemplate
          type="l1"
          color={color}
          testID={YUSCREEN_V5_WORLD_AND_LEVEL(worldName, displayedLevel)}
        >{`${worldName} ${displayedLevel}`}</TextTemplate>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  wrapper: {
    padding: Style.adjust(12),
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
