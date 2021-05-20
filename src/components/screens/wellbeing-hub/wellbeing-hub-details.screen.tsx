import React, { memo } from "react";
import GenericHeadingAbsolute, { GenericHeadingPad } from "@atoms/generic-heading/generic-heading-absolute";
import {
  GetWellbeingHubItem_wellbeingHubItem as WellbeingHubItem,
  GetWellbeingHubItem_wellbeingHubItem_content as ItemContent,
} from "@graphql/_core/schema/GetWellbeingHubItem";
import { Style } from "@styles";
import { ScrollView, StyleSheet, View } from "react-native";
import { ContentItemBox } from "./sub-components/content-item-box";
import { ContentItemButton } from "./sub-components/content-item-button";
import { ContentItemImage } from "./sub-components/content-item-image";
import { ContentItemMarkdown } from "./sub-components/content-item-markdown";
import { MORE_INFO_BUTTON } from "@ids";

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
        <ContentItemBox
          heading={itemContent?.title}
          markdown={itemContent?.parsedMarkdown}
          canCopy={itemContent?.canCopy}
        />
      );
    case "ContentItemButton":
      return (
        <ContentItemButton
          label={itemContent?.label}
          iconUri={itemContent?.icon?.uri}
          uri={itemContent?.uri}
          metaData={{ id: itemId, title: itemTitle }}
          testID={MORE_INFO_BUTTON(itemContent?.label)}
        />
      );
    case "ContentItemImage":
      return <ContentItemImage uri={itemContent?.image?.uri} />;
    default:
      return <View />;
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
});
