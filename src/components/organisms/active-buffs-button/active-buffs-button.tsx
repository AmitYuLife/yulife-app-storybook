import React, { memo, useEffect, useCallback } from "react";
import { ViewStyle } from "react-native";
import { useSelector } from "react-redux";
import { getUserFeatures } from "@redux/user/user.selectors";
import { GetActiveBuffsOverlay, GetActiveBuffsOverlayVariables } from "@graphql/_core/schema";
import { GQL_QUERY_GET_ACTIVE_BUFFS_OVERLAY } from "@graphql/buffs";
import { BuffArea } from "@graphql/_core/schema/globalTypes";
import { Image } from "@atoms";
import { TouchableOpacityWithDelay } from "@molecules";
import ActiveBuffsModal from "@components/modals/active-buffs/active-buffs.modal";
import { showOverlayWithChild } from "@modals/blurred-overlay/showOverlayWithChild";
import { Style } from "@styles";
import { useLazyQuery } from "@apollo/react-hooks";
import Logger from "@services/logging/logger";
import { getRouteState } from "@redux/app/app.selectors";
import { Navigation } from "react-native-navigation";

interface IProps {
  buffTypes: BuffArea[];
  style?: ViewStyle;
}

const ActiveBuffsButton = ({ buffTypes, style }: IProps) => {
  const [getActiveBuffs, { data }] = useLazyQuery<GetActiveBuffsOverlay, GetActiveBuffsOverlayVariables>(
    GQL_QUERY_GET_ACTIVE_BUFFS_OVERLAY,
    {
      fetchPolicy: "network-only",
    }
  );

  const features = useSelector(getUserFeatures);
  const location = useSelector(getRouteState);
  const showBuffs = features.showBuffs;

  useEffect(() => {
    if (showBuffs) {
      getActiveBuffs({ variables: { buffTypes } });
    }
  }, [getActiveBuffs, showBuffs, buffTypes]);

  const onPress = useCallback(async () => {
    const active_boosts = data?.getActiveBuffsOverlay.equipment
      .map((eq) => eq.buffs)
      .reduce<string[]>((agg, current) => {
        agg.push(...current.map((item) => item.title));
        return agg;
      }, []);

    Logger.logMixpanelEvent("active_boosts_viewed", {
      location,
      active_boosts,
    });
    await Navigation.dismissAllModals();
    showOverlayWithChild(<ActiveBuffsModal activeBuffs={data?.getActiveBuffsOverlay} />);
  }, [data, location]);

  if (!showBuffs || !data?.getActiveBuffsOverlay?.equipment?.length) {
    return null;
  }

  return (
    <TouchableOpacityWithDelay onPress={onPress} style={style}>
      <Image width={Style.adjust(40)} height={Style.adjust(40)} source={data.getActiveBuffsOverlay.icon} />
    </TouchableOpacityWithDelay>
  );
};

export default memo(ActiveBuffsButton);
