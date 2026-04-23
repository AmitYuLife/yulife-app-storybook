import { memo, useState } from "react";
import { getTimeRemaining } from "@utils";
import useInterval from "@use-it/interval";
import { DETOX_ENABLED } from "@services/socket";
import { TextTemplate } from "@atoms";
import { t } from "@locale";

interface Props {
  nextAvailableAt: string;
}

const TIMEOUT = DETOX_ENABLED ? null : 1000;

export const NextAvailableAt = memo(({ nextAvailableAt }: Props) => {
  const [timeRemaining, setTimeRemaining] = useState(getTimeRemaining(nextAvailableAt).time);

  useInterval(() => {
    setTimeRemaining(getTimeRemaining(nextAvailableAt).time);
  }, TIMEOUT);

  return (
    <TextTemplate textAlign="center" type="h2">
      {t("screens.challenge_unavailable_modal.next_available_at", { text: timeRemaining })}
    </TextTemplate>
  );
});
