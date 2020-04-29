import React from "react";
import { render } from "@testing-library/react-native";
import ChallengeTile, { IChallengeTileProps } from "../challenge-tile";
import "@testing-library/jest-native/extend-expect";

jest.mock("../challenge-tile.helpers", () => ({
  getImage: (val: string) => val,
  getImageStyle: jest.requireActual("../challenge-tile.helpers").getImageStyle,
  getLockedImageStyle: jest.requireActual("../challenge-tile.helpers").getLockedImageStyle,
}));

function renderComponent(props: Partial<IChallengeTileProps> = {}) {
  const defaultProps: IChallengeTileProps = {
    currentWorld: 0,
    challengeType: "short stroll",
    duration: "60 minutes",
    minimumLevel: 1,
    reward: "big money",
  };

  return render(<ChallengeTile {...defaultProps} {...props} />);
}

describe("ChallengeTile", () => {
  it("should display the correct details for a short stroll", () => {
    const { queryByText, getByTestId } = renderComponent({ currentWorld: 1 });

    const Image = getByTestId("animal-image");

    expect(Image).toHaveProp("source", "tortoise");
    expect(queryByText("60 minutes")).toBeTruthy();
    expect(queryByText(/big money yucoin/)).toBeTruthy();
  });

  it("should display the default animal if no feasible event is passed through", () => {
    const { getByTestId } = renderComponent({ currentWorld: 99 });

    const Image = getByTestId("animal-image");

    expect(Image).toHaveProp("source", "snail");
  });

  it("should display certain styles if a challenge is locked", () => {
    const { queryByText, getByTestId } = renderComponent({ isLocked: true, minimumLevel: 99 });

    const Image = getByTestId("animal-image");

    expect(Image).toHaveProp("source", "snail");
    expect(queryByText("level 99")).toBeTruthy();
    expect(queryByText("60 minutes")).toBeNull();
    expect(queryByText(/big money yucoin/)).toBeNull();
  });

  it("not display the challenge if no type is presented ", () => {
    const { queryByText } = renderComponent({ challengeType: null });

    expect(queryByText("level")).toBeNull();
    expect(queryByText("60 minutes")).toBeNull();
    expect(queryByText(/big money yucoin/)).toBeNull();
  });
});
