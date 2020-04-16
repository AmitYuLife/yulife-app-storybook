import * as React from "react";
import { GetMobileCopy_getMobileCopy_screens_challenges_completed } from "../../../graphql/_core/schema";
import { ChallengeCompleteScreen } from "../../screens";

interface IProps {
    onCtaPress: () => void;
    isLoading?: boolean;
    copy: GetMobileCopy_getMobileCopy_screens_challenges_completed;
}

const ChallengeCompleteModal: React.FC<IProps> = ({ onCtaPress, isLoading, copy }) => {
    return <ChallengeCompleteScreen onCtaPress={onCtaPress} isLoading={isLoading} copy={copy} />;
};

export default ChallengeCompleteModal;
