import React, { FC, memo, useContext } from "react";
import { NameAndLevel } from "@components/molecules";
import { YuScreenLayout } from "./yu-screen-layout";
import { YuScreenSkeleton } from "./yu-screen-skeleton";
import { YuScreenContext } from "../../context/yu-screen.context";
import { useQueryOnScreenSeenOnce } from "@hooks";
import { ROUTES } from "@navigation/constants";
import { gql } from "@graphql/__generated";
import { YumojiAvatar } from "./yumoji-avatar";

interface Props {
  componentId: string;
}

export const YuScreen: FC<Props> = memo(() => {
  const [, { data }] = useQueryOnScreenSeenOnce(gql("GetYuScreenV5Document"), ROUTES.yuScreen, {
    fetchPolicy: "network-only",
  });

  const { earnRate } = useContext(YuScreenContext);

  if (!data?.getYuScreenV5 || earnRate === null) {
    return (
      <YuScreenLayout>
        <YuScreenSkeleton />
      </YuScreenLayout>
    );
  }

  return (
    <YuScreenLayout>
      <NameAndLevel useWorldColor={true} hideWorldIcon={true} />
      <YumojiAvatar />
    </YuScreenLayout>
  );
});
