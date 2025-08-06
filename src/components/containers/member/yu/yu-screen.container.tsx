import React, { useMemo } from "react";
import { memo } from "react";
import { YuScreen as YuScreenV5 } from "./subcomponents/yu-screen-v5/yu-screen";
import { useSelector } from "react-redux";
import { useImagePreload, useQueryOnScreenSeen, useTapBackTwiceToExit } from "@hooks";
import { IMainTabsProps as Props } from "@navigation/root";
import { YuScreenContext } from "./context/yu-screen.context";
import { getUserAvatar, getUserEarnRate, getUserFeatures } from "@redux/user/user.selectors";
import { Navigation } from "@navigation/main";
import { ROUTES } from "@navigation/constants";
import { gql } from "@graphql/__generated";

const YuScreenContainer = memo(({ componentId }: Props) => {
  useTapBackTwiceToExit(componentId);
  const avatar = useSelector(getUserAvatar);
  const earnRate = useSelector(getUserEarnRate);
  const { showNotificationCentre, tempGameShowAchievements } = useSelector(getUserFeatures);

  const [, { data: achievements }] = useQueryOnScreenSeen(
    gql("GetMobileGameUserAchievementsDocument"),
    componentId,
    null,
    {
      disabled: !tempGameShowAchievements,
    }
  );

  const achievementsBackgroundsImages = useMemo(
    () =>
      achievements?.getMobileGameUserAchievements?.achievements.map((achievement) => achievement.backgroundImage.uri),
    [achievements]
  );

  useImagePreload({ images: achievementsBackgroundsImages });

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
          achievement={achievements?.getMobileGameUserAchievements?.equippedAchievements[0]}
          showAchievements={tempGameShowAchievements}
        />
      </YuScreenContext.Provider>
    </>
  );
});

export default YuScreenContainer;
