import React, { memo, useMemo, useState } from "react";
import { YuScreen as YuScreenV4 } from "./subcomponents/yu-screen/yu-screen";
import { YuScreen as YuScreenV5 } from "./subcomponents/yu-screen-v5/yu-screen";
import { useSelector } from "react-redux";
import { useTapBackTwiceToExit } from "@hooks";
import { IMainTabsProps as Props } from "@navigation/root";
import { YuScreenContext } from "./context/yu-screen.context";
import { getUserAvatar, getUserEarnRate } from "@redux/user/user.selectors";
import { DevVersionSelector } from "@organisms";

const VERSIONS_AVAILABLE = ["4", "5"];

const YuScreenContainer = memo(({ componentId }: Props) => {
  useTapBackTwiceToExit(componentId);
  const avatar = useSelector(getUserAvatar);
  const earnRate = useSelector(getUserEarnRate);
  const [version, setVersion] = useState("4");

  const yumojiRemoteUrl = avatar.avatarRemoteFiles?.pngFull;

  const YuScreen = useMemo(() => {
    switch (version) {
      case "5":
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
      <DevVersionSelector
        feature="tempEnableYuScreenV5"
        marginTop={300}
        version={version}
        setVersion={setVersion}
        defaultVersion="4"
        options={VERSIONS_AVAILABLE}
        optionsPrefix="v"
        textTemplateType="b2b"
      />
    </>
  );
});

export default YuScreenContainer;
