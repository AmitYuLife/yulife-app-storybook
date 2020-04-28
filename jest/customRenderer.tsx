// This custom renderer was created to override the default Redux store.

import React, { ReactElement } from "react";
import { render as rtlRender } from "@testing-library/react-native";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducers, { testInitialState , IReduxState } from "@redux/_core/reducers";

interface Options {
  initialState: IReduxState;
}

function customRenderer(ui: ReactElement<any>, options: Options) {
  const { initialState = testInitialState } = options;

  const store = createStore(reducers, initialState);

  function Wrapper({ children }: { children: React.ReactNode }) {
    return <Provider store={store}>{children}</Provider>;
  }
  return rtlRender(ui, { wrapper: Wrapper });
}

export default customRenderer;
