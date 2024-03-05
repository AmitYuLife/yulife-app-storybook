export type SideEffect<T = undefined> = (args?: T) => void;

export interface IConnectedScreenProps {
  onLeftMenuPress: SideEffect;
}

type Entries<T> = {
  [K in keyof T]: [K, T[K]];
}[keyof T][];

declare global {
  interface ObjectConstructor {
    entries<T extends object>(o: T): Entries<T>;
  }
}
