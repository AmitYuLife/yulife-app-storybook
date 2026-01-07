import { call, put, select, take } from "redux-saga/effects";
import { getModalsQueue } from "@redux/modal/modal.selectors";
import { showYuModal } from "@navigation/root";
import { UPDATE_CURRENT_MODAL, UPDATE_CURRENT_ROUTE } from "@redux/app/app.actions";
import { ADD_MODALS_TO_QUEUE, removeModalFromQueue } from "@redux/modal/modal.actions";
import { getModalState, getRouteState } from "@redux/app/app.selectors";
import { ROUTES } from "@navigation/constants";
import { UpdateCurrentRoutePayload } from "@redux/app/app.types";

// Defer modals showing until we navigate away from these routes
const BLOCKED_ROUTES = [ROUTES.sudokuGame, ROUTES.sudokuCompleted];

export default function* showModalsOnQueue({ type, payload }: { type: string; payload: any }) {
  const modalsQueue: ReturnType<typeof getModalsQueue> = yield select(getModalsQueue);
  const currentModal: ReturnType<typeof getModalState> = yield select(getModalState);
  const modal = modalsQueue[0];

  let currentRoute: ReturnType<typeof getRouteState> = yield select(getRouteState);

  while (BLOCKED_ROUTES.includes(currentRoute)) {
    const routePayload: { payload: UpdateCurrentRoutePayload } = yield take(UPDATE_CURRENT_ROUTE);
    currentRoute = routePayload.payload.route;
  }

  if (!modal || currentModal) {
    return;
  }

  // start the modal queue
  if (type === ADD_MODALS_TO_QUEUE) {
    yield call(showYuModal, { component: { id: modal.modalId, name: modal.modalId, passProps: modal.props } });
    yield put(removeModalFromQueue({ id: modal.id }));
  }

  // show the next modal on the queue
  if (type === UPDATE_CURRENT_MODAL) {
    if (payload.modal === null && modal) {
      yield call(showYuModal, { component: { id: modal.modalId, name: modal.modalId, passProps: modal.props } });
      yield put(removeModalFromQueue({ id: modal.id }));
    }
  }
}
