import React, { memo } from "react";
import { YuScreen as YuScreenV4 } from "./subcomponents/yu-screen/yu-screen";
import { YuScreen as YuScreenV5 } from "./subcomponents/yu-screen-v5/yu-screen";
import { useSelector } from "react-redux";
import { useTapBackTwiceToExit } from "@hooks";
import { IMainTabsProps as Props } from "@navigation/root";
import { YuScreenContext } from "./context/yu-screen.context";
import { getUserAvatar, getUserEarnRate, getUserFeatures } from "@redux/user/user.selectors";

const YuScreenContainer = memo(({ componentId }: Props) => {
  useTapBackTwiceToExit(componentId);
  const avatar = useSelector(getUserAvatar);
  const earnRate = useSelector(getUserEarnRate);
  const { tempEnableYuScreenV5 } = useSelector(getUserFeatures);

  const yumojiRemoteUrl = avatar.avatarRemoteFiles?.pngFull;

  return (
    <>
      <YuScreenContext.Provider value={{ earnRate, yumojiRemoteUrl }}>
        {tempEnableYuScreenV5 ? <YuScreenV5 componentId={componentId} /> : <YuScreenV4 componentId={componentId} />}
      </YuScreenContext.Provider>
    </>
  );
});

export default YuScreenContainer;
