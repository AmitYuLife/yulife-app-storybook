import { useMutation } from "@apollo/react-hooks";
import { GQL_MUTATION_COLLECT_AWARD, CollectAwardMutationTuple } from "@graphql/member";
import { getTimeRemaining } from "@services/utils";
import * as React from "react";
import { connect } from "react-redux";
import { IReduxState } from "../../../redux/_core/reducers";
import { getCopy } from "../../../redux/copy/copy.selectors";
import { getStreakAwardId } from "../../../redux/streaks/streaks.selectors";
import { getUserStart } from "../../../redux/user/user.actions";
import { StreaksScreen } from "../../screens";

type ConnectedState = ReturnType<typeof mapStateToProps>;
type ConnectedDispatch = typeof mapDispatchToProps;

interface IProps {
  isDoneToday: boolean;
  onPressCtaPrimary: () => void;
  reward: string;
  onPressCtaSecondary: (() => void) | null;
  streakCompleted: number;
  streakMax: number;
  nextStreakAvailableAt: string;
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
  copy,
  streakCompleted,
}: Pick<Props, "isDoneToday" | "streakCompleted" | "streakMax" | "reward" | "streakAwardId" | "copy">) => {
  if (getStreakCompleted({ streakAwardId, streakCompleted, streakMax }) === streakMax) {
    if (!streakAwardId) {
      return copy.ctaLabelDone;
    }

    return copy.ctaLabelCollect.replace("${reward}", reward);
  }

  if (isDoneToday) {
    return copy.ctaLabelDone;
  }

  return copy.ctaLabelTakeChallenge;
};

const getSubHeading = ({
  isDoneToday,
  streakMax,
  reward,
  streakAwardId,
  copy,
  streakCompleted,
}: Pick<Props, "streakCompleted" | "isDoneToday" | "streakMax" | "reward" | "streakAwardId" | "copy">) => {
  if (getStreakCompleted({ streakAwardId, streakCompleted, streakMax }) === streakMax) {
    if (!streakAwardId) {
      return copy.subheadingCollected;
    }

    return copy.subheadingCompleted;
  }

  if (isDoneToday) {
    return copy.subheadingTodayStreakDone;
  }

  return copy.subheadingInstrucion.replace("${streakMax}", streakMax.toString()).replace("${reward}", reward);
};

const getHeading = ({
  isDoneToday,
  streakMax,
  copy,
  streakAwardId,
  streakCompleted,
}: Pick<Props, "streakAwardId" | "isDoneToday" | "streakMax" | "copy" | "streakCompleted">) => {
  if (getStreakCompleted({ streakAwardId, streakCompleted, streakMax }) === streakMax) {
    return copy.headingCompleted;
  }

  if (isDoneToday) {
    return copy.headingCompletedTodayStreak.replace("${streakCompleted}", streakCompleted.toString());
  }

  return copy.headingStartStreakDay.replace("${streakCompleted}", (streakCompleted + 1).toString());
};

const StreaksModal: React.FC<Props> = ({
  onPressCtaPrimary,
  onPressCtaSecondary,
  streakAwardId,
  streakCompleted,
  isDoneToday,
  streakMax,
  nextStreakAvailableAt,
  copy,
  reward,
  getUserStart: dispatchGetUserStart,
}) => {
  const [isLoading, setLoading] = React.useState(false);
  const [timeRemaining, setTimeRemaining] = React.useState(getTimeRemaining(nextStreakAvailableAt));

  React.useEffect(() => {
    if (streakMax === streakCompleted && !streakAwardId) {
      const callback = () => {
        setTimeRemaining(getTimeRemaining(nextStreakAvailableAt));
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
      heading={getHeading({ isDoneToday, streakMax, copy, streakAwardId, streakCompleted })}
      subHeading={getSubHeading({ isDoneToday, streakMax, reward, streakAwardId, copy, streakCompleted })}
      primaryButtonLabel={getLabelCtaPrimary({
        streakMax,
        isDoneToday,
        reward,
        streakAwardId,
        copy,
        streakCompleted,
      })}
      streakAwardId={streakAwardId}
      streakCompleted={getStreakCompleted({ streakAwardId, streakCompleted, streakMax })}
      streakMax={streakMax}
      onSubmit={onSubmit}
      reward={reward}
      isLoading={isLoading}
      onPressCtaPrimary={onPressCtaPrimary}
      onPressCtaSecondary={onPressCtaSecondary}
      timeRemaining={timeRemaining}
    />
  );
};

const mapStateToProps = (state: IReduxState) => ({
  streakAwardId: getStreakAwardId(state),
  copy: getCopy(state, "streak"),
});

const mapDispatchToProps = {
  getUserStart,
};

export default connect<ConnectedState, ConnectedDispatch>(mapStateToProps, mapDispatchToProps)(StreaksModal);
