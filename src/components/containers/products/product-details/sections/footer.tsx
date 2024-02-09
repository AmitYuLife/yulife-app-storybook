import React, { memo, useMemo } from "react";
import { Platform, StyleSheet, View, ViewStyle } from "react-native";
import { ContentItemFade, ContentItemPad } from "@components/sdui";
import { useKeyboardListeners } from "@hooks";
import media from "@styles/media";
import { Style } from "@styles";
import { ProductDetailsButton } from "../subcomponents/product-details.button";
import { GetYuScreenProductDetailsQuery } from "@graphql/__generated";

type IPropsFooter = GetYuScreenProductDetailsQuery["getYuScreenProductDetails"]["footer"];
interface Props {
  footer: IPropsFooter;
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

const renderItemContent = (item: IPropsFooter[0]): JSX.Element => {
  switch (item.__typename) {
    case "ContentItemButton":
      return <ProductDetailsButton key={item.id} {...item} />;
    case "ContentItemFade":
      return <ContentItemFade key={item.id} {...item} />;
    case "ContentItemPad":
      return <ContentItemPad key={item.id} {...item} />;
    default:
      return null;
  }
};
