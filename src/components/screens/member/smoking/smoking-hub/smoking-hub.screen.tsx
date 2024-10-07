import React, { memo, useEffect, useMemo } from "react";
import { ScrollView, View } from "react-native";
import { HealthSmokingState } from "@redux/health-smoking/health-smoking.types";
import { Navigation } from "@navigation/main";
import { ROUTES } from "@navigation/constants";
import { Image, TextTemplate } from "@atoms";
import { TouchableOpacityWithDelay, Markdown, SmokingChips } from "@components/molecules";
import { GenericHeadingAbsolute, GenericHeadingPad, SmokingCarousel } from "@organisms";
import { Colours, Style, templateTextStyles } from "@styles";
import { styles } from "./smoking-hub.styles";
import { SmokingHeading, SmokingMilestones, SmokingCard, SmokingSponsorshipCard, SmokingTips } from "./subcomponents";
import { MOMENTS_TO_MONITOR, SMOKING_CONTAINER_SCROLL, SMOKING_HUB_OPT_OUT, SMOKING_HUB_REASONS } from "@ids";
import { t } from "@locale";
import { VoidFunction } from "@utils";
import { StreakProgressAnimationItem } from "./subcomponents/streak-progress-animation-item";

type Props = {
  smokingState: HealthSmokingState;
  showOptOutOverlay: VoidFunction;
  editTriggers: VoidFunction;
  editReasons: VoidFunction;
  navigateToCommitmentScreen: (smokingState: HealthSmokingState) => void;
  shouldAnimatePlants: boolean;
  lapsed: boolean;
  initialSmokingState: Partial<HealthSmokingState>;
};

