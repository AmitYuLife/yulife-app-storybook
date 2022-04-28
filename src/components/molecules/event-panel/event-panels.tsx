import React, { memo, useCallback } from "react";
import { FlatList, StyleSheet, View, ListRenderItemInfo, Platform } from "react-native";
import { Style, NAV_BAR } from "@styles";
import { GetUserProfile_getUserProfile_events as IEvent } from "@graphql/_core/schema";
import EventPanel from "./event-panel";

interface IProps {
  componentId?: string;
  events: IEvent[];
  currentWorld: number;
  onJoin: (event: IEvent) => Promise<void>;
}

const CARD_WIDTH = Style.DEVICE_WIDTH * 0.8;
const INITIAL_PADDING = Style.DEVICE_WIDTH * 0.1 + 5;

const EventPanels = ({ events = [], currentWorld, componentId, onJoin }: IProps) => {
  const renderItem = useCallback(
    ({ item }: ListRenderItemInfo<IEvent>) => {
      return (
        <EventPanel
          onJoin={onJoin}
          width={CARD_WIDTH}
          event={item}
          currentWorld={currentWorld}
          componentId={componentId}
        />
      );
    },
    [onJoin, currentWorld, componentId]
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
});

export default memo(EventPanels);
