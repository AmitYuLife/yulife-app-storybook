import React, { memo, useCallback, useEffect, useMemo, useRef, useState } from "react";
import { View, Platform, Alert, PermissionsAndroid, Linking, AccessibilityRole } from "react-native";
import { Navigation } from "@navigation/main";
import { Block, Image, TextTemplate } from "@atoms";
import { Style, StyleSheet } from "@styles";
import { handleTakeAChallengeCTA } from "@navigation/utils";
import { Pressable, Button, Toast } from "@molecules";
import { ActivityProgress } from "@organisms";
import ActivityFeedPopMenu from "./activity-feed-pop-menu";
import { ROUTES } from "@navigation/constants";
import { useFitKit } from "@services/fitkit/fitkit.hooks";
import { FitKitAndroidSystemPermission } from "@services/fitkit/fitkit.permissions";
import {
  ACTIVITY_FEED,
  ACTIVITY_FEED_ID,
  QUESTION_MARK_MODAL,
  TAKE_A_CHALLENGE_LEFT_BUTTON,
  WELLDONE_BANNER,
} from "@ids";
import { useDispatch, useSelector } from "react-redux";
import { requestAndroidSystemPermission } from "@services/fitkit/fitkit.system-permissions";
import RNFitKit from "@yu-life/react-native-fitkit";
import { FitKitTypes } from "@services/fitkit/fitkit.service";
import { showTooltipPopupRelativeToView } from "@organisms/tooltip-popup/tooltip-popup.helper";
import { useTranslation } from "@hooks";
import { GetTodayEarningsQuery, FitKitType } from "@graphql/__generated";
import {
  getChallengesStatus,
  getCurrentLevel,
  getHasNotification,
  getYuniversalProgress,
} from "@redux/levels/levels.selectors";
import Logger from "@services/logging/logger";

type IActivityFeed = GetTodayEarningsQuery["getTodayEarnings"]["activityFeed"][0];

interface IProps {
  id: string;
  title: string;
  titleAccessibility: IActivityFeed["titleAccessibility"];
  emptyMessage?: string;
  wellDoneBanner?: IActivityFeed["wellDoneBanner"];
  button?: IActivityFeed["button"];
  buttonAccessibility?: IActivityFeed["buttonAccessibility"];
  toast?: IActivityFeed["toast"];
  questionMarkModal?: IActivityFeed["questionMarkModal"];
  activityProgress?: IActivityFeed["activityProgress"];
  isGoogleFitAuthorised: boolean;
}

