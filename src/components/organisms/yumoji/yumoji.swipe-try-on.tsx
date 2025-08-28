import React, { memo, useState, useRef, useEffect } from "react";
import {
  StyleSheet,
  View,
  FlatList as RNFlatList,
  Animated,
  NativeSyntheticEvent,
  NativeScrollEvent,
  ViewStyle,
} from "react-native";
import { Colours, Style } from "@styles";
import { FlatList, Loading, SwipeArrowLeft, SwipeArrowRight, TextTemplate } from "@atoms";
import { TouchableOpacityWithDelay } from "@molecules";
import { Yumoji } from "./yumoji";
import { useYumojiFittingRoom, AVATAR_WIDTH, AVATAR_HEIGHT } from "./hooks/useYumojiFittingRoom";
import { useDispatch } from "react-redux";
import { logMixpanelEventActionCreator } from "@redux/logging/logging.actions";
import {
  AvatarPartType,
  CoverType,
  GetYumojiRemoteFittingRoomQuery,
  GetYumojiRemotePartsQuery,
  YuWorld,
} from "@graphql/__generated";

type Part = GetYumojiRemoteFittingRoomQuery["getYumojiRemoteFittingRoom"]["yuWorlds"][0]["yumojiParts"][0];

enum ArrowDirection {
  LEFT = "left",
  RIGHT = "right",
}

enum FLAT_LIST_ITEM {
  PAD = "PAD",
  YUMOJI = "YUMOJI",
}

type Props = {
  coverType: CoverType;
  customerProductId: string;
  onChange?: (worldId: YuWorld) => void;
  flatListItemOverlayStyles?: ViewStyle;
  topText: string;
};

type AvatarParts = Record<AvatarPartType, Part>;
type AvatarPartsWithYuworld = AvatarParts & { yuWorld: string; type: FLAT_LIST_ITEM };

const YUMOJI_CARD_WIDTH = Style.DEVICE_WIDTH / 2;

const Pad = memo(() => <View style={{ width: YUMOJI_CARD_WIDTH }} />);

const HIT_SLOP = {
  top: 8,
  bottom: 8,
  left: 8,
  right: 8,
};

