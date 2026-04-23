import { getTimeRemaining } from "@utils";
import * as React from "react";
import { ChallengeUnavailableScreen } from "@screens";
import useInterval from "@use-it/interval";
import { DETOX_ENABLED } from "@services/socket";

interface IProps {
  isYuniversalLevel?: boolean;
  nextAvailableAt: string;
  onPressCta: () => void;
}

const TIMEOUT = DETOX_ENABLED ? null : 1000;

const ChallengeUnavailableModal = (props: IProps) => {
  const { nextAvailableAt, onPressCta, isYuniversalLevel } = props;
  const [timeRemaining, setTimeRemaining] = React.useState(getTimeRemaining(nextAvailableAt).time);

  useInterval(() => {
    setTimeRemaining(getTimeRemaining(nextAvailableAt).time);
  }, TIMEOUT);

  return (
    <ChallengeUnavailableScreen
      timeRemaining={timeRemaining}
      onPressCta={onPressCta}
      isYuniversalLevel={isYuniversalLevel}
    />
  );
};

export default ChallengeUnavailableModal;
