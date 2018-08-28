import { shallow } from "enzyme";
import * as React from "react";
import Loading from "../loading";

describe("Loading", () => {

    it("should render as expected", () => {
        const actual = shallow(
            <Loading />
        );

        expect(actual).toMatchSnapshot();
    });
});
