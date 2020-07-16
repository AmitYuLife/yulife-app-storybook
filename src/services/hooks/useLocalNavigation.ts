import { useState } from "react";

export interface LocalNavigation<T> {
  history: IHistoryRoute<T>[];
  length: number;
  currentRoute: IHistoryRoute<T>;
  push: (route: T, passProps?: object) => void;
  pop: () => void;
  popToMain: () => void;
  replace: (route: T, passProps?: object) => void;
}

interface IHistoryRoute<T> {
  route: T;
  passProps: any;
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

  const currentRoute = history.length ? history[history.length - 1] : { route: defaultRoute, passProps: defaultProps };

  function push(route: T, passProps: object = {}) {
    const newHistory = [...history, { route, passProps }];

    return setHistory(newHistory);
  }

  function pop() {
    if (history.length <= 1) {
      return popToMain();
    }

    const prevRoute = history[history.length - 1];

    setHistory(removeOrReplaceLastHistoryItem());

    return prevRoute;
  }

  function replace(route: T, passProps: object = {}) {
    setHistory(removeOrReplaceLastHistoryItem({ route, passProps }));
  }

  return {
    history,
    length: history.length,
    currentRoute,
    push,
    pop,
    popToMain,
    replace,
  };
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
