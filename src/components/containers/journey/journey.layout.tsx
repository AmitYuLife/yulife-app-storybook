import React, { FC, PropsWithChildren } from "react";
import { GenericFullScreenLoading } from "@organisms";
import { Navigation } from "@navigation/main";
import { ROUTES } from "@navigation/constants";
import { GestureHandlerRootView } from "react-native-gesture-handler";

interface JourneyLayoutProps {
  isLoading: boolean;
}

const onLeftIconPress = () => Navigation.pop(ROUTES.journey);

export const JourneyLayout: FC<PropsWithChildren<JourneyLayoutProps>> = ({ isLoading, children }) => {
  if (isLoading) {
    return <GenericFullScreenLoading onLeftIconPress={onLeftIconPress} loadingSize="small" />;
  }

  return <GestureHandlerRootView>{children}</GestureHandlerRootView>;
};
