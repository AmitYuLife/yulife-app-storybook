import { shallow } from "enzyme";
import * as React from "react";
import "react-native";
import Frame43 from "../43";

describe("Frame43", () => {
    it("should render", () => {
        const actual = shallow(<Frame43 />);

        expect(actual).toMatchSnapshot();
    });
});
