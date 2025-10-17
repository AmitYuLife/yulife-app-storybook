import React, { memo, useCallback, useEffect, useRef } from "react";
import { View } from "react-native";
import { ACTIVITY_HISTORY_SCREEN } from "@ids";
import { t } from "@locale";
import {
  ActivityHistoryDay,
  ActivityHistoryDaySkeleton,
  ActivityHistoryHeader,
  GenericHeadingAbsolute,
  GenericHeadingPad,
} from "@organisms";
import { IActivityHistoryDay } from "@organisms/activity-history-day/activity-history-day";
import { LeftIcon } from "@organisms/top-bar/subcomponents/left";
import { FlashList, ListRenderItemInfo } from "@shopify/flash-list";
import { Style, StyleSheet } from "@styles";
import ActivityHistoryEmpty from "./activity-history-empty";

type ISelectedMonth = {
  startDate: string;
  endDate: string;
};

interface IProps {
  days: IActivityHistoryDay[];
  onRightIconPress: () => void;
  onLeftIconPress: () => void;
  onMonthSelected: (selectedMonth: ISelectedMonth) => void;
  loading: boolean;
  onRefresh: () => void;
}

const ActivityHistoryScreen = ({
  days,
  onRightIconPress,
  onLeftIconPress,
  onMonthSelected,
  loading,
  onRefresh,
}: IProps) => {
  const listRef = useRef<FlashList<IActivityHistoryDay>>(null);
  const renderItem = useCallback(
    ({ item }: ListRenderItemInfo<IActivityHistoryDay>) => <ActivityHistoryDay {...item} />,
    []
  );

  useEffect(() => {
    if (!loading) {
      const timeout = setTimeout(() => {
        listRef.current?.scrollToIndex({ index: 0 });
      }, 100);

      return () => clearTimeout(timeout);
    }
  }, [loading]);

  return (
    <View style={styles.wrapper}>
      <GenericHeadingPad />
      <ActivityHistoryHeader onPress={onMonthSelected} />
      <View style={styles.container}>
        <FlashList
          ref={listRef}
          data={loading ? [] : days}
          keyExtractor={keyExtractor}
          showsVerticalScrollIndicator={false}
          renderItem={renderItem}
          onRefresh={onRefresh}
          refreshing={false}
          estimatedItemSize={Style.adjust(425)}
          ListEmptyComponent={loading ? <ActivityHistoryDaySkeleton /> : <ActivityHistoryEmpty />}
          testID={ACTIVITY_HISTORY_SCREEN}
        />
      </View>
      <GenericHeadingAbsolute
        leftIcon={LeftIcon.REFRESH}
        onLeftIconPress={onLeftIconPress}
        heading={t("screens.activity_history_levels.heading")}
        onRightIconPress={onRightIconPress}
      />
    </View>
  );
};

const keyExtractor = (item: IActivityHistoryDay) => item.id;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    marginBottom: Style.adjust(20),
  },

  container: {
    flex: 1,
    marginHorizontal: Style.adjust(24),
  },
});

export default memo(ActivityHistoryScreen);
