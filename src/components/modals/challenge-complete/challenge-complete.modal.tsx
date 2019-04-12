import * as React from "react";
import { ChallengeCompleteScreen } from "../../screens";

interface IProps {
    onCtaPress: () => void;
    isLoading?: boolean;
}

function ChallengeCompleteModal({ onCtaPress, isLoading }: IProps) {
    return <ChallengeCompleteScreen onCtaPress={onCtaPress} isLoading={isLoading} />;
}

export default ChallengeCompleteModal;
