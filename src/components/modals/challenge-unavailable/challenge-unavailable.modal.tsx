import { getTimeRemaining } from "@utils";
import * as React from "react";
import { ChallengeUnavailableScreen } from "@screens";
import useInterval from "@use-it/interval";

interface IProps {
  nextAvailableAt: string;
  onPressCta: () => void;
}

function ChallengeUnavailableModal(props: IProps) {
  const { nextAvailableAt, onPressCta } = props;
  const [timeRemaining, setTimeRemaining] = React.useState(getTimeRemaining(nextAvailableAt));

  useInterval(() => {
    setTimeRemaining(getTimeRemaining(nextAvailableAt));
  }, 1000);

  return <ChallengeUnavailableScreen timeRemaining={timeRemaining} onPressCta={onPressCta} />;
}

export default ChallengeUnavailableModal;
