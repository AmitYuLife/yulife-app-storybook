import { getTimeRemaining } from "@utils";
import * as React from "react";
import { ChallengeUnavailableScreen } from "@screens";
import useInterval from "@use-it/interval";

interface IProps {
  isYuniversalLevel?: boolean;
  nextAvailableAt: string;
  onPressCta: () => void;
}

const ChallengeUnavailableModal = (props: IProps) => {
  const { nextAvailableAt, onPressCta, isYuniversalLevel } = props;
  const [timeRemaining, setTimeRemaining] = React.useState(getTimeRemaining(nextAvailableAt).time);

  useInterval(() => {
    setTimeRemaining(getTimeRemaining(nextAvailableAt).time);
  }, 1000);

  return (
    <ChallengeUnavailableScreen
      timeRemaining={timeRemaining}
      onPressCta={onPressCta}
      isYuniversalLevel={isYuniversalLevel}
    />
  );
};

export default ChallengeUnavailableModal;
