import React, { memo } from "react";
import { ContentItemMarkdown as GqlMarkdown } from "@graphql/_core/schema/ContentItemMarkdown";
import { ContentItemMarkdown } from "@components/sdui";

type Props = GqlMarkdown;

export const ProductStepMarkdown = memo((props: Props) => {
  return <ContentItemMarkdown {...props} />;
});
