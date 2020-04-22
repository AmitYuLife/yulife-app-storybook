import React from "react";
import { GQL_MUTATION_SEND_MAGIC_LINK } from "@graphql/user";
import { render, fireEvent, act } from "@testing-library/react-native";
import wait from "waait";
import { Provider } from "react-redux";
import { MockedProvider } from "@apollo/react-testing";
import ResetPasswordContainer from "../reset-password.container";
import { mockStore } from "@redux/_core/store";

const mocks = [
  {
    request: {
      query: GQL_MUTATION_SEND_MAGIC_LINK,
      variables: {
        email: "test@yulife.com",
      },
    },
    result: {
      loading: false,
      data: {
        sendMagicLink: {
          message: "sent",
        },
      },
    },
  },
];

function renderComponent() {
  function Component() {
    return (
      <MockedProvider mocks={mocks} addTypename={false}>
        <Provider store={mockStore}>
          <ResetPasswordContainer componentId="1234" />
        </Provider>
      </MockedProvider>
    );
  }

  return render(<Component />);
}

describe("ResetPasswordContianer", () => {
  it("should display the ResetPasswordScreen", () => {
    const { queryByText } = renderComponent();

    expect(queryByText("need help?")).toBeTruthy();
    expect(queryByText("email me a magic link")).toBeTruthy();
    expect(queryByText("back")).toBeTruthy();
  });

  it("should send me an email to the correct address", async () => {
    jest.useRealTimers();

    const { getByPlaceholderText, getByText, queryByText } = renderComponent();

    const emailInput = getByPlaceholderText("Email");
    const sendLinkButton = getByText("email me a magic link");

    fireEvent.changeText(emailInput, "test@yulife.com");
    fireEvent.pressOut(sendLinkButton);

    await act(async () => {
      await wait(0);
    });

    expect(queryByText(/Check your inbox! If test@yulife.com matches our records/)).toBeTruthy();
  });
});
