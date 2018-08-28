import { shallow } from "enzyme";
import * as React from "react";
import "react-native";
import Glow from "../glow";

describe("Glow", () => {

    it("should render", () => {
        const actual = shallow(
            <Glow />
        );

        expect(actual).toMatchSnapshot();
    });
});
