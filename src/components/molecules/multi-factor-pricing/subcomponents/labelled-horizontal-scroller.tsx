import React, { ComponentProps, memo } from "react";
import { StyleSheet, View, ViewStyle } from "react-native";
import { Style } from "@styles";
import LabelledHorizontalScroller from "../../labelled-horizontal-scroller/labelled-horizontal-scroller";

type Props = ComponentProps<typeof LabelledHorizontalScroller>;

const LabelledHorizontalScrollerSubcomponent = (props: Props) => (
  <View style={styles.wrapper}>
    <LabelledHorizontalScroller {...props} />
  </View>
);

const styles = StyleSheet.create({
  wrapper: {
    marginTop: Style.adjust(14),
  } as ViewStyle,
});

export default memo(LabelledHorizontalScrollerSubcomponent);
