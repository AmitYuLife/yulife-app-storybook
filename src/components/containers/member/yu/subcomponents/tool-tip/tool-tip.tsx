import React, { useMemo, useCallback } from "react";
import { StyleSheet, View, ViewStyle, TextStyle, ImageStyle } from "react-native";
import { Text, Button } from "@atoms";
import { Style, Colours } from "@styles";
import { CloseSvg } from "@atoms";
import { TouchableOpacityWithDelay } from "@molecules";
import { useMutation, useQuery } from "@apollo/react-hooks";
import {
  GetYulifer,
  GetYuliferWithAvatar_getYulifer_products_personal,
  UpdateTopUpsQuoteVariables,
  UpdateTopUpsQuote_updateFibQuote,
} from "@graphql/_core/schema";
import { GQL_QUERY_GET_YULIFER } from "@graphql/yuscreen";
import LinearGradient from "react-native-linear-gradient";
import { getProductIcon } from "../../assets/getProductIcon";
import { ProductCode, ItemSlot, getIsEmployerProduct, isEmployerItem } from "../../yu-types";
import { navigateToProductScreen } from "../../navigation/navigateToProductScreen";
import { useSelector, useDispatch } from "react-redux";
import { getFIBState } from "@redux/product/product.selectors";
import { getUserFeatures } from "@redux/user/user.selectors";
import { resetFIBUnderwritingJourney } from "@redux/product/product.actions";
import { CoinLabel } from "./coin-label";
import { useBackHandler } from "@services/hooks/useBackHandler";
import { GQL_MUTATION_UPDATE_TOP_UPS_QUOTE } from "../../../../../../graphql/products/updateTopUpsQuote";

export interface IToolTipProps {
  code: ProductCode;
  onClose: () => void;
}

const getCaption = (status: string) => {
  return `We’re working hard to bring you the best insurance products on the market.${
    status !== "locked" ? "" : " Vote for what you want to see here."
  }`;
};