const ActivityFeed = ({
  id,
  title,
  titleAccessibility,
  wellDoneBanner,
  button,
  buttonAccessibility,
  toast,
  questionMarkModal,
  activityProgress,
  emptyMessage,
  isGoogleFitAuthorised,
}: IProps) => {
  const [locationPermissionsGranted, setLocationPermissions] = useState(null);
  const [googleFitCyclingPermissionGranted, setGoogleFitCyclingPermission] = useState(null);
  const dispatch = useDispatch();
  const questionMarkRef = useRef<View>(null);
  const { authoriseFitKitTypes } = useFitKit();
  const t = useTranslation([
    "screens.today_earning.alert.never_ask_again.title",
    "screens.today_earning.alert.never_ask_again.message",
    "screens.today_earning.alert.never_ask_again.cta_label",
    "screens.today_earning.activity_feed.daily_core_activities.accessibility.accessibility_label",
    "screens.daily.challenge_button.back_to_challenge",
    "screens.today_earning.toast.system_location_permission.accessibility.accessibility_label",
    "screens.today_earning.toast.system_location_permission.message",
    "screens.today_earning.toast.system_location_permission.cta_label",
    "screens.today_earning.toast.google_fit_location_permission.accessibility.accessibility_label",
    "screens.today_earning.toast.google_fit_location_permission.message",
    "screens.today_earning.toast.google_fit_location_permission.cta_label",
  ]);
  const currentLevel = useSelector(getCurrentLevel);
  const { yuniversalLevel, yuniversalMap } = useSelector(getYuniversalProgress);
  const { hasDone } = useSelector(getChallengesStatus);
  const isChallengeActive = useSelector(getHasNotification);

  const checkCyclingPermissions = useCallback(async () => {
    const [cyclingAuthorised, isGranted] = await Promise.all([
      RNFitKit.isAuthorised({ read: [FitKitTypes.Types.Biking], platform: "GoogleFit" }),
      PermissionsAndroid.check("android.permission.ACCESS_FINE_LOCATION"),
    ]);

    setLocationPermissions(isGranted);
    setGoogleFitCyclingPermission(cyclingAuthorised);
  }, []);

  const onGrantPermission = useCallback(async () => {
    const result = await requestAndroidSystemPermission(FitKitAndroidSystemPermission.location);

    if (result === "granted") {
      setLocationPermissions(true);
    }

    if (result === "never_ask_again") {
      return Alert.alert(
        t["screens.today_earning.alert.never_ask_again.title"],
        t["screens.today_earning.alert.never_ask_again.message"],
        [
          {
            text: t["screens.today_earning.alert.never_ask_again.cta_label"],
            onPress: Linking.openSettings,
          },
        ]
      );
    }
  }, []);

  const onGrantGoogleFitCyclingPermission = useCallback(async () => {
    await authoriseFitKitTypes([FitKitType.StepCount, FitKitType.MindfulSession, FitKitType.Cycling], "GoogleFit");
    await checkCyclingPermissions();
  }, []);

  const openPopUp = useCallback(() => {
    if (questionMarkModal?.event) {
      dispatch(questionMarkModal.event);
    }

    showTooltipPopupRelativeToView({
      viewRef: questionMarkRef,
      beakPosition: "autoHorizontal",
      children: <ActivityFeedPopMenu {...questionMarkModal} />,
    });
  }, [questionMarkRef, questionMarkModal]);

  const showSystemLocationPermissionToast = useMemo(() => {
    if (Platform.OS === "ios" || !isGoogleFitAuthorised || id !== "core-activities") {
      return false;
    }

    if (!googleFitCyclingPermissionGranted) {
      return false;
    }

    return locationPermissionsGranted === false;
  }, [isGoogleFitAuthorised, id, locationPermissionsGranted, googleFitCyclingPermissionGranted]);

  const showGoogleFitPermissionToast = useMemo(() => {
    if (Platform.OS === "ios" || !isGoogleFitAuthorised || id !== "core-activities") {
      return false;
    }

    return googleFitCyclingPermissionGranted === false;
  }, [isGoogleFitAuthorised, id, googleFitCyclingPermissionGranted]);

  const onTakeChallengePress = useCallback(async () => {
    const { onPress, event } = button;

    if (event) {
      dispatch(event);
    }

    if (onPress?.payload) {
      dispatch(onPress);
      return;
    }

    Logger.logMixpanelEvent("button_pressed", {
      button_id: "take_a_challenge",
      location: "today_earning",
    });

    await handleTakeAChallengeCTA({
      currentLevel,
      yuniversalLevel,
      yuniversalMap,
      hasDoneChallengeToday: hasDone,
      isChallengeActive,
    });
    Navigation.popToRoot(ROUTES.todayEarnings);
  }, [button, currentLevel, yuniversalLevel, yuniversalMap, hasDone, isChallengeActive]);

  const isDisabled = useCallback(
    (activity: IActivityFeed["activityProgress"][0]) => {
      if (Platform.OS === "ios") {
        return false;
      }

      if (id !== "core-activities") {
        return false;
      }

      switch (activity.type) {
        case "steps":
        case "meditation":
          return false;
        case "cycling":
          return !locationPermissionsGranted || !isGoogleFitAuthorised;
        default:
          return !isGoogleFitAuthorised;
      }
    },
    [isGoogleFitAuthorised, id, locationPermissionsGranted]
  );

  const parseActivityProgress = useMemo(() => {
    return activityProgress.map((activity) => ({
      ...activity,
      isDisabled: isDisabled(activity),
    }));
  }, [activityProgress, isDisabled]);

  useEffect(() => {
    (async () => {
      if (Platform.OS === "android") {
        await checkCyclingPermissions();
      }
    })();
  }, []);

  return (
    <Block testID={ACTIVITY_FEED_ID(id)} style={[styles.wrapper, wellDoneBanner ? { paddingBottom: 0 } : null]}>
      <View style={styles.headerWrapper}>
        <TextTemplate
          type="b2b"
          accessibilityLabel={titleAccessibility?.accessibilityLabel}
          accessibilityRole={titleAccessibility?.accessibilityRole as AccessibilityRole}
        >
          {title}
        </TextTemplate>
        {!questionMarkModal ? null : (
          <View style={styles.headerIconsWrapper}>
            <Pressable
              delay={1000}
              onPress={openPopUp}
              accessibilityLabel={
                t["screens.today_earning.activity_feed.daily_core_activities.accessibility.accessibility_label"]
              }
              accessibilityRole={"button"}
              testID={QUESTION_MARK_MODAL}
            >
              <View style={styles.questionMarkIcon} ref={questionMarkRef} collapsable={false}>
                <Image
                  width={Style.adjust(24)}
                  height={Style.adjust(24)}
                  source={{ uri: questionMarkModal.iconUrl.uri }}
                  testID={ACTIVITY_FEED}
                />
              </View>
            </Pressable>
          </View>
        )}
      </View>

      {!emptyMessage ? null : (
        <View style={styles.progressWrapper} accessibilityLabel={emptyMessage}>
          <TextTemplate type="l1">{emptyMessage}</TextTemplate>
        </View>
      )}
      {parseActivityProgress?.map(({ iconUrl, accessibility, ...props }, key) => (
        <View
          key={key}
          style={styles.progressWrapper}
          accessibilityLabel={accessibility?.accessibilityLabel}
          accessible={true}
        >
          <ActivityProgress {...props} iconUrl={iconUrl.uri} />
        </View>
      ))}

      {!button ? null : (
        <View style={styles.progressWrapper}>
          <Button
            testID={TAKE_A_CHALLENGE_LEFT_BUTTON}
            onPress={onTakeChallengePress}
            size="Fill"
            translatedLabel={button?.label}
            accessibilityLabel={buttonAccessibility?.accessibilityLabel}
          />
        </View>
      )}

      {!showSystemLocationPermissionToast ? null : (
        <View style={styles.progressWrapper}>
          <Toast
            iconWidth={57}
            iconHeight={112}
            iconUrl={toast?.iconUrl?.uri}
            backgroundColor={toast?.backgroundColor}
            borderColor={toast?.borderColor}
          >
            <View
              style={styles.toastDescription}
              accessibilityLabel={
                t["screens.today_earning.toast.system_location_permission.accessibility.accessibility_label"]
              }
            >
              <TextTemplate type="l3b">
                {t["screens.today_earning.toast.system_location_permission.message"]}
              </TextTemplate>
            </View>
            <Button
              onPress={onGrantPermission}
              size="Fill"
              translationKey="screens.today_earning.toast.system_location_permission.cta_label"
            />
          </Toast>
        </View>
      )}

      {!showGoogleFitPermissionToast ? null : (
        <View style={styles.progressWrapper}>
          <Toast
            iconWidth={57}
            iconHeight={112}
            iconUrl={toast?.iconUrl?.uri}
            backgroundColor={toast?.backgroundColor}
            borderColor={toast?.borderColor}
          >
            <View
              style={styles.toastDescription}
              accessibilityLabel={
                t["screens.today_earning.toast.google_fit_location_permission.accessibility.accessibility_label"]
              }
            >
              <TextTemplate type="l3b">
                {t["screens.today_earning.toast.google_fit_location_permission.message"]}
              </TextTemplate>
            </View>
            <Button
              onPress={onGrantGoogleFitCyclingPermission}
              size="Fill"
              translationKey="screens.today_earning.toast.google_fit_location_permission.cta_label"
            />
          </Toast>
        </View>
      )}

      {!wellDoneBanner ? null : (
        <View style={styles.wellDoneBanner} testID={WELLDONE_BANNER}>
          <Image width={Style.adjust(327)} height={Style.adjust(120)} source={{ uri: wellDoneBanner.uri }} />
        </View>
      )}
    </Block>
  );
};

const styles = StyleSheet.create({
  wrapper: {
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
    marginTop: Style.adjust(17),
  },
  activeBuff: {
    width: Style.adjust(24),
    height: Style.adjust(24),
  },
  questionMarkIcon: {
    marginStart: Style.adjust(8),
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
