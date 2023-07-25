import React, { ComponentProps, memo } from "react";
import { View } from "react-native";
import { TEXT_TEMPLATE } from "@ids";
import { TextTemplate } from "@atoms";
import { ContentItemText as GqlText } from "@graphql/_core/schema";
import { mapServerStyles } from "../_utils/mapServerStyles";

type TemplateProps = ComponentProps<typeof TextTemplate>;

type Props = GqlText;

export const ContentItemText = memo(({ text, textType, textAlign, styles, colour, ...props }: Props) => {
  if (!text) {
    return null;
  }

  return (
    <View style={mapServerStyles(styles)}>
      <TextTemplate
        {...props}
        color={colour}
        type={textType as TemplateProps["type"]}
        textAlign={textAlign as TemplateProps["textAlign"]}
        testID={TEXT_TEMPLATE(text, textType)}
      >
        {text}
      </TextTemplate>
    </View>
  );
});
