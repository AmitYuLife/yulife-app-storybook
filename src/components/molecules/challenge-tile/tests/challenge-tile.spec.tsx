import { shallow } from "enzyme";
import * as React from "react";
import ChallengeTile, { IMAGES } from "../challenge-tile";

const defaultProps = {
    currentWorld: 0,
    image: IMAGES.BIRD
};

describe("ChallengeTile", () => {

    it("should render default props", () => {
        const actual = shallow(
            <ChallengeTile
                {...defaultProps}
            />
        );

        expect(actual).toMatchSnapshot();
    });

    it("should render when flipped", () => {
        const actual = shallow(
            <ChallengeTile
                {...defaultProps}
                isImageBackgroundFlipped={true}
            />
        );

        expect(actual).toMatchSnapshot();
    });

    it("should render when locked", () => {
        const actual = shallow(
            <ChallengeTile
                {...defaultProps}
                isLocked={true}
                minimumLevel={5}
            />
        );

        expect(actual).toMatchSnapshot();
    });
});
