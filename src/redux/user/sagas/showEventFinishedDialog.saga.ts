import getGoalDetails from "@graphql/goals/getGoalDetails.gql";
import { GetUserProfile_getUserProfile_events as Events } from "@graphql/_core/schema";
import { t } from "@locale";
import { MODALS } from "@navigation/constants";
import { showYuModal } from "@navigation/root";
import { showGenericModal } from "@navigation/utils";
import { Unpacked } from "@utils";
import { Navigation } from "react-native-navigation";
import { all, call } from "redux-saga/effects";
import { updateUserProfile, updateUserProfileEvents } from "../user.actions";
import { IUserStore } from "../user.reducer";

function* showCompletedEvents(completedEvents: Partial<Events>[]) {
  if (completedEvents.length) {
    const response: Unpacked<typeof getGoalDetails>[] = yield all(
      completedEvents.map(({ id, stageId }) => {
        return call(getGoalDetails, { id, stageId });
      })
    );
    // flatten getGoalDetails.rewards into single array
    const rewards = [].concat(...response.map(({ data }) => data.getGoalDetails.rewards));

    showYuModal({
      component: {
        id: MODALS.collectEventReward,
        name: MODALS.collectEventReward,
        passProps: {
          event: completedEvents.length === 1 && completedEvents[0].title,
          completed: true,
          rewards,
        },
      },
    });
  }
}

function* showFailedEvents(failedEvents: Partial<Events>[]) {
  yield call(() =>
    showGenericModal(
      failedEvents.length > 1
        ? t("screens.eventFail.multipleEventsTitle")
        : t("screens.eventFail.title", { event: failedEvents[0].title }),
      t("screens.eventFail.description"),
      () => {
        Navigation.dismissModal(MODALS.generic);
      },
      t("screens.eventFail.cta"),
      null,
      null
    )
  );
}

export default function* showEventFinishDialog({
  payload,
}: ReturnType<typeof updateUserProfileEvents> | ReturnType<typeof updateUserProfile>) {
  const events = (payload as Partial<IUserStore>)?.events || (payload as Partial<Events>[]);

  const { failedEvents, completedEvents } = events
    .filter((event) => event.status === "completed")
    .reduce(
      (map, event) => {
        if (!event.milestones?.filter((milestone) => milestone.rewardId).length) {
          map.failedEvents.push(event);
          return map;
        }

        map.completedEvents.push(event);
        return map;
      },
      {
        failedEvents: [] as Partial<Events>[],
        completedEvents: [] as Partial<Events>[],
      }
    );

  if (completedEvents.length) {
    yield showCompletedEvents(completedEvents);
  }

  if (failedEvents.length) {
    yield showFailedEvents(failedEvents);
  }
}
