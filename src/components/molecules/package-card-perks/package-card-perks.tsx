import React, { memo } from "react";
import { StyleSheet, View, ViewStyle } from "react-native";
import { Colours, Style } from "@styles";
import { Image, Source, TextTemplate } from "@atoms";
import { RemoteImage } from "@graphql/__generated";

interface Props {
  leftIcon: RemoteImage;
  rightIcon?: RemoteImage;
  title: string;
  description: string;
  isLocked?: boolean;
  wrapperStyle?: ViewStyle;
}

export const PackageCardPerks = memo((props: Props) => {
  const leftIcon = props.leftIcon?.uri && { uri: props.leftIcon?.uri };
  const rightIcon = props.rightIcon?.uri && { uri: props.rightIcon?.uri };

  return (
    <View style={[styles.marginBottom, props.wrapperStyle]}>
      <View style={[styles.wrapper, props.isLocked ? { alignItems: "center", borderStyle: "dashed" } : null]}>
        <Icon icon={leftIcon} />
        <View style={styles.optionDetail}>
          <View style={styles.title}>
            <TextTemplate color={props.isLocked ? Colours.neutral.n400 : Colours.neutral.n800} type="l1b">
              {props.title}
            </TextTemplate>
          </View>
          <TextTemplate
            color={props.isLocked ? Colours.neutral.n400 : Colours.neutral.n800}
            type={props.isLocked ? "l3" : "l1"}
            numberOfLines={999}
          >
            {props.description}
          </TextTemplate>
        </View>
        <Icon icon={rightIcon} />
      </View>
    </View>
  );
});

const Icon = ({ icon }: { icon: Source }) =>
  !icon ? null : <Image source={icon} width={Style.adjust(24)} height={Style.adjust(24)} />;

const styles = StyleSheet.create({
  marginBottom: {
    marginBottom: Style.adjust(8),
  } as ViewStyle,
  wrapper: {
    flexDirection: "row",
    backgroundColor: Colours.neutral.n50,
    borderColor: Colours.metallic.m200,
    borderWidth: 1,
    paddingHorizontal: Style.adjust(16),
    paddingVertical: Style.adjust(8),
    borderRadius: Style.adjust(8),
  } as ViewStyle,
  icon: {
    marginEnd: Style.adjust(16),
  } as ViewStyle,
  title: {
    marginBottom: Style.adjust(4),
  },
  optionDetail: {
    flex: 1,
    marginStart: Style.adjust(16),
  } as ViewStyle,
});
