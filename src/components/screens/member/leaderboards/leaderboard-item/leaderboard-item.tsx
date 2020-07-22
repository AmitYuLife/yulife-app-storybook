import { Text } from "@atoms/index";
import { numberWithCommas } from "@services/utils";
import * as React from "react";
import { StyleSheet, View, Animated, TouchableWithoutFeedback } from "react-native";
import styles from "./leaderboard-item.styles";
import { FirstPlace, SecondPlace, ThirdPlace } from "../svg/leaderboard";
import { LEADERBOARD_NAME } from "@ids";
import { AvatarCachedSvg } from "@components/organisms";
import { memo, FC } from "react";
import { AvatarEmpty } from "@molecules";

export interface ILeaderboardItemProps {
  coins?: number;
  isCurrentUser?: boolean;
  isLockedCell?: boolean;
  name?: string;
  rank?: number;
  steps?: number;
  sortBy?: string;
  avatarRemoteFile?: string;
  onPress?: () => void;
  animatedOpacity?: Animated.Value;
}

const LeaderboardItem: FC<ILeaderboardItemProps> = ({
  isCurrentUser,
  isLockedCell,
  rank = 0,
  name = "",
  steps = 0,
  coins = 0,
  sortBy = "",
  avatarRemoteFile = null,
  onPress,
  animatedOpacity = new Animated.Value(1),
}: ILeaderboardItemProps) => {
  const currentUserStyle = isCurrentUser ? styles.textHighlighted : {};
  const lockedCellTextStyle = isLockedCell ? styles.lockedCellTextStyle : {};
  const lockedCellWrapperStyle = isLockedCell ? styles.lockedCellWrapper : {};
  const lockedCellBorderStyle = isLockedCell ? styles.lockedCellBorderWrapper : {};
  const textStyleRightSmall = StyleSheet.flatten([
    styles.text,
    styles.textRight,
    currentUserStyle,
    lockedCellTextStyle,
  ]);
  const wrapperStyle = StyleSheet.flatten([styles.wrapper, lockedCellWrapperStyle]);

  return (
    <Animated.View style={[wrapperStyle, { opacity: animatedOpacity }]}>
      <TouchableWithoutFeedback onPress={onPress}>
        <View style={[styles.borderWrapper, lockedCellBorderStyle]} testID={LEADERBOARD_NAME(name)}>
          <View style={styles.rankWrapper}>
            {rank <= 3 ? (
              renderRankImage(rank)
            ) : (
              <Text style={StyleSheet.flatten([styles.text, styles.textRight, currentUserStyle, lockedCellTextStyle])}>
                {rank}
              </Text>
            )}
          </View>

          <View style={styles.avatarHeadWrapper}>
            {!avatarRemoteFile ? (
              <AvatarEmpty style={styles.avatarHead} />
            ) : (
              <AvatarCachedSvg uri={avatarRemoteFile} style={styles.avatarHead} />
            )}
          </View>
          <View style={styles.nameWrapper}>
            <Text style={StyleSheet.flatten([styles.text, currentUserStyle, lockedCellTextStyle])}>{name}</Text>
          </View>
          <View style={styles.stepsWrapper}>
            <Text style={textStyleRightSmall}>{getDataByCategory(sortBy, steps, coins)}</Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Animated.View>
  );
};

export default memo(LeaderboardItem, () => true);

function getDataByCategory(sortBy: string, steps = 0, coins = 0) {
  // todo fix data of mindful mins
  switch (sortBy) {
    case "coins":
      return numberWithCommas(coins);
    case "steps":
    default:
      return numberWithCommas(steps);
  }
}

function renderRankImage(rank: number) {
  switch (rank) {
    case 1:
      return <FirstPlace />;
    case 2:
      return <SecondPlace />;
    case 3:
    default:
      return <ThirdPlace />;
  }
}
