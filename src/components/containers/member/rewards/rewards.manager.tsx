import { Box } from "@atoms";
import { LocationIcon } from "@atoms/icon/location-icon";
import { PurchasesIcon } from "@atoms/icon/purchases-icon";
import BattlePassContainer from "@components/containers/battle-pass/battle-pass.container";
import RewardsUnlockContainer from "@components/containers/rewards-unlock/rewards-unlock.container";
import RewardsUnavailableScreen from "@components/screens/member/rewards/unavailable/rewards-unavailable.screen";
import { gql } from "@graphql/__generated";
import client from "@graphql/_core/client";
import { useUserFeatures } from "@hooks";
import { NOTIF_CENTRE, PURCHASED_TAB_BUTTON, STORE_LOCATION_TAB_BUTTON } from "@ids";
import { t } from "@locale";
import { BattlePassYuCoinCounter, LottieView, Pressable, RewardsTab } from "@molecules";
import { ROUTES } from "@navigation/constants";
import { Navigation } from "@navigation/main";
import { useNavigation } from "@navigation/navigation.context";
import { GenericHeadingPad, NavBar, TopBar } from "@organisms";
import { LeftIcon } from "@organisms/top-bar/subcomponents/left";
import { TopBarTypes } from "@organisms/top-bar/top-bar.helpers";
import { getActiveSocialGroupId } from "@redux/leaderboards/leaderboards.selectors";
import { updateRewardsTab } from "@redux/rewards-tab/rewards-tab.actions";
import { getActiveRewardsSection, getRewardsTabSettings } from "@redux/rewards-tab/rewards-tab.selectors";
import { RewardsSection } from "@redux/rewards-tab/rewards-tab.types";
import { DETOX_ENABLED } from "@services/socket";
import { Colours, Style, TOP_BAR } from "@styles";
import React, { memo, ReactNode, Reducer, useCallback, useEffect, useMemo, useReducer, useRef } from "react";
import { NativeScrollEvent, NativeSyntheticEvent, StyleSheet, View } from "react-native";
import Animated, { interpolate, useAnimatedStyle, useSharedValue } from "react-native-reanimated";
import { useDispatch, useSelector } from "react-redux";
import RewardsListContainer from "./rewards.list.container";
import { RewardsManagerContext } from "./rewards.manager.context";
import { reducer, REWARDS_MANAGER_INITIAL_STATE } from "./rewards.manager.reducer";
import {
  IRewardContainerProps,
  IRewardsManagerAction,
  IRewardsManagerState,
  RewardsManagerActionTypes,
} from "./rewards.types";
import { getRouteState } from "@redux/app/app.selectors";
import { usePrizeHintPopup } from "@hooks";
import ShopFrontContainer from "@components/containers/shopfront/shopfront.container";

// TODO: remove the partial type
const CONTENT: Record<RewardsSection, (props: IRewardContainerProps) => ReactNode> = {
  [RewardsSection.Donations]: BattlePassContainer,
  [RewardsSection.Store]: RewardsListContainer,
  [RewardsSection.Unavailable]: RewardsUnavailableScreen,
  [RewardsSection.Premium]: RewardsUnlockContainer,
};

const END_OF_SEASON_BACKGROUND_ANIMATION = require("@assets/yuniversal/yuniversal_quest_map_1.json");

