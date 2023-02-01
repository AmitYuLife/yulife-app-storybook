import React, { memo, useState } from "react";
import { YuScreen as YuScreenV4 } from "./subcomponents/yu-screen/yu-screen";
import { useSelector } from "react-redux";
import { useTapBackTwiceToExit } from "@hooks";
import { IMainTabsProps as Props } from "@navigation/root";
import { YuScreenContext } from "./context/yu-screen.context";
import { getUserAvatar, getUserEarnRate } from "@redux/user/user.selectors";

const YuScreenContainer = memo(({ componentId }: Props) => {
  useTapBackTwiceToExit(componentId);
  const [popover, setPopover] = useState(null);
  const avatar = useSelector(getUserAvatar);
  const earnRate = useSelector(getUserEarnRate);

  const yumojiRemoteUrl = avatar.avatarRemoteFiles?.pngFull;

  return (
    <YuScreenContext.Provider value={{ earnRate, yumojiRemoteUrl, popover, setPopover }}>
      <YuScreenV4 componentId={componentId} />
    </YuScreenContext.Provider>
  );
});

export default YuScreenContainer;
