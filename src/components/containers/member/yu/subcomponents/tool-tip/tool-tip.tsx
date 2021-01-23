import React, { memo, useMemo, useCallback, useEffect } from "react";
import { StyleSheet, View, ViewStyle, TextStyle, ImageStyle } from "react-native";
import { Text, Button } from "@atoms";
import { Style, Colours } from "@styles";
import { CloseSvg } from "@atoms";
import { TouchableOpacityWithDelay } from "@molecules";
import {
  GetTopUpsQuote,
  GetTopUpsQuoteVariables,
  GetYulifer,
  UpdateTopUpsQuoteVariables,
  UpdateTopUpsQuote_updateFibQuote,
} from "@graphql/_core/schema";
import { useLazyQuery, useMutation, useQuery } from "@apollo/react-hooks";
import { GQL_QUERY_GET_YULIFER } from "@graphql/yuscreen";
import LinearGradient from "react-native-linear-gradient";
import { getProductIcon } from "../../assets/getProductIcon";
import { getIsEmployerProduct } from "../../yu-types";
import { navigateToProductScreen } from "../../navigation/navigateToProductScreen";
import { useSelector, useDispatch } from "react-redux";
import { getFIBState } from "@redux/product/product.selectors";
import { getUserFeatures } from "@redux/user/user.selectors";
import { refreshFIBStore, resetFIBUnderwritingJourney } from "@redux/product/product.actions";
import { CoinLabel } from "./coin-label";
import { useBackHandler } from "@services/hooks/useBackHandler";
import { ProductCode, YuProductId, YuProductStatus, CoverType } from "@graphql/_core/schema/globalTypes";
import { GQL_MUTATION_UPDATE_TOP_UPS_QUOTE } from "@graphql/products/updateTopUpsQuote";
import { GQL_QUERY_GET_TOP_UPS_QUOTE } from "@graphql/products";
import { IProduct } from "../../../../products/fib/fib.types";

export interface IToolTipProps {
  productId: YuProductId;
  onClose: () => void;
}

export const ToolTip = ({ productId, onClose }: IToolTipProps) => {
  const dispatch = useDispatch();

  const { data } = useQuery<GetYulifer>(GQL_QUERY_GET_YULIFER, {
    fetchPolicy: "cache-only",
  });

  const [getTopUpsQuery, { data: topUpsData }] = useLazyQuery<GetTopUpsQuote, GetTopUpsQuoteVariables>(
    GQL_QUERY_GET_TOP_UPS_QUOTE,
    {
      onCompleted: (responseData) => {
        if (responseData?.getTopUpsQuote?.quoteId) {
          dispatch(refreshFIBStore(responseData.getTopUpsQuote));
        }
      },
    }
  );
  const fibState = useSelector(getFIBState);
  const { productEntityId, latestQuoteId } = fibState;

  useEffect(() => {
    (() => {
      if (productId === YuProductId.family_income_benefit && !topUpsData?.getTopUpsQuote?.quoteId) {
        if (productEntityId && latestQuoteId) {
          getTopUpsQuery({
            variables: {
              product: ProductCode.YULFIB,
              input: {
                customerProductEntityId: productEntityId,
                quoteId: latestQuoteId,
              },
            },
          });
        }
      }
    })();
  }, [getTopUpsQuery, productId, productEntityId, latestQuoteId, topUpsData]);

  const product = useMemo(() => {
    if (!data) {
      return null;
    }

    const { chest, pants, gloves, boots } = data.personal;

    const allProducts: IProduct[] = [...data.additional, chest, pants, gloves, boots];

    const item = allProducts.find((i) => i?.productId === productId);

    return item;
  }, [data, productId]);

  const IconSvg = useMemo(() => getProductIcon(product?.itemSlot), [product]);

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
    if (!productId || !product) {
      return false;
    }

    onClose();
    return true;
  });

  if (!productId || !product) {
    return null;
  }

  const { name, status, coverType } = product;

  const isActive = status === YuProductStatus.active;
  const isLocked = status === YuProductStatus.locked;
  const isUnlockable = status === YuProductStatus.unlockable;

  return (
    <View style={StyleSheet.flatten([styles.wrapper, getHorizontalPosition(productId)])}>
      <View style={styles.shadow} />
      <View style={getContentWrapperStyle(coverType, isActive)}>
        <View style={getTopWrapperStyle(coverType, isActive)}>
          <MemoizedLinearGradient colorTheme={getLinearGradientColorTheme(coverType, isActive)} />
          <IconSvg status={status} style={StyleSheet.flatten([styles.iconWrapper, { opacity: !isActive ? 0.7 : 1 }])} />
          <View style={styles.nameWrapper}>
            <Text bold={true} style={getNameStyle(isActive)}>
              {isLocked ? "Coming soon" : name}
            </Text>
          </View>
          {!isUnlockable ? null : (
            <View style={styles.statusTextWrapper}>
              <Text style={styles.statusText}>{"Not equipped"}</Text>
            </View>
          )}
        </View>
        {isActive ? null : <MemoizedLineBreak />}
        <View style={getBottomWrapperStyle(coverType, isActive)}>
          <CoinLabel yuCoinPower={product.earnRate} />
          <Text style={getCaptionStyle(isActive)}>{product.description}</Text>
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
        <CloseSvg type="encircledMono" stroke={isActive ? Colours.neutral.white : Colours.neutral.n200} />
      </TouchableOpacityWithDelay>
    </View>
  );
};

