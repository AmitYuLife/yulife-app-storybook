import React from "react";
import { render } from "@testing-library/react-native";
import { PACKAGE_TYPES } from "@ids";
import PackageTypes, { Props } from "./package-types";

const renderComponent = (props: Props) => {
  return render(<PackageTypes {...props} />);
};

describe("PackageType", () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it("should render PackageType common ", () => {
    const type = "common";
    const { queryByText, queryByTestId } = renderComponent({ type });
    const view = queryByTestId(PACKAGE_TYPES);
    expect(queryByText(type)).toBeTruthy();
    expect(view.props.style[1].backgroundColor).toBe("#00ED9D");
  });

  it("should render PackageType rare ", () => {
    const type = "rare";
    const { queryByText, queryByTestId } = renderComponent({ type });
    const view = queryByTestId(PACKAGE_TYPES);
    expect(queryByText(type)).toBeTruthy();
    expect(view.props.style[1].backgroundColor).toBe("#00C0F3");
  });

  it("should render PackageType epic ", () => {
    const type = "epic";
    const { queryByText, queryByTestId } = renderComponent({ type });
    const view = queryByTestId(PACKAGE_TYPES);
    expect(queryByText(type)).toBeTruthy();
    expect(view.props.style[1].backgroundColor).toBe("#956AFF");
  });
});