export const ToolTip = ({ code, onClose }: IToolTipProps) => {
  const { data } = useQuery<GetYulifer>(GQL_QUERY_GET_YULIFER, {
    fetchPolicy: "cache-only",
  });

  const product = useMemo(() => {
    if (!data?.getYulifer) {
      return null;
    }

    const { products } = data.getYulifer;

    const allProducts = [...products.employer, ...products.charms, ...products.personal];

    const item = allProducts.find((i) => i?.icon === code);

    return item;
  }, [data, code]);

  const IconSvg = useMemo(() => getProductIcon(product?.itemSlot as ItemSlot), [product]);

  const fibState = useSelector(getFIBState);
  const dispatch = useDispatch();

  const shouldResetFib = useSelector(getUserFeatures).resetFib;
  const [updateFibQuote] = useMutation<UpdateTopUpsQuote_updateFibQuote, UpdateTopUpsQuoteVariables>(
    GQL_MUTATION_UPDATE_TOP_UPS_QUOTE
  );
  const quoteId = fibState.latestQuoteId;
  const resetFibJourney = useCallback(async () => {
    if (quoteId) {
      await updateFibQuote({
        variables: { archiveQuote: true, quoteId },
      });
    }

    dispatch(resetFIBUnderwritingJourney());
  }, [dispatch, quoteId, updateFibQuote]);

  const handleNavigateToProductScreen = useCallback(() => {
    onClose();
    navigateToProductScreen({
      product,
      fibState,
      shouldResetFib,
      resetFibJourney,
    });
  }, [product, fibState, shouldResetFib, onClose, resetFibJourney]);

  useBackHandler(() => {
    if (!code || !product) {
      return false;
    }

    onClose();
    return true;
  });

  if (!code || !product) {
    return null;
  }

  const { name, status } = product;

  const isEmployerProduct = getIsEmployerProduct(code);

  return (
    <View style={StyleSheet.flatten([styles.wrapper, getHorizontalPosition(code)])}>
      <View style={styles.shadow} />
      <View style={getContentWrapperStyle(code)}>
        <View style={getTopWrapperStyle(code)}>
          <IconSvg style={StyleSheet.flatten([styles.iconWrapper, { opacity: status !== "active" ? 0.6 : 1 }])} />
          <View style={styles.nameWrapper}>
            <Text bold={true} style={getNameStyle(code)}>
              {name}
            </Text>
          </View>
          {status !== "unlockable" ? null : (
            <View style={styles.statusTextWrapper}>
              <Text style={styles.statusText}>{"not equipped"}</Text>
            </View>
          )}
        </View>
        {isEmployerProduct ? null : (
          <LinearGradient
            style={styles.separator}
            colors={["#C4C4C400", "#5C5C5CFF", "#C4C4C400"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
          />
        )}
        <View style={getBottomWrapperStyle(code)}>
          <CoinLabel yuCoinPower={product.earnRate} />
          <Text style={getCaptionStyle(code)}>{getCaption(status)}</Text>
          <Button
            wrapperStyle={styles.cta}
            type="Primary"
            size="Fill"
            onPress={handleNavigateToProductScreen}
            {...getButtonProps({ product })}
          />
        </View>
      </View>
      <TouchableOpacityWithDelay style={styles.close} onPress={onClose}>
        <CloseSvg type="encircled" stroke={isEmployerProduct ? "white" : null} />
      </TouchableOpacityWithDelay>
    </View>
  );
};

function getButtonProps({ product }: { product: GetYuliferWithAvatar_getYulifer_products_personal }) {
  let label = "";
  let backgroundColor = Colours.darkHotPink;
  let shadowColor = Colours.darkHotPinkShadow;
  let textColor = "white";

  switch (product.status) {
    case "locked":
      label = "Vote now";
      break;
    case "unlockable":
      label = "Unlock";
      break;
    case "active":
      label = "Inspect";
  }

  if (isEmployerItem(product.itemSlot)) {
    backgroundColor = Colours.blue.dp306;
    shadowColor = Colours.blue.dp305;
    textColor = Colours.neutral.n800;
  }

  return {
    label,
    backgroundColor,
    shadowColor,
    textColor,
  };
}

const styles = StyleSheet.create({
  wrapper: {
    position: "absolute",
    top: 160,
    width: Style.adjust(272),
    paddingBottom: 4,
    zIndex: 999,
  } as ViewStyle,
  shadow: {
    position: "absolute",
    bottom: 0,
    right: 0,
    top: 4,
    left: 4,
    backgroundColor: "rgba(0,0,0,0.04)",
    borderRadius: 16,
  } as ViewStyle,
  close: {
    position: "absolute",
    top: 0,
    right: 4,
    padding: 16,
  } as ViewStyle,
  nameWrapper: {
    marginTop: Style.adjust(12),
  } as TextStyle,
  separator: {
    height: 1,
    width: "100%",
    opacity: 0.4,
  } as ViewStyle,
  cta: {
    marginTop: Style.adjust(24),
  } as ViewStyle,
  statusTextWrapper: {
    marginTop: Style.adjust(8),
  } as ViewStyle,
  statusText: {
    fontSize: Style.adjust(16),
    color: Colours.darkHotPink,
    textAlign: "center",
  } as TextStyle,
  iconWrapper: {
    justifyContent: "center",
    alignItems: "center",
    width: Style.adjust(80),
    height: Style.adjust(80),
    alignSelf: "center",
  } as ViewStyle,
  icon: {
    ...StyleSheet.absoluteFillObject,
    height: 70,
  } as ImageStyle,
});

function getHorizontalPosition(code: ProductCode) {
  if (getIsEmployerProduct(code)) {
    return {
      left: Style.adjust(26),
    };
  }

  return {
    right: Style.adjust(26),
  };
}

function getContentWrapperStyle(code: ProductCode) {
  const defaultStyle = {
    backgroundColor: "white",
    width: Style.adjust(268),
    borderWidth: 1,
    borderColor: Colours.neutral.n400,
    borderRadius: 16,
    overflow: "hidden",
  } as ViewStyle;

  if (getIsEmployerProduct(code)) {
    defaultStyle.borderColor = Colours.blue.dp306;
    defaultStyle.borderWidth = 2;
  }

  return defaultStyle;
}

function getTopWrapperStyle(code: ProductCode) {
  const defaultStyle = {
    paddingVertical: Style.adjust(24),
    paddingHorizontal: Style.adjust(24),
    backgroundColor: "white",
  };

  if (getIsEmployerProduct(code)) {
    defaultStyle.backgroundColor = Colours.blue.dp306;
  }

  return defaultStyle;
}

function getBottomWrapperStyle(code: ProductCode) {
  const defaultStyle = {
    paddingVertical: Style.adjust(24),
    paddingHorizontal: Style.adjust(24),
    backgroundColor: "white",
  };

  if (getIsEmployerProduct(code)) {
    defaultStyle.backgroundColor = Colours.blue.dp307;
  }

  return defaultStyle;
}

function getNameStyle(code: ProductCode) {
  const defaultStyle = {
    letterSpacing: 1,
    color: Colours.neutral.n700,
    lineHeight: Style.adjust(24),
    fontSize: Style.adjust(20),
    textAlign: "center",
  } as TextStyle;

  if (getIsEmployerProduct(code)) {
    defaultStyle.color = Colours.neutral.n800;
  }

  return defaultStyle;
}

function getCaptionStyle(code: ProductCode) {
  const defaultStyle = {
    fontSize: Style.adjust(16),
    lineHeight: Style.adjust(20),
    textAlign: "center",
    letterSpacing: 1,
    color: Colours.neutral.n700,
  } as TextStyle;

  if (getIsEmployerProduct(code)) {
    defaultStyle.textAlign = "left";
    defaultStyle.color = Colours.neutral.n800;
  }

  return defaultStyle;
}
