import React from "react";
import {
  GetMobileCopy_getMobileCopy_screens_leaderboards_turnBoardOn,
  GetLeaderboard_getLeaderboard,
} from "@graphql/_core/schema";
import { LeaderboardConsentPrompt } from "../leaderboard-consent-prompt/leaderboard-consent-prompt.screen";
import { LeaderboardContentContainer } from "../leaderboard-content/leaderboard-content";

interface ConsentGuardProps {
  setConsent: () => void;
  leaderboardItems: GetLeaderboard_getLeaderboard[];
  currentUserId: string;
  leaderboardName: string;
  hasConsent: boolean;
  consentCopy: GetMobileCopy_getMobileCopy_screens_leaderboards_turnBoardOn;
  onRefetch: () => void;
}

export function ConsentGuard(props: ConsentGuardProps) {
  const { leaderboardName, hasConsent, consentCopy, setConsent } = props;

  if (!hasConsent) {
    return (
      <LeaderboardConsentPrompt setConsent={setConsent} leaderboardName={leaderboardName} consentCopy={consentCopy} />
    );
  }

  const { leaderboardItems = [], currentUserId, onRefetch } = props;

  return (
    <LeaderboardContentContainer
      leaderboardName={leaderboardName}
      leaderboardItems={leaderboardItems}
      currentUserId={currentUserId}
      onRefetch={onRefetch}
    />
  );
}
