import React, { memo } from "react";
import PermissionsOldContainer from "./permissions-old.container";

interface IPermissionsProps {
  componentId: string;
}

const PermissionsWrapper = (props: IPermissionsProps) => {
  // TODO: Add new permissions container under toggle tempGameEnableYuHealth

  return <PermissionsOldContainer {...props} />;
};

export default memo(PermissionsWrapper);
