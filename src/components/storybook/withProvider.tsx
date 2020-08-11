import React from "react";
import { Provider } from "react-redux";
import { mockStore } from "@redux/_core/store";

export const withProvider = (story: () => React.ReactNode) => <Provider store={mockStore}>{story()}</Provider>;
