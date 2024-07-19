import { useLazyQuery, useMutation } from "@apollo/client";
import React, { memo, useCallback, useEffect, useState } from "react";
import { Navigation } from "@navigation/main";
import { MODALS, ROUTES } from "@navigation/constants";
import LoadingScreen from "@components/screens/member/loading/loading.screen";
import { GetHealthSmokingStateQuery, gql } from "@graphql/__generated";
import { ScrollView, View } from "react-native";
import { Avatar, Button, InfoPanel, TouchableOpacityWithDelay } from "@components/molecules";
import { TextTemplate } from "@atoms";
import { GenericHeadingAbsolute, GenericHeadingPad } from "@organisms";
import { useSelector } from "react-redux";
import { getUserAvatar } from "@redux/user/user.selectors";
import { styles } from "./smoking.styles";
import { SmokingCarousel } from "./smoking-streak";
import { SmokingMilestones } from "./smoking-milestones";
import GenericErrorScreen from "@components/screens/generic-error/generic-error.screen";
import SmokingCheckInOverlay from "@components/modals/smoking-check-in-overlay/smoking-check-in-overlay";
import { showFloatingModal } from "@components/modals";
import { showYuModal } from "@navigation/root";
import Markdown from "@components/molecules/markdown/markdown";
import { Style, templateTextStyles } from "@styles";
import OptOutModal from "./opt-out-modal";

type SmokingData = GetHealthSmokingStateQuery["getHealthSmokingState"];

