import getGoalDetails from "@graphql/goals/getGoalDetails.gql";
import { GetUserProfile_getUserProfile_events } from "@graphql/_core/schema";
import { GoalRewardStatus } from "@graphql/_core/schema/globalTypes";
import { t } from "@locale";
import { MODALS } from "@navigation/constants";
import { showYuModal } from "@navigation/root";
import { showGenericModal } from "@navigation/utils";
import { Unpacked } from "@utils";
import { Navigation } from "react-native-navigation";
import { all, call, put } from "redux-saga/effects";
import { refreshUserProfileEvents, updateUserProfile, updateUserProfileEvents } from "../user.actions";
import { IUserStore } from "../user.reducer";

function* showUnclaimed(completedEventsWithUnclaimedRewards: Partial<GetUserProfile_getUserProfile_events>[]) {
  const response: Unpacked<typeof getGoalDetails>[] = yield all(
    completedEventsWithUnclaimedRewards.map(({ id, stageId }) => {
      return call(getGoalDetails, { id, stageId });
    })
  );
  const rewards = [].concat(
    ...response.map(({ data }) =>
      data.getGoalDetails.rewards.filter((reward) => reward.status === GoalRewardStatus.completed)
    )
  );

  showYuModal({
    component: {
      id: MODALS.collectEventReward,
      name: MODALS.collectEventReward,
      passProps: {
        title: t("screens.collectRewardModal.title"),
        descriptionTitle: t("screens.collectRewardModal.descriptionTitle"),
        description: t("screens.collectRewardModal.description"),
        cta: t("screens.collectRewardModal.cta"),
        rewards,
      },
    },
  });
}

function* showFailedEvents(failedEvents: Partial<GetUserProfile_getUserProfile_events>[]) {
  yield call(() =>
    showGenericModal(
      failedEvents.length > 1
        ? t("screens.eventFail.multipleEventsTitle")
        : `${failedEvents[0].title} ${t("screens.eventFail.title")}`,
      t("screens.eventFail.description"),
      () => {
        Navigation.dismissModal(MODALS.generic);
      },
      t("screens.eventFail.cta"),
      null,
      null
    )
  );

  yield put(refreshUserProfileEvents());
}

export default function* showEventFail({
  payload,
}: ReturnType<typeof updateUserProfileEvents> | ReturnType<typeof updateUserProfile>) {
  const events =
    (payload as Partial<IUserStore>)?.events || (payload as Partial<GetUserProfile_getUserProfile_events>[]);

  const failedEvents = events.filter(
    (event) => event.status === "completed" && !event.milestones?.filter((milestone) => milestone.rewardId).length
  );

  const completedEventsWithUnclaimedRewards = events.filter(
    (event) => event.status === "completed" && event.milestones?.filter((milestone) => milestone.isClaimable).length
  );

  if (completedEventsWithUnclaimedRewards.length) {
    yield showUnclaimed(completedEventsWithUnclaimedRewards);
  }

  if (failedEvents.length) {
    yield showFailedEvents(failedEvents);
  }
}
