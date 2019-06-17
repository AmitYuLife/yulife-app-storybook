import { shallow } from "enzyme";
import * as React from "react";
import "react-native";
import StarLeft from "../star-left";

describe("StarLeft component", () => {
    it("should render not highlighted", () => {
        const actual = shallow(<StarLeft isHighlighted={false} />);

        expect(actual).toMatchSnapshot();
    });

    it("should render highlighted", () => {
        const actual = shallow(<StarLeft isHighlighted={true} />);

        expect(actual).toMatchSnapshot();
    });
});
