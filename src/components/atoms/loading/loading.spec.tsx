import React from "react";
import { shallow } from "enzyme";
import Loading from "./index";

describe("Loading", () => {

    it("should render as expected", () => {
        const actual = shallow(
            <Loading />,
        );

        expect(actual).toMatchSnapshot();
    });
});
