import React from "react";
import { storiesOf } from "@storybook/react-native";
import MemberServices, { ConnectedState } from "./member-services.container";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers, { testInitialState } from "@redux/_core/reducers";

function getInitialState(state: ConnectedState) {
  return {
    ...testInitialState,
    ...{
      user: {
        ...testInitialState.user,
        features: {
          ...testInitialState.user.features,
          ...state.features,
        },
        business: {
          ...testInitialState.user.business,
          isGroup: state.isGroupUser,
          isWellbeingAccess: state.isWellbeingAccess,
        },
      },
    },
  };
}

storiesOf("Member Services Container")
  .add("Both Tabs", () => {
    const componentState = {
      features: {
        hideYuMatterScreen: false,
        hideSmartHealthScreen: false,
      },
      isGroupUser: true,
      isWellbeingAccess: true,
    };

    const state = getInitialState(componentState);
    const store = createStore(reducers, state);

    return (
      <Provider store={store}>
        <MemberServices componentId="1234" />
      </Provider>
    );
  })
  .add("Only YuMatter", () => {
    const componentState = {
      features: {},
      isGroupUser: false,
      isWellbeingAccess: false,
    };

    const state = getInitialState(componentState);
    const store = createStore(reducers, state);

    return (
      <Provider store={store}>
        <MemberServices componentId="1234" />
      </Provider>
    );
  })
  .add("Only SmartHealtyh", () => {
    const componentState = {
      features: {
        hideYuMatterScreen: true,
        hideSmartHealthScreen: false,
      },
      isGroupUser: true,
      isWellbeingAccess: true,
    };

    const state = getInitialState(componentState);
    const store = createStore(reducers, state);

    return (
      <Provider store={store}>
        <MemberServices componentId="1234" />
      </Provider>
    );
  });
