import React, { useCallback, useState, useRef, RefObject } from "react";
import { Navigation } from "react-native-navigation";
import { useSelector, useDispatch } from "react-redux";
import { ActiveDuelsScreen, CompletedDuelsScreen, DuelsIntroScreen } from "@screens/index";
import { IMainTabsProps } from "@navigation/root";
import { SafeAreaView, StyleSheet, FlatList, ListRenderItemInfo, ViewToken, ViewStyle } from "react-native";
import { useBackHandler } from "@services/hooks/useBackHandler";
import { ROUTES } from "@navigation/constants";
import { getDuelsGoalsIntro } from "@redux/onboarding/onboarding.selectors";
import { setDuelsIntroShown } from "@redux/onboarding/onboarding.actions";
import { DuelTabs } from "@components/screens/member/duels-hub/subcomponents";
import { TopBar, NavBar } from "@organisms";

interface IProps {
  componentId?: IMainTabsProps["componentId"];
}

type Props = IProps;

const renderItem = ({ item }: ListRenderItemInfo<string>) => {
  return item === "active" ? <ActiveDuelsScreen /> : <CompletedDuelsScreen />;
};

const keyExtractor = (item: string) => item;

const viewabilityConfig = {
  viewAreaCoveragePercentThreshold: 80,
  waitForInteraction: true,
};

const DUEL_HUB_TABS = ["active", "completed"];

function DuelsHubContainer({ componentId }: Props) {
  const introShown = useSelector(getDuelsGoalsIntro);
  const dispatch = useDispatch();
  const [activePageIndex, setActivePageIndex] = useState(0);
  const handleClose = useCallback(() => {
    Navigation.pop(componentId);
  }, [componentId]);

  const swiper: RefObject<FlatList> = useRef();

  // Using useRef here because I encounter an error on useCallback
  // Changing onViewableItemsChanged on the fly is not supported
  const handleSwipe = useRef(({ viewableItems }: { viewableItems: ViewToken[] }) => {
    const visibleItem = viewableItems[0];

    if (visibleItem) {
      setActivePageIndex(visibleItem.index);
    }
  });

  useBackHandler(() => {
    Navigation.pop(ROUTES.duelsHub);
    return true;
  });

  const handleChangeTab = (index: 0 | 1) => () => {
    setActivePageIndex(index);
    swiper?.current?.scrollToIndex({ index, animated: true });
  };

  if (introShown) {
    return <DuelsIntroScreen setOnboardingShown={() => dispatch(setDuelsIntroShown())} />;
  }

  return (
    <SafeAreaView style={StyleSheet.absoluteFill}>
      <TopBar leftIcon="Back" onPressLeftIcon={handleClose} />
      <DuelTabs onPress={handleChangeTab} activePageIndex={activePageIndex} />
      <FlatList
        style={styles.swiper}
        pagingEnabled={true}
        renderItem={renderItem}
        decelerationRate="fast"
        keyExtractor={keyExtractor}
        data={DUEL_HUB_TABS}
        ref={swiper}
        showsVerticalScrollIndicator={false}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        onViewableItemsChanged={handleSwipe.current}
        viewabilityConfig={viewabilityConfig}
      />
      <NavBar activeIndex={3} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  swiper: {
    flex: 1,
  } as ViewStyle,
});

export default DuelsHubContainer;
