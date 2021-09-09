import React from "react";
import { render } from "@testing-library/react-native";
import { PACKAGE_TYPES } from "@ids";
import PackageTypes, { Props } from "./package-types";
import { CoverType } from "@graphql/_core/schema/globalTypes";
import { toCapitalLetter } from "@utils";

const renderComponent = (props: Props) => {
  return render(<PackageTypes {...props} />);
};

describe("PackageType", () => {
  it("should render PackageType common ", () => {
    const type = CoverType.common;
    const { queryByText, queryByTestId } = renderComponent({ type });
    const view = queryByTestId(PACKAGE_TYPES);
    expect(queryByText(toCapitalLetter(type))).toBeTruthy();
    expect(view.props.style[1].backgroundColor).toBe("#36CB95");
  });

  it("should render PackageType rare ", () => {
    const type = CoverType.rare;
    const { queryByText, queryByTestId } = renderComponent({ type });
    const view = queryByTestId(PACKAGE_TYPES);
    expect(queryByText(toCapitalLetter(type))).toBeTruthy();
    expect(view.props.style[1].backgroundColor).toBe("#569DE9");
  });

  it("should render PackageType epic ", () => {
    const type = CoverType.epic;
    const { queryByText, queryByTestId } = renderComponent({ type });
    const view = queryByTestId(PACKAGE_TYPES);
    expect(queryByText(toCapitalLetter(type))).toBeTruthy();
    expect(view.props.style[1].backgroundColor).toBe("#956AFF");
  });
});
