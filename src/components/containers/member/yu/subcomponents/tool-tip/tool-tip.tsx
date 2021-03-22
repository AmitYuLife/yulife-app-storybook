import React, { memo, useCallback, useEffect, useContext } from "react";
import { StyleSheet, View, ViewStyle, TextStyle, ImageStyle, Image } from "react-native";
import { Text, Button, CloseSvg, PackageType } from "@atoms";
import { Style, Colours } from "@styles";
import { TouchableOpacityWithDelay, ValueDescription } from "@molecules";
import {
  GetTopUpsQuote,
  GetTopUpsQuoteVariables,
  UpdateTopUpsQuoteVariables,
  UpdateTopUpsQuote_updateFibQuote,
  YuScreenProductSlotItem,
} from "@graphql/_core/schema";
import { useLazyQuery, useMutation } from "@apollo/react-hooks";
import LinearGradient from "react-native-linear-gradient";
import { navigateToProductScreen } from "../../navigation/navigateToProductScreen";
import { useSelector, useDispatch } from "react-redux";
import { getFIBState } from "@redux/product/product.selectors";
import { refreshFIBStore, resetFIBUnderwritingJourney } from "@redux/product/product.actions";
import { CoinLabel } from "./coin-label";
import { useBackHandler } from "@services/hooks/useBackHandler";
import { ProductCode, YuProductId, YuProductStatus, CoverType, YuItemSlot } from "@graphql/_core/schema/globalTypes";
import { GQL_MUTATION_UPDATE_TOP_UPS_QUOTE } from "@graphql/products/updateTopUpsQuote";
import { GQL_QUERY_GET_TOP_UPS_QUOTE } from "@graphql/products";

import {
  logProductItemInspectedActionCreator,
  logProductItemViewedActionCreator,
} from "@redux/logging/logging.actions";
import { YuScreenProductContext } from "../../yu-screen.context";
import { getUserFeatures } from "@redux/user/user.selectors";

export const ToolTip = () => {
  const dispatch = useDispatch();
  const { product, setProduct } = useContext(YuScreenProductContext);
  const showNewYuScreen = useSelector(getUserFeatures).showNewYuScreen;

  const onClose = useCallback(() => setProduct(null), [setProduct]);
  const isProductEmpty = Object.keys(product || {}).length > 0;

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
    dispatch(logProductItemViewedActionCreator(product?.productId));
  }, [product, dispatch]);

  useEffect(() => {
    (() => {
      if (product?.productId === YuProductId.family_income_benefit && !topUpsData?.getTopUpsQuote?.quoteId) {
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
  }, [getTopUpsQuery, product, productEntityId, latestQuoteId, topUpsData]);

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
    dispatch(logProductItemInspectedActionCreator(product.productId));
    onClose();
    navigateToProductScreen({
      product: {
        ...product,
        itemSlot: product?.icon?.name.toLowerCase() as YuItemSlot, //we will have this just until we can remove the legacy
      },
      fibState,
      resetFibJourney,
      showNewYuScreen,
    });
  }, [product, fibState, onClose, resetFibJourney, dispatch, showNewYuScreen]);

  useBackHandler(() => {
    if (!isProductEmpty) {
      return false;
    }

    onClose();
    return true;
  });

  if (!isProductEmpty) {
    return null;
  }

  const { toolTip, status, coverType } = product;

  const isActive = status === YuProductStatus.active;
  const isUnlockable = status === YuProductStatus.unlockable;

  return (
    <View style={StyleSheet.flatten(styles.wrapper)}>
      <View style={styles.shadow} />
      <View style={getContentWrapperStyle(coverType, isActive)}>
        <View style={getTopWrapperStyle(coverType, isActive)}>
          <MemoizedLinearGradient colorTheme={getLinearGradientColorTheme(coverType, isActive)} />
          <Image resizeMode="contain" source={{ uri: toolTip.itemUrl }} style={styles.iconWrapper} />
          {!coverType ? null : (
            <View style={styles.coverTypeWrapper}>
              <PackageType type={coverType} />
            </View>
          )}
          <View style={styles.nameWrapper}>
            <Text bold={true} style={getNameStyle(isActive)}>
              {toolTip?.name}
            </Text>
          </View>
          {!isUnlockable ? null : (
            <View style={styles.statusTextWrapper}>
              <Text style={styles.statusText}>{"Not equipped"}</Text>
            </View>
          )}
        </View>
        <View style={getBottomWrapperStyle(coverType, isActive)}>
          {toolTip?.heading ? (
            <ValueDescription
              description={toolTip.heading.replace(/\d+/g, "")}
              value={toolTip?.heading.match(/\d+/g).toString()}
              type="default"
              style={styles.heading}
            />
          ) : null}
          {product?.earnRate ? <CoinLabel yuCoinPower={product?.earnRate} /> : null}
          <MemoizedLineBreak />
          <Text style={getCaptionStyle(isActive)}>{toolTip?.description.short}</Text>
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

function getButtonProps({ product }: { product: YuScreenProductSlotItem }) {
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
    alignSelf: "center",
    width: Style.adjust(272),
    paddingBottom: 4,
    left: 0,
  } as ViewStyle,
  coverTypeWrapper: {
    alignSelf: "center",
    marginTop: Style.adjust(16),
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
    marginBottom: Style.adjust(8),
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
    width: Style.adjust(72),
    height: Style.adjust(72),
    alignSelf: "center",
  },
  icon: {
    ...StyleSheet.absoluteFillObject,
    height: 70,
  } as ImageStyle,
  heading: {
    marginBottom: Style.adjust(8),
  } as ViewStyle,
});

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
    paddingVertical: 0,
    paddingHorizontal: Style.adjust(24),
    paddingBottom: 24,
    backgroundColor: "white",
  };

  if (isActive) {
    defaultStyle.paddingVertical = 24;
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
    marginTop: Style.adjust(16),
    letterSpacing: 0.6,
    textAlign: "center",
    color: Colours.neutral.n700,
  } as TextStyle;

  if (isActive) {
    defaultStyle.textAlign = "left";
  }

  return defaultStyle;
}
