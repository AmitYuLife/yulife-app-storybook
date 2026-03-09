import BattlePassContainer from "@components/containers/battle-pass/battle-pass.container";
import RewardsUnlockContainer from "@components/containers/rewards-unlock/rewards-unlock-wrapper.container";
import RewardsUnavailableScreen from "@components/screens/member/rewards/unavailable/rewards-unavailable.screen";
import { useUserFeatures } from "@hooks";
import { NOTIF_CENTRE } from "@ids";
import { t } from "@locale";
import { ROUTES } from "@navigation/constants";
import { Navigation } from "@navigation/main";
import { useNavigation } from "@navigation/navigation.context";
import { LeftIcon } from "@organisms/top-bar/subcomponents/left";
import { updateRewardsTab } from "@redux/rewards-tab/rewards-tab.actions";
import { getActiveRewardsSection, getRewardsTabSettings } from "@redux/rewards-tab/rewards-tab.selectors";
import { RewardsSection } from "@redux/rewards-tab/rewards-tab.types";
import { Style } from "@styles";
import React, { memo, ReactNode, useCallback, useEffect, useMemo, useRef } from "react";
import { View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import RewardsListContainer from "./rewards.list.container";
import { IRewardContainerProps } from "./rewards.types";
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

const _RewardsTabManagerContainer = () => {
  const { componentId, onLeftMenuPress } = useNavigation();
  const { showNotificationCentre } = useUserFeatures();
  const purchasesIconRef = useRef<View>(null);

  const reduxDispatch = useDispatch();

  const tabsSettings = useSelector(getRewardsTabSettings);
  const selectedSection = useSelector(getActiveRewardsSection);
  const Container = CONTENT[selectedSection] || RewardsListContainer;

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
    [hasDonationBattlepass, hasUnlockableBattlepassVouchers, hasVoucherStore, selectedSection, reduxDispatch]
  );

  const routeState = useSelector(getRouteState);
  usePrizeHintPopup({
    routeIds: [ROUTES.purchases],
    isEnabled: routeState === ROUTES.rewards,
    viewRef: purchasesIconRef,
  });

  const handlePurchasesPress = useCallback(() => {
    Navigation.push(componentId, {
      component: {
        id: ROUTES.wallet,
        name: ROUTES.wallet,
      },
    });
  }, [componentId]);

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
        style: { marginEnd: Style.adjust(16) },
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
              style: { paddingStart: Style.adjust(8) },
            },
          ]
        : []),
    ],
    [onLeftMenuPress, showNotificationCentre]
  );

  if (selectedSection === RewardsSection.Unavailable) {
    return <Container handlePurchasesPress={handlePurchasesPress} />;
  }

  return <ShopFrontContainer leftIcons={leftIcons} />;
};

const RewardsTabManagerContainer = memo(_RewardsTabManagerContainer);
export default RewardsTabManagerContainer;
