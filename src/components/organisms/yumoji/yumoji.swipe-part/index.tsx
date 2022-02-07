import React, { memo, useCallback, useContext, useEffect, useMemo, useRef, useState } from "react";
import { View, Animated, ViewStyle, FlatList as RNFlatList } from "react-native";
import { AvatarPartType, CoverType, YuWorld } from "@graphql/_core/schema/globalTypes";
import { Loading, FlatList, TextTemplate } from "@atoms";
import { Colours } from "@styles";
import { useQuery } from "@apollo/react-hooks";
import { GetYumojiPartUrlSetSwiper, GetYumojiPartUrlSetSwiperVariables } from "@graphql/_core/schema";
import { GQL_QUERY_GET_YUMOJI_PART_URL_SET_SWIPER } from "@graphql/yuscreen/getYumojiPartUrlSetSwiper.gql";
import { useScrollHandlers } from "../hooks/useScrollHandlers";
import { useLocalWorldState } from "../hooks";
import { FLAT_LIST_ITEM } from "./yumoji-swipe-part.types";
import { styles, ITEM_WIDTH } from "./yumoji-swipe-part.styles";
import { renderItem } from "./renderItem";
import { ProductStepContext } from "@components/containers/products/product-step/product-step.context";
import { LOCAL_ANSWER_KEY } from "@components/containers/products/product-step/utils";
import { logMixpanelEventActionCreator } from "@redux/logging/logging.actions";
import { useDispatch } from "react-redux";

interface Props {
  onChange: (worldId: YuWorld) => void;
  selectedYuWorld: YuWorld;
  flatListItemOverlayStyles?: ViewStyle;
  partType: AvatarPartType;
  coverType: CoverType;
}

export const YumojiSwipePart = memo(({ partType, coverType = CoverType.common, selectedYuWorld, onChange }: Props) => {
  const { data, loading } = useQuery<GetYumojiPartUrlSetSwiper, GetYumojiPartUrlSetSwiperVariables>(
    GQL_QUERY_GET_YUMOJI_PART_URL_SET_SWIPER,
    {
      variables: {
        partType,
      },
    }
  );
  const { current: scrollX } = useRef(new Animated.Value(0));
  const listRef = useRef(null as RNFlatList);
  const scrollToDefaultIndexDelay = useRef(null);
  const showSelectionDelay = useRef(null);
  const { selectedWorld, setSelectedWorld } = useLocalWorldState(selectedYuWorld);
  const { dynamicData } = useContext(ProductStepContext);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!dynamicData[LOCAL_ANSWER_KEY.WorldId]) {
      const defaultWorldId = data?.getYumojiPartUrlSetSwiper.variants[0]?.worlds[0]?.worldId;

      if (defaultWorldId) {
        onChange(defaultWorldId);
      }
    }
  }, [data, dynamicData, onChange]);

  const handleChangeWorld = useCallback(
    (id: YuWorld) => {
      if (selectedWorld !== id) {
        setSelectedWorld(id);
        dispatch(
          logMixpanelEventActionCreator("armour_inspected", { armour_style_chosen: id, location: "swipe_part" })
        );
        if (onChange) {
          onChange(id);
        }
      }
    },
    [setSelectedWorld, onChange, selectedWorld]
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
        Swipe to choose your style
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
});
