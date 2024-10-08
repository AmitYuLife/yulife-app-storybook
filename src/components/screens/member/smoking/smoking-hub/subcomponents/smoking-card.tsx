import React, { FC, memo } from "react";
import { StyleSheet, View, ViewStyle } from "react-native";
import { Image, TextTemplate } from "@atoms";
import { Colours, Style } from "@styles";
import { SMOKING_CARD } from "@ids";

const IMAGE_SIZE = 54;
const CARD_WIDTH = 156;

interface Props {
  image: {
    id?: string;
    uri: string;
  };
  value: string;
  title: string;
}

export const SmokingCard: FC<Props> = memo(({ image, value, title }) => {
  return (
    <View style={[styles.wrapper, ...(!image?.uri ? [styles.centeredBox] : [])]}>
      {image?.uri ? (
        <View style={styles.image} testID={SMOKING_CARD(image.id, value)}>
          <Image
            suppressLoadingUi={true}
            width={Style.adjust(IMAGE_SIZE)}
            height={Style.adjust(IMAGE_SIZE)}
            source={{ uri: image.uri }}
          />
        </View>
      ) : null}
      <View style={image?.uri ? [styles.adjustForImageSpacing] : []}>
        <View>
          <TextTemplate textAlign="center" type="h2">
            {value}
          </TextTemplate>
        </View>
        <View>
          <TextTemplate textAlign="center" type="l1">
            {title}
          </TextTemplate>
        </View>
      </View>
    </View>
  );
});

const LINE_HEIGHT_OFFSET = -Style.adjust(8);

const styles = StyleSheet.create({
  image: {
    position: "absolute",
    top: Style.adjust(-IMAGE_SIZE / 2),
    left: Style.adjust(CARD_WIDTH / 2 - IMAGE_SIZE / 2),
  },
  wrapper: {
    width: Style.adjust(CARD_WIDTH),
    backgroundColor: Colours.neutral.white,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: Colours.neutral.n150,
    padding: Style.adjust(16),
    marginTop: Style.adjust(IMAGE_SIZE / 2),
  } as ViewStyle,
  adjustForImageSpacing: {
    marginTop: Style.adjust(IMAGE_SIZE / 2 + LINE_HEIGHT_OFFSET),
  } as ViewStyle,
  centeredBox: {
    justifyContent: "center",
  },
});

export default SmokingCard;
