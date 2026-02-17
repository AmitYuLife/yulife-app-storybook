import { useQuery } from "@apollo/client";
import {
  buildChestModalSubmitHandler,
  getIsLevelAvailable,
  handlePressLevelItem,
} from "@components/screens/member/quests/quests-scroll-screen/quests-screen.container.helpers";
import Unity from "@components/screens/member/quests/quests-scroll-screen/unity-movies/unity";
import { YuniversalQuestsScreen } from "@components/screens/member/quests/quests-scroll-screen/yuniversal/yuniversal-quest-screen";
import { gql } from "@graphql/__generated";
import { useQueryOnScreenSeen, useScreenReaderChange, useUserFeatures } from "@hooks";
import { ROUTES } from "@navigation/constants";
import { submitUnityAction } from "@redux/levels/levels.actions";
import {
  getChallengesStatus,
  getCurrentLevel,
  getNextLevelAvailableAt,
  getYuniversalProgress,
} from "@redux/levels/levels.selectors";
import { Style } from "@styles";
import { first } from "lodash";
import React, { memo, useCallback, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getEpisode, getLevelStatus, getMinLevel, getSeperator } from "./quest-map-helpers";
import { getQuestMapConfig } from "./quest-map.config";
import { QuestMapLevel } from "./quest-map.interface";
import QuestMapScreen from "./quest-map.screen";
import { IIcon } from "@organisms/top-bar/subcomponents/left";

interface IQuestMapContainerProps {
  componentId: string;
  onLeftMenuPress: () => void;
  leftIcons: IIcon[];
}

