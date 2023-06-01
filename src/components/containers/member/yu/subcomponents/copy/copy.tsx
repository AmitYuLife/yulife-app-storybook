import { Style } from "@styles";
import React, { FC, memo } from "react";
import { StyleSheet, View } from "react-native";
import Markdown from "@components/molecules/markdown/markdown";
import { mapServerStyles } from "@components/sdui";
import { SduiStyle } from "@graphql/_core/schema";

interface Props {
  title: string;
  description: string;
  styles: SduiStyle[];
}

export const Copy: FC<Props> = memo(({ title, description, styles: serverStyles }) => {
  return (
    <View style={mapServerStyles(serverStyles)}>
      <View style={styles.wrapper}>
        {!title ? null : (
          <View style={styles.titleWrapper}>
            <Markdown text={title} />
          </View>
        )}
        {!description ? null : <Markdown text={description} />}
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  titleWrapper: { marginBottom: Style.adjust(8) },
});
