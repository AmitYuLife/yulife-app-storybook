import React, { memo } from "react";
import { View, StyleSheet, ViewStyle, Image, ImageStyle, TextStyle, Platform } from "react-native";
import { Text } from "@atoms";
import { Style, Colours } from "@styles";
import { getCurrentWorld, getCurrentWorldImage, getCurrentWorldText } from "@utils";
import { useSelector } from "react-redux";
import { getUserName } from "@redux/user/user.selectors";
import { getCurrentLevel } from "@redux/levels/levels.selectors";
import { TEXT_TEMPLATE } from "@ids";

interface IProps {
  name?: string;
  level?: number;
}

const NameAndLevel = ({ name, level }: IProps) => {
  const storedUserName = useSelector(getUserName);
  const storedCurrentLevel = useSelector(getCurrentLevel);
  const userName = name || storedUserName;
  const currentLevel = level || storedCurrentLevel;

  const currentWorld = getCurrentWorld(currentLevel);
  const worldIcon = getCurrentWorldImage(currentWorld);
  const worldName = getCurrentWorldText(currentWorld);

  return (
    <View style={styles.wrapper}>
      <Text style={styles.text} bold={true} testID={TEXT_TEMPLATE(userName)}>
        {userName}
      </Text>
      <View style={styles.worldDetails}>
        <Image style={styles.image} source={worldIcon} />
        <View style={styles.worldTextWrapper}>
          <Text bold={true} style={StyleSheet.flatten([styles.worldName, { color: getWorldColor(worldName) }])}>
            {worldName}
          </Text>
          <Text bold={true} style={styles.currentLevel}>{` Level ${currentLevel}`}</Text>
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
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  } as ViewStyle,
  worldName: {
    marginLeft: Style.adjust(6),
    fontSize: Style.adjust(12),
    letterSpacing: 0.6,
  } as TextStyle,
  currentLevel: {
    fontSize: Style.adjust(12),
    letterSpacing: 0.6,
  } as TextStyle,
});

export default memo(NameAndLevel);

function getWorldColor(world: string) {
  switch (world) {
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
