import React, { memo } from "react";
import { View } from "react-native";
import { SkeletonLoading } from "@atoms";
import { BoxOption } from "@molecules";
import { Style, StyleSheet } from "@styles";
import { BOX_HEIGHT, IMAGE_HEIGHT, IMAGE_WIDTH, styles as stylesList } from "./media-list-items.styles";

interface IProps {
  items: number;
}

const MediaListItemsLoading = ({ items }: IProps) => (
  <>
    {Array.from({ length: items }).map((_, i) => (
      <BoxOption
        key={i}
        onPress={() => null}
        isSelected={false}
        wrapperStyle={stylesList.wrapper}
        innerHeight={BOX_HEIGHT}
        disabled={true}
      >
        <View style={stylesList.main}>
          <View style={stylesList.imageWrapper}>
            <SkeletonLoading style={styles.image} />
          </View>
          <View style={stylesList.detailWrapper}>
            <SkeletonLoading style={styles.title} />
            <SkeletonLoading style={styles.description} />
          </View>
        </View>
      </BoxOption>
    ))}
  </>
);

const styles = StyleSheet.create({
  image: {
    width: IMAGE_WIDTH,
    height: IMAGE_HEIGHT,
  },
  title: {
    width: 120,
    height: Style.adjust(10),
    marginTop: 10,
  },
  description: {
    width: 80,
    height: Style.adjust(10),
    marginTop: 10,
  },
});

export default memo(MediaListItemsLoading);
