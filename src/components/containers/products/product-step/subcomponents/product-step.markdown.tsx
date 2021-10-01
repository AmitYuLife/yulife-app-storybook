import React, { memo } from "react";
import { ContentItemMarkdown as GqlMarkdown } from "@graphql/_core/schema/ContentItemMarkdown";
import { ContentItemMarkdown } from "@components/sdui";

type Props = GqlMarkdown;

const DEFAULT_STYLES = [
  { property: "paddingLeft", value: "24" },
  { property: "paddingRight", value: "64" },
];

export const ProductStepMarkdown = memo((props: Props) => {
  const derivedStyles = [...DEFAULT_STYLES, ...(props.styles || [])];

  return <ContentItemMarkdown {...props} styles={derivedStyles} />;
});
