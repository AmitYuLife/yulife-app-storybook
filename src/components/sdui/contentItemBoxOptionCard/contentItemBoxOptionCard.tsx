import React, { memo } from "react";
import { ContentItemBoxOptionCard as GqlProps } from "@graphql/_core/schema";
import { View } from "react-native";
import { BoxOptionCard } from "@components/molecules";
import { mapServerStyles } from "../_utils/mapServerStyles";
import { ITextTemplateType } from "@atoms/text/text-template";

export const ContentItemBoxOptionCard = memo(
  ({
    contentItemBoxOptionCardTitle: title,
    contentItemBoxOptionCardDescription: description,
    contentItemBoxOptionCardDescriptionTextType: descriptionTextType,
    image,
    onPress,
    styles,
    subtitle,
    subtitleTextType,
    titleWrapperStyles,
    subtitleWrapperStyles,
    innerHeight,
    descriptionNumberOfLines,
  }: GqlProps) => (
    <View style={mapServerStyles(styles)}>
      <BoxOptionCard
        descriptionTextType={descriptionTextType as ITextTemplateType}
        title={title}
        description={description}
        image={image}
        onPress={onPress}
        innerHeight={innerHeight}
        subtitle={subtitle}
        subtitleTextType={subtitleTextType as ITextTemplateType}
        titleWrapperStyles={mapServerStyles(titleWrapperStyles)}
        subtitleWrapperStyles={mapServerStyles(subtitleWrapperStyles)}
        descriptionNumberOfLines={descriptionNumberOfLines}
      />
    </View>
  )
);
