import React, { memo, useCallback, useEffect, useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { StyleSheet, View } from "react-native";
import { Navigation } from "@navigation/main";
import Logger from "@services/logging/logger";
import { FlashList, ListRenderItemInfo } from "@shopify/flash-list";
import { REWARD_STORE_SETTINGS_SCREEN } from "@ids";
import { GenericHeadingAbsolute, GenericHeadingPad, RadioListItem, RadioListItemProps } from "@organisms";
import { Button, InfoPanel } from "@molecules";
import { Style } from "@styles";
import { useTranslation } from "@hooks";
import { gql } from "@graphql/__generated";

interface IProps {
  componentId: string;
}

const RewardStoreContainer = ({ componentId }: IProps) => {
  const [storeSelection, setStoreSelection] = useState("");
  const t = useTranslation([
    "screens.rewards.store_location.rewards_store_location",
    "screens.rewards.store_location.confirm_selection",
    "screens.rewards.store_location.info_box",
  ]);
  const { data, loading: queryLoading } = useQuery(gql("GetMobileRewardStoreLocationsDocument"), {
    fetchPolicy: "network-only",
  });

  const [updateRewardStoreLocation, { loading }] = useMutation(gql("UpdateMobileRewardStoreLocationDocument"), {
    refetchQueries: ["GetMobileRewardStoreLocations", "GetMobileRewardsList"],
  });

  useEffect(() => {
    if (!storeSelection && data?.data?.length) {
      const selection = data.data.find((item) => item.isSelected);

      if (selection) {
        setStoreSelection(selection.id);
      }
    }
  }, [queryLoading]);

  const onRightIconPress = useCallback(
    () => (loading ? null : Navigation.popToRoot(componentId)),
    [loading, componentId]
  );

  const handleUpdateStoreLocation = useCallback(async () => {
    try {
      await updateRewardStoreLocation({ variables: { location: storeSelection } });
      await onRightIconPress();
    } catch (e) {
      Logger.error(e, { file: "reward-store-location.container" });
    }
  }, [storeSelection]);

  return (
    <View style={styles.flex} testID={REWARD_STORE_SETTINGS_SCREEN}>
      <GenericHeadingPad />
      <View style={styles.info}>
        <InfoPanel markdown={t["screens.rewards.store_location.info_box"]} type="warning" showIcon={true} />
      </View>
      <FlashList
        data={(data?.data || []).map((o) => ({
          id: o.id,
          title: o.label,
          description: "",
          isSelected: storeSelection === o.id,
          onPress: () => setStoreSelection(o.id),
        }))}
        keyExtractor={keyExtractor}
        showsVerticalScrollIndicator={false}
        estimatedItemSize={itemSize}
        renderItem={renderItem}
      />
      <View style={styles.buttonWrapper}>
        <Button
          label={t["screens.rewards.store_location.confirm_selection"]}
          size="Fill"
          onPress={handleUpdateStoreLocation}
        />
      </View>
      <GenericHeadingAbsolute
        heading={t["screens.rewards.store_location.rewards_store_location"]}
        onRightIconPress={onRightIconPress}
      />
    </View>
  );
};

export default memo(RewardStoreContainer);

const itemSize = Style.adjust(48);

const styles = StyleSheet.create({
  flex: { flex: 1 },
  listItemWrapper: {
    paddingTop: Style.adjust(8),
    paddingHorizontal: Style.adjust(24),
    height: itemSize,
    alignItems: "center",
  },
  info: {
    padding: Style.adjust(24),
  },
  buttonWrapper: {
    paddingHorizontal: Style.adjust(24),
    marginBottom: Style.adjust(32),
    marginTop: Style.adjust(16),
  },
});

const renderItem = ({ item }: ListRenderItemInfo<RadioListItemProps>) => (
  <View style={styles.listItemWrapper}>
    <RadioListItem {...item} />
  </View>
);
const keyExtractor = (item: RadioListItemProps) => item.id;
