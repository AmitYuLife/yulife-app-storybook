import { IReduxState } from "../_core/reducers";

export const getCopy = <Key extends keyof IReduxState["copy"]["screens"]>({ copy }: IReduxState, screen: Key) =>
    copy.screens[screen];
export const getCopyVersion = ({ copy }: IReduxState) => copy.version;
