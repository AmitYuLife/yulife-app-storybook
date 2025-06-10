import React, { useMemo } from "react";
import { memo } from "react";
import { YuScreen as YuScreenV5 } from "./subcomponents/yu-screen-v5/yu-screen";
import { useSelector } from "react-redux";
import { useTapBackTwiceToExit } from "@hooks";
import { IMainTabsProps as Props } from "@navigation/root";
import { YuScreenContext } from "./context/yu-screen.context";
import { getUserAvatar, getUserEarnRate, getUserFeatures } from "@redux/user/user.selectors";
import { Navigation } from "@navigation/main";
import { ROUTES } from "@navigation/constants";
import { useQuery } from "@apollo/client";
import { gql } from "@graphql/__generated";

const YuScreenContainer = memo(({ componentId }: Props) => {
  useTapBackTwiceToExit(componentId);
  const avatar = useSelector(getUserAvatar);
  const earnRate = useSelector(getUserEarnRate);
  const { showNotificationCentre, tempGameShowAchievements } = useSelector(getUserFeatures);

  const { data: achievements } = useQuery(gql("GetMobileGameUserAchievementsDocument"), {
    fetchPolicy: "cache-only",
    skip: !tempGameShowAchievements,
    notifyOnNetworkStatusChange: true,
  });

  const achievementsList = useMemo(
    () => ({
      points: achievements?.getMobileGameUserAchievements?.achievementPoints,
      list: achievements?.getMobileGameUserAchievements?.equippedAchievements,
    }),
    [achievements?.getMobileGameUserAchievements]
  );

  const yumojiRemoteUrl = avatar.avatarRemoteFiles?.pngFull;
  const onNotificationPress = showNotificationCentre
    ? () => {
        Navigation.push(ROUTES.yuScreen, {
          component: {
            id: ROUTES.notifications,
            name: ROUTES.notifications,
          },
        });
      }
    : undefined;

  return (
    <>
      <YuScreenContext.Provider value={{ earnRate, yumojiRemoteUrl }}>
        <YuScreenV5
          onNotificationPress={onNotificationPress}
          achievements={achievementsList}
          showAchievements={tempGameShowAchievements}
        />
      </YuScreenContext.Provider>
    </>
  );
});

export default YuScreenContainer;
