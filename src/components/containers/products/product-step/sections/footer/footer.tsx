import React, { memo, useMemo } from "react";
import { Platform, StyleSheet, View, ViewStyle } from "react-native";
import { GetPersonalProductStep_getPersonalProductStep_footer as GPPS_Footer } from "@graphql/_core/schema";
import { ContentItemFade, ContentItemOverlay, ContentItemPad } from "@components/sdui";
import { useKeyboardListeners } from "@services/hooks/useKeyboardListeners";
import { ProductStepContentItemButton, ProductStepContentItemMultiButton } from "../../subcomponents";
import media from "@styles/media";
import { Style } from "@styles";

interface Props {
  footer: GPPS_Footer[];
  footerStyle: ViewStyle;
}

export const Footer = memo((props: Props) => {
  const isShowingKeyboard = useKeyboardListeners();

  const wrapperStyle = useMemo(() => {
    return [styles.wrapper, props.footerStyle];
  }, [props.footerStyle]);

  return (
    <View pointerEvents="box-none" style={wrapperStyle}>
      {!isShowingKeyboard || Platform.OS === "ios" ? props.footer.map(renderItemContent) : null}
    </View>
  );
});

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
    left: 0,
    right: 0,
    bottom: 0,
    paddingLeft: Style.adjust(16),
    paddingRight: Style.adjust(16),
    paddingBottom,
  } as ViewStyle,
});

const renderItemContent = (item: GPPS_Footer): JSX.Element => {
  switch (item.__typename) {
    case "ContentItemButton":
      return <ProductStepContentItemButton key={item.id} {...item} />;
    case "ContentItemMultiButton":
      return <ProductStepContentItemMultiButton key={item.id} {...item} />;
    case "ContentItemOverlay":
      return <ContentItemOverlay key={item.id} {...item} Button={ProductStepContentItemButton} />;
    case "ContentItemFade":
      return <ContentItemFade key={item.id} {...item} />;
    case "ContentItemPad":
      return <ContentItemPad key={item.id} {...item} />;
    default:
      return null;
  }
};
