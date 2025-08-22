import { useEffect, useRef } from "react";
import { useUserFeatures } from "./useUserFeatures";
import { Navigation } from "@navigation/main";
import { ROUTES } from "@navigation/constants";
import { useSelector } from "react-redux";
import { getActiveLevel, getCurrentLevel } from "@redux/levels/levels.selectors";
import { getCurrentDateState } from "@redux/device/device.selectors";

export const usePopToQuestsRootOnNewDate = (levelOnPage: number) => {
  const { enablePopToRootOnDateChange } = useUserFeatures();
  const activeLevel = useSelector(getActiveLevel);
  const currentLevel = useSelector(getCurrentLevel);
  const currentDate = useSelector(getCurrentDateState);
  /**
   * Make sure that we don't pop to root on first render or when dependencies on effect has not changed yet
   */
  const isMounted = useRef(false);

  useEffect(() => {
    const isPageOnDifferentLevel = levelOnPage !== currentLevel;
    const hasNoActiveLevel = !activeLevel?.id;

    if (enablePopToRootOnDateChange && hasNoActiveLevel && isPageOnDifferentLevel && isMounted.current) {
      Navigation.popToRoot(ROUTES.quests);
    }

    isMounted.current = true;
  }, [enablePopToRootOnDateChange, activeLevel?.id, levelOnPage, currentLevel, currentDate]);
};
