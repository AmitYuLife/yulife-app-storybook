import React, { memo, useCallback, useState } from "react";
import { View } from "react-native";
import { useDispatch } from "react-redux";
import moment from "moment";
import { GenericHeadingAbsolute, GenericHeadingPad } from "@organisms";
import { styles } from "./smoking-streak-lapsed.styles";
import { updateSmokingStreak } from "@redux/health-smoking/health-smoking.actions";
import { HealthSmokingState } from "@redux/health-smoking/health-smoking.types";
import { VoidFunction, getDaysBetweenDates } from "@utils";
import { SmokingStreakLapsedPage1 } from "./page-1";
import { SmokingStreakLapsedPage2 } from "./page-2";

interface ISmokingStreakLapsedProps {
  smokingState: HealthSmokingState;
  onClose: VoidFunction;
  onSubmit: VoidFunction;
}

const SmokingStreakLapsed = ({ smokingState, onClose, onSubmit }: ISmokingStreakLapsedProps) => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);

  const onLeftIconPress = page === 1 ? null : () => setPage(1);

  const handleFirstButtonPress = useCallback(() => {
    const now = moment().format();
    const daysSinceLastUpdate = getDaysBetweenDates(smokingState?.lastStreakUpdate, now);

    if (daysSinceLastUpdate > 1) {
      setPage(2);
      return;
    }

    dispatch(updateSmokingStreak({ failed: true }));
    onSubmit();
  }, [smokingState]);

  const handleSecondButtonPress = useCallback((date: string) => {
    dispatch(updateSmokingStreak({ failed: true, failDate: date }));
    onClose();
  }, []);

  if (!smokingState) {
    return null;
  }

  return (
    <View style={styles.wrapper}>
      <GenericHeadingPad />
      {page === 1 ? (
        <SmokingStreakLapsedPage1 smokingState={smokingState} onSubmit={handleFirstButtonPress} />
      ) : (
        <SmokingStreakLapsedPage2 smokingState={smokingState} onSubmit={handleSecondButtonPress} />
      )}
      <GenericHeadingAbsolute
        logo="yulife"
        onRightIconPress={onClose}
        rightIcon="CLOSE"
        onLeftIconPress={onLeftIconPress}
      />
    </View>
  );
};

export default memo(SmokingStreakLapsed);
