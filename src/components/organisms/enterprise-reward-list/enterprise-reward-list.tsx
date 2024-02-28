import React, { memo, useCallback } from "react";
import { StyleSheet, View } from "react-native";
import { EnterpriseRewardItem } from "@organisms";
import { IEnterpriseRewardItem } from "@organisms/enterprise-reward-item/enterprise-reward-item";
import { FlashList } from "@shopify/flash-list";
import { Style } from "@styles";

export interface IEnterpriseRewardList {
  items: IEnterpriseRewardItem[];
}

const EnterpriseRewardList = ({ items }: IEnterpriseRewardList) => {
  const renderItem = useCallback(({ item }: { item: IEnterpriseRewardItem }) => {
    return (
      <View style={styles.itemWrapper}>
        <EnterpriseRewardItem {...item} />
      </View>
    );
  }, []);

  return (
    <FlashList
      horizontal={true}
      estimatedItemSize={Style.adjust(72)}
      data={items}
      renderItem={renderItem}
      showsHorizontalScrollIndicator={false}
    />
  );
};

const styles = StyleSheet.create({
  itemWrapper: {
    marginRight: Style.adjust(16),
    marginBottom: Style.adjust(16),
  },
});

export default memo(EnterpriseRewardList);
