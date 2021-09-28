import React, { memo, useRef, FC, useEffect } from "react";
import { View, StyleSheet, ViewStyle, FlatList } from "react-native";
import { Colours, Style } from "@styles";
import { TextTemplate, BoxOption } from "@atoms";
import { CroppedImage } from "./croppedImage";
import ColorPreview from "./colorPreview";
import { IItemList } from "@components/containers/member/yumoji-builder/yumoji-builder.reducer";
import { GetYumojiBuilderInitialParts_getYumojiBuilderInitialParts as YumojiBuilderInitialParts } from "@graphql/_core/schema";
import { loadingItemData } from "../../avatar-builder/avatar-builder.helper";

interface IProps {
  itemList: IItemList;
  selectedCategoryId: string;
  updateUserAvatar: (parts: YumojiBuilderInitialParts[]) => void;
}

const YumojiBuilderItemList: FC<IProps> = ({ itemList, updateUserAvatar, selectedCategoryId }) => {
  const flatListRef = useRef<FlatList | null>(null);
  const boxWidth = (Style.DEVICE_WIDTH - Style.adjust(70)) / 3;
  const boxHeight = boxWidth + Style.adjust(2);
  const previewSize = boxWidth - Style.adjust(8);

  useEffect(() => {
    if (itemList.items.length > 0) {
      flatListRef?.current?.scrollToIndex({ index: 0, animated: false });
    }
  }, [selectedCategoryId]);

  return (
    <View style={styles.wrapper}>
      <View style={styles.title}>
        {!itemList.title ? null : <TextTemplate type="b1b">{itemList?.title}</TextTemplate>}
      </View>
      <View style={styles.itemList}>
        <FlatList
          key={"items_flat_list"}
          keyExtractor={(keyItem, index) => `${index}${keyItem.partId}`}
          ref={flatListRef}
          style={styles.bodyElementsList}
          data={itemList.loading ? loadingItemData : itemList.items}
          numColumns={3}
          showsVerticalScrollIndicator={false}
          initialScrollIndex={0}
          renderItem={({ item }) => (
            <View style={styles.itemWrapper}>
              <BoxOption
                onPress={() => {
                  updateUserAvatar(item.parts);
                }}
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
                </View>
              </BoxOption>
            </View>
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
    backgroundColor: Colours.neutral.n50,
    flexGrow: 1,
    flex: 1,
  } as ViewStyle,
  bodyElementsList: {
    width: "100%",
    padding: Style.adjust(8),
  } as ViewStyle,
  title: {
    marginTop: Style.adjust(24),
    marginLeft: Style.adjust(16),
  },
  itemList: {
    flex: 1,
    paddingBottom: Style.adjust(30),
  } as ViewStyle,
  itemWrapper: {
    margin: Style.adjust(8),
  },
  itemPadding: {
    padding: Style.adjust(4),
  } as ViewStyle,
  itemSelected: {
    borderColor: Colours.primary.p600,
    backgroundColor: Colours.primary.p50,
  },
});

export default memo(YumojiBuilderItemList);
