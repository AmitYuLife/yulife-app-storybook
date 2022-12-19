import React, { FC, memo, ReactComponentElement } from "react";
import { LeaderboardConsentPrompt } from "../leaderboard-consent-prompt/leaderboard-consent-prompt.screen";

interface ConsentGuardProps {
  setConsent: () => void;
  currentUserId: string;
  leaderboardName: string;
  hasConsent: boolean;
  children: ReactComponentElement<any>;
}

const ConsentGuard: FC<ConsentGuardProps> = ({
  leaderboardName,
  hasConsent,
  setConsent,
  children,
}: ConsentGuardProps) => {
  if (!hasConsent) {
    return <LeaderboardConsentPrompt setConsent={setConsent} leaderboardName={leaderboardName} />;
  }

  return children;
};

export default memo(ConsentGuard);
