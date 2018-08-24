import { shallow } from "enzyme";
import * as React from "react";
import "react-native";
import FitKitUnavailable from "../fitkit-unavailable";

describe("FitKitUnavailable", () => {

    it("should render default values", () => {

        const actual = shallow(
            <FitKitUnavailable />
        );

        expect(actual).toMatchSnapshot();
    });
});
