import React, { memo } from "react";
import { Colours, Style } from "@styles";
import { StyleSheet, View, ViewStyle } from "react-native";
import { Image, TextTemplate } from "@atoms";
import { Button } from "@components/molecules";

export interface IModule {
  icon: { id: string; uri: string };
  iconHeight: number;
  iconWidth: number;
  title: string;
  description: string;
  ctaLabel: string;
  ctaEnabled: boolean;
  onPress: () => void;
  wrapperStyle?: ViewStyle;
  children?: React.ReactNode;
}

const Module = ({
  title,
  description,
  ctaLabel,
  onPress,
  ctaEnabled,
  icon,
  iconHeight,
  iconWidth,
  children,
  wrapperStyle,
}: IModule) => (
  <View style={[styles.box, wrapperStyle]}>
    <View style={styles.iconAndTextWrapper}>
      <View style={styles.iconWrapper}>
        <Image height={Style.adjust(iconHeight)} width={Style.adjust(iconWidth)} source={{ uri: icon.uri }} />
      </View>
      <TextTemplate textAlign="center" type={"b1b"}>
        {title}
      </TextTemplate>
    </View>
    <View style={styles.descriptionWrapper}>
      <TextTemplate type={"b2"}>{description}</TextTemplate>
    </View>
    {children}
    <Button label={ctaLabel} size="Medium" onPress={onPress} disabled={!ctaEnabled} />
  </View>
);

const styles = StyleSheet.create({
  box: {
    backgroundColor: Colours.neutral.white,
    padding: Style.adjust(21),
    borderRadius: Style.adjust(8),
    marginBottom: Style.adjust(16),
  },
  descriptionWrapper: {
    marginVertical: Style.adjust(16),
  },
  iconWrapper: {
    marginRight: Style.adjust(8),
  },
  iconAndTextWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default memo(Module);
