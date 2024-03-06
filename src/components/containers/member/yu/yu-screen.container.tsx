import React, { memo, useMemo, useState } from "react";
import { YuScreen as YuScreenV4 } from "./subcomponents/yu-screen/yu-screen";
import { YuScreen as YuScreenV5 } from "./subcomponents/yu-screen-v5/yu-screen";
import { useSelector } from "react-redux";
import { useTapBackTwiceToExit } from "@hooks";
import { IMainTabsProps as Props } from "@navigation/root";
import { YuScreenContext } from "./context/yu-screen.context";
import { getUserAvatar, getUserEarnRate } from "@redux/user/user.selectors";
import {
  YuScreenVersion,
  YuScreenVersionSelector,
} from "./subcomponents/yu-screen-version-selector/yu-screen-version-selector";

const YuScreenContainer = memo(({ componentId }: Props) => {
  useTapBackTwiceToExit(componentId);
  const avatar = useSelector(getUserAvatar);
  const earnRate = useSelector(getUserEarnRate);
  const [version, setVersion] = useState<YuScreenVersion>("4");

  const yumojiRemoteUrl = avatar.avatarRemoteFiles?.pngFull;

  const YuScreen = useMemo(() => {
    switch (version) {
      case "5a":
        return YuScreenV5;
      case "4":
      default:
        return YuScreenV4;
    }
  }, [version]);

  return (
    <>
      <YuScreenContext.Provider value={{ earnRate, yumojiRemoteUrl }}>
        <YuScreen componentId={componentId} />
      </YuScreenContext.Provider>
      <YuScreenVersionSelector version={version} setVersion={setVersion} />
    </>
  );
});

export default YuScreenContainer;
