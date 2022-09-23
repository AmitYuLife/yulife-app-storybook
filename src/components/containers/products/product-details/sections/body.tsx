import React, { useContext, useMemo } from "react";
import { Animated, Platform, StyleSheet, View, ViewStyle } from "react-native";
import { GetYuScreenProductDetails_getYuScreenProductDetails_body as BodyItems } from "@graphql/_core/schema";
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
} from "@components/sdui";
import { ProductDetailsButton } from "../subcomponents/product-details.button";
import media from "@styles/media";
import { Style } from "@styles";

interface Props {
  body: BodyItems[];
  headerHeight?: number;
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

export const Body = (props: Props) => {
  const { headerHeight } = props;
  const headerPadStyle = useMemo(() => ({ height: headerHeight + DEFAULT_EXTRA_TOP_PADDING }), [headerHeight]);
  const uiContext = useContext(UiContext);

  return (
    <Animated.ScrollView
      scrollEventThrottle={16}
      onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: uiContext.scrollValue } } }], {
        useNativeDriver: true,
      })}
      showsVerticalScrollIndicator={false}
      style={styles.wrapper}
      bounces={false}
    >
      {!headerHeight ? null : <View style={headerPadStyle} />}
      {props.body.map(renderItemContent)}
    </Animated.ScrollView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  } as ViewStyle,
});

const renderItemContent = (item: BodyItems): JSX.Element => {
  switch (item.__typename) {
    case "ContentItemProductDetailsHeader":
      return <ProductDetailsHeader key={item.id} {...item} />;
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
    default:
      return null;
  }
};
