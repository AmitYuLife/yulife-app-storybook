import { Image } from "@atoms";
import { Style } from "@styles";
import React, { memo } from "react";
import { StyleSheet, View } from "react-native";

interface IProps {
  iconUrl: string;
  children: React.ReactNode;
  backgroundColor: string;
  borderColor: string;
  iconWidth: number;
  iconHeight: number;
}

const Toast = ({ iconUrl, children, backgroundColor, borderColor, iconWidth, iconHeight }: IProps) => (
  <View style={[styles.wrapper, { backgroundColor }]}>
    <View style={[styles.border, { backgroundColor: borderColor }]} />
    <Image
      width={Style.adjust(iconWidth)}
      height={Style.adjust(iconHeight)}
      source={{ uri: iconUrl }}
      style={styles.image}
    />
    <View style={styles.children}>{children}</View>
  </View>
);

const styles = StyleSheet.create({
  wrapper: {
    borderRadius: 8,
    flexDirection: "row",
  },
  border: {
    position: "absolute",
    width: 5,
    height: "99%",
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
  },
  image: {
    marginEnd: Style.adjust(8),
    alignSelf: "flex-end",
  },
  children: {
    flex: 1,
    margin: Style.adjust(8),
  },
});

export default memo(Toast);
