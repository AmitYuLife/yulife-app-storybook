import React, { useContext } from "react";
import { LayoutChangeEvent, StyleSheet, View, ViewStyle } from "react-native";
import { GetPersonalProductStep_getPersonalProductStep_header as GPPS_Header } from "@graphql/_core/schema";
import { ContentItemProgressBar, ContentItemProcessingTimer } from "@components/sdui";
import { Colours } from "@styles";
import { ProductStepContentItemHeader, ProductStepMarkdown, ProductStepSearchPostcode } from "../../subcomponents";
import { ProductStepContext } from "../../product-step.context";

interface Props {
  header: GPPS_Header[];
  onLayout: (e: LayoutChangeEvent) => void;
}

export const Header = (props: Props) => {
  const { headerBottom } = useContext(ProductStepContext);

  return (
    <View onLayout={props.onLayout} style={[styles.wrapper, { bottom: headerBottom }]}>
      {props.header?.map(renderItemContent)}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    backgroundColor: Colours.neutral.white,
  } as ViewStyle,
});

const renderItemContent = (item: GPPS_Header): JSX.Element => {
  switch (item.__typename) {
    case "ContentItemHeaderBar":
      return <ProductStepContentItemHeader key={item.__typename} {...item} />;
    case "ContentItemProgressBar":
      return <ContentItemProgressBar key={item.id} {...item} />;
    case "ContentItemSearchPostcode":
      return <ProductStepSearchPostcode key={item.__typename} {...item} />;
    case "ContentItemMarkdown":
      return <ProductStepMarkdown key={item.id} {...item} />;
    case "ContentItemProcessingTimer":
      return <ContentItemProcessingTimer key={item.id} {...item} />;
    default:
      return null;
  }
};
