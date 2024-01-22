import { IReduxState } from "@redux/_core/reducers";
import { getStreakAwardId } from "@redux/streaks/streaks.selectors";

export const mapStateToProps = (state: IReduxState) => ({
  streakAwardId: getStreakAwardId(state),
});
