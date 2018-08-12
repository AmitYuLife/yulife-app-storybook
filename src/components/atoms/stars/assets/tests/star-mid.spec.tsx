import { shallow } from "enzyme";
import * as React from "react";
import "react-native";
import StarMid from "../star-mid";

describe("StarMid component", () => {

    it("should render not highlighted", () => {

        const actual = shallow(
            <StarMid
                isHighlighted={false}
            />
        );

        expect(actual).toMatchSnapshot();
    });

    it("should render highlighted", () => {

        const actual = shallow(
            <StarMid
                isHighlighted={true}
            />
        );

        expect(actual).toMatchSnapshot();
    });
});
