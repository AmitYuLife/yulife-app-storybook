import React from "react";
import { StyleSheet, ViewStyle, View } from "react-native";
import Svg, { Path } from "react-native-svg";
import { Style, Colours } from "@styles";
import { TouchableOpacityWithDelay } from "@components/molecules";
import { Navigation } from "react-native-navigation";
import { ROUTES } from "@navigation/constants";
import { Text } from "@atoms";
import { DUELS_BUTTON } from "@ids";

function navigateToDuelsHub() {
  Navigation.push(ROUTES.leaderboards, {
    component: {
      id: ROUTES.duelsHub,
      name: ROUTES.duelsHub,
    },
  });
}

const ICON_SIZE = 16;
const ICON_HEIGHT = Style.adjust(ICON_SIZE);
const ICON_WIDTH = Style.adjust((ICON_SIZE * 18) / 15);

const HIT_SLOP = {
  top: 8,
  bottom: 8,
  left: 8,
  right: 16,
};

function _DuelsButton() {
  return (
    <TouchableOpacityWithDelay
      style={styles.wrapper}
      onPress={navigateToDuelsHub}
      hitSlop={HIT_SLOP}
      testID={DUELS_BUTTON}
    >
      <View style={styles.innerWrapper}>
        <Text style={styles.text} bold={true}>
          Duels
        </Text>
        <View style={styles.iconWrapper}>
          <Svg width={ICON_WIDTH} height={ICON_HEIGHT} viewBox="0 0 18 15" fill="none">
            <Path
              d="M14.25 10.483l-1.3-.7c-.7-.4-1.2-1-1.4-1.7l-1.1-3.1c-.2-.7-.2-.5-1.6-1-.8-.3-1.8-.7-2.6-1-.7-.3-1.2-.9-1.3-1.7 0-.2-.4-.4-.6-.2l-2.5 3.2-.7.8c-.2.3-.2.7 0 1l7.4 7.2c.3.3.7.4 1.1.4h3.7c.7 0 1.2-.4 1.4-1l.2-.6c.2-.6-.1-1.3-.7-1.6z"
              fill="#fff"
              stroke={Colours.blue.b200}
              strokeWidth={1.35}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <Path
              d="M10.55 6.183l-1.6.3M11.25 7.783l-1.7.4"
              stroke={Colours.blue.b200}
              strokeWidth={1.35}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <Path
              d="M16.85 5.083l-.7-.8-2.5-3.1c-.2-.2-.5-.1-.6.2-.1.8-.6 1.4-1.3 1.6-.8.3-1.8.7-2.6 1-1.4.5-1.4.3-1.5.9l-1.2 3.1c-.2.7-.7 1.3-1.4 1.7l-1.3.7c-.6.3-.9 1-.7 1.6l.2.7c.2.6.8 1 1.4 1h3.7c.4 0 .8-.2 1.1-.4l7.3-7.2c.3-.3.3-.7.1-1z"
              fill="#fff"
              stroke={Colours.blue.b200}
              strokeWidth={1.35}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <Path
              d="M8 6l1.7.3M7 8l1.7.3"
              stroke={Colours.blue.b200}
              strokeWidth={1.35}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </Svg>
        </View>
        {/* <View style={styles.notification} /> */}
      </View>
    </TouchableOpacityWithDelay>
  );
}

export const DuelsButton = React.memo(_DuelsButton);

const styles = StyleSheet.create({
  wrapper: {
    right: 0,
    top: Style.adjust(-20),
    position: "absolute",
    paddingRight: Style.adjust(10),
    paddingTop: Style.adjust(16),
    paddingVertical: Style.adjust(2),
    paddingBottom: Style.adjust(16),
    marginLeft: Style.adjust(10),
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
  notification: {
    borderRadius: Style.adjust(8),
    height: Style.adjust(8),
    width: Style.adjust(8),
    backgroundColor: Colours.world.desert,
    right: 0,
    top: Style.adjust(2),
    position: "absolute",
  },
});
