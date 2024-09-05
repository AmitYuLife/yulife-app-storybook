import { getHealthSmokingState } from "@redux/health-smoking/health-smoking.selectors";
import { useEffect } from "react";
import { Alert } from "react-native";
import { useSelector } from "react-redux";
import { useCachedSmokingState } from "./useCachedSmokingState";
import { useDispatch } from "react-redux";
import { getUserDataStart } from "@redux/user/user.actions";
import { AppDataType } from "@redux/user/user.types";

export function useNotificationForAutoClaimedYuCoin() {
  const smokingState = useSelector(getHealthSmokingState);
  const { isUsingCachedSmokingState } = useCachedSmokingState();
  const dispatch = useDispatch();

  useEffect(() => {
    if (isUsingCachedSmokingState || !smokingState.autoClaimedStreakDaysCopy) {
      return;
    }

    Alert.alert(smokingState.autoClaimedStreakDaysCopy);
    dispatch(getUserDataStart({ types: [AppDataType.coinLedger, AppDataType.todayActivity] }));
  }, [smokingState.autoClaimedStreakDaysCopy]);
}
