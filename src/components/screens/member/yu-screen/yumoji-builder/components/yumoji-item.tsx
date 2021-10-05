import React, { memo, useCallback, useMemo, useState } from "react";
import { View, StyleSheet, ViewStyle } from "react-native";
import { BoxOption, SkeletonLoading } from "@atoms";
import { CroppedImage } from "./croppedImage";
import ColorPreview from "./colorPreview";
import { YumojiItemLabel } from "./yumoji-item-label";
import { Colours, Style } from "@styles";
import { GetYumojiBuilderItemsForCategory_getYumojiBuilderItemsForCategory_items as YumojiBuilderItemsForCategoryItems } from "@graphql/_core/schema";
import { shallowEqual } from "react-redux";
import FastImage from "react-native-fast-image";

export interface ItemListItems extends YumojiBuilderItemsForCategoryItems {
  isSelected: boolean;
}

interface IProps {
  loading: boolean;
  item: ItemListItems;
  onItemPress: (item: ItemListItems) => void;
}

const boxWidth = (Style.DEVICE_WIDTH - Style.adjust(70)) / 3;
const labelWidth = boxWidth * 0.84;
const boxHeight = boxWidth + Style.adjust(2);
const previewSize = boxWidth - Style.adjust(8);

export const YumojiItem = memo(
  ({ item, loading, onItemPress }: IProps) => {
    const [partsLoading, setPartsLoading] = useState(item?.parts?.filter((part) => part?.remoteUrl?.uri).length || 0);
    const onPress = useCallback(() => {
      onItemPress(item);
    }, []);

    const partLoader = useMemo(() => {
      return (
        <View style={styles.hiddenImageStyle}>
          {item?.parts
            ?.filter((loadingItem) => loadingItem?.remoteUrl?.uri)
            ?.map(({ remoteUrl: { uri } }) => (
              <FastImage
                onLoad={() => {
                  setPartsLoading((stillLoading) => stillLoading - 1);
                }}
                key={uri}
                source={{ uri }}
              />
            ))}
        </View>
      );
    }, [item?.parts]);

    return (
      <View style={styles.itemWrapper}>
        {loading || partsLoading ? (
          <SkeletonLoading style={{ width: boxWidth, height: boxHeight }} />
        ) : (
          <BoxOption
            onPress={onPress}
            isSelected={item.isSelected}
            selectedStyle={styles.itemSelected}
            innerHeight={boxHeight}
          >
            <View style={styles.itemPadding}>
              {item?.representativeColor ? (
                <ColorPreview color={item?.representativeColor} size={previewSize} />
              ) : (
                <CroppedImage
                  source={item?.preview?.image}
                  transform={item?.preview?.transform}
                  containerHeight={previewSize}
                  containerWidth={previewSize}
                />
              )}
              {!item.label ? null : (
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
              )}
            </View>
          </BoxOption>
        )}
        {partLoader}
      </View>
    );
  },
  ({ item: prevItem, ...prevProps }, { item: nextItem, ...nextProp }) =>
    shallowEqual(prevProps, nextProp) && shallowEqual(prevItem, nextItem)
);

const styles = StyleSheet.create({
  itemWrapper: {
    margin: Style.adjust(8),
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
