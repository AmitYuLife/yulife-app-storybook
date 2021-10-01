import React, { memo } from "react";
import { View, StyleSheet, ViewStyle } from "react-native";
import { BoxOption, SkeletonLoading } from "@atoms";
import { CroppedImage } from "./croppedImage";
import ColorPreview from "./colorPreview";
import { YumojiItemLabel } from "./yumoji-item-label";
import { Colours, Style } from "@styles";
import { GetYumojiBuilderItemsForCategory_getYumojiBuilderItemsForCategory_items as YumojiBuilderItemsForCategoryItems } from "@graphql/_core/schema";

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

export const YumojiItem = memo(({ item, loading, onItemPress }: IProps) => {
  return (
    <View style={styles.itemWrapper}>
      {loading ? (
        <SkeletonLoading style={{ width: boxWidth, height: boxHeight }} />
      ) : (
        <BoxOption
          onPress={() => onItemPress(item)}
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
    </View>
  );
});

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
});