export const YumojiSwipeTryOn = memo(
  ({ customerProductId, coverType = CoverType.Common, onChange, flatListItemOverlayStyles, topText }: Props) => {
    const listRef = useRef(null as RNFlatList);
    const scrollToDefaultIndexDelay = useRef(null);
    const { current: scrollX } = useRef(new Animated.Value(0));
    const [selectedWorld, setSelectedWorld] = useState(null);
    const [avatars, setAvatars] = useState([] as AvatarPartsWithYuworld[]);
    const [canScroll, setCanScroll] = useState(false);

    const { yumoji, fittingRoom } = useYumojiFittingRoom({ customerProductId, coverType });
    const { yuWorlds = [], selectedYuWorld } = fittingRoom;

    const dispatch = useDispatch();

    useEffect(() => {
      setSelectedWorld(selectedYuWorld || YuWorld.Forest);
    }, [selectedYuWorld]);

    useEffect(() => {
      scrollToDefaultIndexDelay.current = setTimeout(() => {
        const selectedYumojiIndex = avatars.findIndex((x: AvatarPartsWithYuworld) => x.yuWorld === selectedWorld);
        setCanScroll(true);
        listRef?.current?.scrollToIndex({ index: selectedYumojiIndex, animated: false });
      }, 500);

      return () => clearTimeout(scrollToDefaultIndexDelay.current);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [avatars.length]);

    useEffect(() => {
      if (!yumoji) {
        return;
      }

      const yuWorld = yuWorlds.find(({ id }) => id === selectedWorld);
      if (!yuWorld) {
        return;
      }

      const formattedAvatars = yuWorlds.map((yw) => {
        return yw.yumojiParts.reduce((acc, part) => {
          acc[part.partType] = part;
          return { ...yumoji, ...acc, yuWorld: yw.id, type: FLAT_LIST_ITEM.YUMOJI };
        }, {} as AvatarPartsWithYuworld);
      });

      setAvatars(formattedAvatars);
    }, [yumoji, yuWorlds, selectedWorld]);

    const handlePress = (id: YuWorld) => {
      if (selectedWorld !== id) {
        setSelectedWorld(id);
        dispatch(
          logMixpanelEventActionCreator("armour_inspected", { armour_style_chosen: id, location: "swipe_try_on" })
        );
        if (onChange) {
          onChange(id);
        }
      }
    };

    const handleScrollEndDrag = (event: NativeSyntheticEvent<NativeScrollEvent>): void => {
      if (event.nativeEvent.velocity.x) {
        /**
         * will be handled by handleMomentumScrollEnd
         */
        return null;
      }

      if (canScroll) {
        handleScrollEnd(event.nativeEvent.contentOffset.x);
      }

      setCanScroll(false);
    };

    const handleMomentumScrollEnd = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
      if (canScroll) {
        handleScrollEnd(event.nativeEvent.contentOffset.x);
      }

      setCanScroll(false);
    };

    const handleScrollEnd = (contentOffsetX: number) => {
      let index = Math.round(contentOffsetX / YUMOJI_CARD_WIDTH);
      if (index > avatars.length - 1) {
        index = avatars.length - 1;
      }

      if (index < 0) {
        index = 0;
      }

      listRef.current.scrollToIndex({ index });
      handlePress(avatars[index].yuWorld as YuWorld);
    };

    const onArrowPress = (arrowDirection: ArrowDirection) => {
      setCanScroll(true);

      const selectedYumojiIndex = avatars.findIndex((x: AvatarPartsWithYuworld) => x.yuWorld === selectedWorld);

      if (arrowDirection === ArrowDirection.RIGHT && selectedYumojiIndex < avatars.length - 1) {
        listRef.current.scrollToIndex({ index: selectedYumojiIndex + 1, animated: true });
        handlePress(avatars[selectedYumojiIndex + 1].yuWorld as YuWorld);
        return;
      }

      if (arrowDirection === ArrowDirection.LEFT && selectedYumojiIndex > 0) {
        listRef.current.scrollToIndex({ index: selectedYumojiIndex - 1, animated: true });
        handlePress(avatars[selectedYumojiIndex - 1].yuWorld as YuWorld);
        return;
      }
    };

    const tryOnId = fittingRoom?.id;
    const selectedYumojiIndex = avatars.findIndex((x: AvatarPartsWithYuworld) => x.yuWorld === selectedWorld);
    const variant = yuWorlds.find((item) => item.id === selectedWorld);
    const formattedListData = [
      { type: FLAT_LIST_ITEM.PAD },
      { type: FLAT_LIST_ITEM.PAD },
      ...avatars,
      { type: FLAT_LIST_ITEM.PAD },
    ];

    if (!tryOnId) {
      return (
        <View style={styles.loader}>
          <Loading size="small" />
        </View>
      );
    }

    const renderItem = ({
      item,
      index,
    }: {
      item: GetYumojiRemotePartsQuery["avatar"] & { yuWorld: string; type: string };
      index: number;
    }) => {
      switch (item.type) {
        case FLAT_LIST_ITEM.PAD:
          return <Pad />;
        case FLAT_LIST_ITEM.YUMOJI:
          return (
            <View style={{ width: YUMOJI_CARD_WIDTH, ...styles.flatListItem }}>
              <Yumoji height={AVATAR_HEIGHT} width={AVATAR_WIDTH} avatar={item} />
              {selectedYumojiIndex === index - 2 ? null : (
                <View style={StyleSheet.flatten([styles.flatlistItemOverlay, flatListItemOverlayStyles])} />
              )}
            </View>
          );
      }
    };

    return (
      <>
        <View style={styles.container}>
          <View style={styles.swipeText}>
            <TextTemplate type={"l1"} color={Colours.neutral.n400}>
              {topText}
            </TextTemplate>
          </View>
          <FlatList
            onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], { useNativeDriver: true })}
            onScrollBeginDrag={() => setCanScroll(true)}
            data={formattedListData}
            renderItem={renderItem}
            style={styles.flatList}
            forwardRef={listRef}
            onMomentumScrollEnd={handleMomentumScrollEnd}
            onScrollEndDrag={handleScrollEndDrag}
          />
          <View style={styles.row}>
            <View style={styles.arrow}>
              {selectedYumojiIndex < 1 ? null : (
                <TouchableOpacityWithDelay
                  delay={450}
                  hitSlop={HIT_SLOP}
                  onPress={() => onArrowPress(ArrowDirection.LEFT)}
                >
                  <SwipeArrowLeft />
                </TouchableOpacityWithDelay>
              )}
            </View>
            <View style={styles.variantText}>
              <TextTemplate type="l1b" color={variant?.textColor}>
                {variant.title}
              </TextTemplate>
            </View>
            <View style={styles.arrow}>
              {selectedYumojiIndex > avatars.length - 2 ? null : (
                <TouchableOpacityWithDelay
                  delay={450}
                  hitSlop={HIT_SLOP}
                  onPress={() => onArrowPress(ArrowDirection.RIGHT)}
                >
                  <SwipeArrowRight />
                </TouchableOpacityWithDelay>
              )}
            </View>
          </View>
        </View>
      </>
    );
  }
);

const styles = StyleSheet.create({
  loader: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  row: { flexDirection: "row", justifyContent: "center", alignItems: "center", marginTop: Style.adjust(16) },
  worldSelectorCircle: {
    borderRadius: 99,
    borderWidth: 1,
  },
  worldSelector: {
    borderRadius: Style.adjust(50),
    marginHorizontal: Style.adjust(6),
    width: Style.adjust(16),
    height: Style.adjust(16),
    justifyContent: "center",
    alignItems: "center",
  },
  worldSelectorBig: {
    width: Style.adjust(16),
    height: Style.adjust(16),
  },
  worldSelectorSmall: {
    width: Style.adjust(8),
    height: Style.adjust(8),
  },
  swipeText: {
    marginBottom: Style.adjust(14),
  },
  flatList: {
    marginStart: -(YUMOJI_CARD_WIDTH + YUMOJI_CARD_WIDTH / 2),
    marginEnd: -(YUMOJI_CARD_WIDTH / 2),
    flex: 1,
  },
  flatlistItemOverlay: {
    ...StyleSheet.absoluteFillObject,
    width: YUMOJI_CARD_WIDTH,
    height: AVATAR_HEIGHT,
    justifyContent: "center",
    alignItems: "center",
    opacity: 0.7,
  },
  flatListItem: {
    justifyContent: "center",
    alignItems: "center",
  },
  arrow: {
    width: Style.adjust(16),
  },
  variantText: {
    width: Style.adjust(140),
    justifyContent: "center",
    alignItems: "center",
    marginStart: Style.adjust(16),
    marginEnd: Style.adjust(16),
  },
});
