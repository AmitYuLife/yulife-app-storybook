import React from "react";
import { View, StyleSheet, ViewStyle, Platform, TextStyle, ImageStyle } from "react-native";
import { Text } from "@atoms";
import { LEADERBOARD_INFO_BUTTON, LEADERBOARD_TITLE, LEADERBOARD_TOP_SCREEN } from "@ids";
import { truncate } from "@services/utils";
import { Colours, Style } from "@styles";
import { TouchableOpacityWithDelay } from "@components/molecules";
import Svg, { Path } from "react-native-svg";
import { InfoButton } from "./info-button";
import { DuelsButton } from "./duels-button";
import { getUserFeatures } from "@redux/user/user.selectors";
import { IReduxState } from "@redux/_core/reducers";
import { connect } from "react-redux";

export interface LeaderboardPressableTitleProps {
  onPressLabel: () => void;
  onPressInfo: () => void;
  name: string;
}

type ConnectedState = ReturnType<typeof mapStateToProps>;

interface IProps extends LeaderboardPressableTitleProps, Partial<ConnectedState> {}

export function _LeaderboardPressableTitle({ onPressLabel, onPressInfo, name, showDuels }: Partial<IProps>) {
  if (showDuels) {
    return (
      <View pointerEvents="box-none" style={styles.wrapper}>
        <View style={styles.row}>
          <Title title={name} onPressLabel={onPressLabel} onPressInfo={onPressInfo} showDuels={showDuels} />
        </View>
        <DuelsButton />
      </View>
    );
  }

  return (
    <View pointerEvents="box-none" style={styles.wrapper}>
      <TouchableOpacityWithDelay style={styles.row} onPress={onPressLabel}>
        <Title title={name} onPressLabel={onPressLabel} onPressInfo={onPressInfo} showDuels={showDuels} />
      </TouchableOpacityWithDelay>
      <InfoButton onPressInfo={onPressInfo} showDuels={showDuels} />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    justifyContent: "center",
    alignItems: "center",
  } as ViewStyle,
  row: {
    flexDirection: "row",
  } as ViewStyle,
});

function Title({
  title,
  onPressLabel,
  onPressInfo,
  showDuels,
}: {
  title: string;
  onPressLabel: () => void;
  onPressInfo: () => void;
  showDuels: boolean;
}) {
  return (
    <View style={titleStyles.wrapper} testID={LEADERBOARD_TOP_SCREEN}>
      <TouchableOpacityWithDelay onPress={onPressLabel}>
        <View style={titleStyles.leaderboardName}>
          <Text style={titleStyles.title} testID={LEADERBOARD_TITLE(title)}>
            {truncate(title, 16)}
            <View style={titleStyles.arrow}>
              <Arrow />
            </View>
          </Text>
        </View>
      </TouchableOpacityWithDelay>
      <TouchableOpacityWithDelay onPress={onPressInfo} testID={LEADERBOARD_INFO_BUTTON}>
        <View style={titleStyles.flexRow}>
          <Text style={showDuels ? titleStyles.captionDuels : titleStyles.caption}>30 day steps</Text>
          {showDuels ? <InfoButton onPressInfo={onPressInfo} showDuels={showDuels} /> : null}
        </View>
      </TouchableOpacityWithDelay>
    </View>
  );
}

const titleStyles = StyleSheet.create({
  wrapper: {
    alignSelf: "center",
    alignItems: "center",
  } as ViewStyle,
  leaderboardName: {
    paddingHorizontal: Style.adjust(16),
  } as ViewStyle,
  title: {
    color: Colours.blue.b200,
    fontSize: Style.adjust(18),
    textAlign: "center",
    fontFamily: Style.FONT_FAMILY_PRIMARY,
    marginBottom: Style.adjust(8),
    marginTop: Platform.select({ ios: 2, android: -4 }),
  } as TextStyle,
  caption: {
    color: "#000000",
    fontSize: Style.adjust(18),
    fontFamily: Style.FONT_FAMILY_PRIMARY_BOLD,
    marginLeft: -5,
  } as TextStyle,
  captionDuels: {
    color: "#000000",
    fontSize: Style.adjust(18),
    fontFamily: Style.FONT_FAMILY_PRIMARY_BOLD,
  } as TextStyle,
  inlineButton: {
    position: "relative",
    marginHorizontal: 100,
  } as TextStyle,
  arrow: {
    paddingLeft: Style.adjust(8),
  } as ViewStyle,
  flexRow: {
    flexDirection: "row",
    alignItems: "center",
  } as ViewStyle,
});

function Arrow() {
  return (
    <Svg width="12" height="8" viewBox="0 0 12 8" style={arrowStyles.wrapper}>
      <Path
        d="M0.666687 1.33334L6.00002 6.66667L11.3334 1.33334"
        stroke="#6AA3DC"
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
    </Svg>
  );
}

const arrowStyles = StyleSheet.create({
  wrapper: {
    marginTop: Style.adjust(4),
    height: Style.adjust(32),
    width: Style.adjust(32),
  } as ViewStyle,
  image: {
    width: Style.adjust(13),
    height: Style.adjust(7),
  } as ImageStyle,
});

const mapStateToProps = (state: IReduxState) => ({
  showDuels: !!getUserFeatures(state).showDuels,
});

export const LeaderboardPressableTitle = connect<ConnectedState>(mapStateToProps)(_LeaderboardPressableTitle);
