import React, { memo, ReactNode, Reducer, useCallback, useEffect, useMemo, useReducer } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getActiveRewardsSection, getRewardsTabSettings } from "@redux/rewards-tab/rewards-tab.selectors";
import BattlePassContainer from "@components/containers/battle-pass/battle-pass.container";
import RewardsListContainer from "./rewards.list.container";
import RewardsUnlockContainer from "@components/containers/rewards-unlock/rewards-unlock.container";
import { RewardsSection } from "@redux/rewards-tab/rewards-tab.types";
import { NativeScrollEvent, NativeSyntheticEvent, StyleSheet, View } from "react-native";
import { RewardsTab, Pressable, BattlePassYuCoinCounter, LottieView } from "@molecules";
import { GenericHeadingPad, NavBar, TopBarAbsolute } from "@organisms";
import { LeftIcon } from "@organisms/top-bar/subcomponents/left";
import { useNavigation } from "@navigation/navigation.context";
import { Colours, Style, TOP_BAR } from "@styles";
import { TopBarTypes } from "@organisms/top-bar/top-bar.helpers";
import { t } from "@locale";
import { Navigation } from "@navigation/main";
import { ROUTES } from "@navigation/constants";
import { RewardsManagerContext } from "./rewards.manager.context";
import { updateRewardsGameMode } from "@redux/rewards-tab/rewards-tab.actions";
import { REWARDS_MANAGER_INITIAL_STATE, reducer } from "./rewards.manager.reducer";
import Animated, { interpolate, useAnimatedStyle, useSharedValue } from "react-native-reanimated";
import { PurchasesIcon } from "@atoms/icon/purchases-icon";
import { Box } from "@atoms";
import { LocationIcon } from "@atoms/icon/location-icon";
import {
  IRewardContainerProps,
  IRewardsManagerAction,
  IRewardsManagerState,
  RewardsManagerActionTypes,
} from "./rewards.types";
import RewardsUnavailableScreen from "@components/screens/member/rewards/unavailable/rewards-unavailable.screen";
import { PURCHASED_TAB_BUTTON, STORE_LOCATION_TAB_BUTTON } from "@ids";
import { gql } from "@graphql/__generated";
import client from "@graphql/_core/client";
import { getActiveSocialGroupId } from "@redux/leaderboards/leaderboards.selectors";
import { DETOX_ENABLED } from "@services/socket";

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

    return [styles.wrapper, { backgroundColor: CONTENT_PROPS[selectedSection].backgroundColor }];
  }, [selectedSection]);

  const { hasDonationBattlepass, hasUnlockableBattlepassVouchers, hasVoucherStore } = tabsSettings || {};

  const TABS = useMemo(
    () => [
      {
        label: t("screens.rewards.tabs.store"),
        isEnabled: hasVoucherStore,
        isActive: selectedSection === RewardsSection.Store,
        onPress: () => {
          dispatch({
            type: RewardsManagerActionTypes.REMOVE_TITLE_AND_DESCRIPTION,
          });
          reduxDispatch(updateRewardsGameMode(RewardsSection.Store));
        },
      },
      {
        label: t("screens.rewards.tabs.donations"),
        isEnabled: hasDonationBattlepass,
        isActive: selectedSection === RewardsSection.Donations,
        onPress: () => {
          reduxDispatch(updateRewardsGameMode(RewardsSection.Donations));
        },
      },
      {
        label: t("screens.rewards.tabs.premium"),
        isEnabled: hasUnlockableBattlepassVouchers,
        isActive: selectedSection === RewardsSection.Premium,
        onPress: () => {
          dispatch({
            type: RewardsManagerActionTypes.REMOVE_TITLE_AND_DESCRIPTION,
          });
          reduxDispatch(updateRewardsGameMode(RewardsSection.Premium));
        },
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

  const handlePurchasesPress = useCallback(
    () =>
      Navigation.push(componentId, {
        component: {
          id: ROUTES.purchases,
          name: ROUTES.purchases,
        },
      }),
    [componentId]
  );

  const handleStoreLocationPress = useCallback(
    () =>
      Navigation.push(componentId, {
        component: {
          id: ROUTES.selectContentLocation,
          name: ROUTES.selectContentLocation,
          passProps: {
            placement: "rewards",
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
      showStoreLocation: selectedSection === RewardsSection.Store,
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

  if (selectedSection === RewardsSection.Unavailable) {
    return <Container handlePurchasesPress={handlePurchasesPress} />;
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
        <Box flexDirection="row" position="absolute" top={TOP_BAR.TOP_BAR_WITH_PAD} right={16}>
          {!showStoreLocation ? null : (
            <Pressable onPress={handleStoreLocationPress} style={styles.iconButton} delay={1000}>
              <View style={styles.icon} testID={STORE_LOCATION_TAB_BUTTON}>
                <LocationIcon />
              </View>
            </Pressable>
          )}
          <Pressable onPress={handlePurchasesPress} style={styles.iconButton} delay={1000}>
            <View style={styles.icon} testID={PURCHASED_TAB_BUTTON}>
              <PurchasesIcon />
            </View>
          </Pressable>
        </Box>
        <TopBarAbsolute type={containerProps.topBarType} leftIcon={LeftIcon.MENU} onPressLeftIcon={onLeftMenuPress} />
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
    textColor: "#5C5757",
    offSet: 0,
  },
};

const RewardsTabManagerContainer = memo(_RewardsTabManagerContainer);
export default RewardsTabManagerContainer;
