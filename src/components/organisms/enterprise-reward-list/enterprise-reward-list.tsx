import React, { memo, useCallback, useEffect, useRef } from "react";
import { StyleSheet, View } from "react-native";
import { EnterpriseRewardItem } from "@organisms";
import { IEnterpriseRewardItem } from "@organisms/enterprise-reward-item/enterprise-reward-item";
import { FlashList } from "@shopify/flash-list";
import { Style } from "@styles";

export interface IEnterpriseRewardList {
  items: IEnterpriseRewardItem[];
}

const EnterpriseRewardList = ({ items }: IEnterpriseRewardList) => {
  const listRef = useRef<FlashList<IEnterpriseRewardItem>>(null);
  const currentClaimIndex = items.findIndex((reward) => reward.status === "completed" || !reward.status);

  const scrollToReward = useCallback(() => {
    if (currentClaimIndex !== -1) {
      listRef.current?.scrollToIndex({ index: currentClaimIndex, animated: true, viewOffset: Style.adjust(7) });
    }
  }, [currentClaimIndex, listRef]);

  useEffect(() => {
    scrollToReward();
  }, [currentClaimIndex]);

  const renderItem = useCallback(({ item }: { item: IEnterpriseRewardItem }) => {
    return (
      <View style={styles.itemWrapper}>
        <EnterpriseRewardItem {...item} />
      </View>
    );
  }, []);

  return (
    <FlashList
      ref={listRef}
      horizontal={true}
      estimatedItemSize={Style.adjust(130)}
      data={items}
      renderItem={renderItem}
      onBlankArea={scrollToReward}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.wrapper}
    />
  );
};

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: Style.adjust(8),
  },
  itemWrapper: {
    marginHorizontal: Style.adjust(4),
  },
});

export default memo(EnterpriseRewardList);
