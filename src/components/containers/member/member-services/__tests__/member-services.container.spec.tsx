import React from "react";
import MemberServicesContainer, { ConnectedState } from "../member-services.container";
import customRenderer from "jest/customRenderer";
import { testInitialState } from "@redux/_core/reducers";

function renderComponent(state: ConnectedState) {
  const api = customRenderer(<MemberServicesContainer componentId="123" />, {
    initialState: {
      ...testInitialState,
      ...{
        user: {
          ...testInitialState.user,
          membershipType: state.membershipType,
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
    },
  });

  return api;
}

describe("MemberServicesContainer", () => {
  it("should display tabs toolbar when a user has access to both services", () => {
    const state = {
      features: {
        hideYuMatterScreen: false,
        hideSmartHealthScreen: false,
      },
      isGroupUser: true,
      isWellbeingAccess: true,
      membershipType: "",
    };

    const { queryByTestId } = renderComponent(state);

    expect(queryByTestId("YuMatter")).toBeTruthy();
    expect(queryByTestId("SmartHealth")).toBeTruthy();
  });

  it("should not display tabs when a user has access to only YuMatter", () => {
    const state = {
      features: {
        hideYuMatterScreen: false,
        hideSmartHealthScreen: true,
      },
      isGroupUser: false,
      isWellbeingAccess: false,
      membershipType: "",
    };

    const { queryByTestId } = renderComponent(state);

    expect(queryByTestId("YuMatter")).toBeNull();
    expect(queryByTestId("SmartHealth")).toBeNull();
  });

  it("should display the gate page if a user has access to neither", () => {
    const state = {
      features: {
        hideYuMatterScreen: true,
        hideSmartHealthScreen: true,
      },
      isGroupUser: false,
      isWellbeingAccess: false,
      membershipType: "",
    };

    const { queryByText } = renderComponent(state);

    expect(queryByText(/It looks like your team has not been enrolled in additional member services/)).toBeTruthy();
  });
});
