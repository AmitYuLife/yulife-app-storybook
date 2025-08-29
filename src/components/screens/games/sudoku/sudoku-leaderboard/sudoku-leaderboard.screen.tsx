import React, { memo, useCallback, useMemo } from "react";
import { View } from "react-native";
import { Style, StyleSheet } from "@styles";
import { FlashList, ListRenderItemInfo } from "@shopify/flash-list";
import { TextTemplate } from "@atoms";
import moment from "moment";
import { GenericHeadingAbsolute, GenericHeadingPad, ListItem } from "@organisms";

import { useTranslation } from "@hooks";
import { GetMobileSocialGroupLeaderboardItemsQuery } from "@graphql/__generated";

type SocialGroupLeaderboardItem = GetMobileSocialGroupLeaderboardItemsQuery["getMobileSocialGroupLeaderboardItems"][0];

interface IProps {
  onBack?: () => void;
  date?: string;
  leaderboard: GetMobileSocialGroupLeaderboardItemsQuery["getMobileSocialGroupLeaderboardItems"];
  onListItemPress: (userId: string, leaderboardPlacement: number) => void;
}

const SudokuLeaderboardScreen = ({ onBack, date, leaderboard, onListItemPress }: IProps) => {
  const t = useTranslation(["sudoku.leaderboard.title", "format.date_readable"]);
  const formattedDate = useMemo(() => moment(date).format(t["format.date_readable"]), [date, t]);

  const onItemPress = useCallback(
    ({ item, index }: ListRenderItemInfo<SocialGroupLeaderboardItem>) => {
      onListItemPress(item.id, index + 1);
    },
    [onListItemPress]
  );

  const renderItem = useCallback(
    (listItem: { item: SocialGroupLeaderboardItem; index: number }) => {
      const { item } = listItem;
      return (
        <ListItem
          type="leaderboard"
          onPress={onItemPress}
          data={listItem}
          uri={item?.avatar?.uri}
          score={item.score}
          {...item}
        />
      );
    },
    [onItemPress]
  );

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
      <View style={styles.list}>
        <FlashList
          showsVerticalScrollIndicator={false}
          estimatedItemSize={95}
          data={leaderboard}
          renderItem={renderItem}
          scrollEventThrottle={16}
        />
      </View>
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
  list: {
    marginTop: Style.adjust(20),
    flex: 1,
    paddingHorizontal: Style.adjust(16),
  },
});

export default memo(SudokuLeaderboardScreen);