const SmokingContainer = () => {
  const [getHealthSmokingState, { loading }] = useLazyQuery(gql("GetHealthSmokingStateDocument"), {
    fetchPolicy: "network-only",
  });

  const [setUpdateSmokingStreakDocument] = useMutation(gql("UpdateSmokingStreakDocument"));

  const avatar = useSelector(getUserAvatar);
  const [smokingData, setSmokingData] = useState<SmokingData>(null);
  const [showError, setShowError] = useState(false);
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);

  const dismissOverlay = useCallback(() => {
    setIsOverlayOpen(false);
    Navigation.dismissOverlayWithChild();
  }, []);

  const onFailedStreakPress = useCallback(async () => {
    const success = await setUpdateSmokingStreakDocument({
      variables: {
        failed: true,
      },
    });

    setSmokingData(success.data.updateSmokingStreak);

    await dismissOverlay();
  }, [setUpdateSmokingStreakDocument, dismissOverlay]);

  const onContinueStreakPress = useCallback(
    async (currentSmokingData: SmokingData) => {
      const success = await setUpdateSmokingStreakDocument({
        variables: {
          failed: false,
        },
      });

      const updatedSmokingData = success.data.updateSmokingStreak;

      setSmokingData(updatedSmokingData);

      await dismissOverlay();
      await showYuModal({
        component: {
          id: MODALS.smokingStreakCelebration,
          name: MODALS.smokingStreakCelebration,
          passProps: {
            onPress: () => {
              Navigation.dismissAllModals();
            },
            smokingData: updatedSmokingData,
            startFrom: currentSmokingData?.currentStreak,
            animateTo: updatedSmokingData?.currentStreak,
          },
        },
      });
    },
    [setUpdateSmokingStreakDocument, dismissOverlay]
  );

  const showOptOutOverlay = useCallback(async () => {
    if (!smokingData || isOverlayOpen) {
      return;
    }

    setIsOverlayOpen(true);

    await showFloatingModal({
      modalId: MODALS.smokingOptOutModal,
      showButton: false,
      showCloseIcon: false,
      height: Style.adjust(240),
      children: <OptOutModal optOutModal={smokingData.optOutModal} dismissOverlay={dismissOverlay} />,
    });
  }, [isOverlayOpen, smokingData?.optOutModal, dismissOverlay]);

  const showSmokingCheckInOverlay = useCallback(
    // to prevent a race condition which occurs if the `smokingData` state is not updated by the time this function is called, pass the data to this function as an argument
    async (currentSmokingData: SmokingData) => {
      if (!isOverlayOpen) {
        setIsOverlayOpen(true);

        await showFloatingModal({
          modalId: MODALS.smokingCheckInOverlay,
          showButton: false,
          showCloseIcon: false,
          children: (
            <SmokingCheckInOverlay
              title={currentSmokingData.streakCheckInOverlay.title}
              failCta={currentSmokingData.streakCheckInOverlay.failCta}
              continueCta={currentSmokingData.streakCheckInOverlay.continueCta}
              onPressNo={() => onContinueStreakPress(currentSmokingData)}
              onPressYes={onFailedStreakPress}
            />
          ),
        });
      }
    },
    [isOverlayOpen, onContinueStreakPress, onFailedStreakPress]
  );

  const querySmokingState = useCallback(async () => {
    try {
      const state = await getHealthSmokingState();

      const data = state.data?.getHealthSmokingState;

      if (!data) {
        throw new Error();
      }

      setSmokingData(data);

      const showStreakCheckInOverlay = !!data.showStreakCheckInOverlay;

      if (showStreakCheckInOverlay) {
        await showSmokingCheckInOverlay(data);
      }
    } catch {
      setShowError(true);
    }
  }, [getHealthSmokingState, showSmokingCheckInOverlay]);

  useEffect(() => {
    querySmokingState();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (showError) {
    return <GenericErrorScreen onPressBack={onClose} />;
  }

  if (!smokingData || loading) {
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
            <View style={styles.headerTitle}>
              <View style={styles.headerText}>
                <TextTemplate type="h3" textAlign="left" numberOfLines={2}>
                  {smokingData.heading}
                </TextTemplate>
              </View>
              <Avatar uri={avatar?.avatarRemoteFiles?.pngMini} showEmpty={true} size={80} />
            </View>
            <View style={styles.button}>
              <Button
                testID="smoking-craving-button"
                size={"Fill"}
                onPress={onCravingPress}
                translatedLabel={"I need help with a craving"}
              />
            </View>
            {!smokingData.streakCarousel ? null : <SmokingCarousel streak={smokingData.streakCarousel} />}
          </View>
          <View style={styles.content}>
            <View style={styles.title}>
              <TextTemplate type="h3" textAlign="left">
                {smokingData.journeySoFarHeading}
              </TextTemplate>
            </View>

            <SmokingMilestones milestones={smokingData.milestoneCarousel} />

            <View style={styles.bodyText}>
              <TextTemplate type="b2b" textAlign="left">
                {smokingData.totalAvoided.title} - {smokingData.totalAvoided.value}
              </TextTemplate>
            </View>

            <View style={styles.bodyText}>
              <TextTemplate type="b2b" textAlign="left">
                {smokingData.totalSaved.title} - {smokingData.totalSaved.value}
              </TextTemplate>
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
                  {"My Triggers"}
                </TextTemplate>
                {smokingData.triggers.map((smokingTrigger: string) => {
                  return (
                    <TextTemplate key={smokingTrigger} type="b2" textAlign="left">
                      {smokingTrigger}
                    </TextTemplate>
                  );
                })}
              </View>

              <View style={styles.boxSection}>
                <TextTemplate type="b2b" textAlign="left">
                  {"My Reasons"}
                </TextTemplate>
                {smokingData.reasons.map((x: string) => {
                  return (
                    <TextTemplate key={x} type="b2" textAlign="left">
                      {x}
                    </TextTemplate>
                  );
                })}
              </View>
            </View>

            <TouchableOpacityWithDelay style={styles.footer} onPress={showOptOutOverlay}>
              <Markdown text={smokingData.optOutText} markdownStyles={markdownStyles} />
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

const onCravingPress = () =>
  Navigation.push(ROUTES.smoking, {
    component: {
      id: ROUTES.debugPlayground2048Selector,
      name: ROUTES.debugPlayground2048Selector,
    },
  });

const markdownStyles = {
  text: {
    textAlign: "center",
    ...templateTextStyles.l1,
  },
};
