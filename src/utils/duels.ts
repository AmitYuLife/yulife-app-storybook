import { t } from "@locale";

/**
 * Format a duel opponents name
 * If the opponent has been deleted or name is missing, we return a generic name.
 */
export function formatOpponentName(fullName: string) {
  return fullName || t("labels.deleted_user_name");
}
