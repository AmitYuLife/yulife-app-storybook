import React, { useContext, useMemo } from "react";
import { Animated, View, ViewStyle } from "react-native";
import { ProductDetailsHeader } from "../subcomponents/product-details.header";
import { UiContext } from "../product-details.context";
import {
  ContentItemBeneficiariesSection,
  ContentItemImage,
  ContentItemRowIconTextBanner,
  ContentItemText,
  ContentItemKeyValueBox,
  ContentItemInfoCard,
  ContentItemPad,
  ContentItemMarkdown,
  ContentItemYuCoinPower,
  ContentItemLinearGradient,
  ContentItemWrapper,
  ContentItemHint,
  ContentItemBoxOptionCard,
  mapServerStyles,
} from "@components/sdui";
import { ProductDetailsButton } from "../subcomponents/product-details.button";
import { Colours, Style, StyleSheet } from "@styles";
import { ProductDetailsHoldingHeader } from "../subcomponents/product-details.holding-header/product-details.holding-header";
import { PRODUCT_DETAILS_SCROLL_VIEW } from "@ids";
import { GetYuScreenProductDetailsQuery, SduiStyle } from "@graphql/__generated";
import { initialWindowMetrics } from "react-native-safe-area-context";

type IGetYuScreenProductDetails = GetYuScreenProductDetailsQuery["getYuScreenProductDetails"];

interface Props {
  body: IGetYuScreenProductDetails["body"];
  headerHeight?: number;
  containerStyles?: SduiStyle[];
  contentInsetAdjustmentBehavior: IGetYuScreenProductDetails["contentInsetAdjustmentBehavior"];
}

const DEFAULT_EXTRA_TOP_PADDING = Style.adjust(24) + initialWindowMetrics.insets.top;

export const Body = (props: Props) => {
  const { body, headerHeight, containerStyles, contentInsetAdjustmentBehavior } = props;

  const headerPadStyle = useMemo(() => ({ height: headerHeight + DEFAULT_EXTRA_TOP_PADDING }), [headerHeight]);

  const containerStyleObj = useMemo(() => {
    const result = mapServerStyles(containerStyles);

    return {
      ...result,
      backgroundColor: result?.backgroundColor || Colours.neutral.white,
    };
  }, [containerStyles]);

  const uiContext = useContext(UiContext);

  return (
    <Animated.ScrollView
      testID={PRODUCT_DETAILS_SCROLL_VIEW}
      scrollEventThrottle={16}
      onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: uiContext.scrollValue } } }], {
        useNativeDriver: true,
      })}
      showsVerticalScrollIndicator={false}
      style={styles.wrapper}
      bounces={true}
      contentInsetAdjustmentBehavior={contentInsetAdjustmentBehavior}
    >
      <View>
        {!headerHeight ? null : <View style={headerPadStyle} />}
        <View style={containerStyleObj}>{body.map(renderItemContent)}</View>
      </View>
    </Animated.ScrollView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  } as ViewStyle,
  background: {
    backgroundColor: Colours.neutral.white,
  } as ViewStyle,
});

const renderItemContent = (item: IGetYuScreenProductDetails["body"][number]): React.ReactNode => {
  switch (item.__typename) {
    case "ContentItemProductDetailsHeader":
      return <ProductDetailsHeader key={item.id} {...item} />;
    case "ContentItemProductDetailsHoldingHeader":
      return <ProductDetailsHoldingHeader key={item.id} {...item} />;
    case "ContentItemText":
      return <ContentItemText key={item.id} {...item} />;
    case "ContentItemKeyValueBox":
      return <ContentItemKeyValueBox key={item.id} {...item} />;
    case "ContentItemImage":
      return <ContentItemImage key={item.id} {...item} />;
    case "ContentItemRowIconTextBanner":
      return <ContentItemRowIconTextBanner key={item.id} {...item} />;
    case "ContentItemButton":
      return <ProductDetailsButton key={item.id} {...item} />;
    case "ContentItemBeneficiariesSection":
      return <ContentItemBeneficiariesSection key={item.id} {...item} />;
    case "ContentItemInfoCard":
      return <ContentItemInfoCard key={item.id} {...item} />;
    case "ContentItemPad":
      return <ContentItemPad key={item.id} {...item} />;
    case "ContentItemMarkdown":
      return <ContentItemMarkdown key={item.id} {...item} />;
    case "ContentItemYuCoinPower":
      return <ContentItemYuCoinPower key={item.id} {...item} />;
    case "ContentItemLinearGradient":
      return <ContentItemLinearGradient key={item.id} {...item} />;
    case "ContentItemWrapper":
      return <ContentItemWrapper key={item.id} {...item} />;
    case "ContentItemHint":
      return <ContentItemHint key={item.id} {...item} />;
    case "ContentItemBoxOptionCard":
      return <ContentItemBoxOptionCard key={item.id} {...item} />;
    default:
      return null;
  }
};
