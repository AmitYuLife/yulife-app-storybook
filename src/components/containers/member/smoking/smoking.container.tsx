import React, { memo, useCallback, useEffect, useRef, useState } from "react";
import { Navigation } from "@navigation/main";
import { MODALS, ROUTES } from "@navigation/constants";
import LoadingScreen from "@components/screens/member/loading/loading.screen";
import { ScrollView, View } from "react-native";
import { InfoPanel, TouchableOpacityWithDelay } from "@components/molecules";
import { TextTemplate } from "@atoms";
import { GenericHeadingAbsolute, GenericHeadingPad } from "@organisms";
import { useSelector } from "react-redux";
import { styles } from "./smoking.styles";
import { SmokingCarousel } from "./smoking-streak";
import GenericErrorScreen from "@components/screens/generic-error/generic-error.screen";
import SmokingCheckInOverlay from "@components/modals/smoking-check-in-overlay/smoking-check-in-overlay";
import { showFloatingModal } from "@components/modals";
import { showYuModal } from "@navigation/root";
import Markdown from "@components/molecules/markdown/markdown";
import { Style, templateTextStyles } from "@styles";
import OptOutModal from "./opt-out-modal";
import { useDispatch } from "react-redux";
import { queryHealthSmokingState, updateSmokingStreak } from "@redux/health-smoking/health-smoking.actions";
import { getHealthSmokingState } from "@redux/health-smoking/health-smoking.selectors";
import { HealthSmokingState } from "@redux/health-smoking/health-smoking.types";
import { SmokingHeading } from "./smoking-heading";
import { t } from "@locale";
import { SmokingMilestones } from "./smoking-milestones";
import { SmokingCard } from "./smoking-card";

const SmokingContainer = () => {
  const dispatch = useDispatch();
  const smokingState = useSelector(getHealthSmokingState);

  const [currentStreak, setCurrentStreak] = useState<number>(null);
  const [showError] = useState(false);
  const isOverlayOpen = useRef(false);

  const dismissOverlay = useCallback(() => {
    isOverlayOpen.current = false;
    Navigation.dismissOverlayWithChild();
  }, []);

  useEffect(() => {
    dispatch(queryHealthSmokingState());
  }, []);

  useEffect(() => {
    if (smokingState?.showStreakCheckInOverlay) {
      if (isOverlayOpen.current) {
        dismissOverlay();
      }

      showSmokingCheckInOverlay(smokingState);
    }
  }, [smokingState?.showStreakCheckInOverlay]);

  const showCelebrationModal = useCallback(async () => {
    await showYuModal({
      component: {
        id: MODALS.smokingStreakCelebration,
        name: MODALS.smokingStreakCelebration,
        passProps: {
          onPress: () => {
            Navigation.dismissAllModals();
          },
          smokingData: smokingState,
        },
      },
    });
  }, [smokingState]);

  useEffect(() => {
    if (currentStreak !== null && smokingState?.currentStreak > currentStreak) {
      showCelebrationModal();
    }

    setCurrentStreak(smokingState?.currentStreak);
  }, [currentStreak, smokingState?.currentStreak]);

  // TODO: open smoking lapse journey
  const onFailedStreakPress = useCallback(async () => {
    dismissOverlay();
    dispatch(updateSmokingStreak({ failed: true }));
  }, []);

  const onContinueStreakPress = useCallback(async () => {
    dismissOverlay();
    dispatch(updateSmokingStreak({ failed: false }));
  }, []);

  const showOptOutOverlay = useCallback(async () => {
    isOverlayOpen.current = true;

    await showFloatingModal({
      modalId: MODALS.smokingOptOutModal,
      showButton: false,
      showCloseIcon: false,
      height: Style.adjust(240),
      children: <OptOutModal optOutModal={smokingState.optOutModal} dismissOverlay={dismissOverlay} />,
    });
  }, [isOverlayOpen, smokingState, dismissOverlay]);

  const showSmokingCheckInOverlay = useCallback(
    // to prevent a race condition which occurs if the `smokingData` state is not updated by the time this function is called, pass the data to this function as an argument
    async (currentSmokingData: HealthSmokingState) => {
      isOverlayOpen.current = true;

      await showFloatingModal({
        modalId: MODALS.smokingCheckInOverlay,
        showButton: false,
        showCloseIcon: false,
        closeOnBlur: false,
        children: (
          <SmokingCheckInOverlay
            title={currentSmokingData.streakCheckInOverlay.title}
            failCta={currentSmokingData.streakCheckInOverlay.failCta}
            continueCta={currentSmokingData.streakCheckInOverlay.continueCta}
            onPressNo={onContinueStreakPress}
            onPressYes={onFailedStreakPress}
          />
        ),
      });
    },
    [onContinueStreakPress, onFailedStreakPress]
  );

  if (showError) {
    return <GenericErrorScreen onPressBack={onClose} />;
  }

  if (!smokingState) {
    return <LoadingScreen onClose={onClose} />;
  }

  return (
    <View style={styles.container}>
      <View style={styles.innerWrapper}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          stickyHeaderIndices={[0]}
          style={styles.scrollView}
          scrollEventThrottle={100}
          contentInsetAdjustmentBehavior="never"
        >
          <View style={styles.header}>
            <GenericHeadingPad />
            <SmokingHeading smokingState={smokingState} />
            {!smokingState.streakCarousel ? null : <SmokingCarousel streak={smokingState.streakCarousel} />}
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

            <View style={styles.info}>
              <InfoPanel
                titleMarkdown={"Did you know..."}
                markdown={"Smoking can not only change the appearance of the lungs but also cause functional changes"}
                type="info"
              />
            </View>

            <View style={styles.box}>
              <View style={styles.boxSection}>
                <TextTemplate type="b2b" textAlign="left">
                  {t("screens.smoking_hub.moments_to_monitor")}
                </TextTemplate>
                {smokingState.triggers.map((smokingTrigger: string) => {
                  return (
                    <TextTemplate key={smokingTrigger} type="b2" textAlign="left">
                      {smokingTrigger}
                    </TextTemplate>
                  );
                })}
              </View>

              <View style={styles.boxSection}>
                <TextTemplate type="b2b" textAlign="left">
                  {t("screens.smoking_hub.reasons")}
                </TextTemplate>
                {smokingState.reasons.map((x: string) => {
                  return (
                    <TextTemplate key={x} type="b2" textAlign="left">
                      {x}
                    </TextTemplate>
                  );
                })}
              </View>
            </View>

            <TouchableOpacityWithDelay style={styles.footer} onPress={showOptOutOverlay}>
              <Markdown text={smokingState.optOutText} markdownStyles={markdownStyles} />
            </TouchableOpacityWithDelay>
          </View>

          <View style={styles.footerPadding} />
        </ScrollView>
      </View>
      <GenericHeadingAbsolute onLeftIconPress={onClose} backgroundColor="transparent" />
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
