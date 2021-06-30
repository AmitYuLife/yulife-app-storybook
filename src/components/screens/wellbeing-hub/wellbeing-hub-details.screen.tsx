import React, { memo } from "react";
import GenericHeadingAbsolute, { GenericHeadingPad } from "@atoms/generic-heading/generic-heading-absolute";
import {
  GetWellbeingHubItem_wellbeingHubItem as WellbeingHubItem,
  GetWellbeingHubItem_wellbeingHubItem_content as ItemContent,
  GetWellbeingHubItem_wellbeingHubItem_content_ContentItemButton as ItemContentButton,
} from "@graphql/_core/schema/GetWellbeingHubItem";
import { Style } from "@styles";
import { ScrollView, StyleSheet, View, ViewStyle } from "react-native";
import { ContentItemImage } from "./sub-components/content-item-image";
import { ContentItemMarkdown } from "./sub-components/content-item-markdown";
import { MORE_INFO_BUTTON } from "@ids";
import { TapToCopy } from "@organisms";
import Logger from "@services/logging/logger";
import { handleLinkPress } from "@services/app-link";
import { TertiaryButton } from "@atoms";
import { BUTTON_ICON } from "@atoms/button/tertiary-button/tertiary-button.helpers";

interface IProps {
  handleBack: () => void;
  item: WellbeingHubItem;
}

export const WellbeingHubDetailsScreen = memo(function (props: IProps) {
  const { handleBack, item } = props;

  return (
    <View style={styles.wrapper}>
      <GenericHeadingPad />
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContentContainerStyle}>
        {item.content.map((i) => (
          <View key={i.id}>{getItemContent(i, item.id, item.title)}</View>
        ))}
      </ScrollView>
      <GenericHeadingAbsolute logo="yulife" onLeftIconPress={handleBack} />
    </View>
  );
});

const getItemContent = (itemContent: ItemContent, itemId: string, itemTitle: string) => {
  switch (itemContent.__typename) {
    case "ContentItemMarkdown":
      return <ContentItemMarkdown title={itemContent?.title} markdown={itemContent?.parsedMarkdown} />;
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
        <View style={styles.wrapper} testID={MORE_INFO_BUTTON(itemContent?.label)}>
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
      return <ContentItemImage uri={itemContent?.image?.uri} />;
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
    paddingHorizontal: Style.adjust(24),
  },
  scrollContentContainerStyle: {
    paddingBottom: Style.adjust(32),
  },
  contentButtonWrapper: {
    marginTop: Style.adjust(24),
  } as ViewStyle,
});
