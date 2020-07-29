import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import { Types } from "../button.types";
import Button from "../button";
import "@testing-library/jest-native/extend-expect";

const onPress = jest.fn();

interface Props {
  type?: Types;
  isLoading?: boolean;
  disabled?: boolean;
}

function renderComponent(customProps: Props) {
  const props = {
    onPress,
    type: "Primary" as Types,
    label: "Button",
    testID: "button",
    ...customProps,
  };

  return render(<Button {...props} />);
}

describe("Button", () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it("should fire the handler onPress", () => {
    const { getByTestId } = renderComponent({ type: "Primary" });

    fireEvent.pressOut(getByTestId("button"));

    expect(onPress).toHaveBeenCalledTimes(1);
  });

  it("should display the correct styles on pressIn", () => {
    const { getByTestId } = renderComponent({ type: "Primary" });

    expect(getByTestId("button-text-view")).not.toHaveStyle({ backgroundColor: "#cb016b" });

    fireEvent.pressIn(getByTestId("button"));

    expect(getByTestId("button-text-view")).toHaveStyle({ backgroundColor: "#cb016b" });
  });

  it("should display the disabled overlay when the button is disabled", () => {
    const { queryByTestId, getByTestId } = renderComponent({ disabled: true });

    fireEvent.pressOut(getByTestId("button"));

    expect(queryByTestId("button-disabled-overlay")).toBeTruthy();
    expect(onPress).toHaveBeenCalledTimes(0);
  });

  it("should not display the label when loading", () => {
    const { queryByText } = renderComponent({ isLoading: true });

    expect(queryByText("Button")).toBeNull();
  });

  it("should still fire the callback when loading", () => {
    const { getByTestId } = renderComponent({ isLoading: true });

    fireEvent.pressOut(getByTestId("button"));

    expect(onPress).toHaveBeenCalledTimes(1);
  });
});
