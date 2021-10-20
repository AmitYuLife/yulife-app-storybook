import { CroppedImage } from "@components/screens/member/yu-screen/yumoji-builder/components/croppedImage";
import React, { memo, useCallback, useEffect, useMemo, useRef, useState } from "react";
import { StyleSheet, View } from "react-native";
import { shallowEqual } from "react-redux";

interface IYumojiPart {
  order?: number;
  partType: string;
  remoteUrl: {
    uri: string;
    width?: number;
    height?: number;
  };
}

interface IProps {
  items: IYumojiPart[];
  bodyType: string;
  width: number;
  height: number;
  preview?: {
    top: number;
    left: number;
    zoom: number;
  };
}

function _ScalableYumoji(props: IProps) {
  const { items, preview = { top: 0, left: 0, zoom: 1 }, height, width, bodyType } = props;
  const [partsLoading, setPartsLoading] = useState(true);
  const loadingCounter = useRef(0);

  useEffect(() => {
    // using ref to avoid multiple rerenders for each layer being loaded
    loadingCounter.current = items?.filter((part) => part?.remoteUrl?.uri)?.length || 0;
    if (loadingCounter.current === 0) {
      setPartsLoading(false);
    }
  }, [items]);

  const styles = useMemo(() => ({ width, height, opacity: partsLoading ? 0.01 : 1 }), [height, partsLoading, width]);

  const onImageLoaded = useCallback(() => {
    loadingCounter.current -= 1;
    if (loadingCounter.current <= 0) {
      setPartsLoading(false);
    }
  }, []);

  const parts = useMemo(
    () =>
      items
        .filter((item) => item.remoteUrl?.uri)
        .sort((i1, i2) => (i1?.order || 0) - (i2?.order || 0))
        .map(({ remoteUrl: { uri }, partType }) => (
          <View key={`${bodyType}_${partType}`} style={[StyleSheet.absoluteFillObject, styles]}>
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
        )),
    [items, bodyType, styles, preview, onImageLoaded]
  );

  return <View style={styles}>{parts}</View>;
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
