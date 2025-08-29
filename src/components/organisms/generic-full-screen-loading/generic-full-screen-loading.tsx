import { Loading } from "@atoms";
import { GenericHeadingAbsolute, GenericHeadingPad } from "@organisms";
import React, { memo } from "react";
import { ActivityIndicatorProps, View } from "react-native";

import { StyleSheet } from "@styles";
type TypeProps =
  | { onLeftIconPress: () => void; onRightIconPress?: never }
  | { onRightIconPress: () => void; onLeftIconPress?: never };

interface CommonProps {
  heading?: string;
  loadingSize?: ActivityIndicatorProps["size"];
}

type IProps = CommonProps & TypeProps;

const GenericFullScreenLoading = ({ heading, onLeftIconPress, onRightIconPress, loadingSize }: IProps) => (
  <View style={styles.flex}>
    <GenericHeadingPad />
    <View style={styles.wrapper}>
      <Loading size={loadingSize} />
    </View>
    <GenericHeadingAbsolute heading={heading} onLeftIconPress={onLeftIconPress} onRightIconPress={onRightIconPress} />
  </View>
);

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  wrapper: {
    flex: 1,
    justifyContent: "center",
  },
});

export default memo(GenericFullScreenLoading);
