import React, { memo } from "react";
import { StyleSheet, View, ViewStyle } from "react-native";
import { ContentItemReviewItem as GqlReviewItem } from "@graphql/_core/schema";
import { TouchableOpacityWithDelay } from "@components/molecules";
import { Style } from "@styles";
import { Image, TextTemplate } from "@atoms";

export const ContentItemReviewItem = memo(({ leftIcon, text, rightIcon, subheading }: GqlReviewItem) => {
  return (
    <TouchableOpacityWithDelay style={styles.wrapper} onPress={() => console.log("TODO: send to the right stepId")}>
      <View style={styles.detailsWrapper}>
        <View style={styles.leftIconWrapper}>
          <Image height={Style.adjust(24)} width={Style.adjust(24)} source={{ uri: leftIcon.uri }} />
        </View>
        <View style={styles.textWrapper}>
          <TextTemplate type="b2b">{text}</TextTemplate>
          <TextTemplate type="b2">{subheading}</TextTemplate>
        </View>
      </View>
      <View style={styles.imageWrapper}>
        <Image height={24} width={24} source={{ uri: rightIcon.uri }} />
      </View>
    </TouchableOpacityWithDelay>
  );
});

const styles = StyleSheet.create({
  wrapper: {
    paddingLeft: Style.adjust(24),
    paddingVertical: Style.adjust(16),
    minHeight: Style.adjust(80),
    flexDirection: "row",
    borderColor: "#F3F3F3",
    borderBottomWidth: 1,
    alignItems: "center",
  } as ViewStyle,
  detailsWrapper: {
    flex: 1,
    flexDirection: "row",
  } as ViewStyle,
  textWrapper: {
    flex: 1,
    paddingLeft: Style.adjust(8),
  } as ViewStyle,
  leftIconWrapper: {
    marginRight: Style.adjust(8),
  } as ViewStyle,
  imageWrapper: {
    marginLeft: "auto",
    marginRight: Style.adjust(7),
  } as ViewStyle,
});
