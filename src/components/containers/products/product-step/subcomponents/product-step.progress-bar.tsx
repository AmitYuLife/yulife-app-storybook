import React from "react";
import { ContentItemProgressBar } from "@components/sdui";
import { ContentItemProgressBar as GqlProps } from "@graphql/_core/schema";
import { View } from "react-native";

/**
 *
 * Wraps ContentItemProgressBar inside a View
 * because in Product journey, its parent
 * needs to be relatively positioned
 */

export const ProductStepProgressBar = (props: GqlProps) => {
  return (
    <View>
      <ContentItemProgressBar {...props} />
    </View>
  );
};
