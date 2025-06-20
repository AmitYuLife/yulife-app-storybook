import React, { memo, useCallback, useEffect, useMemo, useRef, useState } from "react";
import { View, Animated, ViewStyle, FlatList as RNFlatList } from "react-native";
import { Loading, FlatList, TextTemplate } from "@atoms";
import { Colours } from "@styles";
import { useQuery } from "@apollo/client";
import { useScrollHandlers } from "../hooks/useScrollHandlers";
import { useLocalWorldState } from "../hooks";
import { FLAT_LIST_ITEM } from "./yumoji-swipe-part.types";
import { styles, ITEM_WIDTH } from "./yumoji-swipe-part.styles";
import { renderItem } from "./renderItem";
import { logMixpanelEventActionCreator } from "@redux/logging/logging.actions";
import { useDispatch } from "react-redux";
import { AvatarPartType, CoverType, YuWorld, gql } from "@graphql/__generated";

interface Props {
  onChange: (worldId: YuWorld) => void;
  selectedYuWorld: YuWorld;
  flatListItemOverlayStyles?: ViewStyle;
  partType: AvatarPartType;
  coverType: CoverType;
  topText: string;
}

export const YumojiSwipePart = memo(
  ({ partType, coverType = CoverType.Common, selectedYuWorld, onChange, topText }: Props) => {
    const { data, loading } = useQuery(gql("GetYumojiPartUrlSetSwiperDocument"), {
      variables: {
        partType,
      },
    });
    const { current: scrollX } = useRef(new Animated.Value(0));
    const listRef = useRef(null as RNFlatList);
    const scrollToDefaultIndexDelay = useRef(null);
    const showSelectionDelay = useRef(null);
    const { selectedWorld, setSelectedWorld } = useLocalWorldState(selectedYuWorld);

    const dispatch = useDispatch();

    const handleChangeWorld = useCallback(
      (id: YuWorld) => {
        setSelectedWorld(id);
        dispatch(
          logMixpanelEventActionCreator("armour_inspected", { armour_style_chosen: id, location: "swipe_part" })
        );
        if (onChange) {
          onChange(id);
        }
      },
      [onChange]
    );

    const urlSet = useMemo(() => {
      if (!data?.getYumojiPartUrlSetSwiper?.variants) {
        return [];
      }

      return data.getYumojiPartUrlSetSwiper.variants.find((item) => item.coverType === coverType)?.worlds || [];
    }, [data]);

    const onScrollEnd = useCallback(
      (index: number) => {
        listRef.current.scrollToIndex({ index });
        handleChangeWorld(urlSet[index].worldId);
      },
      [urlSet]
    );

    const { handleMomentumScrollEnd, handleScrollEndDrag, handleScrollBeginDrag } = useScrollHandlers({
      items: urlSet,
      itemWidth: ITEM_WIDTH,
      onScrollEnd,
    });

    const [hasScrolledToDefaultIndex, setHasScrolledToDefaultIndex] = useState(false);

    useEffect(() => {
      const selectedYumojiIndex = urlSet.findIndex((item) => item.worldId === selectedYuWorld);

      if (!hasScrolledToDefaultIndex && urlSet.length && selectedYumojiIndex > -1) {
        scrollToDefaultIndexDelay.current = setTimeout(() => {
          listRef?.current?.scrollToIndex({ index: selectedYumojiIndex, animated: false });
        }, 500);
      }

      showSelectionDelay.current = setTimeout(() => {
        setHasScrolledToDefaultIndex(true);
      }, 1000);

      return () => {
        clearTimeout(scrollToDefaultIndexDelay.current);
        clearTimeout(showSelectionDelay.current);
        scrollToDefaultIndexDelay.current = null;
        showSelectionDelay.current = null;
      };
    }, [selectedYuWorld, urlSet, hasScrolledToDefaultIndex]);

    const selectedIndex = useMemo(() => {
      return urlSet.findIndex((item) => item.worldId === selectedWorld);
    }, [urlSet, selectedWorld]);

    const formattedListData = useMemo(() => {
      return [
        { type: FLAT_LIST_ITEM.PAD },
        { type: FLAT_LIST_ITEM.PAD },
        ...urlSet.map((item) => ({
          type: FLAT_LIST_ITEM.YU_WORLD_OPTION,
          data: {
            worldId: item.worldId,
            remoteUrl: item.remoteUrl,
          },
        })),
        { type: FLAT_LIST_ITEM.PAD },
      ];
    }, [urlSet]);

    const { titleLabel, titleColor } = useMemo(() => {
      if (!urlSet || !urlSet[selectedIndex]) {
        return { titleLabel: "", titleColor: "" };
      }

      const title = urlSet[selectedIndex].title;

      return { titleLabel: title.label, titleColor: title.color };
    }, [urlSet, selectedIndex]);

    if (loading) {
      return (
        <View style={styles.loadingWrapper}>
          <Loading />
        </View>
      );
    }

    return (
      <View style={styles.container}>
        <TextTemplate type={"l1"} color={Colours.neutral.n400}>
          {topText}
        </TextTemplate>
        <View>
          <FlatList
            onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], { useNativeDriver: true })}
            data={formattedListData}
            renderItem={renderItem}
            style={styles.flatList}
            forwardRef={listRef}
            onScrollBeginDrag={handleScrollBeginDrag}
            onMomentumScrollEnd={handleMomentumScrollEnd}
            onScrollEndDrag={handleScrollEndDrag}
          />
          {hasScrolledToDefaultIndex ? null : (
            <View style={styles.loadingOverlay}>
              <Loading />
            </View>
          )}
        </View>
        <View style={styles.titleWrapper}>
          <TextTemplate type="l1b" color={titleColor || Colours.neutral.n800}>
            {titleLabel}
          </TextTemplate>
        </View>
      </View>
    );
  }
);
