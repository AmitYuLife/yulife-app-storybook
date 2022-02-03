import React, { memo } from "react";
import { ContentItemKeyValueBox as GqlProps } from "@graphql/_core/schema";
import { mapServerStyles } from "../_utils/mapServerStyles";
import { TextTemplate } from "@atoms";
import { StyleSheet, View } from "react-native";

export const ContentItemKeyValueBox = memo((props: GqlProps) => (
  <View style={[styles.wrapper, mapServerStyles(props.styles)]}>
    <TextTemplate type="b2b">{props.boxKey}</TextTemplate>
    <TextTemplate type="b2">{props.boxValue}</TextTemplate>
  </View>
));

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
