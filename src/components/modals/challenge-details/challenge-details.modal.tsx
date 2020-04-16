import * as React from "react";
import { ChallengeDetailsScreen } from "../../screens";
import { IMilestoneProps } from "../../screens/member/challenges/challenge-details/milestones";

interface IOwnProps {
    challengeType: string;
    currentWorld?: number;
    duration: string;
    isLoading?: boolean;
    error?: string;
    onPressClose: () => void;
    onPressCta: () => void;
    onPressSetUp?: () => void;
}

type Props = IOwnProps & IMilestoneProps;

const ChallengeDetailsModal: React.FC<Props> = (props) => {
    return <ChallengeDetailsScreen {...props} />;
};

export default ChallengeDetailsModal;
