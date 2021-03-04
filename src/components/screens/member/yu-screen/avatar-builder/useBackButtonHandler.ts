import { useCallback, useState } from "react";

export const useBackButtonHandler = (cb: () => void) => {
  const [isDoneModalShown, setDoneModalShown] = useState(false);
  const [isBackButtonPressed, setBackPressed] = useState(false);

  const backButtonHandler = useCallback(() => {
    if (!isBackButtonPressed) {
      if (!isDoneModalShown) {
        setBackPressed(true);
        cb();
        return true;
      }

      setDoneModalShown(false);
    }

    setBackPressed(false);
    return false;
  }, [setBackPressed, setDoneModalShown, isBackButtonPressed, isDoneModalShown, cb]);

  return { setDoneModalShown, setBackPressed, backButtonHandler };
};
