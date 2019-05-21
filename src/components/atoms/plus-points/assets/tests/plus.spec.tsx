import { shallow } from "enzyme";
import * as React from "react";
import "react-native";
import Plus from "../plus";

describe("Plus SVG", () => {
    it("should render without props", () => {
        const actual = shallow(<Plus />);

        expect(actual).toMatchSnapshot();
    });

    it("should render but not see a lock", () => {
        const actual = shallow(<Plus scale={0} />);

        expect(actual).toMatchSnapshot();
    });
    it("should have a larger plus", () => {
        const actual = shallow(<Plus scale={2} colour={"black"} />);

        expect(actual).toMatchSnapshot();
    });

    it("should have a blue plus", () => {
        const actual = shallow(<Plus colour={"blue"} />);

        expect(actual).toMatchSnapshot();
    });
});
