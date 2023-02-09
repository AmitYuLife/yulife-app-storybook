import React, { useMemo, FC, memo, useState, useEffect, useCallback } from "react";
import { Image } from "@atoms";
import { StyleProp, View, ViewStyle } from "react-native";
import { Source } from "react-native-fast-image";
import { shallowEqual } from "react-redux";

interface IProps {
  source: Source | number;
  transform: {
    // relative offset left
    left?: number;
    // relative offset top
    top?: number;
    // zoom original image
    zoom?: number;
    // image dimensions
    height?: number;
    width?: number;
  };
  containerHeight: number;
  containerWidth: number;
  suppressLoadingUi?: boolean;
  onInitialLoad?: () => void;
}
export const sourceKeyExtractor = (source: Source | number) => {
  return (source as Source)?.uri ?? source.toString();
};

export const CroppedImage: FC<IProps> = memo(
  ({ transform, source, containerHeight, containerWidth, suppressLoadingUi, onInitialLoad }) => {
    const { left = 0, top = 0, zoom = 1, height, width } = transform || {};
    const scale = (height && width ? containerWidth / width : 1) * zoom;
    const scaledWidth = scale * (width || containerWidth);
    const [sources, setSources] = useState({ currentSource: null, loadingSource: null });
    const viewStyle = useMemo(
      () =>
        ({
          overflow: "hidden",
          height: containerHeight,
          width: containerWidth,
        } as StyleProp<ViewStyle>),
      [containerHeight, containerWidth]
    );

    const imageStyle = useMemo(
      () =>
        ({
          position: "absolute",
          top: top * scale,
          left: left * scale,
        } as StyleProp<ViewStyle>),
      [left, scale, top]
    );

    useEffect(() => {
      const { currentSource } = sources;
      if (!currentSource) {
        setSources({ loadingSource: source, currentSource: null });
        return;
      }

      if (!shallowEqual(currentSource, source)) {
        setSources({ currentSource, loadingSource: source });
      }
    }, [source]);

    const onLoad = useCallback(() => {
      const { loadingSource, currentSource } = sources;
      if (loadingSource) {
        setSources({ currentSource: loadingSource, loadingSource: null });
      }

      if (!currentSource) {
        onInitialLoad?.();
      }
    }, [sources]);

    return (
      <View style={viewStyle}>
        {sources.currentSource ? (
          <Image
            style={imageStyle}
            width={scaledWidth}
            key={sourceKeyExtractor(sources.currentSource)}
            source={sources.currentSource}
            suppressLoadingUi={suppressLoadingUi}
            resizeMode={"contain"}
          />
        ) : null}
        {sources.loadingSource ? (
          <Image
            style={imageStyle}
            width={scaledWidth}
            key={sourceKeyExtractor(sources.loadingSource)}
            source={sources.loadingSource}
            suppressLoadingUi={suppressLoadingUi}
            onLoad={onLoad}
            resizeMode={"cover"}
          />
        ) : null}
      </View>
    );
  },
  ({ source: prevSource, ...prevProps }, { source: nextSource, ...nextProp }) =>
    shallowEqual(prevProps, nextProp) && shallowEqual(prevSource, nextSource)
);
