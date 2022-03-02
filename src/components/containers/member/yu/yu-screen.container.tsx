import React, { memo, useState } from "react";
import { YuScreen } from "./yu-screen";
import { YuScreenLayout } from "./yu-screen-layout";
import { YuScreenLoading } from "./yu-screen-loading";
import { useSelector } from "react-redux";
import { getShowYuscreenIntro } from "@redux/onboarding/onboarding.selectors";
import { YuScreenIntro } from "./yu-screen-intro/yu-screen-intro";
import { useTapBackTwiceToExit } from "@services/hooks/useTapBackTwiceToExit";
import { IMainTabsProps } from "@navigation/root";
import { YUSCREEN_V3 } from "@ids";
import { YuScreenContext } from "./context/yu-screen.context";
import { getUserAvatar, getUserEarnRate } from "@redux/user/user.selectors";

type ConnectedState = IMainTabsProps;

const _YuScreenContainer = (props: ConnectedState) => {
  /*
   * useCacheFirstAndNetworkOnAppearQuery shows an undesirable flicker
   * of the cached state before transitioning to loading
   */
  useTapBackTwiceToExit(props.componentId);
  const [popover, setPopover] = useState(null);
  const showIntro = useSelector(getShowYuscreenIntro);
  const avatar = useSelector(getUserAvatar);
  const earnRate = useSelector(getUserEarnRate);

  if (showIntro) {
    return <YuScreenIntro />;
  }

  const yumojiRemoteUrl = avatar.avatarRemoteFiles?.pngFull;

  return (
    <YuScreenContext.Provider value={{ earnRate, yumojiRemoteUrl, popover, setPopover }}>
      <YuScreenLayout testID={YUSCREEN_V3(true)}>{!earnRate ? <YuScreenLoading /> : <YuScreen />}</YuScreenLayout>
    </YuScreenContext.Provider>
  );
};

const YuScreenContainer = memo(_YuScreenContainer);

export default YuScreenContainer;
