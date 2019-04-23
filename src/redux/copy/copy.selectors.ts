import { IReduxState } from "../_core/reducers";

export const getCopy = ({ copy }: IReduxState, screen: string) => copy.screens[screen];
export const getCopyVersion = ({ copy }: IReduxState) => copy.version;
