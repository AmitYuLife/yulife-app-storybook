import { shallow } from "enzyme";
import * as React from "react";
import WelcomeScreenContainer from "../welcome-screen.container";

describe("Welcome Screen Container component", () => {

    it("renders", () => {

        const actual = shallow(
            <WelcomeScreenContainer
                componentId="12345"
            />
        );

        expect(actual).toMatchSnapshot();
    });
});
