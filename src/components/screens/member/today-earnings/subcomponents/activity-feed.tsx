import React, { memo, useCallback, useMemo, useRef } from "react";
import { StyleSheet, View, Platform, Alert } from "react-native";
import { Navigation } from "react-native-navigation";
import { Block, Button, Image, TextTemplate } from "@atoms";
import { Style } from "@styles";
import ActivityProgress from "./activity-progress";
import { handleNavigateToQuestsTab } from "@navigation/utils";
import { Toast } from "@components/molecules";
import { PressableWithDelay } from "@molecules";
import { showOverlayWithChild } from "@components/modals/blurred-overlay/showOverlayWithChild";
import {
  GetTodayEarnings_getTodayEarnings_activityFeed_activityProgress as IActivityProgress,
  GetTodayEarnings_getTodayEarnings_activityFeed_button as IButton,
  GetTodayEarnings_getTodayEarnings_activityFeed_questionMarkModal as IQuestionMarkModal,
  GetTodayEarnings_getTodayEarnings_activityFeed_toast as IToast,
  GetTodayEarnings_getTodayEarnings_activityFeed_wellDoneBanner as IWellDoneBanner,
} from "@graphql/_core/schema";
import ActivityFeedPopMenu from "./activity-feed-pop-menu";
import { MODALS, ROUTES } from "@navigation/constants";
import { openGoogleFit } from "@services/app-link";
import { androidAlertCopy } from "@components/screens/onboarding/fitkit-connect/copy";
import { useFitKit } from "@services/fitkit/fitkit.hooks";
import FitKitPermissions from "@services/fitkit/fitkit.permissions";
import { ACTIVITY_FEED } from "@ids";

interface IProps {
  id: string;
  title: string;
  emptyMessage: string;
  wellDoneBanner: IWellDoneBanner;
  button: IButton;
  toast: IToast;
  questionMarkModal: IQuestionMarkModal;
  activityProgress: IActivityProgress[];
  isGoogleFitAuthorised: boolean;
}

const ActivityFeed = ({
  id,
  title,
  wellDoneBanner,
  button,
  toast,
  questionMarkModal,
  activityProgress,
  emptyMessage,
  isGoogleFitAuthorised,
}: IProps) => {
  const questionMarkRef = useRef<View>();
  const { authorise } = useFitKit();

  const onGoogleFitConnect = useCallback(async () => {
    const { title, message: alertMessage, dismissLabel, downloadLabel, confirmLabel } = androidAlertCopy;
    const buttons = [
      {
        text: dismissLabel,
      },
      {
        text: downloadLabel,
        onPress: openGoogleFit,
      },
      {
        text: confirmLabel,
        onPress: async () => {
          await authorise({ ...FitKitPermissions, platform: "GoogleFit" });
          Navigation.dismissModal(MODALS.switchToGoogleFit);
        },
      },
    ];
    return Alert.alert(title, alertMessage, buttons, { cancelable: true });
  }, [authorise]);

  const openPopUp = useCallback(() => {
    questionMarkRef?.current?.measure((_fx, _fy, _width, _height, _pageX, pageY) => {
      showOverlayWithChild(<ActivityFeedPopMenu pageY={pageY} {...questionMarkModal} />, false);
    });
  }, [questionMarkRef, questionMarkModal]);

  const hideToast = useMemo(
    () =>
      Platform.select({
        ios: true,
        android: id !== "core-activities" || isGoogleFitAuthorised,
      }),

    [id, isGoogleFitAuthorised]
  );

  const onTakeChallengePress = useCallback(() => {
    handleNavigateToQuestsTab();
    Navigation.pop(ROUTES.todayEarnings);
  }, []);

  const parseActivityProgress = useMemo(() => {
    return activityProgress.map((activity) => ({
      ...activity,
      isDisabled: Platform.select({
        ios: false,
        android: !isGoogleFitAuthorised && activity.type !== "steps" && id === "core-activities",
      }),
    }));
  }, [isGoogleFitAuthorised]);

  return (
    <Block style={[styles.wrapper, wellDoneBanner ? { paddingBottom: 0 } : null]}>
      <View style={styles.headerWrapper}>
        <TextTemplate type="b2b">{title}</TextTemplate>
        {!questionMarkModal ? null : (
          <View style={styles.headerIconsWrapper}>
            <PressableWithDelay onPress={openPopUp}>
              <View style={styles.questionMarkIcon} ref={questionMarkRef} collapsable={false}>
                <Image
                  width={Style.adjust(24)}
                  height={Style.adjust(24)}
                  source={{ uri: questionMarkModal.iconUrl.uri }}
                  testID={ACTIVITY_FEED}
                />
              </View>
            </PressableWithDelay>
          </View>
        )}
      </View>

      {!emptyMessage ? null : (
        <View style={styles.progressWrapper}>
          <TextTemplate type="l1">{emptyMessage}</TextTemplate>
        </View>
      )}
      {parseActivityProgress?.map(({ iconUrl, ...props }, key) => (
        <View key={key} style={styles.progressWrapper}>
          <ActivityProgress {...props} iconUrl={iconUrl.uri} />
        </View>
      ))}

      {!button ? null : (
        <View style={styles.progressWrapper}>
          <Button onPress={onTakeChallengePress} size="Large" label={button?.label} />
        </View>
      )}

      {hideToast ? null : (
        <View style={styles.progressWrapper}>
          <Toast
            iconWidth={57}
            iconHeight={112}
            iconUrl={toast?.iconUrl?.uri}
            backgroundColor={toast?.backgroundColor}
            borderColor={toast?.borderColor}
          >
            <View style={styles.toastDescription}>
              <TextTemplate type="l3b">
                Samsung Health does not support all core activities. To get the full experience and rewards, consider
                using Google Fit.
              </TextTemplate>
            </View>
            <Button onPress={onGoogleFitConnect} size="Fill" label="Connect to Google Fit" />
          </Toast>
        </View>
      )}

      {!wellDoneBanner ? null : (
        <View style={styles.wellDoneBanner}>
          <Image width={Style.adjust(327)} height={Style.adjust(120)} source={{ uri: wellDoneBanner.uri }} />
        </View>
      )}
    </Block>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginTop: Style.adjust(24),
    marginHorizontal: Style.adjust(24),
    padding: Style.adjust(16),
  },
  headerWrapper: {
    flexDirection: "row",
  },
  headerIconsWrapper: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "flex-end",
  },
  progressWrapper: {
    marginTop: Style.adjust(24),
  },
  activeBuff: {
    width: Style.adjust(24),
    height: Style.adjust(24),
  },
  questionMarkIcon: {
    marginLeft: Style.adjust(8),
  },
  wellDoneBanner: {
    alignItems: "center",
    marginTop: Style.adjust(16),
  },
  toastDescription: {
    marginBottom: Style.adjust(8),
  },
});

export default memo(ActivityFeed);
