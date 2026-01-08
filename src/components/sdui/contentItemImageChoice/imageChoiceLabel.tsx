import React from "react";
import { View, ViewStyle } from "react-native";
import { TextTemplate } from "@atoms";
import { Style, Colours, TemplateTextType, StyleSheet } from "@styles";
import { ContentItemImageChoiceFragment } from "@graphql/__generated";
import { mapServerStyles } from "../_utils/mapServerStyles";
import { IMAGE_CHOICE_LABEL } from "@ids";

interface Props {
  label: string;
  labelTextType?: string;
  textStyles: ContentItemImageChoiceFragment["textStyles"];
}

export const ImageChoiceLabel = ({ label, labelTextType, textStyles }: Props) => {
  const textType = (labelTextType as TemplateTextType) || "b2";
  const mappedTextStyles = mapServerStyles(textStyles);
  const colorTextStyle = mappedTextStyles?.color ? String(mappedTextStyles?.color) : Colours.neutral.n800;

  return (
    <View style={[styles.textWrapper, mapServerStyles(textStyles)]} testID={IMAGE_CHOICE_LABEL(label)}>
      <TextTemplate type={textType} color={colorTextStyle} textAlign="center">
        {label}
      </TextTemplate>
    </View>
  );
};

const styles = StyleSheet.create({
  textWrapper: {
    alignSelf: "center",
    marginStart: Style.adjust(16),
    marginEnd: Style.adjust(16),
    marginBottom: Style.adjust(8),
  } as ViewStyle,
});
