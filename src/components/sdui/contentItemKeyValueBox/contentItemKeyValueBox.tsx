import React, { memo } from "react";
import { ContentItemKeyValueBoxFragment as GqlProps } from "@graphql/__generated";
import { mapServerStyles } from "../_utils/mapServerStyles";
import { TextTemplate } from "@atoms";
import { View } from "react-native";

import { StyleSheet } from "@styles";
export const ContentItemKeyValueBox = memo((props: GqlProps) => (
  <View style={mapServerStyles(props.wrapperStyles)}>
    <View style={[styles.container, mapServerStyles(props.styles)]}>
      <TextTemplate type="b2b">{props.boxKey}</TextTemplate>
      <TextTemplate type="b2">{props.boxValue}</TextTemplate>
    </View>
  </View>
));

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
