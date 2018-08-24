import "react-native";
import * as React from "react";
import Giraffe from "../giraffe-animated";
import { shallow } from "enzyme";

describe("Giraffe", () => {

    it("should render", () => {
        const actual = shallow(
            <Giraffe />
        );

        expect(actual).toMatchSnapshot();
    });
});
