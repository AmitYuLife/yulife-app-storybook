import React, { FC, PropsWithChildren, useCallback } from "react";
import { GenericFullScreenLoading } from "@organisms";
import { Navigation } from "@navigation/main";

interface SduiStaticProps {
  isLoading: boolean;
  dynamicId: string;
}

export const SduiStaticLayout: FC<PropsWithChildren<SduiStaticProps>> = ({ isLoading, children, dynamicId }) => {
  const onLeftIconPress = useCallback(() => Navigation.popTo(dynamicId), [dynamicId]);
  if (isLoading) {
    return <GenericFullScreenLoading onLeftIconPress={onLeftIconPress} loadingSize="small" />;
  }

  return <>{children}</>;
};
