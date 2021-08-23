import React, { memo } from "react";
import { ContentItemPad as GqlPad } from "@graphql/_core/schema";
import { View } from "react-native";

type Props = GqlPad;

export const ContentItemPad = memo((props: Props) => {
  const { amount = 0 } = props;

  return <View style={{ height: amount }} />;
});
