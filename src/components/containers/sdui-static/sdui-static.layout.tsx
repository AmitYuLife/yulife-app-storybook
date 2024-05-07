import React, { FC, PropsWithChildren, useCallback } from "react";
import { GenericFullScreenLoading } from "@organisms";
import { Navigation } from "@navigation/main";

interface SduiStaticProps {
  isLoading: boolean;
  componentId: string;
}

export const SduiStaticLayout: FC<PropsWithChildren<SduiStaticProps>> = ({ isLoading, children, componentId }) => {
  const onLeftIconPress = useCallback(() => Navigation.pop(componentId), [componentId]);

  if (isLoading) {
    return <GenericFullScreenLoading onLeftIconPress={onLeftIconPress} loadingSize="small" />;
  }

  return <>{children}</>;
};
