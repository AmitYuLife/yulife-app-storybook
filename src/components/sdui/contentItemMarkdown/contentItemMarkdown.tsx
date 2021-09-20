import React, { memo } from "react";
import { ContentItemMarkdown as GqlMarkdown } from "@graphql/_core/schema";
import { HeadingAndCopy } from "@components/molecules";
import { mapServerStyles } from "../_utils/mapServerStyles";

export const ContentItemMarkdown = memo((props: GqlMarkdown) => {
  return (
    <HeadingAndCopy
      title={props?.title}
      markdown={props?.parsedMarkdown}
      wrapperStyle={mapServerStyles(props.styles)}
      markdownContainerStyle={mapServerStyles(props.markdownContainerStyle)}
    />
  );
});
