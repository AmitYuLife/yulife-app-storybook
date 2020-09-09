import React, { FC, memo, ReactComponentElement } from "react";
import { GetMobileCopy_getMobileCopy_screens_leaderboards_turnBoardOn } from "@graphql/_core/schema";
import { LeaderboardConsentPrompt } from "../leaderboard-consent-prompt/leaderboard-consent-prompt.screen";

interface ConsentGuardProps {
  setConsent: () => void;
  currentUserId: string;
  leaderboardName: string;
  hasConsent: boolean;
  consentCopy: GetMobileCopy_getMobileCopy_screens_leaderboards_turnBoardOn;
  children: ReactComponentElement<any>;
}

const ConsentGuard: FC<ConsentGuardProps> = ({
  leaderboardName,
  hasConsent,
  consentCopy,
  setConsent,
  children,
}: ConsentGuardProps) => {
  if (!hasConsent) {
    return (
      <LeaderboardConsentPrompt setConsent={setConsent} leaderboardName={leaderboardName} consentCopy={consentCopy} />
    );
  }

  return children;
};

export default memo(ConsentGuard);
