import getGoalDetails from "@graphql/goals/getGoalDetails.gql";
import { GetUserProfile_getUserProfile_events as Events } from "@graphql/_core/schema";
import { t } from "@locale";
import { MODALS } from "@navigation/constants";
import { showYuModal } from "@navigation/root";
import { showGenericModal } from "@navigation/utils";
import { getModalState, getRouteState } from "@redux/app/app.selectors";
import { Unpacked } from "@utils";
import { Navigation } from "@navigation/main";
import { all, call, select } from "redux-saga/effects";
import { updateUserProfile, updateUserProfileEvents } from "../user.actions";
import { IUserStore } from "../user.reducer";

function* showCompletedEvents(completedEvents: Partial<Events>[]) {
  const activeRoute: ReturnType<typeof getRouteState> = yield select(getRouteState);

  if (activeRoute === MODALS.collectEventReward) {
    return;
  }

  const response: Unpacked<typeof getGoalDetails>[] = yield all(
    completedEvents.map(({ id }) => {
      return call(getGoalDetails, { id });
    })
  );
  // flatten getGoalDetails.rewards into single array
  const rewards = [].concat(...response.map(({ data }) => data.getGoalDetails.rewards));

  if (rewards.length) {
    showYuModal({
      component: {
        id: MODALS.collectEventReward,
        name: MODALS.collectEventReward,
        passProps: {
          goalIds: completedEvents.map((event) => event.id),
          event: completedEvents.length === 1 && completedEvents[0].title,
          completed: true,
          rewards,
        },
      },
    });
  }
}

function* showFailedEvents(failedEvents: Partial<Events>[]) {
  const activeModal: ReturnType<typeof getModalState> = yield select(getModalState);

  if (activeModal === MODALS.generic) {
    return;
  }

  yield call(() =>
    showGenericModal(
      failedEvents.length > 1
        ? t("screens.event_fail.multiple_events_title")
        : t("screens.event_fail.title", { event: failedEvents[0].title }),
      t("screens.event_fail.description"),
      () => {
        Navigation.dismissModal(MODALS.generic);
      },
      t("labels.cta.ok"),
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
