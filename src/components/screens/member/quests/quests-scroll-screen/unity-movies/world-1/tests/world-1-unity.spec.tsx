jest.useFakeTimers();
import { shallow } from "enzyme";
import * as React from "react";
import "react-native";
import WorldUnity from "../world-1-unity";

describe("WorldUnity1", () => {
    it("should render", () => {
        const actual = shallow(<WorldUnity onSkip={jest.fn()} />);

        expect(actual).toMatchSnapshot();
    });

    it("should render next set of heading & subheading", () => {
        const actual = shallow(<WorldUnity onSkip={jest.fn()} />);

        actual.setState({
            textIndex: 1
        });

        expect(actual).toMatchSnapshot();
    });
});
