import React, { useCallback, memo, useMemo } from "react";
import { useQuery } from "@apollo/client";
import { Navigation } from "@navigation/main";
import { ROUTES } from "@navigation/constants";
import { useBackHandler, usePopToQuestsRootOnNewDate } from "@hooks";
import { t } from "@locale";
import { IITem } from "@organisms/media-list-items/media-list-items";
import { gql } from "@graphql/__generated";
import { MeditopiaMediaAllScreen } from "@components/screens";
import LoadingScreen from "@components/screens/member/loading/loading.screen";

interface IMeditopiaMediaAllContainerProps {
  contentMediaTags: string[];
  level: number;
  levelSlotTemplateId: string;
  yuniversalMap: number;
}

const MeditopiaMediaAllContainer = ({
  level,
  levelSlotTemplateId,
  contentMediaTags,
  yuniversalMap,
}: IMeditopiaMediaAllContainerProps) => {
  const { data, loading } = useQuery(gql("GetMobileQuestLevelMediaInternalContentDocument"), {
    fetchPolicy: "network-only",
    variables: {
      contentTags: contentMediaTags,
      level,
      levelSlotTemplateId,
      yuniversalMap,
      includeAllMedia: true,
    },
  });

  const internalContent = data?.getMobileQuestLevelMediaInternalContent;

  const onLeftIconPress = useCallback(() => Navigation.popTo(ROUTES.meditopiaMediaList), []);
  const onRightIconPress = useCallback(() => Navigation.popTo(ROUTES.quests), []);

  useBackHandler(() => {
    onLeftIconPress();
    return true;
  });

  usePopToQuestsRootOnNewDate(level);

  const sections = useMemo(() => {
    const media = internalContent?.media || [];
    const groups = new Map<string, { order: number; items: IITem[] }>();

    for (const item of media) {
      const key = item.category || "";
      if (!key) {
        continue;
      }

      if (!groups.has(key)) {
        groups.set(key, { order: item.categoryOrder ?? 999, items: [] });
      }

      groups.get(key)!.items.push({
        ...item.media,
        reward: item.reward,
        formattedDuration: item.formattedDuration,
      });
    }

    return [...groups.entries()]
      .sort(([, a], [, b]) => a.order - b.order)
      .map(([category, { items }]) => ({ category, meditations: items }));
  }, [internalContent?.media]);

  const onMeditationPress = useCallback(
    (video: IITem) => {
      Navigation.push(ROUTES.meditopiaMediaAll, {
        component: {
          id: ROUTES.mediaPlayer,
          name: ROUTES.mediaPlayer,
          passProps: {
            video,
            onLeftIconPress: () => Navigation.popTo(ROUTES.meditopiaMediaAll),
            eventType: "mindfulness",
            orientation: "portrait",
            startChallengeButtonLabel: t("screens.meditopia_media_list.startChallengeButtonLabel"),
            level,
            levelSlotTemplateId,
          },
          options: {
            popGesture: false,
          },
        },
      });
    },
    [level, levelSlotTemplateId]
  );

  if (loading || !internalContent) {
    return <LoadingScreen />;
  }

  return (
    <MeditopiaMediaAllScreen
      sections={sections}
      title={internalContent.title ?? t("screens.meditopia_media_all.title")}
      description={internalContent.description}
      logo={internalContent.logo}
      onLeftIconPress={onLeftIconPress}
      onRightIconPress={onRightIconPress}
      onMeditationPress={onMeditationPress}
    />
  );
};

export default memo(MeditopiaMediaAllContainer);
