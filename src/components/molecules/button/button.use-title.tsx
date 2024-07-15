import { t } from "@locale";
import { useMemo } from "react";

export type ButtonTranslationProps<T> = T & {
  /** should be a valid key used for t() */
  translationKey: string;
  /** arguments needed for t() */
  translationArgs?: unknown;
};

export type ButtonLabelProps<T> = T & {
  /** @deprecated SHOULD ONLY BE USED FOR BACKEND COPY */
  testID: string;
  translatedLabel: string;
};

type Props = Partial<
  Pick<ButtonTranslationProps<unknown>, "translationKey" | "translationArgs"> &
    Pick<ButtonLabelProps<unknown>, "translatedLabel">
>;

export const useButtonTitle = ({ translationArgs, translationKey, translatedLabel }: Props) => {
  const title = useMemo(
    () => (translationKey ? t(translationKey, translationArgs) : translatedLabel),
    [translatedLabel, translationKey, translationArgs]
  );

  return title;
};
