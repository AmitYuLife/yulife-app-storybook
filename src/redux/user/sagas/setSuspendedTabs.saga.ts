import { GetUserProfile_getUserProfile } from "@graphql/_core/schema";
import { Navigation } from "@navigation/main";
import { IReduxState } from "@redux/_core/reducers";
import { SyncAction } from "@redux/_core/types";
import { call } from "redux-saga/effects";

export default function* setSuspendedTabs({ payload }: SyncAction<IReduxState | GetUserProfile_getUserProfile>) {
  const blackListedNavBarTabs =
    (payload as IReduxState)?.user?.blackListedNavBarTabs ||
    (payload as GetUserProfile_getUserProfile)?.gameSettings?.blackListedNavBarTabs ||
    [];

  if (blackListedNavBarTabs?.length) {
    yield call(() => Navigation.setBlackListedNavBarRoutes(blackListedNavBarTabs));
  }
}
