import { shallow } from "enzyme";
import * as React from "react";
import "react-native";
import Stars from "../stars";

describe("Stars component", () => {

    it("should render all stars un-highlighted", () => {

        const actual = shallow(
            <Stars />
        );

        expect(actual).toMatchSnapshot();
    });

    it("should render all stars highlighted", () => {

        const actual = shallow(
            <Stars
                isLeftHighlighted={true}
                isMidHighlighted={true}
                isRightHighlighted={true}
            />
        );

        expect(actual).toMatchSnapshot();
    });

    it("should render with some stars highlighted", () => {

        const actual = shallow(
            <Stars
                isLeftHighlighted={false}
                isMidHighlighted={true}
                isRightHighlighted={false}
            />
        );

        expect(actual).toMatchSnapshot();
    });
});
