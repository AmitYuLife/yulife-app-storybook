import React, { memo } from "react";
import { ContentItemBoxOptionCardFragment as GqlProps } from "@graphql/__generated";
import { View } from "react-native";
import { BoxOptionCard } from "@components/molecules";
import { mapServerStyles } from "../_utils/mapServerStyles";
import { TemplateTextType } from "@styles";

export const ContentItemBoxOptionCard = memo(
  ({
    contentItemBoxOptionCardTitle: title,
    contentItemBoxOptionCardDescription: description,
    contentItemBoxOptionCardDescriptionTextType: descriptionTextType,
    image,
    variableImage,
    onPress,
    event,
    styles,
    subtitle,
    subtitleTextType,
    titleStyles,
    titleWrapperStyles,
    subtitleWrapperStyles,
    innerWrapperStyles,
    contentInnerWrapperStyles,
    innerHeight,
    titleNumberOfLines,
    descriptionNumberOfLines,
  }: GqlProps) => (
    <View style={mapServerStyles(styles)}>
      <BoxOptionCard
        descriptionTextType={descriptionTextType as TemplateTextType}
        title={title}
        description={description}
        image={image}
        variableImage={variableImage}
        onPress={onPress}
        event={event}
        innerHeight={innerHeight}
        subtitle={subtitle}
        subtitleTextType={subtitleTextType as TemplateTextType}
        titleStyles={mapServerStyles(titleStyles)}
        titleWrapperStyles={mapServerStyles(titleWrapperStyles)}
        subtitleWrapperStyles={mapServerStyles(subtitleWrapperStyles)}
        innerWrapperStyles={mapServerStyles(innerWrapperStyles)}
        contentInnerWrapperStyles={mapServerStyles(contentInnerWrapperStyles)}
        titleNumberOfLines={titleNumberOfLines}
        descriptionNumberOfLines={descriptionNumberOfLines}
      />
    </View>
  )
);
