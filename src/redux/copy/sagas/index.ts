import { takeLatest } from "redux-saga/effects";
import updateCopySaga from "./updateCopy.saga";
import { UPDATE_USER_PROFILE } from "@redux/user/user.actions";

export default [takeLatest(UPDATE_USER_PROFILE, updateCopySaga)];
