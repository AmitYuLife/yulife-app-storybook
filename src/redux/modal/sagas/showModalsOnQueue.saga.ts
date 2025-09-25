import { call, put, select } from "redux-saga/effects";
import { getModalsQueue } from "@redux/modal/modal.selectors";
import { showYuModal } from "@navigation/root";
import { UPDATE_CURRENT_MODAL } from "@redux/app/app.actions";
import { ADD_MODALS_TO_QUEUE, removeModalFromQueue } from "@redux/modal/modal.actions";
import { getModalState } from "@redux/app/app.selectors";

export default function* showModalsOnQueue({ type, payload }: { type: string; payload: any }) {
  const modalsQueue: ReturnType<typeof getModalsQueue> = yield select(getModalsQueue);
  const currentModal: ReturnType<typeof getModalState> = yield select(getModalState);
  const modal = modalsQueue[0];

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
