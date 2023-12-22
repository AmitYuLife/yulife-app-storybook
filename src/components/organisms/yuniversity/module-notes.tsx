import React, { memo, useCallback } from "react";
import Module, { IModule } from "@components/molecules/yuniversity/module";
import { handleLinkPress } from "@services/app-link";

type IProps = Omit<IModule, "onPress"> & { uri?: string; trackEvent: () => void };

const ModuleNotes = ({ uri, trackEvent, ...props }: IProps) => {
  const onPress = useCallback(() => {
    trackEvent();
    handleLinkPress(uri)();
  }, [uri, trackEvent]);

  return <Module {...props} onPress={onPress} />;
};

export default memo(ModuleNotes);
