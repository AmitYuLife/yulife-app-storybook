import { createContext } from "react";
import { NetworkStatus } from "apollo-client";

export const ActiveLeaderboardLoadingContext = createContext(1 as NetworkStatus);
