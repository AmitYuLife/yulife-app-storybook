import React, { memo, useState } from "react";
import { YuScreen } from "./yu-screen";
import { YuScreen as YuScreenLegacy } from "./yu-screen.legacy";
import { YuScreenLayout } from "./yu-screen-layout";
import { YuScreenLoading } from "./yu-screen-loading";
import { useSelector } from "react-redux";
import { useTapBackTwiceToExit } from "@hooks";
import { IMainTabsProps } from "@navigation/root";
import { YUSCREEN_V3 } from "@ids";
import { YuScreenContext } from "./context/yu-screen.context";
import { getUserAvatar, getUserEarnRate, getUserFeatures } from "@redux/user/user.selectors";

type ConnectedState = IMainTabsProps;

const _YuScreenContainer = (props: ConnectedState) => {
  /*
   * useCacheFirstAndNetworkOnAppearQuery shows an undesirable flicker
   * of the cached state before transitioning to loading
   */
  useTapBackTwiceToExit(props.componentId);
  const [popover, setPopover] = useState(null);
  const avatar = useSelector(getUserAvatar);
  const earnRate = useSelector(getUserEarnRate);
  const showV4 = useSelector(getUserFeatures).yuScreenV4dev;

  const yumojiRemoteUrl = avatar.avatarRemoteFiles?.pngFull;

  return (
    <YuScreenContext.Provider value={{ earnRate, yumojiRemoteUrl, popover, setPopover }}>
      <YuScreenLayout testID={YUSCREEN_V3(true)}>
        <YuScreenVersion earnRate={earnRate} showV4={showV4} />
      </YuScreenLayout>
    </YuScreenContext.Provider>
  );
};

interface YuScreenVersionProps {
  earnRate?: number;
  showV4?: boolean;
}

const YuScreenVersion = ({ earnRate, showV4 }: YuScreenVersionProps) => {
  if (earnRate == null) {
    return <YuScreenLoading />;
  }

  if (showV4) {
    return <YuScreen />;
  }

  return <YuScreenLegacy />;
};

const YuScreenContainer = memo(_YuScreenContainer);

export default YuScreenContainer;
