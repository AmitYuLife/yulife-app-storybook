import React, { memo, useEffect, useCallback } from "react";
import { ViewStyle } from "react-native";
import { useSelector } from "react-redux";
import { Navigation } from "@navigation/main";
import { getUserFeatures } from "@redux/user/user.selectors";
import { gql, BuffArea, useFragment } from "@graphql/__generated";
import { Image } from "@atoms";
import { TouchableOpacityWithDelay } from "@molecules";
import ActiveBuffsModal from "@components/modals/active-buffs/active-buffs.modal";
import { Style } from "@styles";
import { useLazyQuery } from "@apollo/client";
import Logger from "@services/logging/logger";
import { getRouteState } from "@redux/app/app.selectors";

interface IProps {
  buffTypes: BuffArea[];
  style?: ViewStyle;
  iconWidth?: number;
  iconHeight?: number;
}

const ActiveBuffsButton = ({ buffTypes, style, iconWidth = 40, iconHeight = 40 }: IProps) => {
  const [getActiveBuffs, { data }] = useLazyQuery(gql("GetActiveBuffsOverlayDocument"), {
    fetchPolicy: "network-only",
  });

  const features = useSelector(getUserFeatures);
  const location = useSelector(getRouteState);
  const showBuffs = features.showBuffs;

  useEffect(() => {
    if (showBuffs) {
      getActiveBuffs({ variables: { buffTypes } });
    }
  }, [getActiveBuffs, showBuffs, buffTypes]);

  const onPress = useCallback(() => {
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
    Navigation.showOverlayWithChild(<ActiveBuffsModal activeBuffs={data?.getActiveBuffsOverlay} />);
  }, [data, location]);

  if (!showBuffs || !data?.getActiveBuffsOverlay?.equipment?.length) {
    return null;
  }

  // the following is not a react hook, it's a simple mapper
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const buffIcon = useFragment(gql(`RemoteImageFragmentDoc`), data?.getActiveBuffsOverlay?.icon);

  return (
    <TouchableOpacityWithDelay onPress={onPress} style={style}>
      <Image width={Style.adjust(iconWidth)} height={Style.adjust(iconHeight)} source={buffIcon} />
    </TouchableOpacityWithDelay>
  );
};

export default memo(ActiveBuffsButton);
