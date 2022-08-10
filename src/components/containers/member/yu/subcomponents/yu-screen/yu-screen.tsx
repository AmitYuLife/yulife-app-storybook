import React, { memo, useContext } from "react";
import { NameAndLevel } from "@components/molecules";
import { YumojiAndSlots } from "../yumoji-and-slots/yumoji-and-slots";
import { Carousel } from "../carousel/carousel";
import { Survey } from "../survey/survey";
import { GetYuScreen } from "@graphql/_core/schema";
import { GQL_QUERY_GET_YU_SCREEN } from "@graphql/yuscreen/getYuScreen.gql";
import { Onboarding } from "../onboarding/onboarding";
import { YuScreenLayout } from "./yu-screen-layout";
import { YuScreenSkeleton } from "./yu-screen-skeleton";
import { YuScreenContext } from "../../context/yu-screen.context";
import { useQueryOnScreenSeenOnce, useStatusBarStyle } from "@hooks";
import { ROUTES } from "@navigation/constants";
import { TOP_BAR_TYPES } from "@organisms/top-bar/top-bar.helpers";

interface Props {
  componentId: string;
}

export const YuScreen = memo(({ componentId }: Props) => {
  const [, { data }] = useQueryOnScreenSeenOnce<GetYuScreen>(GQL_QUERY_GET_YU_SCREEN, ROUTES.yuScreen);
  const { earnRate } = useContext(YuScreenContext);
  useStatusBarStyle(componentId, !!data?.getYuScreen?.onboarding);

  if (!data || earnRate === null) {
    return (
      <YuScreenLayout>
        <YuScreenSkeleton />
      </YuScreenLayout>
    );
  }

  const { onboarding, productCarousel, productSlots, surveyFooter, yumojiPrompt } = data?.getYuScreen || {};

  if (onboarding) {
    return (
      <YuScreenLayout fullHeight={true} hasWhiteBackground={false} topBarType={TOP_BAR_TYPES.WHITE}>
        <YuScreenSkeleton />
        <Onboarding onboarding={onboarding} productSlots={productSlots} />
      </YuScreenLayout>
    );
  }

  return (
    <YuScreenLayout>
      <NameAndLevel useWorldColor={true} hideWorldIcon={true} />
      <YumojiAndSlots productSlots={productSlots} yumojiPrompt={yumojiPrompt} />
      {productCarousel ? <Carousel heading={productCarousel.heading} items={productCarousel.items} /> : null}
      {surveyFooter ? (
        <Survey
          backgroundColour={surveyFooter.backgroundColour}
          button={surveyFooter.button}
          image={surveyFooter.image}
          markdown={surveyFooter.markdown}
        />
      ) : null}
    </YuScreenLayout>
  );
});
