import React, { memo } from "react";
import { ContentItemImage as GqlImage } from "@graphql/_core/schema";
import { Image } from "@atoms";
import { mapServerStyles } from "@components/sdui";

type Props = GqlImage & { headerHeight: number; shouldAccountForHeader: boolean };

export const AbsoluteContentItemImage = memo((props: Props) => {
  const serverStyles = mapServerStyles(props.styles);

  if (!serverStyles || !props.image?.uri) {
    return null;
  }

  const style = {
    ...serverStyles,
    position: "absolute" as "absolute",
    top: props.shouldAccountForHeader
      ? (serverStyles.top as number) + props.headerHeight
      : (serverStyles.top as number),
  };

  return (
    <Image width={serverStyles?.width as number} resizeMode="contain" style={style} source={{ uri: props.image.uri }} />
  );
});
