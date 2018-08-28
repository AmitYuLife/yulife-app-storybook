import { shallow } from "enzyme";
import * as React from "react";
import WelcomeContainer from "../welcome.container";

describe("Welcome Container component", () => {

    it("renders", () => {
        const actual = shallow(
            <WelcomeContainer
                componentId="12345"
            />
        );

        expect(actual).toMatchSnapshot();
    });
});
