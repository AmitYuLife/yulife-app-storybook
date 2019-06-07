import { shallow } from "enzyme";
import * as React from "react";
import ChallengeTile from "../challenge-tile";
import { IMAGES } from "../challenge-tile.types";

const defaultProps = {
    currentWorld: 0,
    image: IMAGES.BIRD,
    reward: "5",
    duration: "5 mins"
};

describe("ChallengeTile", () => {
    it("should render default props", () => {
        const actual = shallow(<ChallengeTile {...defaultProps} />);

        expect(actual).toMatchSnapshot();
    });

    it("should render when flipped", () => {
        const actual = shallow(<ChallengeTile {...defaultProps} isImageBackgroundFlipped={true} />);

        expect(actual).toMatchSnapshot();
    });

    it("should render when locked", () => {
        const actual = shallow(<ChallengeTile {...defaultProps} isLocked={true} minimumLevel={5} />);

        expect(actual).toMatchSnapshot();
    });

    it("should render with bird image", () => {
        const actual = shallow(<ChallengeTile {...defaultProps} challengeType="meditation" />);

        expect(actual).toMatchSnapshot();
    });

    it("should render with ostrich image", () => {
        const actual = shallow(<ChallengeTile {...defaultProps} challengeType="long walk" />);

        expect(actual).toMatchSnapshot();
    });

    it("should render with squirrel image", () => {
        const actual = shallow(<ChallengeTile {...defaultProps} challengeType="brisk walk" />);

        expect(actual).toMatchSnapshot();
    });

    it("should render with elephant image", () => {
        const actual = shallow(<ChallengeTile {...defaultProps} challengeType="short stroll" />);

        expect(actual).toMatchSnapshot();
    });
});
