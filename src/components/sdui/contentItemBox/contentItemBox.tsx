import React, { memo } from "react";
import { ContentItemBoxFragment as GqlProps } from "@graphql/__generated";
import { TapToCopy } from "@organisms";

export const ContentItemBox = memo((props: GqlProps) => (
  <TapToCopy key={props.id} markdown={true} heading={props.title} text={props.parsedMarkdown} canCopy={props.canCopy} />
));
