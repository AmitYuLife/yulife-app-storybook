import React, { useCallback, useState, useRef, RefObject } from "react";
import { Navigation } from "@navigation/main";
import { useSelector, useDispatch } from "react-redux";
import { ActiveDuelsScreen, CompletedDuelsScreen, DuelsIntroScreen } from "@screens/index";
import { IMainTabsProps } from "@navigation/root";
import { FlatList, ListRenderItemInfo, ViewToken, ViewStyle, View } from "react-native";
import { useBackHandler } from "@hooks";
import { getDuelsGoalsIntro } from "@redux/onboarding/onboarding.selectors";
import { setDuelsIntroShown } from "@redux/onboarding/onboarding.actions";
import { DuelTabs } from "@components/screens/member/duels-hub/subcomponents";
import { LeftIcon } from "@organisms/top-bar/subcomponents/left";
import { GenericHeadingPad, TopBarAbsolute } from "@organisms";
import { Button } from "@components/molecules";
import { Style, StyleSheet } from "@styles";
import { ROUTES } from "@navigation/constants";
import { CHALLENGE_FRIEND_BUTTON, DUELS_HUB } from "@ids";

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

  const navigateToDuelsSearch = useCallback(() => {
    Navigation.push(componentId, {
      component: {
        id: ROUTES.duelsSearch,
        name: ROUTES.duelsSearch,
      },
    });
  }, [componentId]);

  useBackHandler(() => {
    handleClose();
    return true;
  });

  const handleChangeTab = useCallback((index: 0 | 1) => {
    setActivePageIndex(index);
    swiper?.current?.scrollToIndex({ index, animated: true });
  }, []);

  if (introShown) {
    return <DuelsIntroScreen setOnboardingShown={() => dispatch(setDuelsIntroShown())} />;
  }

  return (
    <View style={styles.flex}>
      <GenericHeadingPad />
      <DuelTabs onPress={handleChangeTab} activePageIndex={activePageIndex} />
      <FlatList
        style={styles.flex}
        pagingEnabled={true}
        renderItem={renderItem}
        decelerationRate="fast"
        keyExtractor={keyExtractor}
        data={DUEL_HUB_TABS}
        testID={DUELS_HUB}
        ref={swiper}
        showsVerticalScrollIndicator={false}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        onViewableItemsChanged={handleSwipe.current}
        viewabilityConfig={viewabilityConfig}
      />
      <TopBarAbsolute leftIcon={LeftIcon.BACK} onPressLeftIcon={handleClose} />
      <View style={styles.floatingButton}>
        <Button
          testID={CHALLENGE_FRIEND_BUTTON}
          translationKey="modals.duels.hub.challenge_friend_button"
          onPress={navigateToDuelsSearch}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  } as ViewStyle,
  floatingButton: {
    position: "absolute",
    bottom: 0,
    alignItems: "center",
    width: "100%",
    paddingBottom: Style.adjust(32),
  },
});

export default DuelsHubContainer;
