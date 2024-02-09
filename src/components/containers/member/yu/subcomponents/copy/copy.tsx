import React, { FC, memo } from "react";
import { StyleSheet, View } from "react-native";
import Markdown from "@components/molecules/markdown/markdown";
import { mapServerStyles } from "@components/sdui";
import { SduiStyle } from "@graphql/__generated";

interface Props {
  title: string;
  description: string;
  styles?: SduiStyle[];
}

export const Copy: FC<Props> = memo(({ title, description, styles: serverStyles }) => {
  return (
    <View style={mapServerStyles(serverStyles)}>
      <View style={styles.wrapper}>
        {!title ? null : <Markdown text={title} />}
        {!description ? null : <Markdown text={description} />}
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
});
