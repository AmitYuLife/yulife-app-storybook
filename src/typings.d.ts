export type SideEffect<T = undefined> = (args?: T) => void;

export interface IConnectedScreenProps {
  onLeftMenuPress: SideEffect;
}
