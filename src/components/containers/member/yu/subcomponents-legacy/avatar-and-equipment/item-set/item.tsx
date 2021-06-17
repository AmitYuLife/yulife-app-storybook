import React, { useCallback } from "react";
import { StyleSheet, ViewStyle, View, ImageStyle } from "react-native";
import { TouchableOpacityWithDelay, PowerCoin } from "@molecules";
import { Style } from "@styles";
import { YuProductStatus } from "@graphql/_core/schema/globalTypes";
import { AVATAR_ITEM } from "@ids";
import { SvgUnlockable } from "../../product/assets/svg-unlockable";
import { SvgLocked } from "../../product/assets/svg-locked";
import { ItemIcon } from "./item-icon";
import { IProduct } from "../../../../../products/fib/fib.types";
import { navigateToProductScreen } from "../../../navigation/navigateToProductScreen";
import { useDispatch, useSelector } from "react-redux";
import { getUserFeatures } from "@redux/user/user.selectors";
import { getFIBState } from "@redux/product/product.selectors";
import { useMutation } from "@apollo/react-hooks";
import { UpdateTopUpsQuoteVariables, UpdateTopUpsQuote_updateFibQuote } from "@graphql/_core/schema";
import { GQL_MUTATION_UPDATE_TOP_UPS_QUOTE } from "@graphql/products/updateTopUpsQuote";
import { resetFIBUnderwritingJourney } from "@redux/product/product.actions";

export const Item = (props: IProduct) => {
  const { earnRate, status, itemSlot, coverType } = props;
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
      product: props,
      resetFibJourney,
      fibState,
      yuScreenV3,
    });
  }, [resetFibJourney, fibState, yuScreenV3, props]);

  return (
    <TouchableOpacityWithDelay
      delay={350}
      activeOpacity={1}
      onPress={onPress}
      style={styles.wrapper}
      testID={AVATAR_ITEM(itemSlot, status)}
    >
      <ItemIcon itemSlot={itemSlot} status={status} coverType={coverType} />
      <View style={styles.tagWrapper}>{getTag(status, earnRate)}</View>
    </TouchableOpacityWithDelay>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: Style.adjust(76),
    height: Style.adjust(64),
    marginTop: Style.adjust(12),
  } as ViewStyle,
  image: {
    maxHeight: Style.adjust(76),
    maxWidth: Style.adjust(64),
  } as ImageStyle,
  tagWrapper: {
    position: "absolute",
    top: Style.adjust(4),
    right: 0,
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
