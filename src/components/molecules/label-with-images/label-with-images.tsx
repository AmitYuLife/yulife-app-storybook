import React, { memo, useMemo } from "react";
import { View } from "react-native";
import { Image } from "@atoms";
import { Colours, Style, StyleSheet } from "@styles";
import { NUM_OF_STARS } from "@ids";

interface IStarWrapper {
  labelImages: ILabelImage[];
  backgroundColor: string;
}

export interface ILabelImage {
  id?: string;
  uri?: string;
}

const LabelWithImages = ({ labelImages, backgroundColor }: IStarWrapper) => {
  const labelStyle = useMemo(() => ({ ...styles.labelBackground, backgroundColor }), [backgroundColor]);
  return (
    <View style={styles.labelWrapper}>
      <View style={labelStyle} testID={NUM_OF_STARS(labelImages.length)}>
        {labelImages.map((labelImage, index) => (
          <View style={styles.labelImageWrapper} key={`${labelImage.id}_${index}`}>
            <Image
              source={{ uri: labelImage.uri }}
              height={Style.adjust(11)}
              width={Style.adjust(10)}
              style={styles.labelImage}
              suppressLoadingUi={true}
            />
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  labelWrapper: {
    paddingHorizontal: Style.adjust(2),
    height: Style.adjust(20),
    borderRadius: Style.adjust(10),
    backgroundColor: Colours.neutral.white,
    alignItems: "center",
    justifyContent: "center",
  },
  labelBackground: {
    height: Style.adjust(16),
    borderRadius: Style.adjust(8),
    paddingHorizontal: Style.adjust(4),
    paddingTop: Style.adjust(2),
    flexDirection: "row",
  },
  labelImageWrapper: {
    height: Style.adjust(11),
    width: Style.adjust(10),
    marginHorizontal: 1,
  },
  labelImage: {
    height: Style.adjust(11),
    width: Style.adjust(10),
  },
});

export default memo(LabelWithImages);
