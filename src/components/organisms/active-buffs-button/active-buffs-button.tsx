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
  const showBuffs = features.showBuffs;

  useEffect(() => {
    if (showBuffs) {
      getActiveBuffs({ variables: { buffTypes } });
    }
  }, [getActiveBuffs, showBuffs, buffTypes]);

  const onPress = useCallback(() => {
    showOverlayWithChild(<ActiveBuffsModal activeBuffs={data?.getActiveBuffsOverlay} />);
  }, [data]);

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
