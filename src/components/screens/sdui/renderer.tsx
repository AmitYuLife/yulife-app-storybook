import React from "react";

import {
  ContentItemMarkdown,
  ContentItemButton,
  ContentItemImage,
  ContentItemText,
  ContentItemPad,
  ContentItemRadio,
  ContentItemHeaderBar,
  ContentItemProgressBar,
} from "@components/sdui";
import { ContentItem } from "@graphql/_core/schema";

export const componentMap = {
  ContentItemMarkdown,
  ContentItemButton,
  ContentItemImage,
  ContentItemText,
  ContentItemPad,
  ContentItemRadio,
  ContentItemHeaderBar,
  ContentItemProgressBar,
} as Record<string, (props: any) => JSX.Element>;

export const renderItemContent = (item: ContentItem): JSX.Element | null => {
  const Component = componentMap[item?.__typename];

  if (!Component) {
    return null;
  }

  /**
   * @TODO Add id fields to all ContentItems
   * for example: ContentItemForm
   */
  return <Component key={(item as any).id} {...item} />;
};
