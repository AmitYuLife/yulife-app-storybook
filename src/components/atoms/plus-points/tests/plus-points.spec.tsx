import { shallow } from "enzyme";
import * as React from "react";
import "react-native";
import PlusPoints from "../plus-points";

describe("PlusPoints", () => {

    it("should render without minimal props", () => {

        const actual = shallow(<PlusPoints coins={2000} />);

        expect(actual).toMatchSnapshot();
    });
});
