import React from "react";
import { View, StyleSheet, ViewStyle } from "react-native";
import { TextTemplate } from "@atoms";
import { Style, Colours, TemplateTextType } from "@styles";
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

  return (
    <View style={[styles.textWrapper, mapServerStyles(textStyles)]} testID={IMAGE_CHOICE_LABEL(label)}>
      <TextTemplate type={textType} color={Colours.neutral.n800} textAlign="center">
        {label}
      </TextTemplate>
    </View>
  );
};

const styles = StyleSheet.create({
  textWrapper: {
    alignSelf: "center",
    marginLeft: Style.adjust(16),
    marginRight: Style.adjust(16),
    marginBottom: Style.adjust(8),
  } as ViewStyle,
});
