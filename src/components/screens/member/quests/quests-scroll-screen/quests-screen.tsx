import React, { memo, useState, useRef, useCallback, useEffect, useMemo, FC } from "react";
import { QUESTS_SCREEN } from "@ids";
import { getCurrentEpisode, getCurrentWorld, getNormalizedLevel } from "@utils";
import { FlatList, SafeAreaView, View, ViewabilityConfigCallbackPair } from "react-native";
import { GetQuestMapLevelList_getQuestMapLevelList } from "@graphql/_core/schema";
import { IConnectedScreenProps } from "../../../../../typings";
import { IMapSlice, mapSlices } from "./assets";
import offsets from "./assets/offsets";
import styles from "./quests-screen.styles";
import ScrollyQuest from "./subcomponents/scrolly-quest";
import Unity from "./unity-movies/unity";
import NewUnity from "./unity-movies/new-unity";
import { NavBar } from "@components/organisms";
import QuestsLoadingOverlay from "./subcomponents/quests.loading";
import { TopBar } from "@components/organisms";
import { useNavigationComponentDidAppear } from "@hooks";
import { useSelector } from "react-redux";
import { getUserFeatures } from "@redux/user/user.selectors";
import { getTopBarType, getWorldData } from "./quests-screen.helpers";

export interface IChallenge extends GetQuestMapLevelList_getQuestMapLevelList {
  isActive?: boolean;
  isDone?: boolean;
  isNext?: boolean;
  isChestLevel?: boolean;
  nextAvailableAt?: string;
  onPress?: () => void;
}

interface IProps extends IConnectedScreenProps {
  currentLevel: number;
  activeLevel: number;
  data: IChallenge[];
  hideUnity?: () => void | null;
  unity: number;
  repeatedUnity: boolean;
  loading: boolean;
  componentId: string;
}

type CurrentWorld = 0 | 1 | 2 | 3;

const QuestsScreen: FC<IProps> = ({
  currentLevel,
  activeLevel,
  data,
  hideUnity,
  unity,
  repeatedUnity,
  loading,
  onLeftMenuPress,
  componentId,
}) => {
  const features = useSelector(getUserFeatures);

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
    const normalizedLevel = getNormalizedLevel(activeLevel);
    const result = mapSlices.find((slice) => slice.slots.some((item) => item.index === normalizedLevel - 1));

    if (result && result.episodeSettings) {
      timer.current = global.setTimeout(() => {
        if (flatList.current) {
          setTopBarType(result.episodeSettings.topBarType);
          const currentEpisode = getCurrentEpisode(normalizedLevel);
          flatList.current.scrollToOffset({
            offset:
              offsets[activeLevel % 50 === 0 ? "withUnity" : "withoutUnity"][currentWorld as CurrentWorld][
                currentEpisode
              ],
          });
        }
      }, 600);
    }
  }, [activeLevel]);

  const setFlatListRef = useCallback((ref: any) => {
    flatList.current = ref;
  }, []);

  useNavigationComponentDidAppear(() => {
    if (!loading) {
      scrollToActiveLevel();
    }
  }, componentId);

  useEffect(() => {
    return () => clearTimeout(timer.current);
  }, []);

  useEffect(() => {
    scrollToActiveLevel();
  }, [loading, unity, activeLevel]);

  const { initialScrollIndex, slices, snapOffsets } = useMemo(() => getWorldData(currentLevel), [currentLevel]);

  if (unity) {
    if (features.newGamePlus) {
      return <NewUnity level={unity} repeatedUnity={repeatedUnity} onSkip={hideUnity} />;
    }

    return <Unity level={unity} onSkip={hideUnity} />;
  }

  return (
    <SafeAreaView style={styles.wrapper} testID={QUESTS_SCREEN(getCurrentWorld(currentLevel))}>
      <ScrollyQuest
        currentLevel={currentLevel}
        activeLevel={activeLevel}
        initialScrollIndex={initialScrollIndex}
        data={slices}
        levels={data}
        offsets={snapOffsets}
        onViewableItemsChanged={handleViewableItemsChanged.current}
        setFlatListRef={setFlatListRef}
      />
      <View style={styles.topBarWrapper}>
        <TopBar type={topBarType} onPressLeftIcon={onLeftMenuPress} />
      </View>
      <NavBar activeIndex={1} />
      <QuestsLoadingOverlay loading={loading} />
    </SafeAreaView>
  );
};

export default memo(QuestsScreen);
