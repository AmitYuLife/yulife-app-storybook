import React, { memo, useState, useRef, useCallback, useEffect, FC, useContext } from "react";
import { QUESTS_SCREEN } from "@ids";
import { getCurrentEpisode, getCurrentPlanetByLevel, getCurrentWorld, getNormalizedLevel } from "@utils";
import { FlatList, SafeAreaView, View, ViewabilityConfigCallbackPair } from "react-native";
import { IMapSlice, mapSlices } from "./assets";
import offsets from "./assets/offsets";
import styles from "./quests-screen.styles";
import ScrollyQuest from "./subcomponents/scrolly-quest";
import Unity from "./unity-movies/unity";
import { NavBar, TopBar } from "@organisms";
import QuestsLoadingOverlay from "./subcomponents/quests.loading";
import { WeeklyQuestsButton } from "./weeklies/weeklies.button";
import { useSelector } from "react-redux";
import { getUserFeatures } from "@redux/user/user.selectors";
import { getTopBarType, getWorldData } from "./quests-screen.helpers";
import { QuestsMapContext } from "./quests.context";
import { IConnectedScreenProps } from "@app/typings";

interface IProps extends IConnectedScreenProps {
  hideUnity?: () => void | null;
  unity: number;
  levelId: string;
  repeatedUnity: boolean;
  componentId: string;
}

type CurrentWorld = 0 | 1 | 2 | 3;

const QuestsScreen: FC<IProps> = ({ hideUnity, unity, levelId, repeatedUnity, onLeftMenuPress }) => {
  const { currentLevel, activeLevel } = useContext(QuestsMapContext);
  const features = useSelector(getUserFeatures);
  const [isOnCurrentEpisode, setIsOnCurrentEpisode] = useState(false);
  const [topBarType, setTopBarType] = useState(getTopBarType(currentLevel));
  const flatList = useRef<FlatList<IMapSlice>>();
  const timer = useRef<NodeJS.Timeout>();

  const handleViewableItemsChanged = useRef<ViewabilityConfigCallbackPair["onViewableItemsChanged"]>(
    ({ viewableItems }) => {
      const first = viewableItems[0];
      const last = viewableItems[viewableItems.length - 1];

      if (first && last) {
        setTopBarType(last.item.topBarType);
      }
    }
  );

  const scrollToActiveLevel = useCallback(() => {
    const currentWorld = getCurrentWorld(activeLevel);
    const currentPlanet = getCurrentPlanetByLevel(currentLevel);
    const normalizedLevel = getNormalizedLevel(activeLevel);
    const result = mapSlices(currentPlanet).find((slice) =>
      slice.slots.some((item) => item.index === normalizedLevel - 1)
    );

    if (result && result.episodeSettings) {
      timer.current = global.setTimeout(() => {
        if (flatList.current) {
          setIsOnCurrentEpisode(true);
          setTopBarType(result.episodeSettings.topBarType);
          const currentEpisode = getCurrentEpisode(normalizedLevel);
          flatList.current.scrollToOffset({
            animated: true,
            offset:
              offsets[activeLevel % 50 === 0 ? "withUnity" : "withoutUnity"][currentWorld as CurrentWorld][
                currentEpisode
              ],
          });
        }
      }, 600);
    }
  }, [activeLevel, currentLevel]);

  const setFlatListRef = useCallback((ref: any) => {
    flatList.current = ref;
  }, []);

  useEffect(() => {
    return () => clearTimeout(timer.current);
  }, []);

  useEffect(() => {
    scrollToActiveLevel();
  }, [scrollToActiveLevel, unity, activeLevel]);

  /**
   * If we attempt to wrap this up in useMemo the scrolly quests won't update,
   * because the data its getting is `slices` and not the levels.
   */
  const { initialScrollIndex, slices, snapOffsets } = getWorldData(currentLevel);

  if (unity) {
    return <Unity level={unity} levelId={levelId} repeatedUnity={repeatedUnity} onSkip={hideUnity} />;
  }

  return (
    <SafeAreaView style={styles.wrapper} testID={QUESTS_SCREEN(getCurrentWorld(currentLevel))}>
      <ScrollyQuest
        initialScrollIndex={initialScrollIndex}
        data={slices}
        offsets={snapOffsets}
        onViewableItemsChanged={handleViewableItemsChanged.current}
        setFlatListRef={setFlatListRef}
      />
      <View style={styles.topBarWrapper}>
        <TopBar type={topBarType} onPressLeftIcon={onLeftMenuPress} />
      </View>
      <NavBar activeIndex={1} />
      <QuestsLoadingOverlay />
      <View style={styles.leftIconList}>
        <WeeklyQuestsButton isVisible={features?.showWeeklies && isOnCurrentEpisode} />
      </View>
    </SafeAreaView>
  );
};

export default memo(QuestsScreen);
