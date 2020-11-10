import React from "react";
import { StyleSheet, ViewStyle, View } from "react-native";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";
import { Style } from "@styles";
import { TouchableOpacityWithDelay } from "@components/molecules";
import { Navigation } from "react-native-navigation";
import { ROUTES } from "@navigation/constants";
import { Text } from "@atoms";
import { GOALS_BUTTON } from "@ids";

function navigateToYunionGoals() {
  Navigation.push(ROUTES.leaderboards, {
    component: {
      id: ROUTES.communityGoals,
      name: ROUTES.communityGoals,
    },
  });
}

const ICON_SIZE = Style.adjust(14);

const HIT_SLOP = {
  top: 8,
  bottom: 8,
  left: 16,
  right: 8,
};

export function CommunityGoalsButton() {
  return (
    <TouchableOpacityWithDelay
      style={styles.wrapper}
      onPress={navigateToYunionGoals}
      hitSlop={HIT_SLOP}
      testID={GOALS_BUTTON}
    >
      <View style={styles.innerWrapper}>
        <View style={styles.iconWrapper}>
          <Svg width={ICON_SIZE} height={ICON_SIZE} viewBox="0 0 10 10" fill="none">
            <G clipPath="url(#prefix__clip0)" stroke="#6AA3DC" strokeLinecap="round" strokeLinejoin="round">
              <Path d="M7.083 8.75v-.833A1.667 1.667 0 005.417 6.25H2.083A1.667 1.667 0 00.417 7.917v.833M3.75 4.583a1.667 1.667 0 100-3.333 1.667 1.667 0 000 3.333zM9.583 8.75v-.833a1.667 1.667 0 00-1.25-1.613M6.667 1.304a1.667 1.667 0 010 3.23" />
            </G>
            <Defs>
              <ClipPath id="prefix__clip0">
                <Path fill="#fff" d="M0 0h10v10H0z" />
              </ClipPath>
            </Defs>
          </Svg>
        </View>
        <Text style={styles.mainText} bold={true}>
          Goals
        </Text>
      </View>
    </TouchableOpacityWithDelay>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    left: Style.adjust(-10),
    top: Style.adjust(-20),
    position: "absolute",
    paddingTop: Style.adjust(16),
    paddingVertical: Style.adjust(2),
  } as ViewStyle,
  innerWrapper: {
    backgroundColor: "#6AA3DC",
    padding: Style.adjust(2),
    paddingRight: Style.adjust(8),
    borderRadius: Style.adjust(24),
    flexDirection: "row",
    alignItems: "center",
  },
  iconWrapper: {
    backgroundColor: "#fff",
    opacity: 0.8,
    marginRight: Style.adjust(8),
    padding: Style.adjust(6),
    borderRadius: Style.adjust(15),
    flexDirection: "row",
  },
  mainText: { color: "white", fontSize: Style.adjust(12) },
  iconText: { color: "#6AA3DC", fontSize: Style.adjust(20) },
});
