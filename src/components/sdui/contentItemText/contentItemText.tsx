import React, { ComponentProps, memo } from "react";
import { View } from "react-native";
import { TextTemplate } from "@atoms";
import { ContentItemText as GqlText } from "@graphql/_core/schema";
import { mapServerStyles } from "../_utils/mapServerStyles";

type TemplateProps = ComponentProps<typeof TextTemplate>;

type Props = GqlText;

export const ContentItemText = memo(({ text, textType, textAlign, styles, ...props }: Props) => {
  return (
    <View style={mapServerStyles(styles)}>
      <TextTemplate
        {...props}
        type={textType as TemplateProps["type"]}
        textAlign={textAlign as TemplateProps["textAlign"]}
      >
        {text}
      </TextTemplate>
    </View>
  );
});
