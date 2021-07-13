import React from "react";
import { render } from "@testing-library/react-native";
import ChallengeTile, { IChallengeTileProps } from "../challenge-tile";
import "@testing-library/jest-native/extend-expect";

function renderComponent(props: Partial<IChallengeTileProps> = {}) {
  const defaultProps: IChallengeTileProps = {
    heading: "short stroll",
    duration: "60 minutes",
    availableAtLevel: 1,
    reward: "big money",
    imageUri: "",
  };

  return render(<ChallengeTile {...defaultProps} {...props} />);
}

describe("ChallengeTile", () => {
  it("should display the correct details for a short stroll", () => {
    const { queryByText } = renderComponent({});

    expect(queryByText("60 minutes")).toBeTruthy();
    expect(queryByText(/big money/)).toBeTruthy();
  });

  it("should display certain styles if a challenge is locked", () => {
    const { queryByText } = renderComponent({ isLocked: true, availableAtLevel: 99 });

    expect(queryByText("level 99")).toBeTruthy();
    expect(queryByText("60 minutes")).toBeNull();
    expect(queryByText(/big money/)).toBeNull();
  });

  it("not display the challenge if no type is presented ", () => {
    const { queryByText } = renderComponent({ heading: null });

    expect(queryByText("level")).toBeNull();
    expect(queryByText("60 minutes")).toBeNull();
    expect(queryByText(/big money/)).toBeNull();
  });
});
