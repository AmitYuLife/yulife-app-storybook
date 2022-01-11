import React, { memo } from "react";
import { StyleSheet, View, ViewStyle } from "react-native";
import { TextTemplate } from "@atoms";
import { YugiStatusIcon } from "@atoms/icon/yugi-status-icon";
import { Colours, Style } from "@styles";

interface Props {
  copy: string;
}

const InfoPanel = ({ copy }: Props) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.imageWrapper}>
        <YugiStatusIcon />
      </View>
      <View style={styles.copyWrapper}>
        <TextTemplate type="b2">{copy}</TextTemplate>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    flex: 1,
    overflow: "hidden",
    backgroundColor: Colours.status.wa100,
    borderRadius: Style.adjust(8),
  } as ViewStyle,
  imageWrapper: {
    position: "absolute",
    top: 0,
    left: 0,
  } as ViewStyle,
  copyWrapper: {
    paddingVertical: Style.adjust(8),
    paddingRight: Style.adjust(48),
    marginLeft: Style.adjust(64),
  } as ViewStyle,
});

export default memo(InfoPanel);
