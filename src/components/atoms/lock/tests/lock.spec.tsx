import { shallow } from "enzyme";
import * as React from "react";
import "react-native";
import Lock from "../lock";

describe("Lock", () => {
    it("should render", () => {
        const actual = shallow(<Lock scale={1} colour={"black"} />);

        expect(actual).toMatchSnapshot();
    });

    it("should render but not see a lock", () => {
        const actual = shallow(<Lock scale={0} />);

        expect(actual).toMatchSnapshot();
    });
    it("should have a larger lock", () => {
        const actual = shallow(<Lock scale={2} colour={"black"} />);

        expect(actual).toMatchSnapshot();
    });

    it("should have a blue lock", () => {
        const actual = shallow(<Lock colour={"blue"} />);

        expect(actual).toMatchSnapshot();
    });
});
