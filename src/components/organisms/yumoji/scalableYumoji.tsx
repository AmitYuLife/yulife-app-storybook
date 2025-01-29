import { CroppedImage } from "@components/screens/member/yu-screen/yumoji-builder/components/croppedImage";
import { memo, useCallback, useEffect, useMemo, useRef, useState } from "react";
import { StyleSheet, View, ViewStyle } from "react-native";
import { shallowEqual } from "react-redux";
import Animated, { withTiming, useAnimatedStyle } from "react-native-reanimated";
import { useUserFeatures } from "@hooks";

interface IYumojiPart {
  order?: number;
  partType: string;
  hidesPartTypes?: string[];
  remoteUrl: {
    uri?: string;
    width?: number;
    height?: number;
  };
}

interface IProps {
  items: IYumojiPart[];
  bodyType: string;
  width: number;
  zoom?: number;
  height: number;
  preview?: {
    top: number;
    left: number;
    zoom: number;
  };
  testID?: string;
}

function _ScalableYumoji(props: IProps) {
  const { tempGameEnableYumojiBuilderScaleAnimation } = useUserFeatures();
  const { items, zoom = 1, preview = { top: 0, left: 0, zoom: 1 }, height, width, bodyType } = props;
  const [partsLoading, setPartsLoading] = useState(true);
  const loadingCounter = useRef(0);

  useEffect(() => {
    // using ref to avoid multiple rerenders for each layer being loaded
    loadingCounter.current = items?.filter((part) => part?.remoteUrl?.uri)?.length || 0;
    if (loadingCounter.current === 0) {
      setPartsLoading(false);
    }
  }, [items]);

  const styles = useMemo(() => {
    const opacity = partsLoading ? 0.01 : 1;
    if (!tempGameEnableYumojiBuilderScaleAnimation) {
      return { width: width * zoom, height: height * zoom, opacity };
    }

    return { width, height, opacity };
  }, [height, partsLoading, tempGameEnableYumojiBuilderScaleAnimation, width, zoom]);

  const animatedStyle = useAnimatedStyle((): ViewStyle => {
    if (!tempGameEnableYumojiBuilderScaleAnimation) {
      return {};
    }

    return {
      transform: [
        {
          translateY: withTiming((height * (zoom - 1)) / 2),
        },
        {
          scale: withTiming(zoom),
        },
      ],
    };
  }, [zoom, height, tempGameEnableYumojiBuilderScaleAnimation]);

  const onImageLoaded = useCallback(() => {
    loadingCounter.current -= 1;
    if (loadingCounter.current <= 0) {
      setPartsLoading(false);
    }
  }, []);

  const getWrapperStyles = useCallback((partType: string, hiddenPartTypes: Set<string>) => {
    return { opacity: hiddenPartTypes.has(partType) ? 0 : 1 };
  }, []);

  const parts = useMemo(() => {
    const filteredItems = items.filter((item) => item.remoteUrl?.uri);
    const hiddenPartTypes = [...filteredItems]
      .sort((a, b) => b.order - a.order)
      .reduce((acc, part) => {
        if (!acc.has(part.partType) && part.hidesPartTypes.length) {
          part.hidesPartTypes.forEach((type) => acc.add(type));
        }

        return acc;
      }, new Set<string>());

    const sortedItems = [...filteredItems].sort((item1, item2) => (item1?.order || 0) - (item2?.order || 0));

    return sortedItems.map(({ remoteUrl: { uri }, partType }) => (
      <View key={`${bodyType}_${partType}`} style={[StyleSheet.absoluteFillObject]}>
        <Animated.View style={tempGameEnableYumojiBuilderScaleAnimation ? animatedStyle : undefined}>
          <View style={getWrapperStyles(partType, hiddenPartTypes)}>
            <CroppedImage
              transform={preview}
              key={`${bodyType}_${partType}`}
              containerWidth={styles.width}
              containerHeight={styles.height}
              source={{ uri }}
              suppressLoadingUi={true}
              onInitialLoad={onImageLoaded}
            />
          </View>
        </Animated.View>
      </View>
    ));
  }, [
    items,
    bodyType,
    tempGameEnableYumojiBuilderScaleAnimation,
    animatedStyle,
    getWrapperStyles,
    preview,
    styles.width,
    styles.height,
    onImageLoaded,
  ]);

  return (
    <View style={styles} testID={props.testID}>
      {parts}
    </View>
  );
}

export const ScalableYumoji = memo(
  _ScalableYumoji,
  ({ items: prevItems, preview: prevPreview, ...prevProps }, { items: nextItems, preview: nextPreview, ...nextProp }) =>
    shallowEqual(prevProps, nextProp) &&
    shallowEqual(prevPreview, nextPreview) &&
    shallowEqual(
      prevItems?.map((p1) => p1?.remoteUrl?.uri),
      nextItems?.map((p2) => p2?.remoteUrl?.uri)
    )
);
