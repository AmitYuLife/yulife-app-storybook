import { shallow } from "enzyme";
import * as React from "react";
import "react-native";
import LevelLine from "../level-line";

describe("LevelLine", () => {
    it("should render", () => {
        const actual = shallow(<LevelLine scale={1} colour={"black"} />);

        expect(actual).toMatchSnapshot();
    });
});
