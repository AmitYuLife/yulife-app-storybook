import React, { memo } from "react";
import { ContentItemBox as GqlProps } from "@graphql/_core/schema";
import { TapToCopy } from "@organisms";

export const ContentItemBox = memo((props: GqlProps) => (
  <TapToCopy key={props.id} markdown={true} heading={props.title} text={props.parsedMarkdown} canCopy={props.canCopy} />
));
