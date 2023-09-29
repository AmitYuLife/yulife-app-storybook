import { Loading } from "@atoms";
import { GenericHeadingAbsolute, GenericHeadingPad } from "@organisms";
import React, { memo } from "react";
import { StyleSheet, View } from "react-native";

type TypeProps =
  | { onLeftIconPress: () => void; onRightIconPress?: never }
  | { onRightIconPress: () => void; onLeftIconPress?: never };

interface CommonProps {
  heading?: string;
}

type IProps = CommonProps & TypeProps;

const GenericFullScreenLoading = ({ heading, onLeftIconPress, onRightIconPress }: IProps) => (
  <View style={styles.flex}>
    <GenericHeadingPad />
    <View style={styles.wrapper}>
      <Loading />
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
