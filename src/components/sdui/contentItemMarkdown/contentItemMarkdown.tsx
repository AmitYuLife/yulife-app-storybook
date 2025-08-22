import React, { memo } from "react";
import { ContentItemMarkdownFragment as GqlMarkdown } from "@graphql/__generated";
import { HeadingAndCopy } from "@components/molecules";
import { mapServerStyles } from "../_utils/mapServerStyles";

export const ContentItemMarkdown = memo((props: GqlMarkdown) => {
  return (
    <HeadingAndCopy
      testID={props.id}
      title={props.title}
      markdown={props.parsedMarkdown}
      wrapperStyle={mapServerStyles(props.styles)}
      markdownContainerStyle={mapServerStyles(props.markdownContainerStyle)}
      markdownStyles={props.markdownStyles}
    />
  );
});
