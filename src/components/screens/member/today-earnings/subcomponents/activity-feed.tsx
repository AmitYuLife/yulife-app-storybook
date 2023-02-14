import React, { memo, useCallback, useEffect, useMemo, useRef, useState } from "react";
import { StyleSheet, View, Platform, Alert, PermissionsAndroid, Linking, AccessibilityRole } from "react-native";
import { Navigation } from "@navigation/main";
import { Block, Image, TextTemplate } from "@atoms";
import { Style } from "@styles";
import { handleNavigateToQuestsTab } from "@navigation/utils";
import { PressableWithDelay, Button, Toast } from "@molecules";
import { ActivityProgress } from "@organisms";
import {
  GetTodayEarnings_getTodayEarnings_activityFeed_activityProgress as IActivityProgress,
  GetTodayEarnings_getTodayEarnings_activityFeed_button as IButton,
  GetTodayEarnings_getTodayEarnings_activityFeed_questionMarkModal as IQuestionMarkModal,
  GetTodayEarnings_getTodayEarnings_activityFeed_toast as IToast,
  GetTodayEarnings_getTodayEarnings_activityFeed_wellDoneBanner as IWellDoneBanner,
  GetTodayEarnings_getTodayEarnings_activityFeed_titleAccessibility as IAccessibility,
} from "@graphql/_core/schema";
import ActivityFeedPopMenu from "./activity-feed-pop-menu";
import { ROUTES } from "@navigation/constants";
import { openGoogleFit } from "@services/app-link";
import { getFitKitConnectCopy } from "@components/screens/onboarding/fitkit-connect/copy";
import { useFitKit } from "@services/fitkit/fitkit.hooks";
import { buildFitKitPermissions, FitKitAndroidSystemPermission } from "@services/fitkit/fitkit.permissions";
import { ACTIVITY_FEED, WELLDONE_BANNER } from "@ids";
import { useSelector } from "react-redux";
import { getHasNotification } from "@redux/levels/levels.selectors";
import { requestAndroidSystemPermission } from "@services/fitkit/fitkit.system-permissions";
import { isSamsung } from "@utils/device";
import RNFitKit from "@yu-life/react-native-fitkit";
import { FitKitTypes } from "@services/fitkit/fitkit.service";
import { FitKitType } from "@graphql/_core/schema/globalTypes";
import { showTooltipPopupRelativeToView } from "@organisms/tooltip-popup/tooltip-popup.helper";
import { useTranslation } from "@hooks";

interface IProps {
  id: string;
  title: string;
  titleAccessibility: IAccessibility;
  emptyMessage: string;
  wellDoneBanner: IWellDoneBanner;
  button: IButton;
  buttonAccessibility: IAccessibility;
  toast: IToast;
  questionMarkModal: IQuestionMarkModal;
  activityProgress: IActivityProgress[];
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
  const [googleFitIsAuthorised, setGoogleFitIsAuthorised] = useState(isGoogleFitAuthorised);
  const [locationPermissionsGranted, setLocationPermissions] = useState(null);
  const [googleFitCyclingPermissionGranted, setGoogleFitCyclingPermission] = useState(null);
  const questionMarkRef = useRef<View>();
  const { authorise, authoriseFitKitTypes } = useFitKit();
  const hasNotification = useSelector(getHasNotification);
  const t = useTranslation([
    "screens.today_earning.alert.never_ask_again.title",
    "screens.today_earning.alert.never_ask_again.message",
    "screens.today_earning.alert.never_ask_again.cta_label",
    "screens.today_earning.activity_feed.daily_core_activities.accessibility.accessibility_label",
    "screens.daily.challenge_button.back_to_challenge.accessibility_label",
    "screens.daily.challenge_button.back_to_challenge.accessibility_label",
    "screens.today_earning.toast.use_google_fit.message",
    "screens.today_earning.toast.use_google_fit.message",
    "screens.today_earning.toast.use_google_fit.cta_label",
    "screens.today_earning.toast.system_location_permission.accessibility.accessibility_label",
    "screens.today_earning.toast.system_location_permission.message",
    "screens.today_earning.toast.system_location_permission.cta_label",
    "screens.today_earning.toast.google_fit_location_permission.accessibility.accessibility_label",
    "screens.today_earning.toast.google_fit_location_permission.message",
    "screens.today_earning.toast.google_fit_location_permission.cta_label",
  ]);

