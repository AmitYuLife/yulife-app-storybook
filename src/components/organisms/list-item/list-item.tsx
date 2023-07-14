import React, { memo, useMemo } from "react";

import { StyleSheet, View } from "react-native";
import { TextTemplate } from "@atoms";
import { Style, Colours } from "@styles";
import { ArrowIcon } from "@atoms/icon/arrow";
import { LeaderboardRankIcon } from "@atoms/icon/leaderboard-rank-icon";
import Avatar from "@components/molecules/avatar/avatar";

type TypeProps =
  | { type: "leaderboard"; rank: number; score: number | string }
  | { type: "search"; rank?: never; score?: never };

interface CommonProps {
  name: string;
  uri: string;
  type: "leaderboard" | "search";
}

type IProps = CommonProps & TypeProps;

export const ListItem = ({ name, uri, type, rank, score }: IProps) => {
  const isLeaderboard = useMemo(() => type === "leaderboard", [type]);

  return (
    <View style={styles.wrapper}>
      {!isLeaderboard ? null : (
        <View style={styles.rank}>
          {rank < 4 ? (
            <LeaderboardRankIcon rank={rank} />
          ) : (
            <View style={styles.rankText}>
              <TextTemplate textAlign="center" color={Colours.sudoku.gridThickColor} type="b2">
                {rank}
              </TextTemplate>
            </View>
          )}
        </View>
      )}
      <View style={styles.avatar}>
        <Avatar size="small" uri={uri} />
      </View>
      <View style={styles[type]}>
        <TextTemplate color={Colours.sudoku.gridThickColor} type="b2" numberOfLines={1}>
          {name}
        </TextTemplate>
      </View>
      <View style={styles.score}>
        {isLeaderboard ? (
          <TextTemplate color={Colours.sudoku.gridThickColor} type="b2">
            {score}
          </TextTemplate>
        ) : (
          <ArrowIcon />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    paddingTop: Style.adjust(2),
    paddingBottom: Style.adjust(3),
    paddingRight: Style.adjust(8),
    marginBottom: Style.adjust(8),
  },
  avatar: {
    marginRight: Style.adjust(9),
  },
  rank: {
    paddingLeft: Style.adjust(8),
    paddingRight: Style.adjust(12),
  },
  rankText: {
    width: Style.adjust(24),
    height: Style.adjust(24),
  },
  score: {
    position: "absolute",
    right: 0,
  },
  leaderboard: {
    flex: 0.7,
  },
  search: {
    flex: 0.9,
  },
});

export default memo(ListItem);
