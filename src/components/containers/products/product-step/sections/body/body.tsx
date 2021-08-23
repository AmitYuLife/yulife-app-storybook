import React, { useMemo } from "react";
import { ScrollView, StyleSheet, View, ViewStyle } from "react-native";
import { GetPersonalProductStep_getPersonalProductStep_body as GPPS_Body } from "@graphql/_core/schema";
import { ContentItemInfoCard, ContentItemMarkdown, ContentItemPad, ContentItemYugiConfirm } from "@components/sdui";
import { ProductStepContentItemButton } from "../../subcomponents/product-step.button";

interface Props {
  body: GPPS_Body[];
  headerHeight: number;
}

export const Body = (props: Props) => {
  const { headerHeight } = props;

  const headerPadStyle = useMemo(() => ({ height: headerHeight }), [headerHeight]);

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
      return <ContentItemMarkdown key={item.id} {...item} />;
    case "ContentItemPad":
      return <ContentItemPad key={item.id} {...item} />;
    case "ContentItemButton":
      return <ProductStepContentItemButton key={item.id} {...item} />;
    case "ContentItemYugiConfirm":
      return <ContentItemYugiConfirm key={item.id} {...item} />;
    default:
      return null;
  }
};
