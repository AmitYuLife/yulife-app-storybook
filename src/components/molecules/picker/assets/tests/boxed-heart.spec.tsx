import { shallow } from "enzyme";
import * as React from "react";
import "react-native";
import BoxedHeart from "../boxed-heart";

describe("BoxedHeart", () => {
    it("should render without any props", () => {
        const actual = shallow(<BoxedHeart />);

        expect(actual).toMatchSnapshot();
    });

    it("should render bigger boxed heart", () => {
        const actual = shallow(<BoxedHeart scale={2} />);

        expect(actual).toMatchSnapshot();
    });

    it("should render with justifyContent center", () => {
        const actual = shallow(<BoxedHeart style={{ justifyContent: "center" }} />);

        expect(actual).toMatchSnapshot();
    });
});
