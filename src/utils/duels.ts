import { t } from "@locale";

/**
 * format a duel opponents name
 *
 * if the opponent has been deleted, we return a generic name
 *
 * if the opponent is missing either firstName or lastName we don't show the space
 */
export function formatOpponentName(opponentName: { firstName: string; lastName: string }) {
  const nameParts = [opponentName?.firstName, opponentName?.lastName].filter((part) => !!part && part?.length > 0);

  if (!nameParts.length) {
    return t("labels.deleted_user_name");
  }

  return nameParts.join(" ");
}
