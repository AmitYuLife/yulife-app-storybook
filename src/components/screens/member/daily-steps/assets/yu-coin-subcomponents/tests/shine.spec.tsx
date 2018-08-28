import { shallow } from "enzyme";
import * as React from "react";
import "react-native";
import Shine from "../shine";

describe("Shine", () => {

    it("should render", () => {
        const actual = shallow(
            <Shine />
        );

        expect(actual).toMatchSnapshot();
    });
});
