import React, { useMemo } from "react";
import { View } from "react-native";
import { t } from "@locale";
import { Navigation } from "@navigation/main";
import { labels as navigationTabs } from "@navigation/root";
import { ROUTES } from "@navigation/constants";
import { useUserFeatures } from "@hooks";
import { ScrollableContentOverlay } from "@components/modals/scrollable-content-overlay/scrollable-content-overlay";
import Markdown from "@components/molecules/markdown/markdown";
import { ImageCachePolicy } from "@atoms";
import { Colours, Style, StyleSheet } from "@styles";
import { ItemListItems } from "./yumoji-item";
import { CroppedImage } from "./croppedImage";

interface IProps {
  item: ItemListItems;
}

export const LockedModal = ({ item }: IProps) => {
  const { gameEnableExpoImageDiskCachingPolicyInYumojiBuilder } = useUserFeatures();

  const { title, message, cta, ctaText } = item.modal || {};
  const tab = navigationTabs.find((navTab) => navTab.name === cta);
  const onTabPress = tab?.onPress;
  const route = ROUTES[cta as keyof typeof ROUTES];
  const pushNavigation = route ? () => Navigation.push(cta, { component: { id: route, name: route } }) : null;

  const ctaLabel = (cta && ctaText) || t("labels.cta.close");
  const onPressCta =
    cta && ctaText
      ? () => {
          (onTabPress || pushNavigation)?.();
          Navigation.dismissOverlayWithChild();
        }
      : Navigation.dismissOverlayWithChild;

  const ctaDismissLabel = !(cta && ctaText) ? null : t("labels.cta.close");
  const onPressCtaDismiss = !(cta && ctaText) ? null : Navigation.dismissOverlayWithChild;

  const cachePolicy = gameEnableExpoImageDiskCachingPolicyInYumojiBuilder ? ImageCachePolicy.disk : undefined;

  const HeaderIcon = useMemo(() => {
    const backgroundColor = getHeaderBackgroundColour(item);
    return (
      <View style={[styles.headerIcon, { backgroundColor }]}>
        <CroppedImage
          suppressLoadingUi={true}
          cachePolicy={cachePolicy}
          source={item?.preview?.image}
          transform={item?.preview?.transform}
          containerWidth={PREVIEW_IMAGE_SIZE}
          containerHeight={PREVIEW_IMAGE_SIZE}
        />
      </View>
    );
  }, [cachePolicy, item]);

  return (
    <ScrollableContentOverlay
      HeaderIcon={HeaderIcon}
      heading={title}
      ctaLabel={ctaLabel}
      ctaDismissLabel={ctaDismissLabel}
      onPressCta={onPressCta}
      onPressCtaDismiss={onPressCtaDismiss}
    >
      <View style={styles.message}>
        <Markdown text={message} markdownStyles={markdownStyles} />
      </View>
    </ScrollableContentOverlay>
  );
};

const getHeaderBackgroundColour = (item: ItemListItems) => {
  const rarity = item.parts[0]?.partId?.match(/(base|common|rare|epic)/);

  switch (rarity?.[0]) {
    case "epic":
      return Colours.products.fib.epicLight;
    case "rare":
      return Colours.products.fib.rareLight;
    case "common":
      return Colours.products.fib.commonLight;
    case "base":
    default:
      return Colours.neutral.n50;
  }
};

const PREVIEW_IMAGE_SIZE = Style.adjust(110);

const styles = StyleSheet.create({
  headerIcon: {
    width: Style.adjust(140),
    height: Style.adjust(140),
    borderRadius: Style.adjust(70),
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  message: {
    paddingHorizontal: Style.adjust(38),
  },
});

const markdownStyles = {
  text: {
    textAlign: "center",
  },
};
