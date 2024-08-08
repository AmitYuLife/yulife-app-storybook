import React, { memo } from "react";
import { ScrollView, View } from "react-native";
import { InfoPanel, TouchableOpacityWithDelay, Markdown } from "@components/molecules";
import { Image, TextTemplate } from "@atoms";
import { GenericHeadingAbsolute, GenericHeadingPad } from "@organisms";
import { useSelector } from "react-redux";
import { getHealthSmokingState } from "@redux/health-smoking/health-smoking.selectors";
import { Navigation } from "@navigation/main";
import { ROUTES } from "@navigation/constants";
import { t } from "@locale";
import { useStreakCheckIn } from "./hooks/useStreakCheckIn";
import { useOptOut } from "./hooks/useOptOut";
import { SmokingStreakLapsed } from "@screens";
import GenericErrorScreen from "@components/screens/generic-error/generic-error.screen";
import LoadingScreen from "@components/screens/member/loading/loading.screen";
import { Colours, Style, templateTextStyles } from "@styles";
import { styles } from "./smoking.styles";
import { SmokingCarousel } from "./smoking-carousel";
import { SmokingHeading } from "./smoking-heading";
import { SmokingMilestones } from "./smoking-milestones";
import { SmokingCard } from "./smoking-card";
import { SmokingChips } from "./smoking-chips";
import { SmokingSponsorshipCard } from "./smoking-sponsorship-card";
import { useEditState } from "./hooks/useEditState";
import {
  MOMENTS_TO_MONITOR,
  SMOKING_CONTAINER_SCROLL,
  SMOKING_HUB_OPT_OUT,
  SMOKING_HUB_REASONS,
  SMOKING_INFO_PANEL,
} from "@ids";

const SmokingContainer = () => {
  const smokingState = useSelector(getHealthSmokingState);

  const { showStreakLapsed, hideStreakLapsed, error } = useStreakCheckIn();
  const { showOptOutOverlay } = useOptOut(smokingState);
  const { showEditStateModal } = useEditState(smokingState);

  if (error) {
    return <GenericErrorScreen onPressBack={onClose} />;
  }

  if (!smokingState) {
    return <LoadingScreen onClose={onClose} />;
  }

  if (showStreakLapsed) {
    return <SmokingStreakLapsed smokingState={smokingState} onClose={hideStreakLapsed} onSubmit={hideStreakLapsed} />;
  }

  return (
    <View style={styles.container}>
      <View style={styles.innerWrapper}>
        <ScrollView
          testID={SMOKING_CONTAINER_SCROLL}
          style={styles.scrollView}
          showsVerticalScrollIndicator={false}
          scrollEventThrottle={100}
          contentInsetAdjustmentBehavior="never"
        >
          <View style={[styles.header, { backgroundColor: smokingState.backgroundColour ?? "#F9E2FF" }]}>
            <GenericHeadingPad />
            <Image
              source={{ uri: smokingState.backgroundImage.uri }}
              width={Style.DEVICE_WIDTH}
              style={styles.backgroundImage}
            />
            <SmokingHeading smokingState={smokingState} />
            {!smokingState.streakCarousel ? null : (
              <SmokingCarousel streak={smokingState.streakCarousel} maxItemsToScroll={0} />
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
            <View style={styles.info} testID={SMOKING_INFO_PANEL}>
              <InfoPanel
                titleMarkdown={"Did you know..."}
                markdown={"Smoking can not only change the appearance of the lungs but also cause functional changes"}
                type="info"
              />
            </View>

            <View style={styles.box} testID={MOMENTS_TO_MONITOR}>
              <View style={styles.boxSection}>
                <TextTemplate type="b1b" textAlign="left">
                  {t("screens.smoking_hub.moments_to_monitor")}
                </TextTemplate>
                <SmokingChips
                  values={smokingState.triggers.map((trigger) => trigger.label)}
                  backgroundColor={Colours.secondary.s10S3}
                  onPressEdit={() => showEditStateModal({ type: "triggers" })}
                />
              </View>

              <View style={styles.boxSection} testID={SMOKING_HUB_REASONS}>
                <TextTemplate type="b1b" textAlign="left">
                  {t("screens.smoking_hub.reasons")}
                </TextTemplate>
                <SmokingChips
                  values={smokingState.reasons.map((reason) => reason.label)}
                  backgroundColor={Colours.secondary.s10S1}
                  onPressEdit={() => showEditStateModal({ type: "reasons" })}
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

export default memo(SmokingContainer);

const onClose = () => {
  Navigation.pop(ROUTES.smoking);
};

const markdownStyles = {
  text: {
    textAlign: "center",
    ...templateTextStyles.l1,
  },
};
