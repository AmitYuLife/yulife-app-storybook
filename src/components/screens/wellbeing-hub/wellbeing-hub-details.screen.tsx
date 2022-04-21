import React, { memo } from "react";
import { GenericHeadingAbsolute, GenericHeadingPad } from "@organisms";
import {
  GetWellbeingHubItem_wellbeingHubItem as WellbeingHubItem,
  GetWellbeingHubItem_wellbeingHubItem_content as ItemContent,
  GetWellbeingHubItem_wellbeingHubItem_content_ContentItemButton as ItemContentButton,
} from "@graphql/_core/schema/GetWellbeingHubItem";
import { Style } from "@styles";
import { ScrollView, StyleSheet, View, ViewStyle } from "react-native";
import { MORE_INFO_BUTTON } from "@ids";
import { TapToCopy } from "@organisms";
import Logger from "@services/logging/logger";
import { handleLinkPress } from "@services/app-link";
import { Image } from "@atoms";
import { HeadingAndCopy, TertiaryButton, BUTTON_ICON } from "@molecules";

interface IProps {
  handleBack: () => void;
  item: WellbeingHubItem;
}

const PADDING = Style.adjust(24);
const IMAGE_WIDTH = Style.DEVICE_WIDTH - 2 * PADDING;

export const WellbeingHubDetailsScreen = memo(function (props: IProps) {
  const { handleBack, item } = props;

  return (
    <View style={styles.wrapper}>
      <GenericHeadingPad />
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContentContainerStyle}>
        {item.content.map((i, index) => (
          <View key={`${i.__typename}-${index}`}>{getItemContent(i, item.id, item.title)}</View>
        ))}
      </ScrollView>
      <GenericHeadingAbsolute logo="yulife" onLeftIconPress={handleBack} />
    </View>
  );
});

const getItemContent = (itemContent: ItemContent, itemId: string, itemTitle: string) => {
  switch (itemContent.__typename) {
    case "ContentItemMarkdown":
      return (
        <HeadingAndCopy
          title={itemContent?.title}
          markdown={itemContent?.parsedMarkdown}
          wrapperStyle={styles.headerAndCopy}
        />
      );
    case "ContentItemBox":
      return (
        <TapToCopy
          markdown={true}
          heading={itemContent?.title}
          text={itemContent?.parsedMarkdown}
          canCopy={itemContent?.canCopy}
        />
      );
    case "ContentItemButton":
      return (
        <View style={styles.contentItemButtonWrapper} testID={MORE_INFO_BUTTON(itemContent?.label)}>
          <TertiaryButton
            size={"Fill"}
            label={itemContent?.label}
            onPress={() => onButtonPress(itemContent, itemTitle, itemId)}
            height={Style.adjust(60)}
            iconUri={itemContent?.icon?.uri}
            rightIcon={BUTTON_ICON.ARROW_RIGHT}
          />
        </View>
      );
    case "ContentItemImage":
      return (
        <Image
          width={IMAGE_WIDTH}
          source={{ uri: itemContent?.image?.uri }}
          style={styles.imageWrapper}
          imageStyle={styles.imageStyle}
        />
      );
    default:
      return <View />;
  }
};

const onButtonPress = async (itemContent: ItemContentButton, itemTitle: string, itemId: string) => {
  const { uri, label } = itemContent;
  const metaData = { id: itemId, title: itemTitle };

  try {
    Logger.logMixpanelEvent("wellbeing_item_button_pressed", {
      ...metaData,
      label,
      type: uri?.split(":")?.[0],
    });
    await handleLinkPress(uri)();
  } catch (e) {
    Logger.logMixpanelEvent("wellbeing_item_button_pressed_error", { error: e.message });
  }
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    paddingHorizontal: PADDING,
  },
  contentItemButtonWrapper: {
    marginTop: Style.adjust(24),
  } as ViewStyle,
  scrollContentContainerStyle: {
    paddingBottom: Style.adjust(32),
  },
  contentButtonWrapper: {
    marginTop: Style.adjust(24),
  } as ViewStyle,
  headerAndCopy: {
    marginTop: Style.adjust(40),
  },
  imageWrapper: {
    marginTop: Style.adjust(24),
  } as ViewStyle,
  imageStyle: {
    borderRadius: 8,
  },
});