const MemoizedLineBreak = memo(() => (
  <LinearGradient
    style={styles.separator}
    colors={["#C4C4C400", "#5C5C5CFF", "#C4C4C400"]}
    start={{ x: 0, y: 0 }}
    end={{ x: 1, y: 0 }}
  />
));

const MemoizedLinearGradient = memo(({ colorTheme = [] }: { colorTheme: string[] }) => {
  if (!colorTheme.length) {
    return null;
  }

  return (
    <LinearGradient style={styles.backgroundGradient} colors={colorTheme} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} />
  );
});

function getLinearGradientColorTheme(coverType: CoverType, isActive: boolean) {
  if (!isActive) {
    return [];
  }

  if (coverType === CoverType.common) {
    return [Colours.products.fib.commonGradientDark, Colours.products.fib.commonGradientLight];
  }

  if (coverType === CoverType.rare) {
    return [Colours.products.fib.rare, Colours.products.fib.rareGradientLight];
  }

  if (coverType === CoverType.epic) {
    return [Colours.products.fib.epic, Colours.products.fib.epicGradientLight];
  }

  return [];
}

function getButtonProps({ product }: { product: IProduct }) {
  let label = "";
  let backgroundColor = Colours.darkHotPink;
  let shadowColor = Colours.darkHotPinkShadow;
  let textColor = "white";

  switch (product.status) {
    case YuProductStatus.locked:
      label = "Vote now";
      break;
    case YuProductStatus.unlockable:
      label = "Upgrade";
      break;
    case YuProductStatus.active:
      label = "Inspect";
      backgroundColor = Colours.products.fib[product.coverType];
      shadowColor = Colours.products.fib[`${product.coverType}Shadow` as keyof typeof Colours["products"]["fib"]];
      textColor = Colours.neutral.white;
      break;
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
  backgroundGradient: {
    ...StyleSheet.absoluteFillObject,
  } as ViewStyle,
  cta: {
    marginTop: Style.adjust(24),
  } as ViewStyle,
  statusTextWrapper: {
    marginTop: Style.adjust(8),
  } as ViewStyle,
  statusText: {
    fontSize: Style.adjust(16),
    lineHeight: Style.adjust(24),
    letterSpacing: 0.6,
    color: Colours.primary.p600,
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

function getHorizontalPosition(productId: YuProductId) {
  if (getIsEmployerProduct(productId)) {
    return {
      left: Style.adjust(26),
    };
  }

  return {
    right: Style.adjust(26),
  };
}

function getContentWrapperStyle(coverType: CoverType, isActive: boolean) {
  const defaultStyle = {
    backgroundColor: "white",
    width: Style.adjust(268),
    borderWidth: 1,
    borderColor: Colours.neutral.n400,
    borderRadius: 16,
    overflow: "hidden",
  } as ViewStyle;

  if (isActive) {
    defaultStyle.backgroundColor = Colours.products.fib[coverType];
    defaultStyle.borderColor = Colours.products.fib[`${coverType}Shadow` as keyof typeof Colours["products"]["fib"]];
    defaultStyle.borderWidth = 2;
  }

  return defaultStyle;
}

function getTopWrapperStyle(coverType: CoverType, isActive: boolean) {
  const defaultStyle = {
    paddingVertical: Style.adjust(24),
    paddingHorizontal: Style.adjust(24),
    backgroundColor: "white",
  };

  if (isActive) {
    defaultStyle.backgroundColor = Colours.products.fib[coverType];
  }

  return defaultStyle;
}

function getBottomWrapperStyle(coverType: CoverType, isActive: boolean) {
  const defaultStyle = {
    paddingVertical: Style.adjust(24),
    paddingHorizontal: Style.adjust(24),
    backgroundColor: "white",
  };

  if (isActive) {
    if (coverType === CoverType.common) {
      defaultStyle.backgroundColor = Colours.secondary.s10S1;
    } else if (coverType === CoverType.rare) {
      defaultStyle.backgroundColor = Colours.secondary.s10S2;
    } else if (coverType === CoverType.epic) {
      defaultStyle.backgroundColor = Colours.secondary.s10S3;
    }
  }

  return defaultStyle;
}

function getNameStyle(isActive: boolean) {
  const defaultStyle = {
    letterSpacing: 1,
    color: Colours.neutral.n700,
    lineHeight: Style.adjust(24),
    fontSize: Style.adjust(20),
    textAlign: "center",
  } as TextStyle;

  if (isActive) {
    defaultStyle.color = Colours.neutral.white;
  }

  return defaultStyle;
}

function getCaptionStyle(isActive: boolean) {
  const defaultStyle = {
    fontSize: Style.adjust(16),
    lineHeight: Style.adjust(24),
    letterSpacing: 0.6,
    textAlign: "center",
    color: Colours.neutral.n700,
  } as TextStyle;

  if (isActive) {
    defaultStyle.textAlign = "left";
  }

  return defaultStyle;
}
