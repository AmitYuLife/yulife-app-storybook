import bugsnag from "@services/bugsnag";
import { call } from "redux-saga/effects";

export default function* logBreadcrumbsSaga(action: any) {
    try {
        if (typeof action.payload === "object" || typeof action.payload === "string") {
            yield call(bugsnag().leaveBreadcrumb, action.type.slice(0, 30), action.payload);
        } else {
            yield call(bugsnag().leaveBreadcrumb, action.type.slice(0, 30));
        }
    } catch (e) {
        console.error(e); // tslint:disable-line
    }
}