const _RewardsTabManagerContainer = () => {
  const { componentId, onLeftMenuPress } = useNavigation();
  const { showNotificationCentre, tempGameShowWallet, tempGameNewRewardsStorefrontRelease } = useUserFeatures();
  const purchasesIconRef = useRef<View>(null);

  const [state, dispatch] = useReducer<Reducer<IRewardsManagerState, IRewardsManagerAction>>(
    reducer,
    REWARDS_MANAGER_INITIAL_STATE
  );

  const socialGroupId = useSelector(getActiveSocialGroupId);

  const scrollY = useSharedValue(0);
  const dynamicHeight = useSharedValue(120);

  const reduxDispatch = useDispatch();

  const tabsSettings = useSelector(getRewardsTabSettings);
  const selectedSection = useSelector(getActiveRewardsSection);
  const Container = CONTENT[selectedSection] || RewardsListContainer;

  useEffect(() => {
    if ([RewardsSection.Store, RewardsSection.Premium].includes(selectedSection)) {
      dispatch({
        type: RewardsManagerActionTypes.REMOVE_TITLE_AND_DESCRIPTION,
      });
    }
  }, [selectedSection]);

  const battlePassCache = client().readQuery({
    query: gql("GetMobileGameBattlePassFullDocument"),
    variables: {
      socialGroupId,
    },
  });

  const wrapperStyle = useMemo(() => {
    if (selectedSection === RewardsSection.Unavailable) {
      return [];
    }

    return [
      styles.wrapper,
      CONTENT_PROPS?.[selectedSection]?.backgroundColor
        ? { backgroundColor: CONTENT_PROPS[selectedSection].backgroundColor }
        : {},
    ];
  }, [selectedSection]);

  const { hasDonationBattlepass, hasUnlockableBattlepassVouchers, hasVoucherStore } = tabsSettings || {};

  const TABS = useMemo(
    () => [
      {
        label: t("screens.rewards.tabs.store"),
        isEnabled: hasVoucherStore,
        isActive: selectedSection === RewardsSection.Store,
        onPress: () => reduxDispatch(updateRewardsTab({ tab: RewardsSection.Store })),
      },
      {
        label: t("screens.rewards.tabs.donations"),
        isEnabled: hasDonationBattlepass,
        isActive: selectedSection === RewardsSection.Donations,
        onPress: () => reduxDispatch(updateRewardsTab({ tab: RewardsSection.Donations })),
      },
      {
        label: t("screens.rewards.tabs.premium"),
        isEnabled: hasUnlockableBattlepassVouchers,
        isActive: selectedSection === RewardsSection.Premium,
        onPress: () => reduxDispatch(updateRewardsTab({ tab: RewardsSection.Premium })),
      },
    ],
    [hasDonationBattlepass, hasUnlockableBattlepassVouchers, hasVoucherStore, selectedSection, dispatch, reduxDispatch]
  );

  const activeTabs = useMemo(() => TABS.filter((tab) => tab.isEnabled), [TABS]);

  useEffect(() => {
    dispatch({
      type: RewardsManagerActionTypes.SET_ACTIVE_TABS_LENGTH,
      payload: activeTabs.length,
    });
  }, [activeTabs.length]);

  const routeState = useSelector(getRouteState);
  usePrizeHintPopup({ routeId: ROUTES.purchases, isEnabled: routeState === ROUTES.rewards, viewRef: purchasesIconRef });

  const bodyStyle = useAnimatedStyle(() => {
    const height = interpolate(
      scrollY.value,
      [dynamicHeight.value, -dynamicHeight.value],
      [0, dynamicHeight.value],
      "clamp"
    );
    const opacity = interpolate(scrollY.value, [0, 80], [1, 0]);

    return {
      height,
      opacity,
    };
  });

  const onScroll = useCallback(
    (event: NativeSyntheticEvent<NativeScrollEvent>) => {
      const { y } = event.nativeEvent.contentOffset;

      if (state.chipsIsDisabled && selectedSection === RewardsSection.Store) {
        return;
      }

      if (selectedSection === RewardsSection.Unavailable) {
        return;
      }

      if (selectedSection === RewardsSection.Donations) {
        return (scrollY.value = y);
      }

      if (state.activeTabsLength === 1 || !state.isOnScrollActionEnabled) {
        return;
      }

      if (y > CONTENT_PROPS[selectedSection].offSet && !state.showTitle) {
        dispatch({
          type: RewardsManagerActionTypes.SET_SHOW_TITLE,
        });
      }

      if (y < CONTENT_PROPS[selectedSection].offSet && state.showTitle) {
        dispatch({ type: RewardsManagerActionTypes.SET_HIDE_TITLE });
      }
    },
    [selectedSection, state]
  );

  const handlePurchasesPress = useCallback(() => {
    if (tempGameShowWallet) {
      Navigation.push(componentId, {
        component: {
          id: ROUTES.wallet,
          name: ROUTES.wallet,
        },
      });
      return;
    }

    Navigation.push(componentId, {
      component: {
        id: ROUTES.purchases,
        name: ROUTES.purchases,
      },
    });
  }, [componentId, tempGameShowWallet]);

  const handleStoreLocationPress = useCallback(
    () =>
      Navigation.push(componentId, {
        component: {
          id: ROUTES.selectContentLocation,
          name: ROUTES.selectContentLocation,
          passProps: {
            placement: selectedSection === RewardsSection.Donations ? "donate" : "rewards",
          },
        },
      }),
    [componentId]
  );

  const { containerProps, showStoreLocation, dynamicStyle } = useMemo(() => {
    if (selectedSection === RewardsSection.Unavailable) {
      return {};
    }

    return {
      containerProps: CONTENT_PROPS[selectedSection],
      showStoreLocation: [RewardsSection.Store, RewardsSection.Donations].includes(selectedSection),
      dynamicStyle: { height: Style.adjust(state.chipsIsDisabled ? 35 : 40) },
    };
  }, [selectedSection, state.chipsIsDisabled]);

  const hasOtherContainers = useMemo(() => activeTabs?.filter((tab) => tab.isEnabled)?.length > 1, [activeTabs]);

  useEffect(() => {
    if (selectedSection === RewardsSection.Premium && !hasUnlockableBattlepassVouchers) {
      const fallbackTab = TABS.find((tab) => tab.isEnabled);

      fallbackTab?.onPress();
    }
  }, [selectedSection, hasUnlockableBattlepassVouchers, TABS]);

  const leftIcons = useMemo(
    () => [
      {
        icon: LeftIcon.MENU,
        onPress: onLeftMenuPress,
        style: { marginRight: Style.adjust(16) },
      },
      ...(showNotificationCentre
        ? [
            {
              icon: LeftIcon.NOTIFICATIONS,
              onPress: () => {
                Navigation.push(ROUTES.rewards, {
                  component: {
                    id: ROUTES.notifications,
                    name: ROUTES.notifications,
                  },
                });
              },
              testID: NOTIF_CENTRE,
              style: { paddingLeft: Style.adjust(8) },
              hitSlop: {
                ...TOP_BAR.HIT_SLOP,
                left: 0,
              },
            },
          ]
        : []),
    ],
    [onLeftMenuPress, showNotificationCentre]
  );

  if (selectedSection === RewardsSection.Unavailable) {
    return <Container handlePurchasesPress={handlePurchasesPress} />;
  }

  if (tempGameNewRewardsStorefrontRelease) {
    return <ShopFrontContainer leftIcons={leftIcons} />;
  }

  return (
    <RewardsManagerContext.Provider value={{ onScroll, dispatch, state }}>
      <View style={wrapperStyle}>
        <GenericHeadingPad />
        {selectedSection === RewardsSection.Donations && !DETOX_ENABLED ? (
          <BattlePassYuCoinCounter step={battlePassCache?.battlePass?.progressStatus?.step} />
        ) : null}

        {!state.isEndOfSeason ? null : (
          <LottieView
            resizeMode="cover"
            style={styles.backgroundLottie}
            source={END_OF_SEASON_BACKGROUND_ANIMATION}
            autoPlay={true}
            loop={true}
          />
        )}
        <View style={styles.container}>
          {hasOtherContainers || selectedSection === RewardsSection.Store ? (
            <Animated.View
              style={[styles.tabs, dynamicStyle, selectedSection === RewardsSection.Donations ? bodyStyle : null]}
            >
              <RewardsTab
                shouldAnimate={state.shouldAnimate}
                showTitle={state.showTitle}
                showStoreLocation={selectedSection === RewardsSection.Store}
                activeTabs={activeTabs}
                selectedSection={selectedSection}
                title={containerProps.titleKey ? t(containerProps.titleKey) : state.title}
                description={containerProps.descriptionKey ? t(containerProps.descriptionKey) : state.description}
                textColor={containerProps.textColor}
              />
            </Animated.View>
          ) : null}
        </View>

        <Container hasOtherContainers={hasOtherContainers} />
        <Box
          flexDirection="row"
          position="absolute"
          top={TOP_BAR.TOP_BAR_WITH_PAD}
          right={Style.adjust(16)}
          disableAutoAdjust={true}
        >
          {!showStoreLocation ? null : (
            <Pressable
              onPress={handleStoreLocationPress}
              style={styles.iconButton}
              delay={1000}
              accessibilityLabel={t("screens.rewards.accessibility.change_store_location")}
            >
              <View style={styles.icon} testID={STORE_LOCATION_TAB_BUTTON}>
                <LocationIcon />
              </View>
            </Pressable>
          )}
          <Pressable
            onPress={handlePurchasesPress}
            style={styles.iconButton}
            delay={1000}
            accessibilityLabel={t("screens.rewards.accessibility.view_purchases")}
          >
            <View style={styles.icon} testID={PURCHASED_TAB_BUTTON}>
              <PurchasesIcon />
            </View>
          </Pressable>
        </Box>
        <View style={styles.topbarWrapper}>
          <TopBar type={containerProps.topBarType} leftIcons={leftIcons} />
        </View>
        <NavBar activeIndex={4} />
      </View>
    </RewardsManagerContext.Provider>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  container: {
    marginHorizontal: Style.adjust(16),
    paddingTop: Style.adjust(8),
  },
  topbarWrapper: {
    left: 0,
    top: TOP_BAR.PADDING_TOP,
    position: "absolute",
    right: 0,
  },
  tabs: {
    width: "100%",
  },
  icon: {
    width: Style.adjust(42),
    height: Style.adjust(42),
    backgroundColor: Colours.neutral.white,
    borderRadius: Style.adjust(21),
    bottom: Style.adjust(2),
    alignItems: "center",
    justifyContent: "center",
  },
  iconButton: {
    width: Style.adjust(42),
    height: Style.adjust(42),
    backgroundColor: Colours.neutral.n250,
    borderRadius: Style.adjust(21),
    marginLeft: Style.adjust(12),
  },
  backgroundLottie: {
    width: Style.DEVICE_WIDTH,
    height: Style.DEVICE_HEIGHT,
    position: "absolute",
  },
});

type ContainerProps = {
  backgroundColor: string;
  topBarType: TopBarTypes;
  textColor: string;
  descriptionKey?: string;
  titleKey?: string;
  offSet: number;
};

type ConfigurableContentSections = Exclude<RewardsSection, RewardsSection.Unavailable>;

const CONTENT_PROPS: Record<ConfigurableContentSections, ContainerProps> = {
  [RewardsSection.Donations]: {
    backgroundColor: "#290163",
    topBarType: "white",
    textColor: Colours.neutral.white,
    offSet: 10,
  },
  [RewardsSection.Store]: {
    backgroundColor: Colours.neutral.white,
    topBarType: "default",
    textColor: "#5C5757",
    titleKey: "screens.rewards.tabs.store",
    offSet: 10,
  },
  [RewardsSection.Premium]: {
    backgroundColor: "#149D6C",
    topBarType: "white",
    textColor: Colours.neutral.white,
    offSet: 10,
    titleKey: "screens.rewards.tabs.premium",
  },
};

const RewardsTabManagerContainer = memo(_RewardsTabManagerContainer);
export default RewardsTabManagerContainer;
