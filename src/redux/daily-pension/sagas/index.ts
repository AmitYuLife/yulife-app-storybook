import { takeLatest } from "redux-saga/effects";
import { LOGIN_USER_SUCCESS } from "@redux/user/user.actions";
import getDailyPension from "./getDailyPension.saga";

export default [takeLatest(LOGIN_USER_SUCCESS, getDailyPension)];
