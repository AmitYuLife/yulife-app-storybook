import { Image } from "@atoms";
import { BoxOptionCard, NameAndLevel } from "@components/molecules";
import { gql } from "@graphql/__generated";
import { useQueryOnScreenSeenOnce, useStatusBarStyle } from "@hooks";
import { ONBOARDING_SCREEN_V4, V4_YUSCREEN } from "@ids";
import { ROUTES } from "@navigation/constants";
import { TOP_BAR_TYPES } from "@organisms/top-bar/top-bar.helpers";
import { Style } from "@styles";
import React, { memo, useContext } from "react";
import { StyleSheet, View } from "react-native";
import { YuScreenContext } from "../../context/yu-screen.context";
import { useOnboardingButtonHandler } from "../../hooks/useOnboardingButtonHandler";
import { Carousel } from "../carousel/carousel";
import { Copy } from "../copy/copy";
import { EnrolmentTimer } from "../enrolmentTimer/enrolmentTimer";
import { Onboarding } from "../onboarding/onboarding";
import { Survey } from "../survey/survey";
import { YumojiAndSlots } from "../yumoji-and-slots/yumoji-and-slots";
import { YuScreenLayout } from "./yu-screen-layout";
import { YuScreenSkeleton } from "./yu-screen-skeleton";

interface Props {
  componentId: string;
  onNotificationPress: () => void;
}

export const YuScreen = memo(({ componentId, onNotificationPress }: Props) => {
  const [, { data }] = useQueryOnScreenSeenOnce(gql("GetYuScreenDocument"), ROUTES.yuScreen, {
    fetchPolicy: "network-only",
  });
  const onboarding = data?.getYuScreen?.onboarding;

  const { earnRate } = useContext(YuScreenContext);
  const { shouldShowOnboarding, onPressOnboardingButton, closeOnboarding } = useOnboardingButtonHandler(onboarding);

  const isOnboardingShown = !!onboarding && shouldShowOnboarding;
  useStatusBarStyle(componentId, isOnboardingShown);

  if (!data?.getYuScreen || earnRate === null) {
    return (
      <YuScreenLayout onNotificationPress={onNotificationPress}>
        <YuScreenSkeleton />
      </YuScreenLayout>
    );
  }

  const {
    productCarousel,
    productSlots,
    surveyFooter,
    yumojiPrompt,
    carrierLogo,
    enrollCopy,
    boxOptionCards,
    spanningProductSlot,
    enrolTimer,
  } = data.getYuScreen;

  if (isOnboardingShown) {
    return (
      <YuScreenLayout
        onNotificationPress={onNotificationPress}
        fullHeight={true}
        hasWhiteBackground={false}
        topBarType={TOP_BAR_TYPES.WHITE}
        testID={ONBOARDING_SCREEN_V4}
      >
        <YuScreenSkeleton />
        <Onboarding onboarding={onboarding} onPress={onPressOnboardingButton} onClose={closeOnboarding} />
      </YuScreenLayout>
    );
  }

  return (
    <YuScreenLayout testID={V4_YUSCREEN} onNotificationPress={onNotificationPress}>
      <NameAndLevel useWorldColor={true} hideWorldIcon={true} />
      <YumojiAndSlots
        spanningProductSlot={spanningProductSlot}
        productSlots={productSlots}
        yumojiPrompt={yumojiPrompt}
      />
      {!enrolTimer ? null : <EnrolmentTimer {...enrolTimer} />}
      {!enrollCopy ? null : <Copy {...enrollCopy} />}
      {!boxOptionCards?.length ? null : (
        <View style={styles.boxOptionCardWrapper}>
          {boxOptionCards.map((boxOptionCard, boxOptionCardIndex) => (
            <BoxOptionCard key={boxOptionCardIndex} {...boxOptionCard} />
          ))}
        </View>
      )}
      {productCarousel ? <Carousel heading={productCarousel.heading} items={productCarousel.items} /> : null}
      {carrierLogo ? (
        <View style={styles.carrierLogoWrapper}>
          <Image source={carrierLogo.image} width={carrierLogo.width} />
        </View>
      ) : null}
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

const styles = StyleSheet.create({
  carrierLogoWrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: Style.adjust(32),
  },
  boxOptionCardWrapper: {
    paddingHorizontal: Style.adjust(16),
    marginTop: Style.adjust(16),
  },
});
