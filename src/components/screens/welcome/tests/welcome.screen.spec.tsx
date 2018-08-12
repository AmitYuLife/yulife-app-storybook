import { shallow } from "enzyme";
import * as React from "react";
import WelcomeScreen from "../welcome-screen";

describe("WelcomeScreen component", () => {

    it ("should render with props", () => {

        const actual = shallow(
            <WelcomeScreen
                onLogInPress={jest.fn()}
                onSignUpPress={jest.fn()}
            />
        );

        expect(actual).toMatchSnapshot();
    });
});
