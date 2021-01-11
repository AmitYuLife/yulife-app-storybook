import { IReduxState } from "../_core/reducers";

export const getCopy = <Key extends keyof IReduxState["copy"]["screens"]>({ copy }: IReduxState, screen: Key) =>
  copy.screens[screen];
export const getCopySelector = <Key extends keyof IReduxState["copy"]["screens"]>(screen: Key) => ({
  copy,
}: IReduxState) => copy.screens[screen];
export const getCopyVersion = ({ copy }: IReduxState) => copy.version;
export const getRawCopy = ({ copy }: IReduxState) => copy.screens;
