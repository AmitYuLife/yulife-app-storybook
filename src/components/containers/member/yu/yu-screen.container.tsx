import { memo } from "react";
import { YuScreen as YuScreenV4 } from "./subcomponents/yu-screen/yu-screen";
import { YuScreen as YuScreenV5 } from "./subcomponents/yu-screen-v5/yu-screen";
import { useSelector } from "react-redux";
import { useTapBackTwiceToExit } from "@hooks";
import { IMainTabsProps as Props } from "@navigation/root";
import { YuScreenContext } from "./context/yu-screen.context";
import { getUserAvatar, getUserEarnRate, getUserFeatures } from "@redux/user/user.selectors";
import { Navigation } from "@navigation/main";
import { ROUTES } from "@navigation/constants";

const YuScreenContainer = memo(({ componentId }: Props) => {
  useTapBackTwiceToExit(componentId);
  const avatar = useSelector(getUserAvatar);
  const earnRate = useSelector(getUserEarnRate);
  const { enableYuScreenV5, showNotificationCentre } = useSelector(getUserFeatures);

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
        {enableYuScreenV5 ? (
          <YuScreenV5 onNotificationPress={onNotificationPress} />
        ) : (
          <YuScreenV4 onNotificationPress={onNotificationPress} componentId={componentId} />
        )}
      </YuScreenContext.Provider>
    </>
  );
});

export default YuScreenContainer;
