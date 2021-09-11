import React, { useMemo } from "react";
import { ScrollView, StyleSheet, View, ViewStyle } from "react-native";
import { GetPersonalProductStep_getPersonalProductStep_body as GPPS_Body } from "@graphql/_core/schema";
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
} from "../../subcomponents";
import { ContentItemInfoCard, ContentItemPad, ContentItemReviewItem } from "@components/sdui";
import { Style } from "@styles";

interface Props {
  body: GPPS_Body[];
  headerHeight: number;
}

const DEFAULT_EXTRA_TOP_PADDING = Style.adjust(24);

export const Body = (props: Props) => {
  const { headerHeight } = props;
  const headerPadStyle = useMemo(() => ({ height: headerHeight + DEFAULT_EXTRA_TOP_PADDING }), [headerHeight]);

  return (
    <>
      {!headerHeight ? null : <View style={headerPadStyle} />}
      <ScrollView showsVerticalScrollIndicator={false} style={styles.wrapper}>
        {props.body.map(renderItemContent)}
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  } as ViewStyle,
});

const renderItemContent = (item: GPPS_Body): JSX.Element => {
  switch (item.__typename) {
    case "ContentItemInfoCard":
      return <ContentItemInfoCard key={item.id} {...item} />;
    case "ContentItemMarkdown":
      return <ProductStepMarkdown key={item.id} {...item} />;
    case "ContentItemPad":
      return <ContentItemPad key={item.id} {...item} />;
    case "ContentItemButton":
      return <ProductStepContentItemButton key={item.id} {...item} />;
    case "ContentItemTextInput":
      return <ProductStepContentItemTextInput key={item.id} {...item} />;
    case "ContentItemYugiConfirm":
      return <ProductStepYugiConfirm key={item.id} {...item} />;
    case "ContentItemPersonalProductInfo":
      return <ProductStepProductInfo key={item.id} {...item} />;
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
    case "ContentItemReviewItem":
      return <ContentItemReviewItem key={item.id} {...item} />;
    default:
      return null;
  }
};
