import React, { useCallback } from "react";
import { StyleSheet, ViewStyle, View, ImageStyle } from "react-native";
import { SlotIcon } from "@atoms";
import { TouchableOpacityWithDelay, PowerCoin } from "@molecules";
import { Style } from "@styles";
import { YuItemSlot, YuProductStatus } from "@graphql/_core/schema/globalTypes";
import { AVATAR_ITEM } from "@ids";
import { SvgUnlockable } from "../../product/assets/svg-unlockable";
import { SvgLocked } from "../../product/assets/svg-locked";
import {
  UpdateTopUpsQuoteVariables,
  UpdateTopUpsQuote_updateFibQuote,
  YuScreenProductSlotItem,
} from "@graphql/_core/schema";
import { useDispatch, useSelector } from "react-redux";
import { getUserFeatures } from "@redux/user/user.selectors";
import { getFIBState } from "@redux/product/product.selectors";
import { useMutation } from "@apollo/react-hooks";
import { GQL_MUTATION_UPDATE_TOP_UPS_QUOTE } from "@graphql/products/updateTopUpsQuote";
import { resetFIBUnderwritingJourney } from "@redux/product/product.actions";
import { navigateToProductScreen } from "../../../navigation/navigateToProductScreen";

interface IItem extends YuScreenProductSlotItem {
  style?: ViewStyle;
}

export const Item = (props: IItem) => {
  const { earnRate, status, itemUrl, style, icon } = props;

  const dispatch = useDispatch();
  const yuScreenV3 = useSelector(getUserFeatures).yuScreenV3;
  const fibState = useSelector(getFIBState);
  const [updateFibQuote] = useMutation<UpdateTopUpsQuote_updateFibQuote, UpdateTopUpsQuoteVariables>(
    GQL_MUTATION_UPDATE_TOP_UPS_QUOTE
  );

  const resetFibJourney = useCallback(async () => {
    if (fibState.latestQuoteId) {
      await updateFibQuote({
        variables: { archiveQuote: true, quoteId: fibState.latestQuoteId },
      });
    }

    dispatch(resetFIBUnderwritingJourney());
  }, [dispatch, fibState.latestQuoteId, updateFibQuote]);

  const onPress = useCallback(() => {
    navigateToProductScreen({
      product: {
        description: props.toolTip?.description?.short,
        earnRate: props.earnRate,
        status: props.status,
        productId: props.productId,
        itemSlot: props.icon?.name?.toLowerCase() as YuItemSlot,
        name: props.toolTip?.name,
        policyNumber: null,
      },
      resetFibJourney,
      fibState,
      yuScreenV3,
    });
  }, [resetFibJourney, fibState, yuScreenV3, props]);

  const slot = { name: icon?.name, itemUrl, backgroundUrl: icon?.backgroundUrl, status };

  return (
    <TouchableOpacityWithDelay
      delay={350}
      activeOpacity={1}
      onPress={onPress}
      style={[styles.wrapper, style]}
      testID={AVATAR_ITEM(icon?.name, status)}
    >
      <SlotIcon slot={slot} />
      <View style={styles.tagWrapper}>{getTag(status, earnRate)}</View>
    </TouchableOpacityWithDelay>
  );
};

const styles = StyleSheet.create({
  wrapper: { marginBottom: 6 } as ViewStyle,
  image: {
    maxHeight: Style.adjust(76),
    maxWidth: Style.adjust(64),
  } as ImageStyle,
  tagWrapper: {
    position: "absolute",
    top: Style.adjust(4),
    right: -5,
  } as ViewStyle,
});

function getTag(status: string, earnRate: number) {
  switch (status) {
    case YuProductStatus.unlockable:
      return <SvgUnlockable />;
    case YuProductStatus.locked:
      return <SvgLocked />;
    case YuProductStatus.active:
      return <PowerCoin power={earnRate} />;
    default:
      return null;
  }
}
