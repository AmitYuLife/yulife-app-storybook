import React from "react";
import { StyleSheet, ViewStyle, View } from "react-native";
import Svg, { Path } from "react-native-svg";
import { Style } from "@styles";
import { TouchableOpacityWithDelay } from "@components/molecules";
import { Navigation } from "react-native-navigation";
import { ROUTES } from "@navigation/constants";
import { Text } from "@atoms";

function navigateToDuelsHub() {
  Navigation.push(ROUTES.leaderboards, {
    component: {
      id: ROUTES.duelsHub,
      name: ROUTES.duelsHub,
    },
  });
}

const ICON_SIZE = Style.adjust(14);
const HIT_SLOP = {
  top: 8,
  bottom: 8,
  left: 8,
  right: 16,
};

export function DuelsButton() {
  return (
    <TouchableOpacityWithDelay style={styles.wrapper} onPress={navigateToDuelsHub} hitSlop={HIT_SLOP}>
      <View style={styles.innerWrapper}>
        <Text style={styles.mainText} bold={true}>
          Duels
        </Text>
        <View style={styles.iconWrapper}>
          <Svg width={ICON_SIZE} height={ICON_SIZE} viewBox="0 0 14 10" fill="none">
            <Path
              d="M4.606 8.293a.874.874 0 01-.22.331.711.711 0 01-.42.136.732.732 0 01-.44-.136.874.874 0 01-.219-.331L1.01 1.927a.987.987 0 010-.273.712.712 0 01.19-.42.744.744 0 01.41-.222.651.651 0 01.399.116c.116.081.2.198.24.331l2.358 6.834zm1.139-6.931a.67.67 0 01.267-.267.694.694 0 01.372-.083c.193.01.373.093.504.23.13.14.2.322.195.51a.57.57 0 010 .272L4.686 8.293a.7.7 0 01-.22.331.67.67 0 01-.42.136.773.773 0 01-.44-.136.874.874 0 01-.219-.331l2.358-6.931zm5.994 1.46a.756.756 0 00.802.239.683.683 0 00.406-.374.645.645 0 00.05-.274.897.897 0 00-.12-.409c-.3-.347-.682-.619-1.113-.792a2.966 2.966 0 00-1.364-.2 2.66 2.66 0 00-1.878.623 2.112 2.112 0 00-.6 1.499c-.018.285.027.57.134.836.107.266.273.505.486.702.39.331.846.583 1.338.74l.36.116c.34.137.66.253.92.39.156.066.29.175.385.313a.86.86 0 01.154.466.8.8 0 01-.3.7c-.303.17-.65.25-.999.234a2.243 2.243 0 01-.9-.238 2.186 2.186 0 01-.718-.58.636.636 0 00-.333-.262.655.655 0 00-.427 0 .636.636 0 00-.332.264.61.61 0 00-.087.407.722.722 0 000 .37c.29.439.69.797 1.161 1.043.472.245 1.001.369 1.536.359a2.907 2.907 0 001.998-.623c.235-.213.42-.473.54-.762.12-.29.175-.6.16-.912a2.09 2.09 0 00-.14-.861 2.135 2.135 0 00-.48-.736 3.781 3.781 0 00-1.339-.76l-.679-.174a4.214 4.214 0 01-.6-.254.809.809 0 01-.402-.397c-.08-.175-.067-.343-.068-.505 0-.1.052-.249.093-.34a.702.702 0 01.178-.237 1.24 1.24 0 01.839-.253 2.02 2.02 0 011.379.642h-.04z"
              fill="#6AA3DC"
              stroke="#6AA3DC"
              strokeWidth={0.133}
            />
          </Svg>
        </View>
        {/* <View style={styles.notification} /> */}
      </View>
    </TouchableOpacityWithDelay>
  );
}

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
    backgroundColor: "#6AA3DC",
    padding: Style.adjust(2),
    paddingLeft: Style.adjust(8),
    borderRadius: Style.adjust(24),
    flexDirection: "row",
    alignItems: "center",
  },
  iconWrapper: {
    backgroundColor: "#fff",
    opacity: 0.8,
    marginLeft: Style.adjust(8),
    padding: Style.adjust(6),
    borderRadius: Style.adjust(15),
    flexDirection: "row",
  },
  mainText: { color: "white", fontSize: Style.adjust(12) },
  iconText: { color: "#6AA3DC", fontSize: Style.adjust(20) },
  notification: {
    borderRadius: Style.adjust(8),
    height: Style.adjust(8),
    width: Style.adjust(8),
    backgroundColor: "#F86F63",
    right: 0,
    top: Style.adjust(2),
    position: "absolute",
  },
});
