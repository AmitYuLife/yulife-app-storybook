import { useState, useMemo } from "react";
import { NativeSyntheticEvent, NativeScrollEvent, NativeScrollPoint } from "react-native";

export interface LocalNavigation<T> {
  history: IHistoryRoute<T>[];
  length: number;
  currentRoute: IHistoryRoute<T>;
  push: (route: T, passProps?: object) => void;
  pop: () => void;
  popToMain: () => void;
  replace: (route: T, passProps?: object) => void;
  onScrollEnd: (event: NativeSyntheticEvent<NativeScrollEvent>) => void;
}

interface IHistoryRoute<T> {
  route: T;
  passProps: any;
  offset?: NativeScrollPoint;
}

interface Args<T> {
  popToMain: () => void;
  initialRoute: T;
  defaultRoute: T;
  defaultHistory?: IHistoryRoute<T>[];
  defaultProps?: any;
  initialProps?: any;
}

export function useLocalNavigation<T>({
  initialRoute,
  initialProps = {},
  popToMain,
  defaultRoute,
  defaultProps = {},
  defaultHistory = [],
}: Args<T>): LocalNavigation<T> {
  const [history, setHistory] = useState([...defaultHistory, { route: initialRoute, passProps: initialProps }]);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const currentRoute = history.length ? history[history.length - 1] : { route: defaultRoute, passProps: defaultProps };

  return useMemo(
    () => ({
      history,
      length: history.length,
      currentRoute,
      popToMain,
      push(route: T, passProps: object = {}) {
        const newHistory = [...history, { route, passProps }];

        newHistory[newHistory.length - 2].offset = offset;

        return setHistory(newHistory);
      },
      pop() {
        if (history.length <= 1) {
          return popToMain();
        }

        const prevRoute = history[history.length - 1];

        setHistory(removeOrReplaceLastHistoryItem());

        return prevRoute;
      },
      replace(route: T, passProps: object = {}) {
        setHistory(removeOrReplaceLastHistoryItem({ route, passProps }));
      },
      onScrollEnd(event: NativeSyntheticEvent<NativeScrollEvent>) {
        const { x, y } = event.nativeEvent.contentOffset;
        setOffset({ x, y });
      },
    }),
    [history, currentRoute, offset, popToMain]
  );
}

function removeOrReplaceLastHistoryItem<T>(newRoute: IHistoryRoute<T> = null) {
  return (history: IHistoryRoute<T>[]) => {
    // FIXME: could easily lead to problems, especially if there are nested objects in passProps
    // because we're shallow-copying
    // POSSIBLE FIX: deep clone
    const historyClone = [...history];

    historyClone.pop();

    if (newRoute) {
      const { route, passProps = {} } = newRoute;
      historyClone.push({ route, passProps });
    }

    return historyClone;
  };
}
