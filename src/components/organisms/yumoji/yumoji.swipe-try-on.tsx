import React, { memo, useState, useRef, useEffect } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  View,
  FlatList as RNFlatList,
  Animated,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from "react-native";
import { Colours, Style } from "@styles";
import { FlatList, Loading, SwipeArrowLeft, SwipeArrowRight, TextTemplate } from "@atoms";
import { AvatarPartType, CoverType, YuWorld } from "@graphql/_core/schema/globalTypes";
import {
  GetYumojiRemoteFittingRoom_getYumojiRemoteFittingRoom_yuWorlds_yumojiParts as Part,
  GetYumojiRemoteParts,
} from "@graphql/_core/schema";
import { Yumoji } from "./yumoji";

import { useYumojiFittingRoom, AVATAR_WIDTH, AVATAR_HEIGHT } from "./hooks/useYumojiFittingRoom";

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
};

type AvatarParts = Record<AvatarPartType, Part>;
type AvatarPartsWithYuworld = AvatarParts & { yuWorld: string; type: FLAT_LIST_ITEM };

const YUMOJI_CARD_WIDTH = Style.DEVICE_WIDTH / 2;

const Pad = memo(() => <View style={{ width: YUMOJI_CARD_WIDTH }} />);

export const YumojiSwipeTryOn = memo(({ customerProductId, coverType = CoverType.common, onChange }: Props) => {
  const listRef = useRef(null as RNFlatList);
  const { current: scrollX } = useRef(new Animated.Value(0));
  const [selectedWorld, setSelectedWorld] = useState(null);
  const [avatars, setAvatars] = useState([] as AvatarPartsWithYuworld[]);
  const [canScroll, setCanScroll] = useState(false);
  const scrollToDefaultIndexDelay = useRef(null);

  const { yumoji, fittingRoom } = useYumojiFittingRoom({ customerProductId, coverType });
  const { yuWorlds = [], selectedYuWorld } = fittingRoom;

  useEffect(() => {
    setSelectedWorld(selectedYuWorld || YuWorld.forest);
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
    setSelectedWorld(id);

    if (onChange) {
      onChange(id);
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
    } else if (arrowDirection === ArrowDirection.LEFT && selectedYumojiIndex > 0) {
      listRef.current.scrollToIndex({ index: selectedYumojiIndex - 1, animated: true });
    }
  };

  const tryOnId = fittingRoom?.id;
  const selectedYumojiIndex = avatars.findIndex((x: AvatarPartsWithYuworld) => x.yuWorld === selectedWorld);
  const variant = yuWorlds.find((item) => item.id === selectedWorld);
  const formattedListData = [{ type: FLAT_LIST_ITEM.PAD }, ...avatars];

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
    item: GetYumojiRemoteParts["avatar"] & { yuWorld: string; type: string };
    index: number;
  }) => {
    const opacity = selectedYumojiIndex === index - 1 ? 1 : 0.3;
    switch (item.type) {
      case FLAT_LIST_ITEM.PAD:
        return <Pad />;
      case FLAT_LIST_ITEM.YUMOJI:
        return (
          <View style={{ opacity, width: YUMOJI_CARD_WIDTH, ...styles.flatListItem }}>
            <Yumoji height={AVATAR_HEIGHT} width={AVATAR_WIDTH} {...item} />
          </View>
        );
    }
  };

  return (
    <>
      <View style={styles.container}>
        <View style={styles.swipeText}>
          <TextTemplate type={"l1"} color={Colours.neutral.n400}>
            Swipe to choose your style
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
          {selectedYumojiIndex < 1 ? null : (
            <TouchableOpacity onPress={() => onArrowPress(ArrowDirection.LEFT)}>
              <SwipeArrowLeft />
            </TouchableOpacity>
          )}
          <View style={styles.variantText}>
            <TextTemplate type="l1b" color={variant?.mainColor}>
              {variant?.title}
            </TextTemplate>
          </View>
          {selectedYumojiIndex > avatars.length - 2 ? null : (
            <TouchableOpacity onPress={() => onArrowPress(ArrowDirection.RIGHT)}>
              <SwipeArrowRight />
            </TouchableOpacity>
          )}
        </View>
      </View>
    </>
  );
});

const styles = StyleSheet.create({
  loader: {
    height: AVATAR_HEIGHT + Style.adjust(48),
    width: AVATAR_WIDTH,
    alignItems: "center",
    justifyContent: "center",
  },
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  row: { flexDirection: "row", justifyContent: "center", alignItems: "center", marginTop: Style.adjust(8) },
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
  popover: {
    width: Style.adjust(200),
  },
  popoverMessage: {
    marginTop: Style.adjust(4),
  },
  swipeText: {
    marginBottom: Style.adjust(14),
  },
  flatList: {
    marginLeft: Style.adjust(0),
    marginRight: Style.adjust(0),
    flex: 1,
  },
  flatListItem: {
    justifyContent: "center",
    alignItems: "center",
    paddingRight: YUMOJI_CARD_WIDTH,
  },
  variantText: {
    marginLeft: Style.adjust(16),
    marginRight: Style.adjust(16),
  },
});
