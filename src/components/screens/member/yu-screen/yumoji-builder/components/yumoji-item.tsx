import React, { memo, useCallback, useMemo, useRef, useState } from "react";
import { View, ViewStyle } from "react-native";
import { ImageCachePolicy, RawImage, SkeletonLoading } from "@atoms";
import { CroppedImage } from "./croppedImage";
import ColorPreview from "./colorPreview";
import { YumojiItemLabel } from "./yumoji-item-label";
import { Colours, Style, StyleSheet } from "@styles";
import { COLOUR, YUMOJI_PART_ID, YUMOJI_PART_ID_STATUS } from "@ids";
import { BOX_OPTION_BORDER_RADIUS, BoxOption } from "@molecules";
import { useUserFeatures } from "@hooks";
import { GetYumojiBuilderItemsForCategoryQuery } from "@graphql/__generated";

type YumojiBuilderItemsForCategoryItems =
  GetYumojiBuilderItemsForCategoryQuery["getYumojiBuilderItemsForCategory"]["items"][number];
export interface ItemListItems extends YumojiBuilderItemsForCategoryItems {
  isSelected: boolean;
}

interface IProps {
  loading: boolean;
  item: ItemListItems;
  onItemPress: (item: ItemListItems) => void;
}
const itemMargin = Style.adjust(8);
const boxWidth = (Style.DEVICE_WIDTH - Style.adjust(70)) / 3;
const labelWidth = boxWidth * 0.84;
const boxHeight = boxWidth + Style.adjust(2);
const previewSize = boxWidth - Style.adjust(8);

export const itemHeight = boxHeight + 2 * itemMargin;

export const YumojiItem = memo(
  ({ item, loading, onItemPress }: IProps) => {
    const [partsLoading, setPartsLoading] = useState(!!item?.parts?.filter((part) => part?.remoteUrl?.uri).length);
    const { gameEnableExpoImageDiskCachingPolicyInYumojiBuilder } = useUserFeatures();
    const loadingCounter = useRef(item?.parts?.filter((part) => part?.remoteUrl?.uri).length || 0);

    const onPress = useCallback(() => {
      onItemPress(item);
    }, [onItemPress, item]);

    const onImageLoaded = useCallback(() => {
      loadingCounter.current -= 1;
      if (loadingCounter.current <= 0) {
        setPartsLoading(false);
      }
    }, []);

    const partLoader = useMemo(() => {
      if (!partsLoading) {
        return null;
      }

      return (
        <View style={styles.hiddenImageStyle}>
          {item?.parts
            ?.filter((part) => part?.remoteUrl?.uri)
            ?.map(({ remoteUrl: { uri } }) => (
              // must have at least 1px visible to trigger onLoad
              <RawImage onLoad={onImageLoaded} key={uri} source={{ uri }} style={styles.hiddenImageStyle} />
            ))}
        </View>
      );
    }, [item, partsLoading, onImageLoaded]);

    const image = useMemo(() => {
      if (item?.representativeColor) {
        return (
          <ColorPreview
            color={item?.representativeColor}
            size={previewSize}
            testID={COLOUR(item.representativeColor)}
          />
        );
      }

      const cachePolicy = gameEnableExpoImageDiskCachingPolicyInYumojiBuilder ? ImageCachePolicy.disk : undefined;

      return (
        <CroppedImage
          suppressLoadingUi={true}
          cachePolicy={cachePolicy}
          source={item?.preview?.image}
          transform={item?.preview?.transform}
          containerHeight={previewSize}
          containerWidth={previewSize}
        />
      );
    }, [item, gameEnableExpoImageDiskCachingPolicyInYumojiBuilder]);

    const label = useMemo(() => {
      if (!item.label) {
        return null;
      }

      return (
        <View style={styles.labelWrapper}>
          <YumojiItemLabel
            label={item?.label.text}
            icon={item?.label.icon.uri}
            width={labelWidth}
            labelColor={item?.label.labelColor}
            backgroundColor={item?.label.backgroundColor}
            borderColor={item?.label.borderColor}
          />
        </View>
      );
    }, [item.label]);

    const loadingPlaceholder = useMemo(() => {
      if (loading || partsLoading) {
        return <SkeletonLoading style={styles.loadingBox} />;
      }

      return null;
    }, [loading, partsLoading]);

    return (
      <View style={styles.itemWrapper}>
        <BoxOption
          onPress={onPress}
          isSelected={item.isSelected}
          selectedStyle={styles.itemSelected}
          innerHeight={boxHeight}
          testID={YUMOJI_PART_ID(item.parts[0].partId)}
        >
          <View style={styles.itemPadding} testID={YUMOJI_PART_ID_STATUS(item.status, item.parts[0].partId)}>
            {image}
            {label}
          </View>
        </BoxOption>
        {partLoader}
        {loadingPlaceholder}
      </View>
    );
  },
  (
    { item: { isSelected: prevSelected, label: prevLabel } },
    { item: { isSelected: nextSelected, label: nextLabel } }
  ) => prevSelected === nextSelected && prevLabel === nextLabel
);

const styles = StyleSheet.create({
  itemWrapper: {
    margin: itemMargin,
  },
  loadingBox: {
    position: "absolute",
    width: boxWidth + 5,
    height: boxHeight + 5,
    borderRadius: BOX_OPTION_BORDER_RADIUS,
  },
  itemPadding: {
    padding: Style.adjust(4),
    alignItems: "center",
  } as ViewStyle,
  itemSelected: {
    borderColor: Colours.primary.p600,
    backgroundColor: Colours.primary.p50,
  },
  labelWrapper: {
    position: "absolute",
    bottom: Style.adjust(8),
  },
  // has to be at least
  // little visible for android to render it
  hiddenImageStyle: {
    position: "absolute",
    width: 1,
    height: 1,
    opacity: 0.1,
  },
});
