import { ROUTES } from "@navigation/constants";
import { AppStateStatus } from "react-native";

export interface IHighlightedTabOptions {
  tab: string;
  tooltipHeader?: string;
  tooltipBody?: string;
}

export type IAppStore = {
  appState: AppStateStatus;
  isOffline: boolean;
  activeRoute: string;
  activeModal: string;
  highlightedTabs: Partial<Record<keyof typeof ROUTES, IHighlightedTabOptions>>;
};

export type UpdateAppStatePayload = { appState: AppStateStatus };
export type UpdateCurrentRoutePayload = { route: string };
export type UpdateCurrentModalPayload = { modal: string | null };
export type UpdateOfflineStatePayload = { isOffline: boolean };
export type SetRegionConfigPayload = { shouldFetchConfig: boolean };
export type CheckConnectionPayload = { hasDelay: boolean };
export type HighlightNavbarTabsPayload = { tabs: IHighlightedTabOptions[] };
export type HighlightNavbarTabResetPayload = { tab: string };
