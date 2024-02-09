import React from "react";
import { ContentItemProgressBar } from "@components/sdui";
import { ContentItemProgressBarFragment as GqlProps } from "@graphql/__generated";
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
