import * as React from "react";
import { Animated } from "react-native";
import { render } from "@testing-library/react-native";

import LoadingFooter from "../loading-footer";

function renderComponent() {
  return render(<LoadingFooter maxHeight={1000} offset={new Animated.Value(0)} bottomOffset={0} />);
}

describe("LoadingFooter", () => {
  it("should render with text Drag up to load", () => {
    const { queryByText } = renderComponent();

    expect(queryByText("Drag up to load")).toBeTruthy();
  });
});