const SmokingHubScreen = ({
  smokingState,
  showOptOutOverlay,
  editTriggers,
  editReasons,
  navigateToCommitmentScreen,
  shouldAnimatePlants,
  lapsed,
  initialSmokingState,
}: Props) => {
  const memoized = useMemo(
    () => ({
      containerStyle: [styles.container, { backgroundColor: smokingState.backgroundColour ?? "#F9E2FF" }],
      plantsWrapperStyle: [
        styles.plantsWrapper,
        {
          left: getPlantWrapperLeftPosition(smokingState.currentStreak),
        },
      ],
    }),
    [smokingState.currentStreak, smokingState.backgroundColour]
  );
  const [canStartPlantAnimation, setCanStartPlantAnimation] = React.useState(false);

  useEffect(() => {
    if (!initialSmokingState.updatedToday && smokingState.updatedToday && shouldAnimatePlants) {
      setCanStartPlantAnimation(true);
    }
  }, [smokingState, shouldAnimatePlants]);

  const carouselScrollTo = useMemo(() => {
    const currentClaimIndex = smokingState.streakCarousel?.findIndex(
      (reward) => reward.status === "completed" || reward.status === "pending"
    );

    return currentClaimIndex === -1 ? smokingState.streakCarousel?.length - 1 : currentClaimIndex;
  }, [smokingState.streakCarousel]);

  return (
    <View style={memoized.containerStyle}>
      <View style={styles.innerWrapper}>
        <ScrollView
          testID={SMOKING_CONTAINER_SCROLL}
          style={styles.scrollView}
          showsVerticalScrollIndicator={false}
          scrollEventThrottle={100}
          contentInsetAdjustmentBehavior="never"
        >
          <View style={styles.header}>
            <GenericHeadingPad />
            {!smokingState.backgroundImage ? null : (
              <Image
                source={{ uri: smokingState.backgroundImage.uri }}
                width={Style.DEVICE_WIDTH}
                style={styles.backgroundImage}
              />
            )}
            <SmokingHeading smokingState={smokingState} navigateToCommitmentScreen={navigateToCommitmentScreen} />
            {!smokingState.streakCarousel ? null : (
              <SmokingCarousel streak={smokingState.streakCarousel} scrollTo={carouselScrollTo} />
            )}
            {!smokingState.streakProgressAnimation?.items?.length ? null : (
              <View style={memoized.plantsWrapperStyle}>
                {smokingState.streakProgressAnimation.items.map((streakProgressAnimationItem) => (
                  <StreakProgressAnimationItem
                    key={streakProgressAnimationItem.animation}
                    start={streakProgressAnimationItem.start}
                    end={streakProgressAnimationItem.end}
                    animation={streakProgressAnimationItem.animation}
                    shouldAnimate={canStartPlantAnimation}
                    lapsed={lapsed}
                  />
                ))}
              </View>
            )}
          </View>
          <View style={styles.content}>
            <View style={styles.title}>
              <TextTemplate type="h3" textAlign="left">
                {smokingState.journeySoFarHeading}
              </TextTemplate>
            </View>

            <SmokingMilestones milestones={smokingState.milestoneCarousel} />

            <View style={styles.smokingCardSection}>
              <SmokingCard
                image={smokingState.totalAvoided.image}
                value={smokingState.totalAvoided.value}
                title={smokingState.totalAvoided.title}
              />

              <SmokingCard
                image={smokingState.totalSaved.image}
                value={smokingState.totalSaved.value}
                title={smokingState.totalSaved.title}
              />
            </View>

            {!smokingState.sponsorship ? null : (
              <SmokingSponsorshipCard
                title={smokingState.sponsorship.title}
                description={smokingState.sponsorship.description}
                cta={smokingState.sponsorship.cta}
                backgroundImage={smokingState.sponsorship.backgroundImage}
              />
            )}

            {!smokingState.tips?.length ? null : <SmokingTips tips={smokingState.tips} />}

            <View style={styles.box} testID={MOMENTS_TO_MONITOR}>
              <View style={styles.boxSection}>
                <TextTemplate type="b1b" textAlign="left">
                  {t("screens.smoking_hub.moments_to_monitor")}
                </TextTemplate>
                <SmokingChips
                  values={smokingState.triggers.map((trigger) => trigger.label)}
                  backgroundColor={Colours.secondary.s10S3}
                  onPressEdit={editTriggers}
                />
              </View>

              <View style={styles.boxSection} testID={SMOKING_HUB_REASONS}>
                <TextTemplate type="b1b" textAlign="left">
                  {t("screens.smoking_hub.reasons")}
                </TextTemplate>
                <SmokingChips
                  values={smokingState.reasons.map((reason) => reason.label)}
                  backgroundColor={Colours.secondary.s10S1}
                  onPressEdit={editReasons}
                />
              </View>
            </View>

            <TouchableOpacityWithDelay style={styles.footer} onPress={showOptOutOverlay} testID={SMOKING_HUB_OPT_OUT}>
              <Markdown text={smokingState.optOutText} markdownStyles={markdownStyles} />
            </TouchableOpacityWithDelay>
          </View>

          <View style={styles.footerPadding} />
        </ScrollView>
      </View>
      <GenericHeadingAbsolute
        onLeftIconPress={onClose}
        backgroundColor={smokingState.backgroundColour}
        logo="yulife"
        rightIcon="COINS"
        onRightIconPress={() =>
          Navigation.push(ROUTES.rewards, {
            component: {
              id: ROUTES.smoking,
              name: ROUTES.smoking,
            },
          })
        }
      />
    </View>
  );
};

export default memo(SmokingHubScreen);

const onClose = () => {
  Navigation.popToRoot(ROUTES.smoking);
};

const markdownStyles = {
  text: {
    textAlign: "center",
    ...templateTextStyles.l1,
  },
};

function getPlantWrapperLeftPosition(currentStreak: number) {
  if (currentStreak > 14) {
    return Style.DEVICE_WIDTH / 18;
  }

  if (currentStreak > 7) {
    return Style.DEVICE_WIDTH / 4.75;
  }

  return Style.DEVICE_WIDTH / 2.5;
}
