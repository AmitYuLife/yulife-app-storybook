import { shallow } from "enzyme";
import * as React from "react";
import "react-native";
import Calendar from "../calendar";

describe("Calendar", () => {

    it("should render with 0% progress", () => {
        const actual = shallow(
            <Calendar
                progress={0}
            />
        );

        expect(actual).toMatchSnapshot();
    });

    it("should render with 100% progress", () => {
        const actual = shallow(
            <Calendar
                progress={100}
            />
        );

        expect(actual).toMatchSnapshot();
    });
});
