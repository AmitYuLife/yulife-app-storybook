import React, { useContext, useEffect, useMemo } from "react";
import { Animated, KeyboardAvoidingView, Platform, StyleSheet, View, ViewStyle } from "react-native";
import { GetPersonalProductStepQuery } from "@graphql/__generated";
import { PRODUCT_STEP_BODY_SCROLL_VIEW } from "@ids";
import { Style } from "@styles";
import media from "@styles/media";
import {
  ProductStepContentItemButton,
  ProductStepMarkdown,
  ProductStepProductInfo,
  ProductStepYugiConfirm,
  ProductStepPackageCards,
  ProductStepCoverPicker,
  ProductStepPercentPicker,
  ProductStepProductPreview,
  ProductStepContentItemTextInput,
  ProductStepContentItemDatePicker,
  ProductStepContentItemRadio,
  ProductStepContentItemMultiSelect,
  ProductStepContentItemMultiButton,
  ProductStepContentItemScrollPicker,
  ProductStepContentItemConfirm,
  ProductStepContentItemLottie,
  ProductStepContentItemReviewAnswer,
  ProductStepSelectedPackageCard,
  ProductStepSelectedPackageCards,
  ProductStepContentItemInfoButton,
  ProductStepSelectPaymentButton,
  ProductStepSelectedPackageAccordion,
  ProductStepAgePercentCoverPicker,
  ProductItemDropdownInput,
} from "../../subcomponents";
import {
  ContentItemInfoCard,
  ContentItemPad,
  ContentItemText,
  ContentItemImage,
  ContentItemList,
  ContentItemPackageCardPower,
  ContentItemYuCoinPower,
  ContentItemRowIconTextBanner,
  ContentItemCostPayoutBenefitCard,
  ContentItemHint,
} from "@components/sdui";
import { ProductStepContext } from "../../product-step.context";
import { ProductStepContentItemGpDetails } from "../../subcomponents/product-step.gp-details";
import { ProductStepContentItemChoice } from "@containers/products/product-step/subcomponents/product-step.choice";

type GPPS_Body = GetPersonalProductStepQuery["getPersonalProductStep"]["body"];
interface Props {
  body: GPPS_Body;
  headerHeight: number;
}

const DEFAULT_EXTRA_TOP_PADDING = media.select(
  [
    {
      condition: Platform.OS === "ios" && Style.hasNotch,
      value: -24,
    },
    {
      condition: Platform.OS === "ios",
      value: 0,
    },
  ],
  Style.adjust(24)
);

const keyboardAvoidingViewBehavior = Platform.select({
  ios: "padding" as "padding",
  android: null,
});

export const Body = (props: Props) => {
  const { headerHeight } = props;
  const headerPadStyle = useMemo(() => ({ height: headerHeight + DEFAULT_EXTRA_TOP_PADDING }), [headerHeight]);
  const { scrollValue } = useContext(ProductStepContext);

  useEffect(() => {
    scrollValue?.setValue(0);
  }, [props.body]);

  return (
    <KeyboardAvoidingView behavior={keyboardAvoidingViewBehavior} style={styles.avoidingViewWrapper}>
      <Animated.ScrollView
        scrollEventThrottle={16}
        onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: scrollValue } } }], { useNativeDriver: true })}
        showsVerticalScrollIndicator={false}
        style={styles.wrapper}
        testID={PRODUCT_STEP_BODY_SCROLL_VIEW}
        bounces={true}
      >
        {!headerHeight ? null : <View style={headerPadStyle} />}
        {props.body.map(renderItemContent)}
      </Animated.ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  } as ViewStyle,
  avoidingViewWrapper: {
    flex: 1,
  } as ViewStyle,
});

