import { REHYDRATE } from "redux-persist";
import { takeLatest } from "redux-saga/effects";
import updateCopySaga from "./updateCopy.saga";

export default [takeLatest(REHYDRATE, updateCopySaga)];
