import React, { memo } from "react";
import PermissionsOldContainer from "./permissions-old.container";
import { useUserFeatures } from "@hooks";
import PermissionsContainer from "./permissions.container";

interface IPermissionsProps {
  componentId: string;
}

const PermissionsWrapper = (props: IPermissionsProps) => {
  const { tempGameEnableReleaseYuHealthV2 } = useUserFeatures();

  if (!tempGameEnableReleaseYuHealthV2) {
    return <PermissionsOldContainer {...props} />;
  }

  return <PermissionsContainer {...props} />;
};

export default memo(PermissionsWrapper);
