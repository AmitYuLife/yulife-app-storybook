import { ActivityType } from "../activity-type.enum";

export interface IQueryOptions {
  blacklistApps?: string[];
  whitelistApps?: string[];
  disableUserEntries?: boolean;
  whitelistActivityTypes?: ActivityType[];
}
