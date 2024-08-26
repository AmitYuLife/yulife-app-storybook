import React, { memo, useCallback, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { getIsBattlePassActive } from "@redux/battle-pass/battle-pass.selectors";
import BattlePassContainer from "@components/containers/battle-pass/battle-pass.container";
import RewardsListContainer from "./rewards.list.container";
import { StyleSheet, View } from "react-native";
import { ChipList } from "@molecules";
import { ProductStepMilestonesContainer } from "@components/containers";
import { updateCurrentRoute } from "@redux/app/app.actions";
import { ROUTES } from "@navigation/constants";
import { useDispatch } from "react-redux";
import { TOP_BAR_WITH_PAD } from "@styles/top-bar.styles";

const _RewardsTabManagerContainer = () => {
  const [currentTab, setCurrentTab] = useState(null);
  const isBattlePassActive = useSelector(getIsBattlePassActive);
  const dispatch = useDispatch();

  const getScreen = useCallback((tab: string) => {
    switch (tab) {
      case "Store": {
        dispatch(updateCurrentRoute({ route: ROUTES.rewards }));
        return <RewardsListContainer />;
      }

      case "Donate":
        return <BattlePassContainer />;
      case "Unlock":
        return <ProductStepMilestonesContainer />;
      default:
        return <RewardsListContainer />;
    }
  }, []);

  const MENU = useMemo(
    () => [
      {
        value: "Store",
        isSelected: currentTab === "Store" || currentTab === null,
        onPress: () => setCurrentTab("Store"),
      },
      {
        value: "Donate",
        isSelected: currentTab === "Donate",
        onPress: () => setCurrentTab("Donate"),
      },
      {
        value: "Unlock",
        isSelected: currentTab === "Unlock",
        onPress: () => setCurrentTab("Unlock"),
      },
    ],
    [currentTab]
  );

  return (
    <View style={styles.wrapper}>
      {getScreen(currentTab)}
      {!isBattlePassActive ? null : (
        <View style={styles.navigation}>
          <ChipList chips={MENU} chipStyle={CHIP_STYLE} />
        </View>
      )}
    </View>
  );
};

const CHIP_STYLE = {
  default: {
    textColor: "#332630",
    backgroundColor: "#FFBDF2",
  },
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  navigation: {
    position: "absolute",
    top: TOP_BAR_WITH_PAD,
  },
});

const RewardsTabManagerContainer = memo(_RewardsTabManagerContainer);
export default RewardsTabManagerContainer;