  const checkCyclingPermissions = useCallback(async () => {
    const [cyclingAuthorised, isGranted] = await Promise.all([
      RNFitKit.isAuthorised({ read: [FitKitTypes.Types.Biking], platform: "GoogleFit" }),
      PermissionsAndroid.check("android.permission.ACCESS_FINE_LOCATION"),
    ]);

    setLocationPermissions(isGranted);
    setGoogleFitCyclingPermission(cyclingAuthorised);
  }, []);

  const onGoogleFitConnect = useCallback(async () => {
    const { androidAlertCopy } = getFitKitConnectCopy();
    const { title: alertTitle, message: alertMessage, dismissLabel, downloadLabel, confirmLabel } = androidAlertCopy;
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
          const isAuthorise = await authorise({
            ...buildFitKitPermissions(),
            platform: "GoogleFit",
          });
          await checkCyclingPermissions();
          setGoogleFitIsAuthorised(isAuthorise);
        },
      },
    ];

    return Alert.alert(alertTitle, alertMessage, buttons, { cancelable: true });
  }, [authorise]);

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
    showTooltipPopupRelativeToView({
      viewRef: questionMarkRef,
      beakPosition: "autoHorizontal",
      children: <ActivityFeedPopMenu {...questionMarkModal} />,
    });
  }, [questionMarkRef, questionMarkModal]);

  const showGoogleFitToast = useMemo(
    () =>
      Platform.select({
        ios: false,
        android: id === "core-activities" && !googleFitIsAuthorised && isSamsung(),
      }),

    [id, googleFitIsAuthorised]
  );
  const showSystemLocationPermissionToast = useMemo(() => {
    if (Platform.OS === "ios" || !googleFitIsAuthorised || id !== "core-activities") {
      return false;
    }

    if (!googleFitCyclingPermissionGranted) {
      return false;
    }

    return locationPermissionsGranted === false;
  }, [googleFitIsAuthorised, id, locationPermissionsGranted, googleFitCyclingPermissionGranted]);

  const showGoogleFitPermissionToast = useMemo(() => {
    if (Platform.OS === "ios" || !googleFitIsAuthorised || id !== "core-activities") {
      return false;
    }

    return googleFitCyclingPermissionGranted === false;
  }, [googleFitIsAuthorised, id, locationPermissionsGranted, googleFitCyclingPermissionGranted]);

  const onTakeChallengePress = useCallback(() => {
    handleNavigateToQuestsTab();
    Navigation.pop(ROUTES.todayEarnings);
  }, []);

  const isDisabled = useCallback(
    (activity: IActivityProgress) => {
      if (Platform.OS === "ios") {
        return false;
      }

      if (id !== "core-activities") {
        return false;
      }

      switch (activity.type) {
        case "steps":
          return false;
        case "cycling":
          return !locationPermissionsGranted || !googleFitIsAuthorised;
        default:
          return !googleFitIsAuthorised;
      }
    },
    [googleFitIsAuthorised, id, locationPermissionsGranted]
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
    <Block style={[styles.wrapper, wellDoneBanner ? { paddingBottom: 0 } : null]}>
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
            <PressableWithDelay
              onPress={openPopUp}
              accessibilityLabel={
                t["screens.today_earning.activity_feed.daily_core_activities.accessibility.accessibility_label"]
              }
              accessibilityRole={"button"}
            >
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
            onPress={onTakeChallengePress}
            size="Large"
            label={
              hasNotification
                ? t["screens.daily.challenge_button.back_to_challenge.accessibility_label"]
                : button?.label
            }
            accessibilityLabel={
              hasNotification
                ? t["screens.daily.challenge_button.back_to_challenge.accessibility_label"]
                : buttonAccessibility?.accessibilityLabel
            }
          />
        </View>
      )}

      {!showGoogleFitToast ? null : (
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
              accessibilityLabel={t["screens.today_earning.toast.use_google_fit.message"]}
            >
              <TextTemplate type="l3b" accessible={true}>
                {t["screens.today_earning.toast.use_google_fit.message"]}
              </TextTemplate>
            </View>
            <Button
              onPress={onGoogleFitConnect}
              size="Fill"
              label={t["screens.today_earning.toast.use_google_fit.cta_label"]}
            />
          </Toast>
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
              label={t["screens.today_earning.toast.system_location_permission.cta_label"]}
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
              label={t["screens.today_earning.toast.google_fit_location_permission.cta_label"]}
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
