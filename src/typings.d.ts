import { ILabel } from "./components/molecules";

export type SideEffect<T = undefined> = (args?: T) => void;

export interface IConnectedScreenProps {
  onLeftMenuPress: SideEffect;
  totalCoins: number;
}