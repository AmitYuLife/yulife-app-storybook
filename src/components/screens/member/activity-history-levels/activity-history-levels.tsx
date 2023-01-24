import { ACTIVITY_HISTORY_SCREEN } from "@ids";
import { Style, Colours } from "@styles/index";
import React, { useMemo } from "react";
import { StyleSheet, View } from "react-native";
import { TextTemplate } from "@atoms";
import Item from "./activity-history-levels.item";
import styles from "./activity-history-levels.styles";
import { GenericHeadingAbsolute, GenericHeadingPad } from "@organisms";
import { t } from "@locale";
import { GetActivityHistory_getActivityHistoryWithLevels as ItemMainProps } from "@graphql/_core/schema";
import { FlashList, ListRenderItemInfo } from "@shopify/flash-list";

type ItemProps = ItemMainProps | string;

export interface IOwnProps {
  loading: boolean;
  onPressClose: () => void;
  onRefresh: () => Promise<void>;
  onFetchMoreData?: () => void;
  data: (ItemProps | string)[];
}

const ActivityHistoryLevels = (props: IOwnProps) => {
  const { onPressClose, data, loading, onRefresh, onFetchMoreData } = props;
  const stickyHeaderIndices = useMemo(
    () =>
      data.reduce<number[]>((acc, item, i) => {
        if (typeof item === "string") {
          acc.push(i);
        }

        return acc;
      }, []),
    [data.length]
  );
  return (
    <View style={styles.wrapper} testID={ACTIVITY_HISTORY_SCREEN}>
      <GenericHeadingPad />
      <View style={styles.headersWrapper}>
        <View style={StyleSheet.flatten([styles.headerBase, styles.headerOneWrapper])}>
          <TextTemplate type="b2b" color={Colours.activityHistoryHeading} numberOfLines={1}>
            {t("screens.activity_history_levels.header_level")}
          </TextTemplate>
        </View>
        <View style={StyleSheet.flatten([styles.headerBase, styles.headerTwoWrapper])}>
          <TextTemplate type="b2" color={Colours.primary.p600} numberOfLines={1}>
            {t("screens.activity_history_levels.header_left")}
          </TextTemplate>
        </View>
        <View style={StyleSheet.flatten([styles.headerBase, styles.headerThreeWrapper])}>
          <TextTemplate type="b2" color={Colours.primary.p600} numberOfLines={1}>
            {t("screens.activity_history_levels.header_mid")}
          </TextTemplate>
        </View>
        <View style={StyleSheet.flatten([styles.headerBase, styles.headerFourWrapper])}>
          <TextTemplate type="b2" color={Colours.primary.p600} numberOfLines={1}>
            {t("screens.activity_history_levels.header_right")}
          </TextTemplate>
        </View>
      </View>

      <View style={styles.scrollView}>
        <FlashList
          data={data}
          keyExtractor={keyExtractor}
          showsVerticalScrollIndicator={false}
          renderItem={renderItem}
          refreshing={loading}
          estimatedItemSize={Style.adjust(100)}
          onRefresh={onRefresh}
          onEndReached={onFetchMoreData}
          stickyHeaderIndices={stickyHeaderIndices}
        />
      </View>
      <GenericHeadingAbsolute heading={t("screens.activity_history_levels.heading")} onRightIconPress={onPressClose} />
    </View>
  );
};

export default ActivityHistoryLevels;

const keyExtractor = (item: ItemProps) => (typeof item === "string" ? item : item.id);
const renderItem = ({ item }: ListRenderItemInfo<ItemProps>) =>
  typeof item === "string" ? (
    <View style={styles.dividerWrappers}>
      <View style={styles.dividerLeft} />
      <View style={styles.dividerRight}>
        <View style={styles.dividerRightLabelWrapper}>
          <TextTemplate type="b2b" color={Colours.neutral.white} numberOfLines={1}>
            {item}
          </TextTemplate>
        </View>
      </View>
    </View>
  ) : (
    <View>
      <Item {...item} />
    </View>
  );
