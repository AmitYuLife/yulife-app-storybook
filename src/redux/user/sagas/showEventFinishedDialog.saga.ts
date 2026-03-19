import { t } from "@locale";
import { MODALS, ROUTES } from "@navigation/constants";
import { showYuModal } from "@navigation/root";
import { showGenericModal } from "@navigation/utils";
import { getModalState, getRouteState } from "@redux/app/app.selectors";
import { Navigation } from "@navigation/main";
import { all, call, select } from "redux-saga/effects";
import { updateUserProfile, updateUserProfileEvents } from "../user.actions";
import { IUserStore } from "../user.types";
import { GetGoalDetailsQuery, gql } from "@graphql/__generated";
import client from "@graphql/_core/client";
import { ApolloQueryResult } from "@apollo/client";
import { Events } from "../user.types";

function* showCompletedEvents(completedEvents: Partial<Events>[]) {
  const activeRoute: ReturnType<typeof getRouteState> = yield select(getRouteState);

  if (activeRoute === MODALS.collectEventReward || activeRoute === ROUTES.mediaPlayer) {
    return;
  }

  const response: ApolloQueryResult<GetGoalDetailsQuery>[] = yield all(
    completedEvents.map(({ id }) => {
      return call(() =>
        client().query({
          query: gql("GetGoalDetailsDocument"),
          variables: { id },
          fetchPolicy: "network-only",
        })
      );
    })
  );

  const rewards = response
    .map(({ data }) => data.getGoalDetails.rewards)
    // flatten getGoalDetails.rewards into single array
    .flat()
    // ignore rewards that have a chest in them, they have to be manually claimed one by one
    .filter((r) => !r.onPress);

  if (rewards.length) {
    showYuModal({
      component: {
        id: MODALS.collectEventReward,
        name: MODALS.collectEventReward,
        passProps: {
          goalIds: completedEvents.map((event) => event.id),
          event: completedEvents.length === 1 ? completedEvents[0].title : "",
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
