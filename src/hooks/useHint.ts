import { Hint } from "@graphql/__generated";
import { cycleHint } from "@redux/hints/hints.actions";
import { getHintsState } from "@redux/hints/hints.selectors";
import { getHint } from "@utils";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

interface IUseHintParams {
  hide?: boolean;
  screen: string;
}

export const useHint = ({ hide, screen }: IUseHintParams) => {
  const hintsState = useSelector(getHintsState);
  const dispatch = useDispatch();
  const [activeHint, setActiveHint] = useState<Partial<Hint> | undefined>();

  useEffect(() => {
    if (activeHint || !hintsState.hints.length || hide) {
      return;
    }

    const hint = getHint({ screen, hintsState });
    if (!hint) {
      return;
    }

    setActiveHint(hint.hint);
    dispatch(cycleHint({ shownHint: hint.hint }));
  }, [activeHint, dispatch, hide, hintsState, screen]);

  if (!activeHint || hide) {
    return null;
  }

  return activeHint;
};
