import React, { memo, useRef, FC } from "react";
import { ScrollView, View, StyleSheet, ViewStyle } from "react-native";
import { Colours, Style } from "@styles";
import { TextTemplate, BoxOption } from "@atoms";
import { CroppedImage } from "./croppedImage";
import ColorPreview from "./colorPreview";
import { IItemList } from "@components/containers/member/yumoji-builder/yumoji-builder.reducer";
import { GetYumojiBuilderInitialParts_getYumojiBuilderInitialParts as YumojiBuilderInitialParts } from "@graphql/_core/schema";

interface Props {
  itemList: IItemList;
  updateUserAvatar: (parts: YumojiBuilderInitialParts[]) => void;
}

const YumojiBuilderItemList: FC<Props> = ({ itemList, updateUserAvatar }) => {
  const scrollViewRef = useRef<ScrollView | null>(null);
  const boxWidth = (Style.DEVICE_WIDTH - Style.adjust(70)) / 3;
  const boxHeight = boxWidth + Style.adjust(2);
  const previewSize = boxWidth - Style.adjust(8);

  return (
    <View style={styles.wrapper}>
      <ScrollView style={styles.bodyElementsList} ref={scrollViewRef}>
        <View style={styles.title}>
          <TextTemplate type="b1b">{itemList?.title || ""}</TextTemplate>
        </View>
        <View style={styles.itemList}>
          {itemList.items?.map((item, index) => {
            const { representativeColor, preview } = item;
            return (
              <View style={styles.itemWrapper} key={index}>
                <BoxOption
                  onPress={() => {
                    updateUserAvatar(item.parts);
                  }}
                  isSelected={item.isSelected}
                  selectedStyle={styles.itemSelected}
                  innerHeight={boxHeight}
                >
                  <View style={styles.itemPadding}>
                    {representativeColor ? (
                      <ColorPreview color={representativeColor} size={previewSize} />
                    ) : (
                      <CroppedImage
                        source={preview.image}
                        transform={preview.transform}
                        containerHeight={previewSize}
                        containerWidth={previewSize}
                      />
                    )}
                  </View>
                </BoxOption>
              </View>
            );
          })}
        </View>
      </ScrollView>
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
    paddingTop: Style.adjust(24),
  } as ViewStyle,
  title: {
    paddingLeft: Style.adjust(8),
  },
  itemList: {
    flexDirection: "row",
    flexWrap: "wrap",
    paddingTop: Style.adjust(8),
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
