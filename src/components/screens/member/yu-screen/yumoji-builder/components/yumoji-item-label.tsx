import React, { memo } from "react";
import { Image, TextTemplate } from "@atoms";
import { View, ViewStyle } from "react-native";
import { Colours, Style, StyleSheet } from "@styles";

interface IProps {
  label: string;
  icon: string;
  width: number;
  backgroundColor?: string;
  labelColor?: string;
  borderColor?: string;
}

export const YumojiItemLabel = memo(({ icon, label, width, backgroundColor, borderColor, labelColor }: IProps) => {
  const dynamicWrapperStyles = {
    width,
    backgroundColor: backgroundColor || Colours.metallic.m100,
    borderColor: borderColor || Colours.metallic.m200,
  };
  return (
    <View style={[styles.parentWrapper, dynamicWrapperStyles]}>
      <View style={styles.wrapper}>
        <TextTemplate color={labelColor || Colours.metallic.m300} type={"l3b"}>
          {label}
        </TextTemplate>
        <Image
          style={styles.image}
          width={Style.adjust(12)}
          height={Style.adjust(12)}
          source={{ uri: icon }}
          suppressLoadingUi={true}
        />
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  parentWrapper: {
    height: Style.adjust(22),
    backgroundColor: Colours.metallic.m100,
    borderColor: Colours.metallic.m200,
    borderWidth: 1,
    borderRadius: Style.adjust(8),
    alignItems: "center",
    justifyContent: "center",
  } as ViewStyle,
  wrapper: {
    alignItems: "center",
    flexDirection: "row",
  } as ViewStyle,
  image: {
    marginStart: Style.adjust(4),
  },
});
