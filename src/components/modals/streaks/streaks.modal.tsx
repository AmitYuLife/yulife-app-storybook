import { useMutation } from "@apollo/client";
import { GQL_MUTATION_COLLECT_AWARD, CollectAwardMutationTuple } from "@graphql/member";
import { getTimeRemaining } from "@utils";
import React, { useMemo, useState, useEffect } from "react";
import { connect } from "react-redux";
import { IReduxState } from "@redux/_core/reducers";
import { getStreakAwardId } from "@redux/streaks/streaks.selectors";
import { getUserStart } from "@redux/user/user.actions";
import { StreaksScreen } from "@screens";
import { useBackHandler } from "@hooks";
import { Navigation } from "@navigation/main";
import { IStreakCopy, streakCopy } from "./copy";

type ConnectedState = ReturnType<typeof mapStateToProps>;
type ConnectedDispatch = typeof mapDispatchToProps;

interface IProps {
  componentId: string;
  isDoneToday: boolean;
  onPressCtaPrimary: () => void;
  reward: string;
  onPressCtaSecondary: (() => void) | null;
  streakCompleted: number;
  streakMax: number;
  nextStreakAvailableAt: string;
  type: string;
}

type Props = IProps & ConnectedDispatch & ConnectedState;

const getStreakCompleted = ({
  streakAwardId,
  streakCompleted,
  streakMax,
}: Pick<Props, "streakAwardId" | "streakCompleted" | "streakMax">) => {
  // If there is an award, it must be for a full streak, so display
  // the full streak even if it is not full right now
  return streakAwardId ? streakMax : streakCompleted;
};

const getLabelCtaPrimary = ({
  streakMax,
  isDoneToday,
  streakAwardId,
  streakCompleted,
  copy,
}: Pick<Props, "isDoneToday" | "streakCompleted" | "streakMax" | "streakAwardId"> & { copy: IStreakCopy }) => {
  const { ctaLabelDone, ctaLabelCollect, ctaLabelTakeChallenge } = copy;
  if (getStreakCompleted({ streakAwardId, streakCompleted, streakMax }) === streakMax) {
    if (!streakAwardId) {
      return ctaLabelDone;
    }

    return ctaLabelCollect;
  }

  if (isDoneToday) {
    return ctaLabelDone;
  }

  return ctaLabelTakeChallenge;
};

const getSubHeading = ({
  isDoneToday,
  streakMax,
  streakAwardId,
  streakCompleted,
  copy,
}: Pick<Props, "streakCompleted" | "isDoneToday" | "streakMax" | "streakAwardId"> & { copy: IStreakCopy }) => {
  const { subheadingCollected, subheadingCompleted, subheadingTodayStreakDone } = copy;
  if (getStreakCompleted({ streakAwardId, streakCompleted, streakMax }) === streakMax) {
    if (!streakAwardId) {
      return subheadingCollected;
    }

    return subheadingCompleted;
  }

  if (isDoneToday) {
    return subheadingTodayStreakDone;
  }

  const streakNumber = streakMax - streakCompleted;

  return getSubHeadingInstructions(streakCompleted, streakNumber, copy);
};

const getSubHeadingInstructions = (streakCompleted: number, streakNumber: number, copy: IStreakCopy) => {
  if (streakCompleted === 0) {
    return copy.subheadingInstructionsFirstDay;
  }

  if (streakNumber === 1) {
    return copy.subheadingInstructionsToday;
  }

  return copy.subheadingInstructions;
};

const getHeading = ({
  isDoneToday,
  streakMax,
  streakAwardId,
  streakCompleted,
  copy,
}: Pick<Props, "streakAwardId" | "isDoneToday" | "streakMax" | "streakCompleted"> & { copy: IStreakCopy }) => {
  if (getStreakCompleted({ streakAwardId, streakCompleted, streakMax }) === streakMax) {
    return copy.headingCompleted;
  }

  if (isDoneToday) {
    return copy.headingCompletedTodayStreak;
  }

  return copy.headingStartStreakDay;
};

const StreaksModal: React.FC<Props> = ({
  componentId,
  onPressCtaPrimary,
  onPressCtaSecondary,
  streakAwardId,
  streakCompleted,
  isDoneToday,
  streakMax,
  nextStreakAvailableAt,
  reward,
  type,
  getUserStart: dispatchGetUserStart,
}) => {
  const [isLoading, setLoading] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(getTimeRemaining(nextStreakAvailableAt, "medium"));

  useBackHandler(() => {
    if (onPressCtaSecondary) {
      onPressCtaSecondary();
      return true;
    }

    return false;
  });

  const handleClose = () => {
    Navigation.dismissModal(componentId);
  };

  useEffect(() => {
    if (streakMax === streakCompleted && !streakAwardId) {
      const callback = () => {
        setTimeRemaining(getTimeRemaining(nextStreakAvailableAt, "medium"));
        timer = setTimeout(callback, 1000);
      };

      let timer = setTimeout(callback, 1000);

      return () => {
        clearTimeout(timer);
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [collectAward]: CollectAwardMutationTuple = useMutation(GQL_MUTATION_COLLECT_AWARD);

  const onSubmit = streakAwardId
    ? async () => {
        try {
          setLoading(true);
          const result = await collectAward({
            variables: {
              awardId: streakAwardId,
            },
          });

          if (result && result.data && result.data.collectAward) {
            dispatchGetUserStart();
          }

          onPressCtaPrimary();
        } catch (e) {
          onPressCtaPrimary();
        } finally {
          setLoading(false);
        }
      }
    : onPressCtaPrimary;

  const copy = useMemo(() => {
    const remainingStreak = (streakMax - streakCompleted).toString();
    const streakType = type === "yucoin" ? "YuCoin" : type;
    return streakCopy(remainingStreak, reward, streakType);
  }, [streakMax, streakCompleted, type]);

  return (
    <StreaksScreen
      heading={getHeading({ isDoneToday, streakMax, streakAwardId, streakCompleted, copy })}
      subHeading={getSubHeading({ isDoneToday, streakMax, streakAwardId, streakCompleted, copy })}
      ribbonLabel={`${reward} ${type === "yucoin" ? "YuCoin" : "Voucher"}`}
      primaryButtonLabel={getLabelCtaPrimary({
        streakMax,
        isDoneToday,
        streakAwardId,
        streakCompleted,
        copy,
      })}
      streakAwardId={streakAwardId}
      streakCompleted={getStreakCompleted({ streakAwardId, streakCompleted, streakMax })}
      streakMax={streakMax}
      onSubmit={onSubmit}
      reward={reward}
      isLoading={isLoading}
      onPressCtaSecondary={onPressCtaSecondary}
      onClose={handleClose}
      timeRemaining={timeRemaining.time}
      accessibilityTimeRemaining={timeRemaining.accessibility}
    />
  );
};

const mapStateToProps = (state: IReduxState) => ({
  streakAwardId: getStreakAwardId(state),
});

const mapDispatchToProps = {
  getUserStart,
};

export default connect<ConnectedState, ConnectedDispatch>(mapStateToProps, mapDispatchToProps)(StreaksModal);
