import { shallow } from "enzyme";
import * as React from "react";
import WelcomeScreen from "../welcome.screen";

describe("WelcomeScreen component", () => {

    it ("should render with props", () => {

        const actual = shallow(
            <WelcomeScreen
                onLoginPress={jest.fn()}
            />
        );

        expect(actual).toMatchSnapshot();
    });
});
