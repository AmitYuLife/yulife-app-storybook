import React, { ComponentProps, memo, useContext } from "react";
import { View } from "react-native";
import { TEXT_TEMPLATE } from "@ids";
import { TextTemplate } from "@atoms";
import { ContentItemTextFragment as GqlText } from "@graphql/__generated";
import { mapServerStyles } from "../_utils/mapServerStyles";
import { SduiStateContext } from "../_context/SduiProvider";

type TemplateProps = ComponentProps<typeof TextTemplate>;

type Props = GqlText;

export const ContentItemText = memo(({ id, text, textType, textAlign, styles, colour, ...props }: Props) => {
  if (!text) {
    return null;
  }

  const mappedServerStyle = mapServerStyles(styles) || {};
  const mappedServerStyleColor: string | undefined = (mappedServerStyle as Record<string, unknown>).color as string;

  return (
    <View style={mappedServerStyle} testID={id}>
      <TextTemplate
        {...props}
        color={mappedServerStyleColor || colour}
        type={textType as TemplateProps["type"]}
        textAlign={textAlign as TemplateProps["textAlign"]}
        testID={TEXT_TEMPLATE(text, textType)}
      >
        {text}
      </TextTemplate>
    </View>
  );
});

export const ContentItemTextSdui = memo((props: Props) => {
  const { dynamicStyles } = useContext(SduiStateContext);
  const defaultStyle = props.styles || [];
  const dynamicStyle = dynamicStyles[props.dynamicStyleKey] || [];
  const styles = [...defaultStyle, ...dynamicStyle];

  return <ContentItemText {...props} styles={styles} />;
});
