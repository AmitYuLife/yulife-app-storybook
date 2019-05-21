import { shallow } from "enzyme";
import * as React from "react";
import "react-native";
import DoubleLock from "../double-lock";

describe("DoubleLock", () => {
    it("should render", () => {
        const actual = shallow(<DoubleLock scale={1} colour={"black"} />);

        expect(actual).toMatchSnapshot();
    });

    it("should render but not see a double lock", () => {
        const actual = shallow(<DoubleLock scale={0} />);

        expect(actual).toMatchSnapshot();
    });
    it("should have a larger double lock", () => {
        const actual = shallow(<DoubleLock scale={2} colour={"black"} />);

        expect(actual).toMatchSnapshot();
    });

    it("should have a blue double lock", () => {
        const actual = shallow(<DoubleLock colour={"blue"} />);

        expect(actual).toMatchSnapshot();
    });
});
