import { Style } from "@styles";
import React, { FC, memo } from "react";
import { StyleSheet, View } from "react-native";
import Markdown from "@components/molecules/markdown/markdown";

interface Props {
  title: string;
  description: string;
}

export const Copy: FC<Props> = memo(({ title, description }) => {
  return (
    <View style={styles.wrapper}>
      <View>
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
    paddingHorizontal: Style.adjust(24),
    marginTop: Style.adjust(32),
  },
  titleWrapper: { marginBottom: Style.adjust(8) },
});
