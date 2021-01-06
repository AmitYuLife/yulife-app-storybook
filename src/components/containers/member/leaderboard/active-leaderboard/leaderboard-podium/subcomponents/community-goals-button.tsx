import React from "react";
import { StyleSheet, ViewStyle, View } from "react-native";
import Svg, { Path } from "react-native-svg";
import { Style, Colours } from "@styles";
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

const ICON_SIZE = 16;
const ICON_HEIGHT = Style.adjust(ICON_SIZE);
const ICON_WIDTH = Style.adjust((ICON_SIZE * 16) / 14);

const HIT_SLOP = {
  top: 8,
  bottom: 8,
  left: 16,
  right: 8,
};

function _CommunityGoalsButton() {
  return (
    <TouchableOpacityWithDelay
      style={styles.wrapper}
      onPress={navigateToYunionGoals}
      hitSlop={HIT_SLOP}
      testID={GOALS_BUTTON}
    >
      <View style={styles.innerWrapper}>
        <Text style={styles.text} bold={true}>
          Goals
        </Text>
        <View style={styles.iconWrapper}>
          <Svg width={ICON_WIDTH} height={ICON_HEIGHT} viewBox="0 0 16 14" fill="none">
            <Path
              d="M3 8.44V1h12l-3.086 3.72L15 8.44H3zm0 0V13M1 13h6"
              stroke={Colours.blue.b200}
              strokeWidth={1.35}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </Svg>
        </View>
      </View>
    </TouchableOpacityWithDelay>
  );
}

export const CommunityGoalsButton = React.memo(_CommunityGoalsButton);

const styles = StyleSheet.create({
  wrapper: {
    left: Style.adjust(-10),
    top: Style.adjust(-20),
    position: "absolute",
    paddingTop: Style.adjust(16),
  } as ViewStyle,
  innerWrapper: {
    backgroundColor: Colours.neutral.white,
    borderColor: Colours.blue.b200,
    borderWidth: Style.adjust(1),
    paddingHorizontal: Style.adjust(10),
    paddingVertical: Style.adjust(6),
    borderRadius: Style.adjust(24),
    flexDirection: "row",
    alignItems: "center",
  },
  iconWrapper: {
    opacity: 0.8,
    borderRadius: Style.adjust(15),
    paddingLeft: Style.adjust(2),
    flexDirection: "row",
  },
  text: { color: Colours.blue.b200, fontSize: Style.adjust(16) },
});