const QuestMapContainer = ({ componentId, leftIcons, onLeftMenuPress }: IQuestMapContainerProps) => {
  const { yuniversalLevel, yuniversalMap } = useSelector(getYuniversalProgress);
  const features = useUserFeatures();

  const { data, loading: isLoading } = useQuery(gql("GetQuestMapDocument"), {
    fetchPolicy: "network-only",
    notifyOnNetworkStatusChange: true,
  });

  const currentLevel = useSelector(getCurrentLevel);

  const [, { data: weeklies }] = useQueryOnScreenSeen(gql("GetMobileGameWeekliesDocument"), ROUTES.quests, undefined, {
    disabled: !features.showWeeklies,
    refetch: true,
  });

  const dispatch = useDispatch();
  const [unity, setUnity] = useState<number | null>(null);

  const challengesStatus = useSelector(getChallengesStatus);
  const [repeatedUnity, setRepeatedUnity] = useState(false);

  const nextLevelAvailableAt = useSelector(getNextLevelAvailableAt);

  const isScreenReaderEnabled = useScreenReaderChange();

  const QUEST_MAP_CONFIG = useMemo(getQuestMapConfig, []);
  const unlockableRewards = useMemo(
    () => new Map((data?.unlockableTeasers?.targets || []).map((target) => [target.id, target])),
    [data?.unlockableTeasers]
  );

  const levelsList = useMemo(
    () =>
      data?.levels
        .filter((level) => level.level)
        .map((level) => ({
          ...level,
          notificationIcon: unlockableRewards.get(String(level.level))?.notificationIcon,
        })) || [],
    [data, unlockableRewards]
  );

  const handleSetUnity = useCallback((itemLevel: QuestMapLevel) => {
    setUnity(itemLevel.level);
    setRepeatedUnity(true);
  }, []);

  const handleSubmitUnity = useCallback(
    (itemLevel: QuestMapLevel) => {
      setUnity(itemLevel.level);
      dispatch(submitUnityAction({ levelId: itemLevel.id }));
      setRepeatedUnity(false);
    },
    [dispatch]
  );

  const formattedLevels = useMemo(() => {
    if (yuniversalMap) {
      return [];
    }

    return levelsList.map((itemLevel) => {
      const levelStatus = getLevelStatus(challengesStatus, currentLevel, itemLevel.level, nextLevelAvailableAt);
      const isChestLevel = !!itemLevel.levelChest;

      return {
        ...itemLevel,
        ...levelStatus,
        isChestLevel,

        onPress: handlePressLevelItem({
          componentId,
          challengesStatus,
          handleSetUnity,
          handleSubmitUnity,
          itemLevel,
          levelStatus,
          nextLevelAvailableAt,
          questMapInterstitialModal: features.tempQuestMapInterstitialModal,
          notificationIcon: itemLevel.notificationIcon,
          handlePressShowChestModal: buildChestModalSubmitHandler({
            isNext: levelStatus.isNext,
            componentId,
            level: itemLevel.level,
            questMapInterstitialModal: features.tempQuestMapInterstitialModal,
            yuniversalMap,
            levelAvailable: getIsLevelAvailable(nextLevelAvailableAt),
            notificationIcon: itemLevel.notificationIcon,
          }),
        }),
      };
    });
  }, [yuniversalMap, levelsList, challengesStatus, currentLevel, nextLevelAvailableAt, componentId, dispatch]);

  const items = useMemo(() => {
    if (!data?.levels || yuniversalMap) {
      return [];
    }

    const episodes = [];
    let tempEpisode = [];

    for (const level of data.levels) {
      // Unity is every 50 levels, and unity has no other levels in the episode
      // So we push it as its own chunk
      const formattedLevel = formattedLevels.find((e) => e.level === level.level);
      if (level.level % 50 === 0) {
        if (currentLevel > level.level - 1) {
          episodes.push([formattedLevel]);
        }

        continue;
      }

      tempEpisode.push(formattedLevel);

      // Once we have all 7 levels of the episode, we push the chunk
      if (tempEpisode.length === 7) {
        episodes.push(tempEpisode);
        tempEpisode = [];
      }
    }

    return episodes
      .map((levels) => {
        const firstLevel = first(levels);
        const episode = getEpisode(firstLevel.level);
        const seperator = getSeperator({ currentLevel, episode, config: QUEST_MAP_CONFIG });

        if (!(episode in QUEST_MAP_CONFIG.episodes)) {
          return null;
        }

        return {
          levels,
          episodeConfig: QUEST_MAP_CONFIG.episodes[episode],
          seperator,
        };
      })
      .filter(Boolean)
      .reverse();
  }, [currentLevel, data?.levels, formattedLevels, yuniversalMap]);

  const itemHeights: number[] = useMemo(
    () =>
      items.filter(Boolean).map((episode) => {
        if (!episode?.episodeConfig.episodeWidth || !episode?.episodeConfig?.episodeHeight) {
          return 0;
        }

        const lottieAspectRatio =
          episode.episodeConfig.lottieAspectRatio ||
          episode?.episodeConfig.episodeWidth / episode?.episodeConfig?.episodeHeight;
        const finalepisodeHeight = Style.DEVICE_WIDTH * (1 / lottieAspectRatio);

        const unityHeight = episode.seperator
          ? Style.DEVICE_WIDTH * (episode?.seperator?.height / episode?.seperator?.width)
          : 0;

        return finalepisodeHeight + unityHeight;
      }),
    [items]
  );

  const itemOffsets = useMemo(() => {
    if (yuniversalMap) {
      return [];
    }

    const offsets: number[] = [];
    let cumulative = 0;

    for (const height of itemHeights) {
      offsets.push(Math.floor(cumulative));
      cumulative += height;
    }

    return offsets;
  }, [itemHeights, yuniversalMap]);

  const snapOffsets = useMemo(() => {
    const offsets: number[] = [];

    for (const itemIndex in items) {
      let currentSnapPosition = itemOffsets[itemIndex];
      const item = items[itemIndex];
      if (!item) {
        continue;
      }

      const minLevel = getMinLevel(item?.levels);
      const episode = getEpisode(minLevel);
      const lottie = QUEST_MAP_CONFIG.episodes[episode];
      const aspectRatio = lottie.lottieAspectRatio || lottie.episodeWidth / lottie.episodeHeight;
      const renderedEpisodeHeight = Style.DEVICE_WIDTH * (1 / aspectRatio);
      const leftOverepisodeHeight = Style.DEVICE_HEIGHT - renderedEpisodeHeight;

      if (lottie.snapPosition === "center") {
        currentSnapPosition -= leftOverepisodeHeight / 2;
      }

      if (lottie?.snapOffsetY) {
        const adjustedSnapOffset = lottie?.snapOffsetY * (1 / aspectRatio);
        currentSnapPosition -= adjustedSnapOffset;
      }

      if (item?.seperator) {
        const height = Style.DEVICE_WIDTH * (item.seperator.height / item.seperator.width);
        currentSnapPosition += height / 2;
      }

      offsets.push(Math.floor(currentSnapPosition));
    }

    return offsets;
  }, [itemOffsets, items]);

  const hideUnity = useCallback(() => {
    setUnity(null);
  }, []);

  return (
    <>
      {yuniversalMap ? (
        <YuniversalQuestsScreen
          componentId={componentId}
          yuniversalLevel={yuniversalLevel}
          yuniversalMap={yuniversalMap}
          levelList={levelsList}
          weeklies={weeklies?.getMobileGameWeeklies}
          leftIcons={leftIcons}
          isScreenReaderEnabled={isScreenReaderEnabled}
          onLeftMenuPress={onLeftMenuPress}
        />
      ) : (
        <QuestMapScreen
          items={items}
          isLoading={isLoading}
          leftIcons={leftIcons}
          weeklies={weeklies?.getMobileGameWeeklies}
          currentLevel={currentLevel}
          snapOffsets={snapOffsets}
          itemHeights={itemHeights}
          isScreenReaderEnabled={isScreenReaderEnabled}
          onLeftMenuPress={onLeftMenuPress}
        />
      )}
      {unity ? (
        <Unity
          level={unity}
          yuniversalLevel={yuniversalLevel}
          yuniversalMap={yuniversalMap}
          repeatedUnity={repeatedUnity}
          onSkip={hideUnity}
        />
      ) : null}
    </>
  );
};

export default memo(QuestMapContainer);
