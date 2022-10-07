import * as React from "react";
import { LevelLockedScreen } from "@screens";

type Props = React.ComponentProps<typeof LevelLockedScreen>;

export default function LevelUnavailable(props: Props) {
  return <LevelLockedScreen {...props} />;
}
