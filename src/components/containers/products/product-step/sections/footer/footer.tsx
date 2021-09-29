import React, { useEffect, useState } from "react";
import { Keyboard, Platform, StyleSheet, View, ViewStyle } from "react-native";
import { GetPersonalProductStep_getPersonalProductStep_footer as GPPS_Footer } from "@graphql/_core/schema";
import { ContentItemOverlay } from "@components/sdui";
import { ProductStepContentItemButton, ProductStepContentItemMultiButton } from "../../subcomponents";
import media from "@styles/media";
import { Style } from "@styles";

interface Props {
  footer: GPPS_Footer[];
}

export const Footer = (props: Props) => {
  const [isShowingKeyboard, setIsShowingKeyboard] = useState(false);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener("keyboardDidShow", () => setIsShowingKeyboard(true));
    const keyboardDidHideListener = Keyboard.addListener("keyboardDidHide", () => setIsShowingKeyboard(false));

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);
  return (
    <View pointerEvents="box-none" style={styles.wrapper}>
      {!isShowingKeyboard || Platform.OS === "ios" ? props.footer.map(renderItemContent) : null}
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
      return <ProductStepContentItemButton key={item.id} {...item} />;
    case "ContentItemMultiButton":
      return <ProductStepContentItemMultiButton key={item.id} {...item} />;
    case "ContentItemOverlay":
      return <ContentItemOverlay key={item.id} {...item} Button={ProductStepContentItemButton} />;
    default:
      return null;
  }
};