const renderItemContent = (item: GPPS_Body[0]): JSX.Element => {
  switch (item.__typename) {
    case "ContentItemInfoCard":
      return <ContentItemInfoCard key={item.id} {...item} />;
    case "ContentItemLottie":
      return <ProductStepContentItemLottie key={item.id} {...item} />;
    case "ContentItemText":
      return <ContentItemText key={item.id} {...item} />;
    case "ContentItemMarkdown":
      return <ProductStepMarkdown key={item.id} {...item} />;
    case "ContentItemPad":
      return <ContentItemPad key={item.id} {...item} />;
    case "ContentItemPersonalProductSelectPaymentButton":
      return <ProductStepSelectPaymentButton key={item.id} {...item} />;
    case "ContentItemInfoButton":
      return <ProductStepContentItemInfoButton key={item.id} {...item} />;
    case "ContentItemButton":
      return <ProductStepContentItemButton key={item.id} {...item} />;
    case "ContentItemTextInput":
      return <ProductStepContentItemTextInput key={item.id} {...item} />;
    case "ContentItemYugiConfirm":
      return <ProductStepYugiConfirm key={item.id} {...item} />;
    case "ContentItemPersonalProductInfo":
      return <ProductStepProductInfo key={item.id} {...item} />;
    case "ContentItemSelectedPackageCard":
      return <ProductStepSelectedPackageCard key={item.id} {...item} />;
    case "ContentItemSelectedPackageCards":
      return <ProductStepSelectedPackageCards key={item.id} {...item} />;
    case "ContentItemPackageCards":
      return <ProductStepPackageCards key={item.id} {...item} />;
    case "ContentItemPersonalProductPreview":
      return <ProductStepProductPreview key={item.id} {...item} />;
    case "ContentItemCoverPicker":
      return <ProductStepCoverPicker key={item.id} {...item} />;
    case "ContentItemScrollableItemsPicker":
      return <ProductStepPercentPicker key={item.id} {...item} />;
    case "ContentItemDatePicker":
      return <ProductStepContentItemDatePicker key={item.id} {...item} />;
    case "ContentItemRadio":
      return <ProductStepContentItemRadio key={item.id} {...item} />;
    case "ContentItemMultiSelect":
      return <ProductStepContentItemMultiSelect key={item.id} {...item} />;
    case "ContentItemMultiButton":
      return <ProductStepContentItemMultiButton key={item.id} {...item} />;
    case "ContentItemScrollPicker":
      return <ProductStepContentItemScrollPicker key={item.id} {...item} />;
    case "ContentItemConfirm":
      return <ProductStepContentItemConfirm key={item.id} {...item} />;
    case "ContentItemImage":
      return <ContentItemImage key={item.id} {...item} />;
    case "ContentItemPersonalProductReviewItem":
      return <ProductStepContentItemReviewAnswer key={item.id} {...item} />;
    case "ContentItemRowIconTextBanner":
      return <ContentItemRowIconTextBanner key={item.id} {...item} />;
    case "ContentItemList":
      return <ContentItemList key={item.id} {...item} />;
    case "ContentItemGpDetails":
      return <ProductStepContentItemGpDetails key={item.id} {...item} />;
    case "ContentItemPackageCardPower":
      return <ContentItemPackageCardPower key={item.id} {...item} />;
    case "ContentItemSelectedPackageAccordion":
      return <ProductStepSelectedPackageAccordion key={item.id} {...item} />;
    case "ContentItemYuCoinPower":
      return <ContentItemYuCoinPower key={item.id} {...item} />;
    case "ContentItemAgePercentCoverPicker":
      return <ProductStepAgePercentCoverPicker key={item.id} {...item} />;
    case "ContentItemCostPayoutBenefitCard":
      return <ContentItemCostPayoutBenefitCard key={item.id} {...item} />;
    case "ContentItemDropdownInput":
      return <ProductItemDropdownInput key={item.id} {...item} />;
    case "ContentItemHint":
      return <ContentItemHint key={item.id} {...item} />;
    case "ContentItemChoice":
      return <ProductStepContentItemChoice key={item.id} {...item} />;
    default:
      return null;
  }
};
