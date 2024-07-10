import React, { memo, useEffect, useMemo, useState } from "react";
import { YuScreen as YuScreenV4 } from "./subcomponents/yu-screen/yu-screen";
import { YuScreen as YuScreenV5 } from "./subcomponents/yu-screen-v5/yu-screen";
import { useSelector } from "react-redux";
import { useTapBackTwiceToExit } from "@hooks";
import { IMainTabsProps as Props } from "@navigation/root";
import { YuScreenContext } from "./context/yu-screen.context";
import { getUserAvatar, getUserEarnRate, getUserFeatures } from "@redux/user/user.selectors";
import { DevVersionSelector } from "@organisms";

const VERSIONS_AVAILABLE = ["4", "5"];
const YU_SCREEN_V5_TOGGLE = "tempEnableYuScreenV5";

const YuScreenContainer = memo(({ componentId }: Props) => {
  useTapBackTwiceToExit(componentId);
  const avatar = useSelector(getUserAvatar);
  const earnRate = useSelector(getUserEarnRate);
  const features = useSelector(getUserFeatures);
  const [version, setVersion] = useState("4");

  const yumojiRemoteUrl = avatar.avatarRemoteFiles?.pngFull;

  useEffect(() => {
    setVersion(features[YU_SCREEN_V5_TOGGLE] ? "5" : "4");
  }, [features]);

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
        feature={YU_SCREEN_V5_TOGGLE}
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
