import { t } from "@locale";
import { useMemo } from "react";

export type ButtonTranslationProps<T> = T & {
  /** should be a valid key used for t() */
  translationKey: string;
  /** arguments needed for t() */
  translationArgs?: unknown;
};

export type ButtonLabelProps<T> = T & {
  testID: string;
  /** @deprecated SHOULD ONLY BE USED FOR BACKEND COPY */
  translatedLabel: string;
};

type Props = Partial<
  Pick<ButtonTranslationProps<unknown>, "translationKey" | "translationArgs"> &
    Pick<ButtonLabelProps<unknown>, "translatedLabel" | "testID">
>;

export const useButtonTitle = ({ translationArgs, translationKey, translatedLabel, testID }: Props) => {
  return useMemo(
    () => ({
      title: translationKey ? t(translationKey, translationArgs) : translatedLabel,
      testID: testID || translationKey,
    }),
    [translatedLabel, translationKey, translationArgs, testID]
  );
};
