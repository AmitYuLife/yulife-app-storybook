import React, { memo, useMemo } from "react";
import { StyleSheet, View } from "react-native";
import { Style } from "@styles";
import { GetSudokuLeaderboard_getSudokuLeaderboard } from "@graphql/_core/schema";
import { FlashList } from "@shopify/flash-list";
import { ListRankItem } from "@components/containers/member/leaderboard/_legacy/items";
import { TextTemplate } from "@atoms";
import moment from "moment";
import { GenericHeadingAbsolute, GenericHeadingPad } from "@organisms";
import { getDuration } from "@components/games/sudoku/sudoku-utils";

import { useTranslation } from "@hooks";

interface IProps {
  onBack?: () => void;
  componentId?: string;
  date?: string;
  leaderboard: GetSudokuLeaderboard_getSudokuLeaderboard[];
}

const SudokuLeaderboardScreen = ({ onBack, componentId, date, leaderboard }: IProps) => {
  const t = useTranslation(["sudoku.leaderboard.title", "format.date_readable"]);
  const formattedDate = useMemo(() => moment(date).format(t["format.date_readable"]), [date, t]);

  const renderItem = ({ item, index }: { item: GetSudokuLeaderboard_getSudokuLeaderboard; index: number }) => {
    return (
      <ListRankItem
        firstName=""
        isCurrentUser={false}
        index={index}
        lastName=""
        rank={item.position}
        id={item.userId}
        uri={item.avatarRemoteFiles?.pngMini}
        componentId={componentId}
        score={getDuration(item.adjustedTime)}
        {...item}
      />
    );
  };

  return (
    <>
      <GenericHeadingPad />

      <GenericHeadingAbsolute
        logo="yulife"
        backgroundColor="transparent"
        onLeftIconPress={onBack}
        heading={
          <View style={styles.heading}>
            <TextTemplate type="b2b">{t["sudoku.leaderboard.title"]}</TextTemplate>
            <TextTemplate type="l1">{formattedDate}</TextTemplate>
          </View>
        }
      />
      <FlashList
        showsVerticalScrollIndicator={false}
        estimatedItemSize={95}
        data={leaderboard}
        renderItem={renderItem}
        scrollEventThrottle={16}
      />
    </>
  );
};

const styles = StyleSheet.create({
  heading: {
    alignItems: "center",
    justifyContent: "center",
  },
  wrapper: {
    alignItems: "center",
  },

  contentWrapper: {
    marginBottom: Style.adjust(20),
  },

  textWrapper: {
    paddingHorizontal: 25,
  },

  titleWrapper: {
    marginTop: Style.adjust(30),
    marginBottom: Style.adjust(20),
  },
});

export default memo(SudokuLeaderboardScreen);
