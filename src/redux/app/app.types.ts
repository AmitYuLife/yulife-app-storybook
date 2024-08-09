import { ROUTES } from "@navigation/constants";
import { AppStateStatus } from "react-native";

export type IAppStore = {
  appState: AppStateStatus;
  isOffline: boolean;
  activeRoute: string;
  activeModal: string;
  highlightedTabs: Partial<Record<keyof typeof ROUTES, boolean>>;
};

export type UpdateAppStatePayload = { appState: AppStateStatus };
export type UpdateCurrentRoutePayload = { route: string };
export type UpdateCurrentModalPayload = { modal: string | null };
export type UpdateOfflineStatePayload = { isOffline: boolean };
export type SetAuthenticatedPayload = { isLogin?: boolean };
export type SetRegionConfigPayload = { shouldFetchConfig: boolean };
export type CheckConnectionPayload = { hasDelay: boolean };
export type HighlightNavbarTabsPayload = { tabs: string[] };
export type HighlightNavbarTabResetPayload = { tab: string };
