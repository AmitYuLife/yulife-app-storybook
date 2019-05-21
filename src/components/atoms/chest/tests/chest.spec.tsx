import { shallow } from "enzyme";
import * as React from "react";
import "react-native";
import Chest from "../chest";

describe("Chest", () => {
    it("should render", () => {
        const actual = shallow(<Chest scale={1} colour={"black"} />);

        expect(actual).toMatchSnapshot();
    });

    it("should render but not see a chest", () => {
        const actual = shallow(<Chest scale={0} />);

        expect(actual).toMatchSnapshot();
    });
    it("should have a larger chest", () => {
        const actual = shallow(<Chest scale={2} colour={"black"} />);

        expect(actual).toMatchSnapshot();
    });

    it("should have a blue chest", () => {
        const actual = shallow(<Chest colour={"blue"} />);

        expect(actual).toMatchSnapshot();
    });
});
