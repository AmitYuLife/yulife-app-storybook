import { shallow } from "enzyme";
import * as React from "react";
import "react-native";
import StarRight from "../star-right";

describe("StarRight component", () => {

    it("should render not highlighted", () => {
        const actual = shallow(
            <StarRight
                isHighlighted={false}
            />
        );

        expect(actual).toMatchSnapshot();
    });

    it("should render highlighted", () => {
        const actual = shallow(
            <StarRight
                isHighlighted={true}
            />
        );

        expect(actual).toMatchSnapshot();
    });
});
