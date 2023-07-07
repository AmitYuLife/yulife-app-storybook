import React, { memo, useCallback, useState } from "react";
import { StyleSheet, View, Platform, LayoutChangeEvent, FlatList, ListRenderItemInfo } from "react-native";
import { Style, NAV_BAR } from "@styles";
import EventPanel from "./event-panel";
import { AdBanner } from "@molecules";
import { FLAT_LIST_EVENTS } from "@ids";
import { UserProfileEventStatus } from "@graphql/_core/schema/globalTypes";
import { GetUserProfile_getUserProfile_events as IEvent } from "@graphql/_core/schema";

interface IAdBanner {
  imageUrl: string;
  navigateTo: string;
}

type IEvents = IEvent & IAdBanner;

interface IEventPanelsProps {
  componentId?: string;
  events: Partial<IEvents>[];
  currentWorld: number;
  onJoin: (event: IEvent) => Promise<void>;
}

const CARD_WIDTH = Style.DEVICE_WIDTH * 0.8;
const INITIAL_PADDING = Style.DEVICE_WIDTH * 0.1 + 5;

const EventPanels = ({ events = [], componentId, onJoin }: IEventPanelsProps) => {
  const [adHeight, setAdHeight] = useState(143);

  const onLayout = useCallback(
    (e: LayoutChangeEvent) => setAdHeight(e?.nativeEvent?.layout?.height || 148),
    [adHeight]
  );

  const renderItem = useCallback(
    ({ item }: ListRenderItemInfo<IEvent & IAdBanner>) => {
      if (item.id.startsWith("ad-")) {
        return (
          <View style={styles.adBanners}>
            <AdBanner
              imageUrl={item.imageUrl}
              navigateTo={item.navigateTo}
              style={styles.adBannerImage}
              height={adHeight - Style.adjust(2)}
              width={CARD_WIDTH - Style.adjust(15)}
            />
          </View>
        );
      }

      return (
        <EventPanel
          event={item}
          onJoin={onJoin}
          width={CARD_WIDTH}
          onLayout={onLayout}
          componentId={componentId}
          isDisabled={item.status !== UserProfileEventStatus.active}
        />
      );
    },
    [onJoin, componentId, adHeight, onLayout]
  );

  const keyExtractor = useCallback((event: Partial<IEvent>) => event.id, []);

  return (
    <View style={styles.flatListWrapper}>
      <FlatList
        data={events}
        horizontal={true}
        pagingEnabled={false}
        decelerationRate={0.9}
        renderItem={renderItem}
        testID={FLAT_LIST_EVENTS}
        snapToInterval={CARD_WIDTH}
        keyExtractor={keyExtractor}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.flatListContentContainerStyle}
      />
    </View>
  );
};

const isShort = Platform.select({ ios: Style.isXShort(), android: Style.isShorterThan(750) });
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
