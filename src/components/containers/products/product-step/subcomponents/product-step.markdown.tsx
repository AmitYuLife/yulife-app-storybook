import React, { memo } from "react";
import { ContentItemMarkdownFragment as GqlMarkdown } from "@graphql/__generated";
import { ContentItemMarkdown } from "@components/sdui";

type Props = GqlMarkdown;

export const ProductStepMarkdown = memo((props: Props) => {
  return <ContentItemMarkdown {...props} />;
});
