import React, { memo } from "react";
import { GetSduiJourneyQuery, ContentItemStackedShadowWrapperFragment as Props } from "@graphql/__generated";
import { StackedShadowWrapper } from "@atoms";
import { parseJSON } from "@utils";
import { Renderer } from "../_renderer/renderer";
import { mapServerStyles } from "../_utils/mapServerStyles";

export const ContentItemStackedShadowWrapper = memo(
  ({ children, stackColors, styles, outerStyles, shadowHeight, borderRadius }: Props) => {
    const { data, isValid } = parseJSON<GetSduiJourneyQuery["getSduiJourney"]["body"]>(children);

    if (!isValid || !data?.length) {
      return null;
    }

    const mappedStyles = mapServerStyles(styles);
    const mappedOuterStyles = mapServerStyles(outerStyles);

    return (
      <StackedShadowWrapper
        stackColors={stackColors}
        style={mappedStyles}
        outerStyle={mappedOuterStyles}
        shadowHeight={shadowHeight}
        borderRadius={borderRadius}
      >
        <>
          {data.filter(Boolean).map((dataItem) => (
            <Renderer key={(dataItem as { id: string }).id} item={dataItem} />
          ))}
        </>
      </StackedShadowWrapper>
    );
  }
);
