import { TextTemplate, Image } from "@atoms";
import { Style } from "@styles";
import React, { memo } from "react";
import { View, StyleSheet } from "react-native";

export interface Tag {
  tag: string;
  image?: { uri?: string };
}

interface IProps {
  tags: Tag[];
}

const TagsWithImage = ({ tags }: IProps) => (
  <View style={styles.wrapper}>
    {tags.map(({ tag, image }) => (
      <View style={styles.rewardTagWrapper} key={tag}>
        <TextTemplate type="l2">{tag}</TextTemplate>
        {!image ? null : (
          <View style={styles.rewardTagIconWrapper}>
            <Image height={Style.adjust(16)} width={Style.adjust(16)} source={{ uri: image.uri }} />
          </View>
        )}
      </View>
    ))}
  </View>
);

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
  },
  rewardTagWrapper: {
    flexDirection: "row",
    marginRight: Style.adjust(16),
  },
  rewardTagIconWrapper: {
    marginLeft: Style.adjust(4),
  },
});

export default memo(TagsWithImage);
