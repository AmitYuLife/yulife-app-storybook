import React from "react";
import { Button } from "react-native";
import { render, fireEvent } from "@testing-library/react-native";
import BlurProvider from "../blur-provider";
import "@testing-library/jest-native/extend-expect";

function renderComponent() {
  return render(
    <BlurProvider
      render={({ showOverlay }) => <Button title="Show" onPress={showOverlay} />}
      renderOverlay={({ hideOverlay }) => <Button title="Hide" onPress={hideOverlay} />}
    />
  );
}

describe("BlurProvider", () => {
  it("should render", async () => {
    const { getByText, getByTestId } = renderComponent();

    const overlayContainer = getByTestId("blur-provider.overlay-container");

    const showOverlayButton = getByText("Show");

    expect(overlayContainer).toHaveStyle({ opacity: 0 });

    fireEvent.press(showOverlayButton);

    jest.runAllTimers();
    expect(overlayContainer).toHaveStyle({ opacity: 1 });
    const hideOverlayButton = getByText("Hide");

    fireEvent.press(hideOverlayButton);

    jest.runAllTimers();

    expect(overlayContainer).toHaveStyle({ opacity: 0 });
  });
});
