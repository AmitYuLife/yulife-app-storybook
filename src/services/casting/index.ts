export { default as useCasting } from "./useCasting";
export type { IUseCastingProps, IUseCastingResult, IRemotePlayback } from "./useCasting";
export { default as useCastingAntiCheat } from "./useCastingAntiCheat";
export type { IUseCastingAntiCheatProps, IUseCastingAntiCheatResult } from "./useCastingAntiCheat";
export { showRoutePicker } from "react-airplay";
import { AirplayButtonProps, AirplayButton as ReactAirplayButton } from "react-airplay";

export const AirplayButton = ReactAirplayButton as React.FC<AirplayButtonProps>;

export { CastButton } from "react-native-google-cast";
