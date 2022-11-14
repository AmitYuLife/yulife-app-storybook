import React, { memo, useCallback } from "react";
import Module, { IModule } from "@components/molecules/yuniversity/module";
import { handleLinkPress } from "@services/app-link";

type IProps = Omit<IModule, "onPress"> & { uri: string };

const ModuleNotes = ({ uri, ...props }: IProps) => {
  const onPress = useCallback(() => {
    handleLinkPress(uri)();
  }, [uri]);

  return <Module {...props} onPress={onPress} />;
};

export default memo(ModuleNotes);
