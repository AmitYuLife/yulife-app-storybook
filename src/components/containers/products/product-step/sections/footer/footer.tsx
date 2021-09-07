import React from "react";
import { Platform, StyleSheet, View, ViewStyle } from "react-native";
import { GetPersonalProductStep_getPersonalProductStep_footer as GPPS_Footer } from "@graphql/_core/schema";
import { ContentItemOverlay } from "@components/sdui";
import { ProductStepContentItemButton, ProductStepContentItemMultiButton } from "../../subcomponents";
import media from "@styles/media";
import { Style } from "@styles";

interface Props {
  footer: GPPS_Footer[];
}

export const Footer = (props: Props) => {
  return (
    <View pointerEvents="box-none" style={styles.wrapper}>
      {props.footer.map(renderItemContent)}
    </View>
  );
};

const paddingBottom = media.select(
  [
    {
      condition: Platform.OS === "ios" && Style.hasNotch,
      value: Style.adjust(40),
    },
  ],
  Style.adjust(20)
);

const styles = StyleSheet.create({
  wrapper: {
    position: "absolute",
    left: Style.adjust(16),
    right: Style.adjust(16),
    bottom: 0,
    paddingBottom,
  } as ViewStyle,
});

const renderItemContent = (item: GPPS_Footer): JSX.Element => {
  switch (item.__typename) {
    case "ContentItemButton":
      return <ProductStepContentItemButton key={item.id} {...item} hasValidation={true} />;
    case "ContentItemMultiButton":
      return <ProductStepContentItemMultiButton key={item.id} {...item} />;
    case "ContentItemOverlay":
      return <ContentItemOverlay key={item.id} {...item} Button={ProductStepContentItemButton} />;
    default:
      return null;
  }
};
