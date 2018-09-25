import { ILabel } from "./components/molecules";

export type SideEffect<T = undefined> = (args?: T) => void;

export interface IConnectedScreenProps {
  labels?: ILabel[];
  onLeftMenuPress: SideEffect;
  totalCoins: number;
}