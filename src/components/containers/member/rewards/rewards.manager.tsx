import React, { memo, useCallback, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { getActiveRewardsSection } from "@redux/rewards-tab/rewards-tab.selectors";
import BattlePassContainer from "@components/containers/battle-pass/battle-pass.container";
import RewardsListContainer from "./rewards.list.container";
import { RewardsSection } from "@redux/rewards-tab/rewards-tab.types";
import { NativeScrollEvent, NativeSyntheticEvent, StyleSheet, View } from "react-native";
import { RewardsTab } from "@molecules";
import { GenericHeadingPad, NavBar, TopBarAbsolute } from "@organisms";
import { LeftIcon } from "@organisms/top-bar/subcomponents/left";
import { useNavigation } from "@navigation/navigation.context";
import { Colours, Style } from "@styles";
import { TopBarTypes } from "@organisms/top-bar/top-bar.helpers";
import { t } from "@locale";
import { Navigation } from "@navigation/main";
import { ROUTES } from "@navigation/constants";
import { RewardsManagerContext } from "./rewards.manager.context";

// TODO: remove the partial type
const CONTAINERS: Partial<Record<RewardsSection, React.FC>> = {
  [RewardsSection.Donations]: BattlePassContainer,
  [RewardsSection.Store]: RewardsListContainer,
  // [RewardsSection.Premium]: RewardsListContainer,
};

const _RewardsTabManagerContainer = () => {
  const { componentId, onLeftMenuPress } = useNavigation();
  const [showTitle, setShowTitle] = useState(false);
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const [dynamicProps, setDynamicProps] = useState({ title: "", description: "" });
  const selectedSection = useSelector(getActiveRewardsSection);
  const Container = CONTAINERS[selectedSection] || RewardsListContainer;
  const wrapperStyle = useMemo(
    () => [styles.wrapper, { backgroundColor: CONTAINER_PROPS[selectedSection].backgroundColor }],
    [selectedSection]
  );

  const onScroll = useCallback(
    (event: NativeSyntheticEvent<NativeScrollEvent>) => {
      if (event.nativeEvent.contentOffset.y > CONTAINER_PROPS[selectedSection].offSet) {
        setShowTitle(true);
      }

      if (event.nativeEvent.contentOffset.y < CONTAINER_PROPS[selectedSection].offSet) {
        setShowTitle(false);
        setShouldAnimate(true);
      }
    },
    [selectedSection]
  );

  const handlePurchasesButtonPress = useCallback(async () => {
    await Navigation.push(componentId, {
      component: {
        id: ROUTES.purchases,
        name: ROUTES.purchases,
      },
    });
  }, [componentId]);

  return (
    <RewardsManagerContext.Provider value={{ showTitle, onScroll, setDynamicProps }}>
      <View style={wrapperStyle}>
        <GenericHeadingPad />
        <View style={styles.container}>
          <View style={styles.tabs}>
            <RewardsTab
              shouldAnimate={shouldAnimate}
              showTitle={showTitle}
              title={CONTAINER_PROPS[selectedSection].title || dynamicProps.title}
              description={CONTAINER_PROPS[selectedSection].description || dynamicProps.description}
              textColor={CONTAINER_PROPS[selectedSection].textColor}
              handlePurchasesButtonPress={handlePurchasesButtonPress}
            />
          </View>
        </View>
        <Container />
        <TopBarAbsolute
          type={CONTAINER_PROPS[selectedSection].topBarType}
          leftIcon={LeftIcon.MENU}
          onPressLeftIcon={onLeftMenuPress}
        />
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
    paddingBottom: Style.adjust(21),
    paddingTop: Style.adjust(8),
    marginBottom: 15,
  },
  tabs: {
    position: "absolute",
    width: "100%",
  },
});

const CONTAINER_PROPS = {
  [RewardsSection.Donations]: {
    backgroundColor: "#290163",
    topBarType: "white" as TopBarTypes,
    textColor: Colours.neutral.white,
    title: "",
    description: "",
    offSet: 0,
  },
  [RewardsSection.Store]: {
    backgroundColor: Colours.neutral.white,
    topBarType: "default" as TopBarTypes,
    textColor: "#5C5757",
    title: t("screens.rewards.tabs.store"),
    description: " ",
    offSet: 10,
  },
  [RewardsSection.Premium]: {
    backgroundColor: Colours.neutral.white,
    topBarType: Colours.neutral.white as TopBarTypes,
    textColor: "#5C5757",
    title: "",
    description: "",
    offSet: 0,
  },
};

const RewardsTabManagerContainer = memo(_RewardsTabManagerContainer);
export default RewardsTabManagerContainer;
