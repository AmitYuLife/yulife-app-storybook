import React, { memo, useCallback, useEffect, useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { ListRenderItemInfo, StyleSheet, View } from "react-native";
import { Navigation } from "@navigation/main";
import Logger from "@services/logging/logger";
import {
  GetMobileRewardStoreLocations,
  UpdateMobileRewardStoreLocation,
  UpdateMobileRewardStoreLocationVariables,
} from "@graphql/_core/schema";
import {
  GQL_QUERY_GET_MOBILE_REWARD_STORE_LOCATIONS,
  GQL_MUTATION_UPDATE_MOBILE_REWARD_STORE_LOCATION,
} from "@graphql/rewards";
import { REWARD_STORE_SETTINGS_SCREEN } from "@ids";
import { GenericHeadingAbsolute, GenericHeadingPad, RadioListItem, RadioListItemProps } from "@organisms";
import { Button, InfoPanel } from "@molecules";
import { FlatList } from "@atoms";
import { Style } from "@styles";
import { useTranslation } from "@hooks";

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
  const { data, loading: queryLoading } = useQuery<GetMobileRewardStoreLocations>(
    GQL_QUERY_GET_MOBILE_REWARD_STORE_LOCATIONS
  );

  const [updateRewardStoreLocation, { loading }] = useMutation<
    UpdateMobileRewardStoreLocation,
    UpdateMobileRewardStoreLocationVariables
  >(GQL_MUTATION_UPDATE_MOBILE_REWARD_STORE_LOCATION, {
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

  const onRightIconPress = useCallback(() => (loading ? null : Navigation.popToRoot(componentId)), [
    loading,
    componentId,
  ]);

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
      <FlatList
        horizontal={false}
        style={styles.list}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        data={(data?.data || []).map((o) => ({
          id: o.id,
          title: o.label,
          description: "",
          isSelected: storeSelection === o.id,
          onPress: () => setStoreSelection(o.id),
        }))}
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

const styles = StyleSheet.create({
  flex: { flex: 1 },
  list: {
    paddingHorizontal: Style.adjust(24),
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

const renderItem = ({ item }: ListRenderItemInfo<RadioListItemProps>) => <RadioListItem {...item} />;
const keyExtractor = (item: RadioListItemProps) => item.id;
