import { useLazyQuery, useMutation } from "@apollo/client";
import React, { memo, useCallback, useEffect, useMemo, useState } from "react";
import { Navigation } from "@navigation/main";
import { ROUTES } from "@navigation/constants";
import LoadingScreen from "@components/screens/member/loading/loading.screen";
import { GetHealthSmokingStateQuery, gql } from "@graphql/__generated";
import { ScrollView, View } from "react-native";
import { Avatar, Button, InfoPanel, SecondaryButton } from "@components/molecules";
import { TextTemplate } from "@atoms";
import { GenericHeadingAbsolute, GenericHeadingPad } from "@organisms";
import { useSelector } from "react-redux";
import { getUserAvatar } from "@redux/user/user.selectors";
import { styles } from "./smoking.styles";
import { SmokingCarousel } from "./smoking-streak";
import { SmokingMilestones } from "./smoking-milestones";
import GenericErrorScreen from "@components/screens/generic-error/generic-error.screen";

const SmokingContainer = () => {
  const [getHealthSmokingState, { loading }] = useLazyQuery(gql("GetHealthSmokingStateDocument"), {
    fetchPolicy: "network-only",
  });
  const [setUpdateSmokingStreakDocument, { loading: loadingMutation }] = useMutation(
    gql("UpdateSmokingStreakDocument")
  );

  const avatar = useSelector(getUserAvatar);
  const [smokingData, setSmokingData] = useState<GetHealthSmokingStateQuery["getHealthSmokingState"]>(null);
  const [showError, setShowError] = useState(false);

  const querySmokingState = useCallback(async () => {
    try {
      const state = await getHealthSmokingState();

      if (!state.data?.getHealthSmokingState) {
        throw new Error();
      }

      return setSmokingData(state.data.getHealthSmokingState);
    } catch {
      setShowError(true);
    }
  }, []);

  useEffect(() => {
    querySmokingState();
  }, []);

  const onFailedStreakPress = useCallback(async () => {
    const success = await setUpdateSmokingStreakDocument({
      variables: {
        failed: true,
      },
    });

    setSmokingData(success.data.updateSmokingStreak);
  }, []);

  const onContinueStreakPress = useCallback(async () => {
    const success = await setUpdateSmokingStreakDocument({
      variables: {
        failed: false,
      },
    });

    setSmokingData(success.data.updateSmokingStreak);
  }, []);

  const buttonsDisabled = useMemo(
    () => loading || loadingMutation || smokingData?.updatedToday,
    [loading, loadingMutation, smokingData?.updatedToday]
  );

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
              <Button size={"Fill"} onPress={onCravingPress} label={"I need help with a craving"} />
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

            <View style={styles.buttons}>
              <SecondaryButton
                size={"Fill"}
                onPress={onFailedStreakPress}
                translatedLabel={"I failed"}
                disabled={buttonsDisabled}
              />
              <Button
                size={"Fill"}
                onPress={onContinueStreakPress}
                label={"Streak Continue"}
                disabled={buttonsDisabled}
              />
            </View>

            <View style={styles.footer}>
              <TextTemplate type="l1" textAlign="center">
                No longer need our help? You can opt-out of this feature here
              </TextTemplate>
            </View>
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
