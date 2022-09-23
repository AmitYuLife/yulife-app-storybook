import React, { memo, useState } from "react";
import { YuScreen as YuScreenV4 } from "./subcomponents/yu-screen/yu-screen";
import { YuScreen as YuScreenLegacy } from "./legacy/yu-screen.legacy";
import { useSelector } from "react-redux";
import { useTapBackTwiceToExit } from "@hooks";
import { IMainTabsProps as Props } from "@navigation/root";
import { YuScreenContext } from "./context/yu-screen.context";
import { getUserAvatar, getUserEarnRate, getUserFeatures } from "@redux/user/user.selectors";

const YuScreenContainer = memo(({ componentId }: Props) => {
  useTapBackTwiceToExit(componentId);
  const [popover, setPopover] = useState(null);
  const avatar = useSelector(getUserAvatar);
  const earnRate = useSelector(getUserEarnRate);
  const { yuScreenV4: showV4 } = useSelector(getUserFeatures);

  const yumojiRemoteUrl = avatar.avatarRemoteFiles?.pngFull;

  return (
    <YuScreenContext.Provider value={{ earnRate, yumojiRemoteUrl, popover, setPopover }}>
      {showV4 ? <YuScreenV4 componentId={componentId} /> : <YuScreenLegacy />}
    </YuScreenContext.Provider>
  );
});

export default YuScreenContainer;
