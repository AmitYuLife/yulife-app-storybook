import * as React from "react";
import { Animated } from "react-native";
import { render } from "@testing-library/react-native";

import RefreshHeader from "../refresh-header";

function renderComponent() {
  return render(<RefreshHeader maxHeight={1000} offset={new Animated.Value(0)} />);
}

describe("RefreshHeader", () => {
  it("should render with text Pull down to refresh", () => {
    const { queryByText } = renderComponent();

    expect(queryByText(/Pull down to refresh/)).toBeTruthy();
  });
});
