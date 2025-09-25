import { takeLatest } from "redux-saga/effects";
import { UPDATE_CURRENT_MODAL } from "@redux/app/app.actions";
import showModalsOnQueue from "./showModalsOnQueue.saga";
import { ADD_MODALS_TO_QUEUE } from "@redux/modal/modal.actions";

export default [takeLatest([ADD_MODALS_TO_QUEUE, UPDATE_CURRENT_MODAL], showModalsOnQueue)];
