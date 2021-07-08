import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import Button from "../button";
import "@testing-library/jest-native/extend-expect";

const onPress = jest.fn();

interface Props {
  isLoading?: boolean;
  disabled?: boolean;
}

function renderComponent(customProps: Props) {
  const props = {
    onPress,
    label: "Button",
    testID: "button",
    ...customProps,
  };

  return render(<Button {...props} />);
}

describe("Button", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should fire the handler onPress", () => {
    const { getByTestId } = renderComponent({});

    fireEvent.press(getByTestId("button"));

    expect(onPress).toHaveBeenCalledTimes(1);
  });

  it("should display the disabled overlay when the button is disabled", () => {
    const { queryByTestId, getByTestId } = renderComponent({ disabled: true });

    fireEvent.press(getByTestId("button"));

    expect(queryByTestId("button-disabled-overlay")).toBeTruthy();
    expect(onPress).toHaveBeenCalledTimes(0);
  });

  it("should not display the label when loading", () => {
    const { queryByText } = renderComponent({ isLoading: true });

    expect(queryByText("Button")).toBeNull();
  });

  it("should still fire the callback when loading", () => {
    const { getByTestId } = renderComponent({ isLoading: true });

    fireEvent.press(getByTestId("button"));

    expect(onPress).toHaveBeenCalledTimes(1);
  });
});
