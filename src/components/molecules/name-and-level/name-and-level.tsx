import React, { memo } from "react";
import { View, StyleSheet, ViewStyle, Image, ImageStyle, TextStyle, Platform } from "react-native";
import { TextTemplate } from "@atoms";
import { Style, Colours } from "@styles";
import { getCurrentWorld, getCurrentWorldImage, getCurrentWorldText } from "@utils";
import { useSelector } from "react-redux";
import { getUserName } from "@redux/user/user.selectors";
import { getCurrentLevel, getYuniversalProgress } from "@redux/levels/levels.selectors";
import { TEXT_TEMPLATE } from "@ids";

interface IProps {
  name?: string;
  level?: number;
  yuniversalMap?: number;
  hideWorldIcon?: boolean;
  useWorldColor?: boolean;
}

const NameAndLevel = ({ name, level, yuniversalMap, hideWorldIcon, useWorldColor }: IProps) => {
  const storedUserName = useSelector(getUserName);
  const storedCurrentLevel = useSelector(getCurrentLevel);
  const { yuniversalMap: storedYuniversalMap } = useSelector(getYuniversalProgress);

  const userName = name || storedUserName;
  const currentLevel = level || storedCurrentLevel;
  const isYuniversal = !!(yuniversalMap || storedYuniversalMap);

  const currentWorld = getCurrentWorld(currentLevel);
  const worldIcon = getCurrentWorldImage(currentWorld, isYuniversal);
  const worldName = getCurrentWorldText(currentWorld, isYuniversal);

  return (
    <View style={styles.wrapper}>
      <TextTemplate type="h2" testID={TEXT_TEMPLATE(userName)}>
        {userName}
      </TextTemplate>
      <View style={styles.worldDetails}>
        {hideWorldIcon ? null : <Image style={styles.image} source={worldIcon} />}
        <View style={styles.worldTextWrapper}>
          <TextTemplate type={"l2b"} color={getWorldColor(worldName)}>
            {worldName}
          </TextTemplate>
          {isYuniversal ? null : (
            <TextTemplate type={"l2b"} color={useWorldColor ? getWorldColor(worldName) : undefined}>
              {` Level ${currentLevel}`}
            </TextTemplate>
          )}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    alignItems: "center",
    paddingTop: Style.adjust(24),
  } as ViewStyle,
  image: {
    width: Style.adjust(16),
    height: Style.adjust(16),
    marginTop: -2,
  } as ImageStyle,
  text: {
    fontSize: Style.adjust(30),
    letterSpacing: 1,
  } as TextStyle,
  worldDetails: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: Platform.select({
      ios: Style.adjust(12),
      android: Style.adjust(4),
    }),
  } as ViewStyle,
  worldTextWrapper: {
    marginTop: Platform.select({
      ios: -2,
      android: -3,
    }),
    paddingLeft: Style.adjust(6),
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  } as ViewStyle,
});

export default memo(NameAndLevel);

function getWorldColor(world: string) {
  switch (world) {
    case "Yuniversal":
      return Colours.world.yuniversal;
    case "Forest":
      return Colours.world.forest;
    case "Ocean":
      return Colours.world.ocean;
    case "Desert":
      return Colours.world.desert;
    case "Mountain":
      return Colours.world.mountain;
    default:
      return Colours.darkGray;
  }
}
