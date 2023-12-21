import { memo, useState } from "react";
import { getTimeRemaining } from "@utils";
import useInterval from "@use-it/interval";
import { TextTemplate } from "@atoms";
import { t } from "@locale";

interface Props {
  nextAvailableAt: string;
}

export const NextAvailableAt = memo(({ nextAvailableAt }: Props) => {
  const [timeRemaining, setTimeRemaining] = useState(getTimeRemaining(nextAvailableAt).time);

  useInterval(() => {
    setTimeRemaining(getTimeRemaining(nextAvailableAt).time);
  }, 1000);

  return (
    <TextTemplate textAlign="center" type="h2">
      {t("screens.challenge_unavailable_modal.next_available_at", { text: timeRemaining })}
    </TextTemplate>
  );
});
