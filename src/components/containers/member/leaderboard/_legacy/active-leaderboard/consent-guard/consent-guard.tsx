import React, { FC, memo, ReactComponentElement } from "react";
import { LeaderboardConsentPrompt } from "../leaderboard-consent-prompt/leaderboard-consent-prompt.screen";

interface ConsentGuardProps {
  setConsent: () => void;
  currentUserId: string;
  hasConsent: boolean;
  children: ReactComponentElement<any>;
}

const ConsentGuard: FC<ConsentGuardProps> = ({ hasConsent, setConsent, children }: ConsentGuardProps) => {
  if (!hasConsent) {
    return <LeaderboardConsentPrompt setConsent={setConsent} />;
  }

  return children;
};

export default memo(ConsentGuard);
