import React, { memo } from "react";
import { Image, StyleSheet, View, ViewStyle, TextStyle, ImageStyle, Platform } from "react-native";
import { Text } from "@components/atoms";
import { Style } from "@styles";
import { getCurrentWorld, getCurrentWorldImage, getCurrentWorldText, getCurrentWorldTextColor } from "@services/utils";
import { EarnRateButton } from "./earn-rate-button";

interface Props {
  userName: string;
  level: number;
  earnRate: number;
  onEarnRatePress: () => void;
}

const getTopBarFiller = () => {
  if (Platform.OS === "android") {
    return 6;
  }

  if (Style.isIphoneXPlus()) {
    return 52;
  }

  if (Style.isIphoneX()) {
    return 50;
  }

  return 30;
};

export const YuScreenHeader = memo(function HeaderFC(props: Props) {
  const { userName = "", level = 0, earnRate, onEarnRatePress } = props;
  return (
    <>
      <View style={styles.header}>
        <Text style={styles.userName}>{userName}</Text>
        <View style={styles.currentWorldWrapper}>
          <View style={styles.currentWorld}>
            <Image style={styles.image} source={getCurrentWorldImage(getCurrentWorld(level))} />
            <View style={styles.currentWorldDetailsWrapper}>
              <Text
                style={StyleSheet.flatten([
                  styles.worldText,
                  { color: getCurrentWorldTextColor(getCurrentWorld(level)) },
                ])}
              >
                {getCurrentWorldText(getCurrentWorld(level))}
              </Text>
              {!level ? null : <Text style={styles.levelText}>{`Lvl ${level}`}</Text>}
            </View>
          </View>
        </View>
      </View>
      <EarnRateButton earnRate={earnRate} onEarnRatePress={onEarnRatePress} />
    </>
  );
});

const styles = StyleSheet.create({
  header: {
    paddingBottom: Style.SCALE_UP_AND_DOWN(9),
    borderBottomColor: "#f7f7f7",
    borderBottomWidth: Style.SCALE_UP_AND_DOWN(1),
    width: "100%",
    marginTop: 32 + getTopBarFiller(),
    paddingLeft: Style.SCALE_UP_AND_DOWN(16),
    zIndex: 1,
  } as ViewStyle,
  userName: {
    color: "#333333",
    fontSize: 22,
    fontFamily: Style.FONT_FAMILY_PRIMARY_BOLD,
    letterSpacing: 1,
  } as TextStyle,
  currentWorldWrapper: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    marginTop: Style.SCALE_UP_AND_DOWN(8),
  } as ViewStyle,
  currentWorld: {
    flexDirection: "row",
  } as ViewStyle,
  image: {
    height: Style.SCALE_UP_AND_DOWN(32),
    width: Style.SCALE_UP_AND_DOWN(32),
  } as ImageStyle,
  worldText: {
    color: "#FF96A3",
    fontSize: Style.SCALE_UP_AND_DOWN(12),
    fontFamily: Style.FONT_FAMILY_PRIMARY_BOLD,
    letterSpacing: Style.SCALE_UP_AND_DOWN(0.5),
  } as TextStyle,
  levelText: {
    color: "#464647",
    fontSize: Style.SCALE_UP_AND_DOWN(12),
    fontFamily: Style.FONT_FAMILY_PRIMARY_BOLD,
    letterSpacing: Style.SCALE_UP_AND_DOWN(0.5),
  } as TextStyle,
  currentWorldDetailsWrapper: {
    flexDirection: "column",
    marginLeft: Style.SCALE_UP_AND_DOWN(8),
    justifyContent: "space-between",
  } as ViewStyle,
});
