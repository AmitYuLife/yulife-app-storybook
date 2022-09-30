import React, { memo, useCallback } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { Navigation } from "react-native-navigation";
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
import SettingLayout from "./setting.layout";
import { REWARD_STORE_SETTINGS_SCREEN } from "@ids";

interface IProps {
  componentId: string;
}

const RewardStoreContainer = ({ componentId }: IProps) => {
  const { data } = useQuery<GetMobileRewardStoreLocations>(GQL_QUERY_GET_MOBILE_REWARD_STORE_LOCATIONS);

  const [updateRewardStoreLocation, { loading }] = useMutation<
    UpdateMobileRewardStoreLocation,
    UpdateMobileRewardStoreLocationVariables
  >(GQL_MUTATION_UPDATE_MOBILE_REWARD_STORE_LOCATION, {
    refetchQueries: ["GetMobileRewardStoreLocations", "GetMobileRewardsList"],
  });

  const handleUpdateStoreLocation = useCallback(async (location) => {
    try {
      await updateRewardStoreLocation({ variables: { location } });
    } catch (e) {
      Logger.error(e, { file: "reward-store-location.container" });
    }
  }, []);

  const onRightIconPress = useCallback(() => (loading ? null : Navigation.popToRoot(componentId)), [
    loading,
    componentId,
  ]);
  const onLeftIconPress = useCallback(() => (loading ? null : Navigation.pop(componentId)), [loading, componentId]);

  return (
    <SettingLayout
      onLeftIconPress={onLeftIconPress}
      onRightIconPress={onRightIconPress}
      headerText="Rewards region selection"
      screenTestId={REWARD_STORE_SETTINGS_SCREEN}
      options={(data?.data || []).map((o) => ({
        id: o.id,
        title: o.label,
        description: "",
        isSelected: o.isSelected,
        onPress: () => handleUpdateStoreLocation(o.id),
      }))}
    />
  );
};

export default memo(RewardStoreContainer);
