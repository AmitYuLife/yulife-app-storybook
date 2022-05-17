import React, { memo, useCallback, useState } from "react";
import { FlatList, StyleSheet, View, ListRenderItemInfo, Platform } from "react-native";
import { Style, NAV_BAR } from "@styles";
import { GetUserProfile_getUserProfile_events as IEvent } from "@graphql/_core/schema";
import EventPanel from "./event-panel";
import { AdBanner } from "@molecules";
import { FLAT_LIST_EVENTS } from "@ids";

interface IAdBanner {
  imageUrl: string;
  navigateTo: string;
}

type IEvents = IEvent & IAdBanner;

interface IProps {
  componentId?: string;
  events: Partial<IEvents>[];
  currentWorld: number;
  onJoin: (event: IEvent) => Promise<void>;
}

const CARD_WIDTH = Style.DEVICE_WIDTH * 0.8;
const INITIAL_PADDING = Style.DEVICE_WIDTH * 0.1 + 5;

const EventPanels = ({ events = [], currentWorld, componentId, onJoin }: IProps) => {
  const [adHeight, setAdHeight] = useState(143);

  const onLayout = useCallback((e) => setAdHeight(e?.nativeEvent?.layout?.height || 148), [adHeight]);
  const renderItem = useCallback(
    ({ item }: ListRenderItemInfo<IEvent & IAdBanner>) => {
      if (item.id.startsWith("ad-")) {
        return (
          <View style={styles.adBanners}>
            <AdBanner
              width={CARD_WIDTH - Style.adjust(15)}
              height={adHeight - Style.adjust(2)}
              imageUrl={item.imageUrl}
              navigateTo={item.navigateTo}
              style={styles.adBannerImage}
            />
          </View>
        );
      }

      return (
        <EventPanel
          onLayout={onLayout}
          onJoin={onJoin}
          width={CARD_WIDTH}
          event={item}
          currentWorld={currentWorld}
          componentId={componentId}
        />
      );
    },
    [onJoin, currentWorld, componentId, adHeight, onLayout]
  );

  const keyExtractor = useCallback((event: IEvent) => event.id, []);

  return (
    <View style={styles.flatListWrapper}>
      <FlatList
        data={events}
        horizontal={true}
        pagingEnabled={false}
        decelerationRate={0.9}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.flatListContentContainerStyle}
        snapToInterval={CARD_WIDTH}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        testID={FLAT_LIST_EVENTS}
      />
    </View>
  );
};

const isShort = Platform.select({ ios: Style.isXShort(), android: Style.isShortToMediumAndroid() });
const styles = StyleSheet.create({
  flatListWrapper: {
    position: "absolute",
    bottom: NAV_BAR.getPositionBottom({ additionalBottom: Style.adjust(isShort ? 85 : 145) }),
  },
  flatListContentContainerStyle: {
    paddingHorizontal: INITIAL_PADDING,
  },
  adBanners: {
    marginTop: Style.adjust(15),
    marginHorizontal: Style.adjust(8),
    justifyContent: "center",
  },
  adBannerImage: {
    borderRadius: 8,
  },
});

export default memo(EventPanels);
