import { GetUserProfileQuery } from "@graphql/__generated";
import { Navigation } from "@navigation/main";
import { IReduxState } from "@redux/_core/reducers";
import { SyncAction } from "@redux/_core/types";
import { call } from "redux-saga/effects";

type GetUserProfile = GetUserProfileQuery["getUserProfile"];

export default function* setSuspendedTabs({ payload }: SyncAction<IReduxState | GetUserProfile>) {
  const blackListedNavBarTabs =
    (payload as IReduxState)?.user?.blackListedNavBarTabs ||
    (payload as GetUserProfile)?.gameSettings?.blackListedNavBarTabs ||
    [];

  yield call(() => Navigation.setBlackListedNavBarRoutes(blackListedNavBarTabs));
}
