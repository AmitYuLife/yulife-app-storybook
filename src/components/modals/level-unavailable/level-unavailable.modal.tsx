import * as React from "react";
import { LevelLockedScreen } from "@screens";

type Props = React.ComponentProps<typeof LevelLockedScreen>;

/**
 * @deprecated by src/components/screens/member/quests/quests-scroll-screen/quest-detail-modal
 */
const LevelUnavailable = (props: Props) => {
  return <LevelLockedScreen {...props} />;
};

export default LevelUnavailable;
