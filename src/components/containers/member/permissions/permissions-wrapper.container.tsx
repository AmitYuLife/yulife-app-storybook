import React, { memo } from "react";
import PermissionsOldContainer from "./permissions-old.container";
import { useUserFeatures } from "@hooks";
import PermissionsContainer from "./permissions.container";

interface IPermissionsProps {
  componentId: string;
}

const PermissionsWrapper = (props: IPermissionsProps) => {
  const { tempGameEnableReleaseYuHealthV4 } = useUserFeatures();

  if (!tempGameEnableReleaseYuHealthV4) {
    return <PermissionsOldContainer {...props} />;
  }

  return <PermissionsContainer {...props} />;
};

export default memo(PermissionsWrapper);
