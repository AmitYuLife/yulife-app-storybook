import { useMutation } from "@apollo/react-hooks";
import { GQL_MUTATION_COLLECT_AWARD, CollectAwardMutationTuple } from "@graphql/member";
import { getTimeRemaining } from "@utils";
import * as React from "react";
import { connect } from "react-redux";
import { IReduxState } from "@redux/_core/reducers";
import { getStreakAwardId } from "@redux/streaks/streaks.selectors";
import { getUserStart } from "@redux/user/user.actions";
import { StreaksScreen } from "@screens";
import { useBackHandler } from "@services/hooks/useBackHandler";
import { Navigation } from "react-native-navigation";
import { streakCopy } from "./copy";

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
  reward,
  streakAwardId,
  streakCompleted,
  type,
}: Pick<Props, "isDoneToday" | "streakCompleted" | "streakMax" | "reward" | "streakAwardId" | "type">) => {
  if (getStreakCompleted({ streakAwardId, streakCompleted, streakMax }) === streakMax) {
    if (!streakAwardId) {
      return streakCopy.ctaLabelDone;
    }

    return streakCopy.ctaLabelCollect
      .replace("${reward}", reward)
      .replace("${type}", type === "yucoin" ? "YuCoin" : type);
  }

  if (isDoneToday) {
    return streakCopy.ctaLabelDone;
  }

  return streakCopy.ctaLabelTakeChallenge;
};

const getSubHeading = ({
  isDoneToday,
  streakMax,
  reward,
  streakAwardId,
  streakCompleted,
}: Pick<Props, "streakCompleted" | "isDoneToday" | "streakMax" | "reward" | "streakAwardId">) => {
  if (getStreakCompleted({ streakAwardId, streakCompleted, streakMax }) === streakMax) {
    if (!streakAwardId) {
      return streakCopy.subheadingCollected;
    }

    return streakCopy.subheadingCompleted;
  }

  if (isDoneToday) {
    return streakCopy.subheadingTodayStreakDone;
  }

  const streakNumber = streakMax - streakCompleted;

  return getSubHeadingInstructions(streakCompleted, streakNumber)
    .replace("${streakMax}", streakNumber.toString())
    .replace("${reward}", reward);
};

const getSubHeadingInstructions = (streakCompleted: number, streakNumber: number) => {
  if (streakCompleted === 0) {
    return streakCopy.subheadingInstructionsFirstDay;
  }

  if (streakNumber === 1) {
    return streakCopy.subheadingInstructionsToday;
  }

  return streakCopy.subheadingInstructions;
};

const getHeading = ({
  isDoneToday,
  streakMax,
  streakAwardId,
  streakCompleted,
}: Pick<Props, "streakAwardId" | "isDoneToday" | "streakMax" | "streakCompleted">) => {
  if (getStreakCompleted({ streakAwardId, streakCompleted, streakMax }) === streakMax) {
    return streakCopy.headingCompleted;
  }

  if (isDoneToday) {
    return streakCopy.headingCompletedTodayStreak;
  }

  return streakCopy.headingStartStreakDay;
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
  const [isLoading, setLoading] = React.useState(false);
  const [timeRemaining, setTimeRemaining] = React.useState(getTimeRemaining(nextStreakAvailableAt, "short"));

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

  React.useEffect(() => {
    if (streakMax === streakCompleted && !streakAwardId) {
      const callback = () => {
        setTimeRemaining(getTimeRemaining(nextStreakAvailableAt, "short"));
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

  return (
    <StreaksScreen
      heading={getHeading({ isDoneToday, streakMax, streakAwardId, streakCompleted })}
      subHeading={getSubHeading({ isDoneToday, streakMax, reward, streakAwardId, streakCompleted })}
      ribbonLabel={`${reward} ${type === "yucoin" ? "YuCoin" : "Voucher"}`}
      primaryButtonLabel={getLabelCtaPrimary({
        streakMax,
        isDoneToday,
        reward,
        streakAwardId,
        streakCompleted,
        type,
      })}
      streakAwardId={streakAwardId}
      streakCompleted={getStreakCompleted({ streakAwardId, streakCompleted, streakMax })}
      streakMax={streakMax}
      onSubmit={onSubmit}
      reward={reward}
      isLoading={isLoading}
      onPressCtaSecondary={onPressCtaSecondary}
      onClose={handleClose}
      timeRemaining={timeRemaining}
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
